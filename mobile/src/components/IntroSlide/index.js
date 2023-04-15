import * as C from './styles';

export function IntroSlide({ title, image, description }) {
  return (
    <C.Container>
        <C.Image source={image} resizeMode={'contain'} />
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
    </C.Container>
  );
}
