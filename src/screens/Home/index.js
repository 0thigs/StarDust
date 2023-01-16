import { useEffect, useState } from 'react';
import * as C from './styles';

import { Planet } from '../../components/Planet';
import { TransitionScreenAnimation } from '../../components/TransitionScreenAnimation';

import BackgroundImage from '../../assets/HomeAssets/background.svg';

import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';

export function Home() {
  const { user } = useAuth();

  const [planets, setPlanets] = useState([]);
  const [stars, setStars] = useState([]);
  const [isEndTrasition, setIsEndTransition] = useState(false);

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
    console.log(user);
  }, []);

  return (
    <C.Container>
      <C.Background>
        <BackgroundImage />
      </C.Background>
      {!isEndTrasition ? (
        <TransitionScreenAnimation />
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
