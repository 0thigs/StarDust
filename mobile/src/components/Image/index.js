import styled from 'styled-components/native';
import { Animation } from '../Animation';
import { useEffect, useState } from 'react';

const Container = styled.View``;

export function Image({ children: Children, size }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return <Container>{isLoaded ? <Children /> : <Animation size={size} />}</Container>;
}
