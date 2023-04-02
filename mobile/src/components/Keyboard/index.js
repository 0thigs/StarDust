import * as C from './styles';

export function Keyboard({ handleRunPress }) {
  return (
    <C.Container>
      {/* <C.CodeButtons>
        <C.KeysList
          data={keys}
          keyExtractor={key => key}
          renderItem={({ item: key }) => (
            <C.CodeButton onPress={handleKeyPress}>
              <C.Title>{key}</C.Title>
            </C.CodeButton>
          )}
          horizontal
        />
       */}
      <C.CodeButton onPress={handleRunPress}>
        <C.Title isRunButton={true}>executar</C.Title>
      </C.CodeButton>
    </C.Container>
  );
}
