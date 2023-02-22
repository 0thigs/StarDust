import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
import { User } from '../../components/User';
import { Loading } from '../../components/Loading';

import { ArrowUp } from 'react-native-feather';
import Background from '../../assets/GlobalAssets/background.png';
import dayjs from 'dayjs';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import * as C from './styles';
const iconSize = 25;
const today = dayjs().day();
const sunday = 0;

export function Ranking() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  console.log(users);
  const [isLoading, setIsloading] = useState(false);
  const [daysToGo, setDaysToGo] = useState('');
  const badgesListRef = useRef(null);
  const currentRankingId = rankings.find(ranking => ranking.id === user.ranking_id).id;

  function scrollToCurrentRanking() {
    badgesListRef.current.scrollToIndex({
      index: currentRankingId - 1,
      viewPosition: 0.5,
    });
  }

  function getDaysToGo() {
    if (today === sunday) {
      return 7;
    }
    return 7 - today;
  }

  function orderUsersByXp(users) {
    return users.sort((a, b) => a.xp < b.xp);
  }

  async function getUsersByCurrentRanking() {
    try {
      const users = await api.getUsersByCurrentRanking(currentRankingId);
      return users;
    } catch (error) {
      console.log(error)
    } 
  }

  async function getUsers() {
    const users = await getUsersByCurrentRanking();
    const reorderedUsers = orderUsersByXp(users);
    return users;
  }

  async function updateRanking() {
    for (let user of users) {
      await api.updateUser('ranking_id', currentRankingId + 1, user.id);
    }
  }

  function doSundayUpdating() {}

  useEffect(() => {
    setIsloading(true);
    // scrollToCurrentRanking();

    setDaysToGo(getDaysToGo());
    setUsers(getUsersByCurrentRanking());
  }, []);

  return (
    <C.Container>
      <C.Badges source={Background}>
        <C.BadgesList
          ref={badgesListRef}
          data={rankings}
          keyExtractor={achievement => achievement.id}
          renderItem={({ item: { id, name, image } }) => (
            <Badge id={id} name={name} image={image} currentRankingId={currentRankingId} />
          )}
          horizontal
          showsVerticalScrollIndicator={false}
          onScrollToIndexFailed={() => {
            const wait = new Promise(resolve => setTimeout(resolve, 100));
            wait.then(() => scrollToCurrentRanking());
          }}
        />
      </C.Badges>
      {/* 
      <C.Warning>Os 5 primeiros avançam para a próxima liga</C.Warning>
      <C.Days>{daysToGo} dias</C.Days>

      {isLoading ? (
        <Loading />
      ) : (
        <C.UsersList
          data={users}
          keyExtractor={user => user.id}
          renderItem={({ item: { id, name, avatar, xp }, index }) => {
            const position = index + 1;
            return (
              <>
                <User
                  position={position}
                  id={id}
                  name={name}
                  avatar={avatar}
                  xp={xp}
                  isLoggedUser={id === user.id}
                />
                {position === 5 && (
                  <C.Divider>
                    <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
                    <C.Message>Zona de promoção</C.Message>
                    <ArrowUp width={iconSize} height={iconSize} color={theme.colors.green_500} />
                  </C.Divider>
                )}
              </>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      )} */}
    </C.Container>
  );
}
