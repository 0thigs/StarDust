import * as C from './styles';
import { usePhase } from '../../hooks/usePhase';
import { Theory } from '../../components/Theory';
import { PhaseHeader } from '../../components/PhaseHeader';
import { Quiz } from '../../components/Quiz';

export function Phase() {
  const [state, dispatch] = usePhase();

  return (
    <C.Container>
      <PhaseHeader />
      {state.currentStage === 'theory' && <Theory />}
      {state.currentStage === 'quiz' && <Quiz />}
      {state.currentStage === 'end' && <End />}
    </C.Container>
  );
}
