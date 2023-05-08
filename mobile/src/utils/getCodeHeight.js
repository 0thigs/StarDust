const spacings = {
    selection: 25,
    open: 125,
    checkbox: 25,
}

export function getCodeHeight(code, questionType) {
  const linesAmount = code.split('\n').length;
  console.log(linesAmount);
  return linesAmount * spacings[questionType];
}
