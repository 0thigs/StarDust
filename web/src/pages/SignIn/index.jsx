import { useEffect, useState } from 'react';
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
import { Animation } from '../../components/Animation';
import RocketLaunching from '../../assets/animations/rocket-launching.json';
const adminPassword = 'cc71b28d-9369-47ba-80d7-e6e193af73d';

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
  const [lauchRocket, setLauchRocket] = useState(false);
  const { signIn, loggedUser } = useAuth();
  const navigate = useNavigate();

  async function HandleSignIn(data) {
    setIsLoading(true);
    try {
      const loggedUser = await signIn(data);

      const page = loggedUser.isAdmin ? '/admin/dashboard' : '/';
      setLauchRocket(true);
      setTimeout(() => navigate(page), 3000);
    } catch (error) {
      console.log(error);
      toast.error('Usuário não encontrado');
    } finally {
      setIsLoading(false);
    }
  }

  const isUserLogged = Object.entries(loggedUser).length > 0;
  if (isUserLogged && !lauchRocket) {
    navigate(-1);
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
            isLoading={isLoading}
          />
        </C.Form>
      </main>

      <aside>
        {lauchRocket ? (
          <C.AnimationContainer>
            <Animation animation={RocketLaunching} size={600} hasLoop={false} />
          </C.AnimationContainer>
        ) : (
          <C.Intro>
            <Logo />
            <p>Aprenda enquanto se diverte!</p>
            <Rocket width={200} />
          </C.Intro>
        )}
      </aside>
    </C.Container>
  );
}
