import * as C from './styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

export function SignIn() {
  return (
    <C.Container>
      <aside>
        <C.Intro>
          <Logo />
        </C.Intro>
      </aside>
      <main>
        <C.Form></C.Form>
      </main>
    </C.Container>
  );
}
