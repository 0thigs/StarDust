import { useAuth } from '../../hooks/useAuth';
import { useDashboard } from '../../hooks/useDashboard';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { navButtons } from '../../utils/navButtons';
import { Settings, LogOut } from 'react-feather';
import theme from '../../styles/theme';
import * as C from './styles';
const iconSize = 20;
const iconColor = theme.colors.green_300;

export function Sidebar() {
  const { signOut } = useAuth();
  const { currentTableName, setCurrentTableName } = useDashboard();
  const navigate = useNavigate();

  function handleNavButton(title) {
    setCurrentTableName(title);
  }

  function handleSignOutButton() {
    try {
      signOut();
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <Logo width={150} />
        </C.Header>

        <C.Nav>
          {navButtons.map(({ title, Icon }) => (
            <C.NavButton
              key={title}
              isActive={currentTableName === title}
              onClick={() => handleNavButton(title)}
            >
              <Icon />
              {title}
            </C.NavButton>
          ))}
        </C.Nav>

        <C.AdminButtons>
          <Settings color={iconColor} size={iconSize} />
          <Button
            title={'Configurações'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            onClick={() => navigate('Settings')}
            isSmall={true}
          />

          <LogOut color={iconColor} size={iconSize} />
          <Button
            title={'Sair'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            onClick={handleSignOutButton}
            isSmall={true}
          />
        </C.AdminButtons>
      </C.Content>
    </C.Container>
  );
}
