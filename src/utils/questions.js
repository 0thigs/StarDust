export const questions = [
  {
    starId: 1,
    type: 'drag-and-drop-click',
    stem: 'Clique nos elementos abaixo para completar o algoritmo',
    lines: [
      {
        id: 1,
        text: 'if (5 > 2) {',
        indentLevel: 0,
      },
      {
        id: 2,
        text: 'num1 <- ',
        indentLevel: 2,
        dropZone: {
          id: 1,
          isEndLine: true,
        },
      },
      {
        id: 3,
        text: 'numero2 <- ',
        indentLevel: 2,
        dropZone: {
          id: 2,
          isEndLine: false,
        },
      },
      {
        id: 4,
        text: 'num3 <- ',
        indentLevel: 2,
        dropZone: {
          id: 3,
          isEndLine: true,
        },
      },
      {
        id: 5,
        text: '}',
        indentLevel: 1,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '10',
      },
      {
        id: 2,
        label: '20000000000',
      },
      {
        id: 3,
        label: '3000',
      },
    ],
    correctItemsIdsSequence: [3, 2, 1],
  },
  {
    starId: 1,
    type: 'select-option',
    stem: 'Dentro das opções que não se enquadra na formação de algoritmos é',
    options: ['raciocínio lógico', 'aleatoriedade', 'análise crítica', 'encadeamento de passos'],
    answer: 'aleatoriedade',
  },
  {
    starId: 1,
    type: 'open',
    stem: 'O nome que se dá a uma sequencia lógica de instruções é',
    answer: 'algoritmo',
  },
  {
    starId: 1,
    type: 'select-option',
    stem: 'O que é lógica de programação?',
    options: [
      'sequência lógica de instruções',
      'fazer programa',
      'maneira de pensar um algoritmo',
      'criar problemas computacionais',
    ],
    answer: 'sequência lógica de instruções',
  },
  {
    starId: 1,
    type: 'drag-and-drop-list',
    stem: 'Segure e arraste cada elemento, de modo que fique logicamente correto',
    items: [
      {
        id: 1,
        label: 'mascar o chiclete',
      },
      {
        id: 2,
        label: 'retirar embalagem do chiclete',
      },
      {
        id: 3,
        label: 'jogar o chiclete no lixo',
      },
      {
        id: 4,
        label: 'colocar chiclete na boca',
      },
    ],
    correctItemsIdsSequence: [2, 4, 1, 3],
  },
  {
    starId: 1,
    type: 'drag-and-drop-list',
    stem: 'Segure e arraste cada elemento, de modo que fique logicamente correto',
    items: [
      {
        id: 1,
        label: 'ir para o trabalho',
      },
      {
        id: 2,
        label: 'tomar banho',
      },
      {
        id: 3,
        label: 'acordar',
      },
      {
        id: 4,
        label: 'tomar café',
      },
      {
        id: 5,
        label: 'tirar o carro da garagem',
      },
    ],
    correctItemsIdsSequence: [3, 2, 4, 5, 1],
  },
  {
    starId: 2,
    type: 'select-option',
    stem: 'Qual das opções não é uma linguagem de programação?',
    options: ['Java', 'PHP', 'Python', 'Pseudocódigo'],
    answer: 'Pseudocódigo',
  },
  {
    starId: 2,
    type: 'select-option',
    stem: 'Qual das opções pode ser considerada uma técnica para construção de algoritmos?',
    options: ['raciocínio lógico', 'aleatoriedade', 'análise crítica', 'encadeamento de passos'],
    answer: 'aleatoriedade',
  },
  {
    starId: 2,
    type: 'select-option',
    stem: 'Qual das opções abaixo melhor define um programa de computador?',
    options: [
      'Instruções para dispositivos eletrônicos',
      'Ferramentas de edição de texto',
      'Instruções para o computador',
      'Arquivos de armazenamento',
    ],
    answer: 'Instruções para o computador',
  },
];
