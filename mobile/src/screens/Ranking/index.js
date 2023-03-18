import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

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
  const { loggedUser } = useAuth();
  const [rankings, setRankings] = useState([]);
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [isWinnersListShow, setIsWinnersListShow] = useState(false);
  const [daysToGo, setDaysToGo] = useState(0);
  const badgesListRef = useRef(null);

  function scrollToCurrentRanking(currentRankingIndex) {
    badgesListRef.current?.scrollToIndex({
      index: currentRankingIndex - 1,
      viewPosition: 0.5,
    });
  }

  function setPosition(user, index) {
    return { ...user, position: index + 1 };
  }

  async function setData() {
    try {
      const rankings = await api.getRankings();
      setRankings(rankings);

      const users = await api.getUsersByCurrentRanking(loggedUser.ranking_id);
      const rankingUsers = users.map(setPosition);
      setUsers(rankingUsers);

      const currentRankingIndex =
        rankings.find(ranking => ranking.id === loggedUser.ranking_id).order - 1;

      setCurrentRankingIndex(currentRankingIndex);

      //   setWinners(() => {
      //     let winners = [];
      //     orderedUsers.slice(0, 3).forEach(user => {
      //       if (user.position === 2) {
      //         winners.unshift(user);
      //         return;
      //       }
      //       winners.push(user);
      //     });
      //     return winners;
      //   });
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    setIsloading(true);
    setData();
    setDaysToGo(today === sunday ? 7 : 7 - today);
  }, []);

  useEffect(() => {
    if (currentRankingIndex) {
      scrollToCurrentRanking(currentRankingIndex);
    }
  }, [currentRankingIndex]);

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
              keyExtractor={ranking => ranking.id}
              renderItem={({ item: { id, name, image }, index}) => (
                <Badge
                  id={id}
                  name={name}
                  image={image}
                  index={index}
                  currentRankingIndex={currentRankingIndex}
                />
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
          {isLoading ? <Loading isAnimation={true} /> : <UsersList users={users} />}
        </>
      )}
    </C.Container>
  );
}
