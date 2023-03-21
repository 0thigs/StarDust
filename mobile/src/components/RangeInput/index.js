import { Svg, Line } from 'react-native-svg';
import theme from '../../global/styles/theme';
import * as C from './styles';

export function RangeInput({ isVisible, setIsVisible }) {
  return (
    <C.Container transparent visible={isVisible}>
      <C.Background onTouchStart={() => setIsVisible(false)} />

        <C.Content>
          <C.Heading>Font Size</C.Heading>
          <C.Controls>
            <C.Button>
              <C.Title>A</C.Title>
            </C.Button>

            <C.Range>
              <C.Label>Padrão</C.Label>
              <C.Track />
              <Svg>
                <Line
                  stroke={theme.colors.green_300}
                  x1={0}
                  y1={0}
                  x2={100}
                  y2={0}
                  strokeLinecap={'round'}
                />
              </Svg>
            </C.Range>

            <C.Button>
              <C.Title>A</C.Title>
            </C.Button>
          </C.Controls>

          <C.Button>
            <C.Title>ok</C.Title>
          </C.Button>
        </C.Content>
    </C.Container>
  );
}
