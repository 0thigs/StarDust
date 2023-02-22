import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
import { User } from '../../components/User';
import { Loading } from '../../components/Loading';
import { doSundayUpdating } from '../../utils/doSundayUpdating';

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
  const { user, setUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [daysToGo, setDaysToGo] = useState(0);
  const [currentRankingId, setCurrentRankingId] = useState(1);
  const badgesListRef = useRef(null);

  function scrollToCurrentRanking() {
    badgesListRef.current.scrollToIndex({
      index: currentRankingId - 1,
      viewPosition: 0.5,
    });
  }

  function setPosition(user, index) {
    return { ...user, position: index + 1 };
  }

  function orderUsersByXp(users) {
    const orderedUsers = users.sort((a, b) => a.xp < b.xp);
    return orderedUsers.map(setPosition);
  }

  async function updateXp() {
    const newXp = 0;
    for (let user_ of users) {
      await api.updateUser('xp', newXp, user_.id);
    }
    setUser(user => ({ ...user, xp: newXp }));
  }

  async function updateRanking() {
    const newRankingId = currentRankingId + 1;
    for (let user_ of users) {
      if (user_.position > 5) continue;
      await api.updateUser('ranking_id', newRankingId, user_.id);

      if (user_.id === user.id) {
        setUser(user => ({ ...user, ranking_id: newRankingId }));
      }
    }
    updateXp();
    
  }

  async function getUsersByCurrentRanking() {
    try {
      const users = await api.getUsersByCurrentRanking(currentRankingId);
      const orderedUsers = orderUsersByXp(users);
      setUsers(orderedUsers);
      await doSundayUpdating(updateRanking, user, setUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    setIsloading(true);
    scrollToCurrentRanking();
    getUsersByCurrentRanking();
    setDaysToGo(today === sunday ? 7 : 7 - today);
  }, []);

  useEffect(() => {
    setCurrentRankingId(rankings.find(ranking => ranking.id === user.ranking_id).id);
  }, [user.ranking_id]);

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

      <C.Warning>Os 5 primeiros avançam para a próxima liga</C.Warning>
      <C.Days>{daysToGo} dias</C.Days>

      {isLoading ? (
        <Loading />
      ) : (
        <C.UsersList
          data={users}
          keyExtractor={user => user.id}
          renderItem={({ item: { id, name, avatar, xp, position } }) => {
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
      )}
    </C.Container>
  );
}
