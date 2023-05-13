const spacings = {
    selection: 35,
    open: 55,
    checkbox: 25,
}

export function getCodeHeight(code, questionType) {
  const linesAmount = code.split('\n').length;
  return linesAmount * spacings[questionType];
}
