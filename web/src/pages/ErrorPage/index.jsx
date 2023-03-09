import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Animation } from '../../components/Animation';
import Error from '../../assets/animations/error-page.json';
import theme from '../../styles/theme';
import * as C from './styles';

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <C.Container>
      <Animation animation={Error} size={350} hasLoop={true} />
      <C.Message>
        <h1>código 404:</h1>
        <p>Parece que você se perdeu no espaço!</p>
        <strong>Clique no botão abaixo para puxarmos você de volta</strong>
        <Button
          title={'Retornar'}
          background={theme.colors.green_300}
          color={theme.colors.black}
          onClick={() => navigate(-1)}
        />
      </C.Message>
    </C.Container>
  );
}
