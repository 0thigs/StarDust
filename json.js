import { useState } from 'react';
import * as C from './styles';

import AlertIcon from '../../assets/GlobalAssets/alert-icon.svg';

import { Button } from '../../components/Button';
import { LessonHeader } from '../LessonHeader';
import { useLesson } from '../../hooks/useLesson';
import { theories } from '../../utils/theories';

export function Theory() {
  const [state, dispatch] = useLesson();
  const [currentTheories, setCurrentTheories] = useState(theories[0].texts);

  console.log({ currentTheories });

  function handlePracticeButton() {
    dispatch({ type: 'changeStage' });
    console.log(state.currentStage);
  }

  return (
    <C.Container>
      <LessonHeader />
      <C.PhaseTitle>Introdução</C.PhaseTitle>
      <C.Theories
        data={currentTheories}
        keyExtractor={thoery => thoery.body}
        renderItem={({ item }) => (
          <>
            {item.type === 'default' && (
              <C.TextContainer>
                <C.DefaultText>{item.body}</C.DefaultText>
              </C.TextContainer>
            )}
            {item.type === 'alert' && (
              <C.TextContainer>
                <AlertIcon />
                <C.AlertText>{item.body}</C.AlertText>
              </C.TextContainer>
            )}
            {console.log(item)}
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <C.TextContainer>
          <C.DefaultText>
            Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma
            sequência lógica. Na maior parte do tempo, fazemos isso de maneira tão natural que nem
            nos damos conta, mas, quando percebemos, conseguimos enxergar passos que levaram ao
            resultado final.
          </C.DefaultText>
        </C.TextContainer>
        <C.TextContainer>
          <AlertIcon />
          <C.AlertText>
            Logo, uma sequência Lógica são passos executados até atingir um objetivo ou solução de
            um problema.
          </C.AlertText>
        </C.TextContainer>
        <C.TextContainer>
          <C.DefaultText>
            Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do
            nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma
            cadeia de outras ações menores que nos levaram até uma atitude final.
          </C.DefaultText>
        </C.TextContainer>
        <C.ExampleTextContainer>
          <C.ExempleTextTitle>Exemplo</C.ExempleTextTitle>
          <C.ExempleText>
            Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do
            nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma
            cadeia de outras ações menores que nos levaram até uma atitude final.
          </C.ExempleText>
        </C.ExampleTextContainer>
        <C.TextContainer>
          <AlertIcon />
          <C.AlertText>
            Não estamos acostumados a pensar desta maneira sobre nossas atividades cotidianas, mas,
            quando falamos de programação, estipular uma sequência de etapas é um procedimento muito
            importante e necessário, uma vez que, diferente de nós, seres humanos, os computadores
            não são capazes de prever nenhum comportamento.
          </C.AlertText>
        </C.TextContainer>
        <C.TextContainer>
          <C.DefaultText>
            À maneira de pensar logicamente para estipular sequências de passos para a resolução de
            um problema, damos o nome de lógica de programação; à sequência narrativa desses
            eventos, damos o nome de algoritmo.
          </C.DefaultText>
        </C.TextContainer>
        <Button title={'Praticar'} onPress={handlePracticeButton} /> */}
    </C.Container>
  );
}
