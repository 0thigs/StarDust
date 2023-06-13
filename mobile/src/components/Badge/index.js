import { useImageUri } from '../../hooks/useImageUri';
import { SvgUri } from 'react-native-svg';
import LockIcon from '../../assets/GlobalAssets/lock.svg';
import * as C from './styles';

export function Badge({ index, name, image, currentRankingIndex }) {
  const { imageUri } = useImageUri('rankings', image);
  const isCurrentRanking = currentRankingIndex === index;
  const badgeSize = isCurrentRanking ? 100 : 75;
  const lockSize = 30;

  return (
    <C.Container>
      <SvgUri uri={imageUri} width={badgeSize} height={badgeSize} />
      {index > currentRankingIndex && (
        <C.Lock>
          <LockIcon width={lockSize} height={lockSize} />
        </C.Lock>
      )}

      <C.Name>{isCurrentRanking && name}</C.Name>
    </C.Container>
  );
}
