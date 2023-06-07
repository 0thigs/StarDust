import * as Braces from './braces';

export const INDENT_SIZE = 2; // Ideal para telas menores
export const INDENT_SYMBOL = ' '; // Espaço de um tab

/**
 * Retorna o tamanho da identação size uma dada linha de código.
 * @param line linha de código
 * @returns número.
 */
export const getIndentSize = (line) => {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== INDENT_SYMBOL) {
            const trimmed = line.trimEnd();
            const lastChar = trimmed.substring(trimmed.length - 1);
            // Identação extra se dentro de um colchetes
            // Inclues colon for python.
            // Inclui vírgula se for código python
            const addedIndent =
                Braces.isOpenBrace(lastChar, true) || lastChar === ':' ? INDENT_SIZE : 0;
            return i + addedIndent;
        }
    }
    return 0;
};

/**
 * Analyses the lines of code (from end to start) and finds
 * Analiza as linhas do código (do fim ao começo) e encontra
 * o melhor tamanho de identação para a nova linha 
 * @param lines A linhas de código a serem analisadas
 * @returns number
 */
export const getSuggestedIndentSize = (lines) => {
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim().length > 0) {
            return getIndentSize(lines[i]);
        }
    }
    return 0;
};

/**
 * Cria uma nova string de identação de um dado tamanho
 * O tamanho pré-definido de identação é usado por padrão
 * @param indentSize Tamanho opcional de identação
 * @returns string
 */
export const createIndentString = (indentSize = INDENT_SIZE) => {
    let string = '';
    for (let i = 0; i < indentSize; i++) {
        string += INDENT_SYMBOL;
    }
    return string;
};
