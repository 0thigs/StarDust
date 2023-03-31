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
import { useRanking } from '../../hooks/useRanking';
const today = dayjs().day();
const sunday = 0;
const daysToGo = today === sunday ? 7 : 7 - today;

export function Ranking() {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { ranking: currentRanking } = useRanking(loggedUser.ranking_id);
  const [rankings, setRankings] = useState([]);
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const badgesListRef = useRef(null);
  const isLoggedUserWinner = [1, 2, 3].includes(loggedUser.last_position);
  console.log(currentRanking);

  function scrollToCurrentRanking() {
    badgesListRef.current?.scrollToIndex({
      index: currentRankingIndex,
      viewPosition: 0.5,
    });
  }

  function setPosition(user, index) {
    return { ...user, position: index + 1 };
  }

  async function showWinners() {
    try {
      const winners = await api.getWinners();
      const lastWeekRankingId = isLoggedUserWinner
        ? rankings.find(ranking => (ranking.position = 1)).id
        : currentRanking.id;
      const winnersByLastWeekRankingId = winners.filter(
        winner => winner.ranking_id === lastWeekRankingId
      );
      setWinners(() => {
        let orderedWinners = [];
        winnersByLastWeekRankingId.forEach(winner => {
          if (winner.position === 2) {
            orderedWinners.unshift(winner);
            return;
          }
          orderedWinners.push(winner);
        });
        return orderedWinners;
      });

      updateLoggedUser('did_update_ranking', false);
    } catch (error) {
      console.log(error);
    }
  }

  async function setData() {
    try {
      const rankings = await api.getRankings();
      setRankings(rankings);
      const users = await api.getUsersByCurrentRanking(loggedUser.ranking_id);
      const rankingUsers = users.map(setPosition);
      setUsers(rankingUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    setIsloading(true);
    setData();
  }, []);

  useEffect(() => {
    if (currentRanking) {
      const currentRankingIndex = currentRanking.position - 1;
      setCurrentRankingIndex(currentRankingIndex);
      scrollToCurrentRanking(currentRankingIndex);
      if (loggedUser.did_update_ranking) showWinners();
    }
  }, [currentRanking]);

  return (
    <C.Container isLoading={isLoading}>
      {isLoading ? (
        <Loading isAnimation={true} />
      ) : (
        <>
          {winners.length ? (
            <WinnersList
              winners={winners}
              users={users}
              isLoading={isLoading}
              setWinners={setWinners}
              isLoggedUserWinner={isLoggedUserWinner}
            />
          ) : (
            <>
              <C.Badges source={Background}>
                <C.BadgesList
                  ref={badgesListRef}
                  data={rankings}
                  keyExtractor={ranking => ranking.id}
                  renderItem={({ item: { id, name, image }, index }) => (
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
              <UsersList users={users} />
            </>
          )}
        </>
      )}
    </C.Container>
  );
}
