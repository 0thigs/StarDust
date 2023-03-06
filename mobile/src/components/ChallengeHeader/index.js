import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Modal } from '../Modal';
import * as C from './styles';
import * as Icon from 'react-native-feather';
import theme from '../../global/styles/theme';
import { Button } from '../Button';
const iconSize = 25;

export function ChallengeHeader({ title, indicatorPositionX, slideWidth, sliderRef }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigation();
  const CurrentIndicatorPositionX = useSharedValue(0);

  const IndicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(CurrentIndicatorPositionX.value, { duration: 250 }) }],
    };
  });

  function handleBackButtonPress() {
    navigation.reset({
      routes: [{ name: 'DrawerRoutes' }],
    });
  }

  function handleMoreButtonPress() {
    setIsModalOpen(true);
  }

  function handleNavButtonPress(index) {
    sliderRef.current.scrollToIndex({ index });
  }

  useEffect(() => {
    CurrentIndicatorPositionX.value = indicatorPositionX / 3;
  }, [indicatorPositionX]);

  return (
    <C.Container>
      <C.Top>
        <C.HeaderButton onPress={handleBackButtonPress}>
          <Icon.ArrowLeft width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
        <C.Title align={'right'}>{title}</C.Title>
        <C.HeaderButton onPress={handleMoreButtonPress}>
          <Icon.MoreVertical width={iconSize} height={iconSize} color={theme.colors.green_500} />
        </C.HeaderButton>
      </C.Top>
      <C.Navigation>
        <C.NavigationButton onPress={() => handleNavButtonPress(0)} activeOpacity={0.7}>
          <C.Title isActive={0 === indicatorPositionX}>Problema</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(1)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth === indicatorPositionX}>Código</C.Title>
        </C.NavigationButton>
        <C.NavigationButton onPress={() => handleNavButtonPress(2)} activeOpacity={0.7}>
          <C.Title isActive={slideWidth * 2 === indicatorPositionX}>Resultado</C.Title>
        </C.NavigationButton>
      </C.Navigation>
      <C.Indicator style={IndicatorAnimatedStyle} />

      {/* <Modal
        isOpen={isModalOpen}
        type={'generic'}
        title={'Tamanho da fonte'}
        body={
          <>
            <IncreaseFontSizeButton>
              <A>A</A>
            </IncreaseFontSizeButton>

            <DecreaseFontSizeButton>
              <A>A</A>
            </DecreaseFontSizeButton>
          </>
        }
        footer={
          <Button
            title={'OK'}
            onPress={() => setIsModalOpen(false)}
            color={theme.colors.black}
            background={theme.colors.green_500}
          />
        }
      /> */}
    </C.Container>
  );
}
