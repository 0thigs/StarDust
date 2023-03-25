import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp, Search } from 'react-native-feather';
import Popover from 'react-native-popover-view';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import { CategoriesList, Category } from '../Challenge/styles';
import * as C from './styles';
const iconSize = 12;
const iconColor = theme.colors.gray_500;

export function SelectInput({ type, options, label, selectedCategories, handleSelectChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState('');
  const hasSearch = type === 'tags';

  function filterCategories() {
    if (!searchText) {
      return categories;
    }

    function removeAccentuation(word) {
      return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    return categories.filter(category =>
      removeAccentuation(category.name.toLowerCase()).includes(
        removeAccentuation(searchText.toLowerCase())
      )
    );
  }

  async function getCategories() {
    try {
      const categories = await api.getCategories();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const filteredCategories = useMemo(filterCategories, [searchText, categories]);

  return (
    <C.Container>
      <Popover
        verticalOffset={-40}
        onOpenStart={() => setIsOpen(true)}
        onCloseStart={() => setIsOpen(false)}
        popoverStyle={{ borderRadius: 8, backgroundColor: theme.colors.green_900 }}
        from={
          <C.Select activeOpacity={0.7}>
            <C.Label>{label}</C.Label>
            {isOpen ? (
              <ChevronUp fontSize={iconSize} color={iconColor} />
            ) : (
              <ChevronDown fontSize={iconSize} color={iconColor} />
            )}
          </C.Select>
        }
      >
        {type === 'categories' ? (
          <C.Content>
            <C.Search>
              <Search fontSize={iconSize} color={theme.colors.gray_500} />
              <C.Input placeholder={'Pesquisar...'} onChangeText={setSearchText} />
            </C.Search>
            <CategoriesList>
              {filteredCategories.map(({ id, name }) => {
                const isSelected = selectedCategories.includes(name);
                return (
                  <TouchableOpacity key={id} onPress={() => handleSelectChange(type, name)}>
                    <Category isSelected={isSelected}>{name}</Category>
                  </TouchableOpacity>
                );
              })}
            </CategoriesList>
          </C.Content>
        ) : (
          options.map(({ title, icon, color }, index) => (
            <C.Option
              key={title}
              isLast={index === options.length - 1}
              onPress={() => {
                setIsOpen(false);
                handleSelectChange(type, title, icon, color);
              }}
            >
              {icon && icon}
              <C.Title color={color}>{title}</C.Title>
            </C.Option>
          ))
        )}
      </Popover>
    </C.Container>
  );
}
