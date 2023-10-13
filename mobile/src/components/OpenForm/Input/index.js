import { useMemo } from "react";
import { useLesson } from "../../../hooks/useLesson"
import * as C from './styles';

export function Input({ answer, ...rest }) {
  const [{ isAnswerVerified, isAnswerWrong }] = useLesson();

  const width = answer.length * 10

  const color = useMemo(() => {
    if (isAnswerWrong && isAnswerVerified) {
      return 'red'
    } else if (!isAnswerWrong && isAnswerVerified) {
      return 'green'
    } else {
      return 'white'
    }
  }, [isAnswerWrong, isAnswerVerified])

  return (
    <C.Input  
      width={width}
      color={color}
      maxLength={answer.length}
      {...rest} 
    />
  )
}
