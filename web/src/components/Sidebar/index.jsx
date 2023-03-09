import { useAuth } from '../../hooks/useAuth';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { navButtons } from '../../utils/navButtons';
import { Settings, LogOut } from 'react-feather';
import theme from '../../styles/theme';
import * as C from './styles';

export function Sidebar() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function goTo(page) {
    navigate(page);
  }

  function handleSignOutButton() {
    signOut();
  }

  return (
    <C.Container>
      <C.Header>
        <Logo width={150} />
      </C.Header>

      <C.Nav>
        {navButtons.map(({ title, Icon, page }) => (
          <C.NavButton key={title}>
            <Icon />
            {title}
          </C.NavButton>
        ))}
      </C.Nav>

      {/* <C.AdminButtons>
        <Settings />
        <Button
          title={'Configurações'}
          background={theme.colors.green_300}
          color={theme.colors.black}
          onClick={() => navigate('Settings')}
        />

        <LogOut />
        <Button
          title={'Sair'}
          background={theme.colors.green_300}
          color={theme.colors.black}
          onClick={handleSignOutButton}
        />
      </C.AdminButtons> */}
    </C.Container>
  );
}
