import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
import { Loading } from '../../components/Loading';

import Background from '../../assets/GlobalAssets/background.png';
import dayjs from 'dayjs';
import api from '../../services/api';
import * as C from './styles';
import { WinnersList } from '../../components/WinnersList';
import { UsersList } from '../../components/UsersList';
const today = dayjs().day();
const sunday = 0;

export function Ranking() {
  const { user, setUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isWinnersListShow, setIsWinnersListShow] = useState(true);
  const [daysToGo, setDaysToGo] = useState(0);
  const [currentRankingId, setCurrentRankingId] = useState(user.ranking_id);
  const badgesListRef = useRef(null);

  function scrollToCurrentRanking() {
    badgesListRef.current?.scrollToIndex({
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

  async function getUsersByCurrentRanking() {
    try {
      const users = await api.getUsersByCurrentRanking(currentRankingId);
      const orderedUsers = orderUsersByXp(users);

      setUsers(orderedUsers);
      setWinners(() => {
        let winners = [];
        orderedUsers.slice(0, 3).forEach(user => {
          if (user.position === 2) {
            winners.unshift(user);
            return;
          }
          winners.push(user);
        });
        return winners;
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    setIsloading(true);
    getUsersByCurrentRanking();
    scrollToCurrentRanking();
    setDaysToGo(today === sunday ? 7 : 7 - today);
  }, []);

  useEffect(() => {
    setCurrentRankingId(rankings.find(ranking => ranking.id === user.ranking_id).id);
  }, [user.ranking_id]);

  return (
    <C.Container>
      {isWinnersListShow ? (
        <WinnersList
          winners={winners}
          users={users}
          isLoading={isLoading}
          setIsWinnersListShow={setIsWinnersListShow}
        />
      ) : (
        <>
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
          <C.Warning>Os 5 primeiros avançam para o próximo ranking</C.Warning>
          <C.Days>{daysToGo} dias</C.Days>
          {isLoading ? <Loading /> : <UsersList users={users} />}
        </>
      )}
    </C.Container>
  );
}
