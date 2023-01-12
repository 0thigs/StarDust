import * as C from './styles';

import { Planet } from '../../components/Planet';
import BackgroundImage from '../../assets/HomeAssets/background.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { userId } from '../../contexts/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import { FlatList, Text } from 'react-native';

export function Home() {
  const { setUser, user } = useAuth();
  const [planets, setPlanets] = useState([]);
  const [stars, setStars] = useState([]);

  async function getCurrentUser() {
    const user = await api.getUser(userId);
    setUser(user);
    // console.log(user);
  }

  async function getPlanets() {
    const planets = await api.getPlanets();
    setPlanets(planets);
  }

  async function getStars() {
    const stars = await api.getStars();
    setStars(stars);
  }

  useEffect(() => {
    getCurrentUser();
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
