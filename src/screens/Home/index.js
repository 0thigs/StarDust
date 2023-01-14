import { useEffect, useState } from 'react';
import * as C from './styles';

import { Planet } from '../../components/Planet';
import { TransitionScreen } from '../../components/TransitionScreen';

import BackgroundImage from '../../assets/HomeAssets/background.svg';

import api from '../../services/api';

export function Home() {
  const [planets, setPlanets] = useState([]);
  const [stars, setStars] = useState([]);
  const [isEndTrasition, setIsEndTransition] = useState(false);

  const user = {
    unlockedStarsIds: [1],
  };

  function verifyIfIsStarUnlocked(star) {
    if (user.unlockedStarsIds.includes(star.id)) {
      return { ...star, isUnlocked: true };
    }
    return star;
  }

  async function getPlanets() {
    const planets = await api.getPlanets();
    setPlanets(planets);
  }

  async function getStars() {
    const stars = await api.getStars();
    const updatedStars = stars.map(verifyIfIsStarUnlocked);
    setStars(updatedStars);
  }

  useEffect(() => {
    getPlanets();
    getStars();
    setTimeout(() => setIsEndTransition(true), 3000);
  }, []);

  return (
    <C.Container>
      <C.Background>
        <BackgroundImage />
      </C.Background>
      {!isEndTrasition ? (
        <TransitionScreen />
      ) : (
        <C.PlanetsList
          data={planets}
          keyExtractor={planet => planet.id}
          renderItem={({ item }) => (
            <Planet
              id={item.id}
              title={item.title}
              CurrentPlanetStarsIds={item.stars_ids}
              stars={stars}
            />
          )}
        />
      )}
    </C.Container>
  );
}
