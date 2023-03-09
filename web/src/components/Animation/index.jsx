import Lottie from 'react-lottie';

export function Animation({ animation, size, hasLoop, hasAutoplay = true, speed = 1 }) {
  const animationOptions = {
    loop: hasLoop,
    autoplay: hasAutoplay,
    animationData: animation,
  };

  return (
    <div>
      <Lottie options={animationOptions} width={size} height={size} speed={speed} />
    </div>
  );
}
