import { useEffect, useRef, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import MeteorImage from '../../assets/HomeAssets/meteor.svg';
import RewardLight from '../../assets/animations/reward-light-animation.json';

import { Modal } from '../Modal';
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';
import { Animation } from '../Animation';
import theme from '../../global/styles/theme';
import * as C from './styles';
const animationDuration = 3500;
const meteorSize = 50;

export function Meteor({ currentYOffset, screenWidth }) {
  const { loggedUser, updateLoggedUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [coins, setCoins] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const initialPosition = {
    top: useSharedValue(currentYOffset),
    left: useSharedValue(0),
  };
  const currentPosition = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };
  //   const currentPosition = useSharedValue(0);
  const timer = useRef(null);

  const meteorAnimatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: initialPosition.top.value,
      left: initialPosition.left.value,
      transform: [
        { translateX: withTiming(currentPosition.x.value, { duration: animationDuration }) },
        { translateY: withTiming(currentPosition.y.value, { duration: animationDuration }) },
      ],
    };
  });

  function handleMeteorPress() {
    updateLoggedUser({coins: loggedUser.coins + coins});
    setIsModalVisible(true);
  }

  function resetPosition() {
    setIsVisible(false);
    currentPosition.x.value = -meteorSize;
    currentPosition.y.value = -meteorSize;
  }

  function showMeteor() {
    setIsVisible(true);
    initialPosition.top.value = currentYOffset - meteorSize;
    initialPosition.left.value = -meteorSize;
    currentPosition.value = screenWidth + 100;
    currentPosition.x.value = screenWidth + meteorSize;
    currentPosition.y.value = screenWidth + meteorSize;
    setTimeout(() => resetPosition(), animationDuration);
  }

 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (!currentYOffset) return;
    const delay = getRandomNumber(20000, 50000);
    const coins = getRandomNumber(1, 5);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => showMeteor(), delay);
    setCoins(coins);
  }, [currentYOffset]);

  return (
    <C.Container style={meteorAnimatedStyle} onPress={handleMeteorPress}>
      {isVisible && <MeteorImage width={meteorSize} height={meteorSize} />}

      <Modal
        isVisible={isModalVisible}
        type={'earning'}
        title={'Parabéns! Você capturou um cometa!'}
        body={
          <>
            <C.Image>
              <Animation
                source={RewardLight}
                autoPlay={true}
                loop={true}
                size={220}
                isAbsolute={true}
                top={-15}
                left={-10}
              />
              <MeteorImage width={meteorSize * 2} height={meteorSize * 2} />
            </C.Image>
            <C.Message>
              <C.Text>Você acaba de ganhar </C.Text>
              <C.Reward> {coins} </C.Reward>
              <C.Text> de poeira estelar.</C.Text>
            </C.Message>
          </>
        }
        footer={
          <Button
            title={'Entendido'}
            color={theme.colors.black}
            background={theme.colors.green_500}
            onPress={() => setIsModalVisible(false)}
          />
        }
      />
    </C.Container>
  );
}
