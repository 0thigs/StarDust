import { Animation } from '../Animation';
import Loading from '../../assets/animations/loading.json';
import * as C from './styles';

export function Button({ title, onClick, isLoading, color, background, isSmall = false }) {
  return (
    <C.Container
      onClick={onClick}
      background={background}
      color={color}
      disabled={isLoading}
      isSmall={isSmall}
    >
      {isLoading ? (
        <div>
          <Animation animation={Loading} size={55} hasLoop={true} speed={1.5} />
        </div>
      ) : (
        title
      )}
    </C.Container>
  );
}
