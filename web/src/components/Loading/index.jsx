import { Animation } from '../Animation';
import LoadingAnimation from '../../assets/animations/loading-rocket.json';

export function Loading({ size }) {
  return (
    <>
      <Animation animation={LoadingAnimation} hasLoop={true} size={size} />
    </>
  );
}
