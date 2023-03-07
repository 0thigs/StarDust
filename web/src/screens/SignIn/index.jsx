import * as C from './styles';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Rocket } from '../../assets/images/rocket.svg';
import { ReactComponent as SignInIcon } from '../../assets/icons/signin.svg';
import { Input } from '../../components/Input';
import { Mail, Lock } from 'react-feather';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

export function SignIn() {
  return (
    <C.Container>
      <aside>
        <C.Intro>
          <Logo />
          <p>Aprenda enquanto se diverte!</p>
          <Rocket width={200} height={200} />
        </C.Intro>
      </aside>
      <main>
        <C.Form>
          <C.Header>
            <SignInIcon />
            <h2>Faça seu login</h2>
            <p>Entre com suas informações de cadastro</p>
          </C.Header>

          <Input
            type={'email'}
            label={'E-mail'}
            Icon={Mail}
            placeholder={'seu e-mail'}
            value={'Digite seu e-mail'}
          />
          <Input
            type={'password'}
            label={'Senha'}
            Icon={Lock}
            placeholder={'Digite sua senha'}
            value={'Digite sua senha'}
          />
          <Button title={'Entrar'} background={theme.colors.green_300} color={theme.colors.black} />
        </C.Form>
      </main>
    </C.Container>
  );
}
