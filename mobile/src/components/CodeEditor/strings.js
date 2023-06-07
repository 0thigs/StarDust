import * as Indentation from './indentation';

/**
 * Converte os prefixos de tab para um número apropriado de espaços de uma dada string
 * @param str String raíz
 * @returns string
 */
export const convertTabsToSpaces = str => {
  return str.replace(/\t/g, Indentation.createIndentString());
};

/**
 * Inseri uma substring em uma string em uma posição específica
 * @param str Root string.
 * @param position Position to insert.
 * @param strToInsert String to be inserted.
 * @returns string
 */
export const insertStringAt = (str, position, strToInsert) => {
  return str.substring(0, position + 1) + strToInsert + str.substring(position + 1);
};
