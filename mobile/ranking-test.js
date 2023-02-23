import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
import { Loading } from '../../components/Loading';
import { doSundayUpdating } from '../../utils/doSundayUpdating';

import Background from '../../assets/GlobalAssets/background.png';
import dayjs from 'dayjs';
import api from '../../services/api';
import * as C from './styles';
import { Winning } from '../../components/Winning';
import { UsersList } from '../../components/UsersList';
const today = dayjs().day();
const sunday = 0;

export function Ranking() {
  const { user, setUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [winners, setWinners] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isWinningShow, setIsWinningShow] = useState(false);
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

  async function updateXp() {
    const newXp = 0;
    for (let _user of users) {
      await api.updateUser('xp', newXp, _user.id);
    }
    setUser(user => ({ ...user, xp: newXp }));
  }

  async function updateWinners() {
    for (let winner of winners) {
      await api.updateUser('isWinner', true, winner.id);
    }
    setIsWinningShow(true);
  }

  async function updateRanking() {
    const newRankingId = currentRankingId + 1;
    for (let _user of users) {
      await api.updateUser('didUpdateRanking', true, _user.id);

      if (_user.position > 5) continue;
      await api.updateUser('ranking_id', newRankingId, _user.id);

      if (_user.id === user.id) {
        setUser(user => ({ ...user, ranking_id: newRankingId }));
        setUser(user => ({ ...user, didUpdateRanking: true }));
      }
    }
    updateXp();
  }

  async function doOffSundayUpdating() {
    for (let _user of users) {
      await api.updateUser('didUpdateRanking', false, _user.id);
    }
    setUser(user => ({ ...user, didUpdateRanking: false }));
  }

  async function doSundayUpdating() {
    if (!user.didUpdateRanking && today === 3) {
      await api.updateUser('didShowWinning', false, user.id);
      setUser(user => ({ ...user, didShowWinning: false }));
      updateRanking();
      updateWinners();
    } else if (user.didSundayUpdating && today !== 3) {
      doOffSundayUpdating();
    }
  }

  async function getUsersByCurrentRanking() {
    try {
      const users = await api.getUsersByCurrentRanking(currentRankingId);
      const orderedUsers = orderUsersByXp(users);

      setUsers(orderedUsers);

      await doSundayUpdating();
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

  useEffect(() => {
    if (!user.didShowWinning) {
      console.log(users);
      setWinners(() => {
        let winners = [];
        users.slice(0, 3).forEach(user => {
          if (user.position === 2) {
            winners.unshift(user);
            return;
          }
          winners.push(user);
        });
        return winners;
      });
      setIsWinningShow(true);
    }
  }, [user.didShowWinning]);

  return (
    <C.Container>
      {isWinningShow ? (
        <Winning winners={winners} users={users} setIsWinningShow={setIsWinningShow} />
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
          <C.Warning>Os 5 primeiros avançam para a próxima liga</C.Warning>
          <C.Days>{daysToGo} dias</C.Days>
          {isLoading ? <Loading /> : <UsersList users={users} />}
        </>
      )}
    </C.Container>
  );
}
