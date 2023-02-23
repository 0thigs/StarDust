import { ActivityIndicator } from 'react-native';
import { Animation } from '../Animation';
import LoadingAnimation from '../../assets/animations/loading-animation.json';

export function Loading({ isAnimation }) {
  return (
    <>
      {isAnimation ? (
        <Animation source={LoadingAnimation} autoPlay={true} loop={true} size={100} />
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
