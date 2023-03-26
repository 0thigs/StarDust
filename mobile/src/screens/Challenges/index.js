import { useState, useEffect, useMemo } from 'react';
import { useChallenge } from '../../hooks/useChallenge';

import { View } from 'react-native';
import { Loading } from '../../components/Loading';
import { Challenge } from '../../components/Challenge';
import { SelectInput } from '../../components/SelectInput_';
import { filters } from '../../utils/filters';

import { X } from 'react-native-feather';
import * as C from './styles';
import theme from '../../global/styles/theme';

const difficultyTable = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

export function Challenges() {
  const { challenges } = useChallenge();
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getDifficulty(difficultyName) {
    for (const difficulty in difficultyTable) {
      if (difficultyName === difficultyTable[difficulty]) return difficulty;
    }
  }

  function getStatusName(status) {
    return status ? 'Resolvido' : 'Não resolvido';
  }

  function getCategories(newCategory) {
    if (categories.some(category => category === newCategory)) {
      const updatedCategories = categories.filter(category => category !== newCategory);
      console.log(updatedCategories);
      setCategories(updatedCategories);
      return updatedCategories;
    }

    const newCategories = [...categories, newCategory];
    setCategories(newCategories);
    return newCategories;
  }

  function addTag(type, tag) {
    switch (type) {
      case 'difficulty':
        return getDifficulty(tag);
      case 'isCompleted':
        return tag === 'Resolvido';
      case 'categories':
        return getCategories(tag);
      default:
        return;
    }
  }

  function filterChallenges(currentTags) {
    let filteredChallenges = challenges.map(setChallenges).filter(challenge => !challenge.starId);

    for (const tag of currentTags) {
      filteredChallenges = filteredChallenges.filter(challenge => {
        if (tag.type === 'categories') {
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
      const updatedCategories = [...categories].filter(category => category !== value);
      setCategories(updatedCategories);

      const targetTag = tags.find(tag => tag.type === 'categories');
      targetTag.value = updatedCategories;
      updatedTags = tags.filter(tag => (tag.type === 'categories' ? targetTag : tag));
    } else {
      updatedTags = tags.filter(tag => tag.type !== type);
    }

    setTags(updatedTags);
    const filteredChallenges = filterChallenges(updatedTags);
    setFilteredChallenges(filteredChallenges);
  }

  function setChallenges(challenge) {
    const isCompleted = isChalllengeCompleted(challenge.id);
    return { ...challenge, isCompleted };
  }

  useEffect(() => {
    if (challenges.length) {
      setFilteredChallenges(challenges);
      setIsLoading(false);
    }
  }, [challenges]);

  return (
    <C.Container>
      <C.FiltersList>
        {filters.map(({ type, label, options }) => (
          <SelectInput
            key={type}
            type={type}
            label={label}
            options={options}
            selectedCategories={categories}
            handleSelectChange={handleSelectChange}
          />
        ))}
      </C.FiltersList>
      <C.TagsList>
        {tags.map(({ type, value, icon, color }) => (
          <View key={value}>
            {Array.isArray(value) ? (
              value.map(value => (
                <C.Tag key={value}>
                  <C.TagName>{value}</C.TagName>
                  <C.RemoveTagButton onPress={() => handleTagButtonPress(type, value)}>
                    <X width={22} color={theme.colors.gray_500} />
                  </C.RemoveTagButton>
                </C.Tag>
              ))
            ) : (
              <C.Tag key={value}>
                {icon && icon}
                <C.TagName color={color}>
                  {type === 'difficulty' ? difficultyTable[value] : getStatusName(value)}
                </C.TagName>
                <C.RemoveTagButton onPress={() => handleTagButtonPress(type, value)}>
                  <X width={22} color={theme.colors.gray_500} />
                </C.RemoveTagButton>
              </C.Tag>
            )}
          </View>
        ))}
      </C.TagsList>
      {isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Loading isAnimation={true} />
        </View>
      ) : (
        <C.ChallengesList
          data={filteredChallenges}
          keyExtractor={challenge => challenge.id}
          renderItem={({
            item: {
              id,
              name,
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
                name={name}
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
      )}
    </C.Container>
  );
}
