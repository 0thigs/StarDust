import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
import { User } from '../../components/User';

import Background from '../../assets/GlobalAssets/background.png';
import * as C from './styles';
import api from '../../services/api';

export function Ranking() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const badgesListRef = useRef(null);
  const currentRankingId = rankings.find(ranking => ranking.id === user.ranking_id).id;

  function scrollToCurrentRanking() {
    badgesListRef.current.scrollToIndex({
      index: currentRankingId - 1,
      viewPosition: 0.5,
    });
  }

  async function getUsersByCurrentRanking() {
    try {
     const users = await api.getUsersByCurrentRanking(currentRankingId);
     console.log(Array.isArray(users))
     setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    scrollToCurrentRanking();
    getUsersByCurrentRanking()

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
          onScrollToIndexFailed={() => {
            const wait = new Promise(resolve => setTimeout(resolve, 100));
            wait.then(() => scrollToCurrentRanking());
          }}
        />
      </C.Badges>
      <C.Warning>Os 5 primeiros avançam para o próximo ranking</C.Warning>
      
      <C.UsersList
        data={users}
        keyExtractor={user => user.id}
        renderItem={({ item: { id, name, avatar, xp } }, index) => (
          <User position={index} id={id} name={name} avatar={avatar} xp={xp} />
        )}
      />
    </C.Container>
  );
}
