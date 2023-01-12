import * as C from './styles';

import { Planet } from '../../components/Planet';
import BackgroundImage from '../../assets/HomeAssets/background.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export function Home() {
  const [planets, setPlanets] = useState([]);
  const [stars, setStars] = useState([]);
  const user = {
    unlockedStarsIds: [1],
  };

  function verifyIfIsStarUnlocked(star) {
    console.log(user);
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
  }, []);

  return (
    <C.Container>
      <C.Background>
        <BackgroundImage />
      </C.Background>
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
    </C.Container>
  );
}
