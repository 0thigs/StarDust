import { View } from 'react-native';
import { ChevronDown, ChevronUp, Search } from 'react-native-feather';
import SelectDropdown from 'react-native-select-dropdown';
import theme from '../../global/styles/theme';
import * as C from './styles';
const iconSize = 12;
const iconColor = theme.colors.gray_500;

export function SelectInput({ type, options, label }) {
  const hasSearch = type === 'tags';

  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={hasSearch ? 'Tags' : options[0].title}
        buttonTextStyle={C.attrStyles.buttonText}
        buttonStyle={[C.attrStyles.button, { width: hasSearch ? 200 : 150 }]}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem.title}
        dropdownStyle={C.attrStyles.dropdown}
        dropdownBackgroundColor={theme.colors.background}
        rowStyle={C.attrStyles.row}
        searchInputStyle={C.attrStyles.search}
        renderDropdownIcon={isOpen =>
          isOpen ? (
            <ChevronUp fontSize={iconSize} color={iconColor} />
          ) : (
            <ChevronDown fontSize={iconSize} color={iconColor} />
          )
        }
        renderCustomizedRowChild={({ title, icon }, index) => (
          <C.Option>
            {icon && icon}
            <C.Title>{title}</C.Title>
          </C.Option>
        )}
        search
        searchInputTxtColor={theme.colors.gray_700}
        searchPlaceHolder={'Pesquisar'}
        searchPlaceHolderColor={theme.colors.gray_700}
        renderSearchInputLeftIcon={() => <Search fontSize={iconSize} color={iconColor} />}
      />
    </C.Container>
  );
}
