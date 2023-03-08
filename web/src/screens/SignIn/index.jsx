import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../../styles/theme';
import * as yup from 'yup';
import * as C from './styles';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Rocket } from '../../assets/images/rocket.svg';
import { ReactComponent as SignInIcon } from '../../assets/icons/signin.svg';

import { Mail, Lock } from 'react-feather';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import RocketLaunch from '../../assets/animations/rocket-launch.json';
import { Animation } from '../../components/Animation';

const SingnInSchema = yup.object({
  email: yup.string().required('E-mail não pode estar vazio!').email('E-mail inválido!'),
  password: yup
    .string()
    .min(6, 'senha deve ter pelo menos 6 dígitos!')
    .required('Senha não pode estar vazia!'),
});

export function SignIn() {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SingnInSchema) });
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function HandleSignIn(data) {
    setIsLoading(true);
    try {
      const loggedUser = await signIn(data);

      const page = loggedUser.isAdmin ? '/dashboard/users' : '';
      console.log(loggedUser.isAdmin);
      navigate(page);
    } catch (error) {
      console.log(error);

      toast.error('Usuário não encontrado');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <C.Container>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          bodyStyle={{ fontSize: 16 }}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <C.Form>
          <C.Header>
            <SignInIcon />
            <h2>Faça seu login</h2>
            <p>Entre com suas informações de cadastro</p>
          </C.Header>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                type={'text'}
                label={'E-mail'}
                Icon={Mail}
                placeholder={'Digite seu-mail'}
                value={value}
                onChange={onChange}
                error={errors.email}
              />
            )}
          />
          {errors.email && <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                type={'password'}
                label={'Senha'}
                Icon={Lock}
                placeholder={'Digite sua senha'}
                value={value}
                onChange={onChange}
                error={errors.password}
              />
            )}
          />
          {errors.password && <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>}

          <Button
            title={'Entrar'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            onClick={handleSubmit(HandleSignIn)}
          />
        </C.Form>
      </main>

      <aside>
        <C.Intro>
          <Logo />
          <p>Aprenda enquanto se diverte!</p>
        </C.Intro>
        {/* <C.AnimationContainer>
          <Animation animation={RocketLaunch} size={600} hasLoop={true} hasAutoplay={true} />
        </C.AnimationContainer> */}
      </aside>
    </C.Container>
  );
}
