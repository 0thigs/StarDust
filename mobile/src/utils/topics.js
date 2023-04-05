export const topics = [
  {
    title: 'Básico',
    texts: [
      {
        type: 'default',
        title: 'Variáveis',
        body: 'Variáveis são as primeiras estruturas de dados que todo programador aprende. São caracterizadas por ter um nome e armazenar um valor em memória.',
      },
      {
        type: 'default',
        title: 'Variáveis',
        body: 'São declaradas com var.',
      },
      {
        type: 'code',
        body: `var variavel = "1"; // Aqui declaro uma variável chamada "variável", um texto, cujo valor é "1".`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Variáveis',
        body: 'Variáveis podem ter seus valores alterados a qualquer momento do código.',
      },
      {
        type: 'code',
        body: `
var a = "1";
a = "2";
escreva(a); // escreve 2 na saída.`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Entrada e Saída',
        body: 'Existem duas funções nativas para entrada e saída de dados:',
      },
      {
        type: 'list',
        body: 'escreva(): usado para escrever uma variável ou literal na saída-padrão;',
      },
      {
        type: 'list',
        body: 'leia(): usado para ler uma variável na entrada-padrão.',
      },
      {
        type: 'default',
        title: 'escreva()',
        body: 'A função escreva() pode aceitar N valores',
      },
      {
        type: 'code',
        body: `
escreva(1) // Escreverá 1
var a = 'Texto'
escreva(a) // Escreverá 'Texto'
escreva(a, 1, 2, 3) // Escreverá 'Texto' 1 2 3`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'leia()',
        body: 'Para ler dados da entrada do usuário, você pode usar a função leia(), que aceita 0 ou 1 valores.',
      },
      {
        type: 'code',
        body: `
var teste = leia()
escreva('Resultado: ' + teste)`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Tipos de dados',
    texts: [
      {
        type: 'default',
        title: 'Texto',
        body: 'Variáveis do tipo texto são expressas com aspas duplas ("") ou aspas simples (\'\')',
      },
      {
        type: 'code',
        body: `
var texto = "abc";
var texto2 = 'abc';`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Interpolação de texto',
        body: 'Quando um texto possui em seu conteúdo algo como ${minha_variavel}, e se minha_variável foi definida anteriormente, o novo texto terá o valor de minha_variavel.',
      },
      {
        type: 'code',
        body: `
var minha_variavel = "Strogonoff"
escreva("Eu gosto de \${minha_variavel}") // Escreverá "Eu gosto de Strogonoff"`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Números',
        body: 'Números são inteiros ou de ponto flutuante (com parte decimal). Por padrão, todos os números são armazenados como ponto flutuante.',
      },
      {
        type: 'code',
        body: `
var numeroInteiro = 3;

var numeroFlutuante = 8.5;`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Lógicos',
        body: 'Tipo de variável que pode conter apenas dois valores: verdadeiro ou falso.',
      },
      {
        type: 'code',
        body: `
var variavel1 = verdadeiro;
var variavel0 = falso;`,
        isRunnable: false,
      },
    ],
  },
];
