// import { useRef, useState } from 'react';
// import { ChallengeHeader } from '../../components/ChallengeHeader';
// import { Onboarding } from '../../components/Onboarding';
// import { useChallenge } from '../../hooks/useChallenge';

// import * as C from './styles';

// export function Challenge({ id = 1 }) {
//   const [indicatorPositionX, setIndicatorPositionX] = useState(0);
//   const [slideWidth, setSlideWidth] = useState(0);
//   const sliderRef = useRef(null);
//   const { slides, setUserCode } = useChallenge(id);

//   function handleSliderScroll({ contentOffset, layoutMeasurement }) {
//     setIndicatorPositionX(contentOffset.x);
//     setSlideWidth(layoutMeasurement.width);
//   }

//   return (
//     <C.Container>
//       <ChallengeHeader
//         indicatorPositionX={indicatorPositionX}
//         slideWidth={slideWidth}
//         sliderRef={sliderRef}
//       />

//       <C.Slider
//         ref={sliderRef}
//         data={slides}
//         keyExtractor={slide => slide.id}
//         renderItem={({ item: { component } }) => <Onboarding component={component} />}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         bounces={false}
//         scrollEventThrottle={16}
//         onScroll={event => handleSliderScroll(event.nativeEvent)}
//       />
//     </C.Container>
//   );
// }
