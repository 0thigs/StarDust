import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';
import { useChallenge } from '../../hooks/useChallenge';
import { useCategory } from '../../hooks/useCategory';

import { View } from 'react-native';
import { Loading } from '../../components/Loading';
import { Challenge } from '../../components/Challenge';
import { SelectInput } from '../../components/SelectInput';
import { filters } from '../../utils/filters';
import { Layout } from 'react-native-reanimated';
import { X } from 'react-native-feather';
const xSize = 16;

import * as C from './styles';
import theme from '../../global/styles/theme';
import { FadeIn } from 'react-native-reanimated';
import { FadeOut } from 'react-native-reanimated';
const difficultyTable = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

export function Challenges() {
  const { loggedUser } = useAuth();
  const { challenges, fetchChallenges } = useChallenge(null, loggedUser.id);
  const { categories } = useCategory();
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getCategoriesNames(challengeCategory) {
    if (!challengeCategory) return [];
    return categories.find(category => category.id === challengeCategory.category_id).name;
  }

  function getDifficulty(difficultyName) {
    for (const difficulty in difficultyTable) {
      if (difficultyName === difficultyTable[difficulty]) return difficulty;
    }
  }

  function getStatusName(status) {
    return status ? 'Resolvido' : 'Não resolvido';
  }

  function getSelectedCategories(newCategory) {
    if (selectedCategories.some(category => category === newCategory)) {
      const updatedCategories = selectedCategories.filter(category => category !== newCategory);
      setSelectedCategories(updatedCategories);
      return updatedCategories;
    }

    const newCategories = [...selectedCategories, newCategory];
    setSelectedCategories(newCategories);
    return newCategories;
  }

  function addTag(type, tag) {
    switch (type) {
      case 'difficulty':
        return getDifficulty(tag);
      case 'isCompleted':
        return tag === 'Resolvido';
      case 'categories':
        return getSelectedCategories(tag);
      default:
        return;
    }
  }

  function filterChallenges(currentTags) {
    let filteredChallenges = sortChallengesByDifficulty(challenges).map(addCategories);
    for (const tag of currentTags) {
      filteredChallenges = filteredChallenges.filter(challenge => {
        if (tag.type === 'categories') {
          console.log(tag.value);
          return tag.value.length === 0
            ? true
            : tag.value.some(tagValue => challenge[tag.type].includes(tagValue));
        }
        return challenge[tag.type] === tag.value;
      });
    }

    return filteredChallenges;
  }

  function handleSelectChange(type, tag, icon = null, color = null) {
    const newTag = { type, value: addTag(type, tag), icon, color };

    let currentTags = [];
    if (tags.some(currentTag => currentTag.type === type)) {
      currentTags = tags.map(currentTag => (currentTag.type === type ? newTag : currentTag));
    } else {
      currentTags = [...tags, newTag];
    }
    setTags(currentTags);
    const filteredChallenges = filterChallenges(currentTags);
    setFilteredChallenges(filteredChallenges);
  }

  function handleTagButtonPress(type, value) {
    let updatedTags = [];

    if (type === 'categories') {
      const updatedCategories = [...selectedCategories].filter(category => category !== value);
      setSelectedCategories(updatedCategories);

      const targetTag = tags.find(tag => tag.type === 'categories');
      targetTag.value = updatedCategories;
      updatedTags = tags.filter(tag => (tag.type === 'categories' ? targetTag : tag));
    } else {
      updatedTags = tags.filter(tag => tag.type !== type);
    }

    setTags(updatedTags);
    console.log(updatedTags);
    const filteredChallenges = filterChallenges(updatedTags);
    setFilteredChallenges(filteredChallenges);
  }

  function addCategories(challenge) {
    const categories = challenge.categories.map(getCategoriesNames);
    return { ...challenge, categories };
  }

  function sortChallengesByDifficulty(challenges) {
    const easyChallenges = challenges.filter(challenge => challenge.difficulty === 'easy');
    const mediumChallenges = challenges.filter(challenge => challenge.difficulty === 'medium');
    const hardChallenges = challenges.filter(challenge => challenge.difficulty === 'hard');

    return easyChallenges.concat(mediumChallenges, hardChallenges);
  }

  useEffect(() => {
    if ((challenges.length, categories.length)) {
      setFilteredChallenges(sortChallengesByDifficulty(challenges).map(addCategories));
      setIsLoading(false);
    }
  }, [challenges, categories]);

  useFocusEffect(
    useCallback(() => {
      fetchChallenges();
    }, [])
  );

  return (
    <C.Container>
      {isLoading || !categories.length > 0 || !challenges.length > 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Loading isAnimation={true} />
        </View>
      ) : (
        <>
          <C.FiltersList>
            {filters.map(({ type, label, options }) => (
              <SelectInput
                key={type}
                type={type}
                label={label}
                options={options}
                categoriesFromDatabase={categories}
                selectedCategories={selectedCategories}
                handleSelectChange={handleSelectChange}
              />
            ))}
          </C.FiltersList>
          <C.TagsList>
            {tags.map(({ type, value, icon, color }) => (
              <View key={value} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {Array.isArray(value) ? (
                  value.map(value => (
                    <C.Tag key={value} entering={FadeIn} exiting={FadeOut} layout={Layout}>
                      <C.TagName>{value}</C.TagName>
                      <C.RemoveTagButton onPress={() => handleTagButtonPress(type, value)}>
                        <X width={xSize} color={theme.colors.gray_500} />
                      </C.RemoveTagButton>
                    </C.Tag>
                  ))
                ) : (
                  <C.Tag key={value} entering={FadeIn} exiting={FadeOut} layout={Layout}>
                    {icon && icon}
                    <C.TagName color={color}>
                      {type === 'difficulty' ? difficultyTable[value] : getStatusName(value)}
                    </C.TagName>
                    <C.RemoveTagButton onPress={() => handleTagButtonPress(type, value)}>
                      <X width={xSize} color={theme.colors.gray_500} />
                    </C.RemoveTagButton>
                  </C.Tag>
                )}
              </View>
            ))}
          </C.TagsList>
          <C.ChallengesList
            data={filteredChallenges}
            keyExtractor={challenge => challenge.id}
            renderItem={({
              item: {
                id,
                title,
                difficulty,
                acceptanceRate,
                author,
                totalCompletitions,
                categories,
                isCompleted,
              },
            }) => {
              return (
                <Challenge
                  id={id}
                  title={title}
                  difficulty={difficultyTable[difficulty]}
                  acceptanceRate={acceptanceRate}
                  totalCompletitions={totalCompletitions}
                  author={author}
                  categories={categories}
                  isCompleted={isCompleted}
                />
              );
            }}
          />
        </>
      )}
    </C.Container>
  );
}
