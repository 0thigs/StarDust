import * as C from './styles';
import { Problem } from '../../components/Problem';
import { Code } from '../../components/Code';
import { Result } from '../../components/Result';
import { ChallengeHeader } from '../../components/ChallengeHeader';
import { challenges } from '../../utils/challenges';
import { Onboarding } from '../../components/Onboarding';
import { useAnimatedScrollHandler } from 'react-native-reanimated';

export function Challenge({ id = 1 }) {
  const { title, texts, code, testCases } = challenges.find(challenge => challenge.id === id);

  const slides = [
    {
      id: 1,
      component: <Problem title={title} texts={texts} />,
    },
    {
      id: 2,
      component: <Code code={code} />,
    },
    {
      id: 3,
      component: <Result testCases={testCases} />,
    },
  ];

  const scrollHandler = useAnimatedScrollHandler(event => {
    console.log(event.contentOffset.x);
  });

  return (
    <C.Container>
      <ChallengeHeader />

      <C.Slider
        data={slides}
        keyExtractor={slide => slide.id}
        renderItem={({ item: { component } }) => <Onboarding component={component} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
        onScroll={scrollHandler}
      />
    </C.Container>
  );
}
