import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { View } from 'react-native';
import { Challenge } from '../../components/Challenge';
import { SelectInput } from '../../components/SelectInput_';
import { challenges } from '../../utils/challenges';
import { filters } from '../../utils/filters';

import * as C from './styles';
import { useMemo } from 'react';
import { X } from 'react-native-feather';
import theme from '../../global/styles/theme';

const difficultyTable = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

export function Challenges() {
  const {
    loggedUser: { completed_challenges_ids },
  } = useAuth();

  const [_Challenges, set_Challenges] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function isChalllengeCompleted(id) {
    return completed_challenges_ids.includes(id);
  }

  //   async function getChallenges() {
  //     try {
  //       const challenges = await api.getChallenges();
  //       console.log(challenges);
  //       setChallenges(challenges);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

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
    set_Challenges(filteredChallenges);
  }

  function handleTagButtonPress(type, value) {
    let updatedTags = [];

    if (type === 'categories') {
      const updatedCategories = categories.filter(category => category !== value);
      setCategories(updatedCategories);

      const targetTag = tags.find(tag => tag.type === 'categories');
      targetTag.value = updatedCategories;
      updatedTags = tags.filter(tag => (tag.type === 'categories' ? targetTag : tag));
    } else {
      updatedTags = tags.filter(tag => tag.type !== type);
    }

    setTags(updatedTags);
    const filteredChallenges = filterChallenges(updatedTags);
    set_Challenges(filteredChallenges);
  }

  function setChallenges(challenge) {
    const isCompleted = isChalllengeCompleted(challenge.id);
    return { ...challenge, isCompleted };
  }

  useEffect(() => {
    const filteredChallenges = challenges.map(setChallenges).filter(challenge => !challenge.starId);
    set_Challenges(filteredChallenges);
    //   getChallenges();
  }, []);

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
      <C.ChallengesList
        data={_Challenges}
        keyExtractor={challenge => challenge.id}
        renderItem={({
          item: {
            id,
            title,
            difficulty,
            likes,
            votes,
            author,
            totalCompletions,
            categories,
            isCompleted,
          },
        }) => {
          return (
            <Challenge
              id={id}
              title={title}
              difficulty={difficultyTable[difficulty]}
              likes={likes}
              votes={votes}
              totalCompletions={totalCompletions}
              author={author}
              categories={categories}
              isCompleted={isCompleted}
            />
          );
        }}
      />
    </C.Container>
  );
}
