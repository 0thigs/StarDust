import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRanking } from '../../hooks/useRanking';

import { Badge } from '../../components/Badge';
import { Loading } from '../../components/Loading';
import { WinnersList } from '../../components/WinnersList';
import { UsersList } from '../../components/UsersList';

import Background from '../../assets/GlobalAssets/background.png';
import dayjs from 'dayjs';
import api from '../../services/api';
import * as C from './styles';
import { useFocusEffect } from '@react-navigation/native';
const today = dayjs().day();
const sunday = 0;
const daysToGo = today === sunday ? 7 : 7 - today;

export function Ranking() {
  const { loggedUser, updateLoggedUser } = useAuth();
  const { ranking: currentRanking, rankings } = useRanking(loggedUser.ranking_id, true);
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [finalTime, setFinalTime] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const badgesListRef = useRef(null);
  const lastRankingPosition = rankings.length;
  const isLoggedUserWinner = !!loggedUser.last_position && loggedUser.last_position <= 5;

  function scrollToCurrentRanking() {
    badgesListRef.current?.scrollToIndex({
      index: currentRankingIndex,
      viewPosition: 0.5,
    });
  }

  function setPosition(user, index) {
    return { ...user, position: index + 1 };
  }

  function getFinalTime() {
    const now = dayjs();
    const deadline = dayjs().startOf('D').add(1, 'day');
    const diff = deadline.diff(now);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return `${hours}:${minutes}:${seconds}`;
  }

  async function showWinners() {
    try {
      const targetPosition =
        isLoggedUserWinner && currentRanking.position !== lastRankingPosition
          ? currentRanking.position - 1
          : loggedUser.is_loser
          ? currentRanking.position + 1
          : currentRanking.position;

      const lastWeekRankingId = rankings.find(({ position }) => position === targetPosition).id;

      const winners = await api.getWinners(lastWeekRankingId);

      winners.sort((a, b) => {
        if (a.position === 2) return -1;
        if (a.position === 1) return b.position === 2 ? 1 : -1;
        if (a.position === 3) return b.position === 2 || b.position === 1 ? 1 : -1;
        return 1;
      });

      setWinners(winners);

      await updateLoggedUser({ did_update_ranking: false });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setIsloading(false), 2000);
    }
  }

  async function setData() {
    try {
      const users = await api.getUsersByCurrentRanking(loggedUser.ranking_id);
      const rankingUsers = users.map(setPosition);
      setUsers(rankingUsers);
    } catch (error) {
      console.error(error);
    } finally {
      if (loggedUser.did_update_ranking) {
        showWinners();
        return;
      }
      setTimeout(() => setIsloading(false), 2000);
    }
  }

  useFocusEffect(
    useCallback(() => {
      setIsloading(true);
      if (currentRanking && rankings.length) {
        const currentRankingIndex = currentRanking.position - 1;
        setCurrentRankingIndex(currentRankingIndex);
        scrollToCurrentRanking(currentRankingIndex);
        if (!users.length) setData();
      }
    }, [currentRanking, rankings])
  );

  //   useEffect(() => {
  //     if (daysToGo !== 1) return;
  //     const timer = setInterval(() => setFinalTime(getFinalTime()), 1000);
  //     return () => clearInterval(timer);
  //   }, []);

  return (
    <C.Container isLoading={isLoading}>
      {isLoading && <Loading isAnimation={true} />}
      {winners.length > 0 && !isLoading ? (
        <WinnersList
          winners={winners}
          users={users}
          currentRanking={currentRanking}
          setWinners={setWinners}
          isLoggedUserWinner={isLoggedUserWinner}
          lastRankingPosition={lastRankingPosition}
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
          {/* <C.Days>{daysToGo === 1 ? finalTime : `${daysToGo} dias`}</C.Days> */}
          <C.Days>{daysToGo + (daysToGo === 1 ? ' dia' : ' dias')}</C.Days>
          <UsersList users={users} userId={loggedUser.id} />
        </>
      )}
    </C.Container>
  );
}
