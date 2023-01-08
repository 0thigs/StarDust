import * as C from './styles';

import HomeIcon from '../../assets/home-tab-icon';
import ShopIcon from '../../assets/shop-tab-icon';
import ProfileIcon from '../../assets/profile-tab-icon';

export function CustomTabBar({ state, navigation }) {
  function goTo(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <C.Container>
      <C.TabButton onPress={() => goTo('Home')}>
        <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.8 }} width="50" height="50" />
        <C.TabLabel isActive={state.index === 0}>Aprender</C.TabLabel>
      </C.TabButton>
      <C.TabButton onPress={() => goTo('Shop')}>
        <ShopIcon style={{ opacity: state.index === 1 ? 1 : 0.8 }} width="50" height="50" />
        <C.TabLabel isActive={state.index === 1}>Loja</C.TabLabel>
      </C.TabButton>
      <C.TabButton onPress={() => goTo('Profile')}>
        <ProfileIcon style={{ opacity: state.index === 1 ? 1 : 0.8 }} width="50" height="50" />
        <C.TabLabel isActive={state.index === 2}>Perfil</C.TabLabel>
      </C.TabButton>
    </C.Container>
  );
}
