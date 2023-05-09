const spacings = {
    selection: 25,
    open: 125,
    checkbox: 30,
}

export function getCodeHeight(code, questionType) {
  const linesAmount = code.split('\n').length;
  return linesAmount * spacings[questionType];
}
