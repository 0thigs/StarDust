import Lottie from 'react-lottie';

export function Animation({ animation, size, hasLoop, hasAutoplay }) {
  const animationOptions = {
    loop: hasLoop,
    autoplay: hasAutoplay,
    animationData: animation,
  };

  return <Lottie options={animationOptions} width={size} height={size} />;
}
