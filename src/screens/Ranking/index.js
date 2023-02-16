import { useAuth } from '../../hooks/useAuth';
import { rankings } from '../../utils/rankings';
import { Badge } from '../../components/Badge';
7;

import { useEffect, useRef } from 'react';

import RocketBackground from '../../assets/RocketAssets/rocket-background.png';
import * as C from './styles';

export function Ranking() {
  const { user } = useAuth();
  const badgeListRef = useRef(null);
  const currentRanking = rankings.find(ranking => ranking.id === user.ranking_id);

  function scrollToCurrentRanking() {
    badgeListRef.current.scrollToIndex({
      index: currentRanking.id - 1,
      viewPosition: 0.5,
    });
  }

  useEffect(() => {
    scrollToCurrentRanking();
  }, []);

  return (
    <C.Container>
      <C.Badges source={RocketBackground}>
        <C.BadgesList
          ref={badgeListRef}
          initialScrollIndex={0}
          data={rankings}
          keyExtractor={achievement => achievement.id}
          renderItem={({ item: { id, name, image } }) => (
            <Badge id={id} name={name} image={image} isCurrentRanking={currentRanking.id === id} />
          )}
          horizontal
          onScrollToIndexFailed={() => {
            const wait = new Promise(resolve => setTimeout(resolve, 100));
            wait.then(() => scrollToCurrentRanking());
          }}
        />
      </C.Badges>
    </C.Container>
  );
}
