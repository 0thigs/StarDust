const braces = new Map([
  ['{', '}'],
  ['(', ')'],
  ['[', ']'],
  ['<', '>'],
  ['"', '"'],
  ["'", "'"],
  ['`', '`'],
]);

const regularBraces = new Set(['{', '(', '[', '<']);

/**
 * Verifica se a string é um símbolo de agrupamento (parênteses, colchetes ou chaves)
 * @param str Símbolo a ser analisado
 * @param onlyRegularBraces Retorna true apenas para os caracteres `{`, `(`, `[`, or `<`.
 * @returns boolean
 */
export const isOpenBrace = (str, onlyRegularBraces = false) => {
  if (onlyRegularBraces && !isRegularBrace(str)) {
    return false;
  }
  return braces.has(str);
};

/**
 * Verifica se dois caracteres são símbolos de agrupamento.
 * @param openBrace Potencial símbolo de abertura
 * @param closeBrace Potencial símbolo de encerramento
 * @returns boolean
 */
export const isBracePair = (openBrace, closeBrace) => {
  if (!openBrace || !closeBrace) {
    return false;
  }
  return isOpenBrace(openBrace) && getCloseBrace(openBrace) === closeBrace;
};

/**
 * Retorna o símbolo de encerramento de um dado símbolo de abertura
 * Retorna uma string vazia se os símbolos não se conrresponderem.
 * @param string Símbolo de abertura
 * @returns string
 */
export const getCloseBrace = string => {
  return braces.get(string) || '';
};

/**
 * Check if the string is a regular open brace.
 * Verifica se uma string é um símbolo de abertura regular
 * retorna apenas verdadeiro nos casos de `{`, `(`, `[`, or `<`.
 * @param string Símbolo a ser verificado
 * @returns boolean
 */
export const isRegularBrace = string => {
  return regularBraces.has(string);
};
