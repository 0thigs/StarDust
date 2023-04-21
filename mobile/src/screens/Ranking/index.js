import { useEffect, useRef, useState } from 'react';
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
const today = dayjs().day();
const sunday = 0;
const daysToGo = today === sunday ? 7 : 7 - today;

export function Ranking() {
<<<<<<< HEAD
  const { loggedUser } = useAuth();
  const [rankings, setRankings] = useState([]);
=======
  const { loggedUser, updateLoggedUser } = useAuth();
  const { ranking: currentRanking, rankings } = useRanking(loggedUser.ranking_id, true);
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [isLoading, setIsloading] = useState(false);
<<<<<<< HEAD
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const [isWinnersListShow, setIsWinnersListShow] = useState(false);
  const [daysToGo, setDaysToGo] = useState(0);
=======
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
  const badgesListRef = useRef(null);
  const isLoggedUserWinner = [1, 2, 3].includes(loggedUser.last_position);

  function scrollToCurrentRanking(currentRankingIndex) {
    badgesListRef.current?.scrollToIndex({
<<<<<<< HEAD
      index: currentRankingIndex - 1,
=======
      index: currentRankingIndex,
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
      viewPosition: 0.5,
    });
  }

  function setPosition(user, index) {
    return { ...user, position: index + 1 };
  }

<<<<<<< HEAD
  async function setData() {
    try {
      const rankings = await api.getRankings();
      setRankings(rankings);

=======
  async function showWinners() {
    try {
      const winners = await api.getWinners();
      console.log(currentRanking);
      const lastWeekRankingId =
        isLoggedUserWinner && currentRanking.position !== rankings.length
          ? rankings.find(({ position }) => (position - 1 === 0 ? 1 : position - 1)).id
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
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
      const users = await api.getUsersByCurrentRanking(loggedUser.ranking_id);
      const rankingUsers = users.map(setPosition);
      setUsers(rankingUsers);

<<<<<<< HEAD
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
=======
      if (loggedUser.did_update_ranking) showWinners();
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    setIsloading(true);
<<<<<<< HEAD
    setData();
    setDaysToGo(today === sunday ? 7 : 7 - today);
  }, []);

  useEffect(() => {
    if (currentRankingIndex) {
      scrollToCurrentRanking(currentRankingIndex);
    }
  }, [currentRankingIndex]);
=======
    if (currentRanking && rankings.length) {
      const currentRankingIndex = currentRanking.position - 1;
      setCurrentRankingIndex(currentRankingIndex);
      scrollToCurrentRanking(currentRankingIndex);
      setData();
    }
  }, [currentRanking, rankings]);
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7

  return (
    <C.Container isLoading={isLoading}>
      {isLoading && (isLoggedUserWinner ? winners.length : true) ? (
        <Loading isAnimation={true} />
      ) : (
        <>
<<<<<<< HEAD
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
=======
          {winners.length ? (
            <WinnersList
              winners={winners}
              users={users}
              reward={currentRanking.reward}
              setWinners={setWinners}
              isLoggedUserWinner={isLoggedUserWinner}
>>>>>>> a138bf2a4b3745b863ed2837f34339f8af5fa2d7
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
