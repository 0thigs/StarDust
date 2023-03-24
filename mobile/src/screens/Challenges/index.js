import { useState, useEffect } from 'react';
import { Challenge } from '../../components/Challenge';
import { challenges } from '../../utils/challenges';
import api from '../../services/api';
import * as C from './styles';

const difficultyTable = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

export function Challenges() {
  //   const [challenges, setChallenges] = useState([]);

  //   async function getChallenges() {
  //     try {
  //       const challenges = await api.getChallenges();
  //       console.log(challenges);
  //       setChallenges(challenges);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     getChallenges();
  //   }, []);

  return (
    <C.Container>
      <C.SortInputList></C.SortInputList>
      <C.ChallengesList
        data={challenges.filter(challenge => !challenge.starId)}
        keyExtractor={challenge => challenge.id}
        renderItem={({
          item: { id, title, difficulty, likes, votes, author, totalCompletions },
        }) => (
          <Challenge
            id={id}
            title={title}
            difficulty={difficultyTable[difficulty]}
            likes={likes}
            votes={votes}
            totalCompletions={totalCompletions}
            author={author}
          />
        )}
      />
    </C.Container>
  );
}
