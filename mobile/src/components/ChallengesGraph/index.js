import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import * as C from './styles';
const props = {
  activeStrokeWidth: 24,
  inActiveStrokeWidth: 24,
  inActiveStrokeOpacity: 0.2,
};

export function ChallengesGraph() {
  return (
    <C.Container>
      <C.Graph>
        <CircularProgressBase
          {...props}
          value={50}
          radius={75}
          activeStrokeColor={'#e84118'}
          inActiveStrokeColor={'#e84118'}
        >
          <CircularProgressBase
            {...props}
            value={87}
            radius={50}
            activeStrokeColor={'#badc58'}
            inActiveStrokeColor={'#badc58'}
          >
            <CircularProgressBase
              {...props}
              value={62}
              radius={25}
              activeStrokeColor={'#18dcff'}
              inActiveStrokeColor={'#18dcff'}
            />
          </CircularProgressBase>
        </CircularProgressBase>
      </C.Graph>
      <C.Legend></C.Legend>
    </C.Container>
  );
}
