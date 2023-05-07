const spacings = {
    selection: 50,
    open: 125,
    checkbox: 25,
}

export function getCodeHeight(code, questionType) {
  const linesAmount = code.split('\n').length;
  return linesAmount * spacings[questionType];
}
