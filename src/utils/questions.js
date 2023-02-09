export const questions = [
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
    type: 'open',
    stem: 'O nome que se dá para a representação informal de um algoritmo é',
    answer: 'Pseudocódigo',
  },
  {
    starId: 2,
    type: 'select-option',
    stem: 'Qual é a vantagem de se usar pseudocódigo?',
    options: [
      'Facilitar a compreensão de um algoritmo',
      'Melhorar a performance de um código',
      'Aumentar a segurança de um sistema',
      'Substituir a linguagem de programação',
    ],
    answer: 'Facilitar a compreensão de um algoritmo',
  },
  {
    starId: 2,
    type: 'select-option',
    stem: 'Para que o Portugol é utilizado?',
    options: [
      'Para programar sistemas operacionais',
      'Para descrever algoritmos',
      'Para programar jogos',
      'Para programar aplicativos mobile',
    ],
    answer: 'Para descrever algoritmos',
  },
  {
    starId: 2,
    type: 'checkbox',
    stem: 'Marque as opções que são consideradas linguagens de programação',
    options: ['Portugol', 'PHP', 'JavaScript', 'Python'],
    correctOptions: ['PHP', 'JavaScript', 'Python'],
  },
  {
    starId: 2,
    type: 'checkbox',
    stem: 'Marque as opções que são momentos nas quais é recomendável usar pseudocódigo',
    options: [
      'planejar um algoritmo',
      'aprender lógica de programação',
      'programar um sistema complexo',
      'detectar hackers',
    ],
    correctOptions: ['planejar o algoritmo antes de codificá-lo', 'aprender lógica de programação'],
  },
  {
    starId: 3,
    type: 'drag-and-drop-list',
    stem: 'Reordene os elementos (de cima pra baixo), de modo que fique coerente com os conceitos de entrada processamento e saída',
    items: [
      {
        id: 1,
        label: 'manipulação dos dados',
      },
      {
        id: 2,
        label: 'exibir os resultados',
      },
      {
        id: 3,
        label: 'armazenar os dados',
      },
    ],
    correctItemsIdsSequence: [3, 1, 2],
  },
  {
    starId: 3,
    type: 'select-option',
    stem: 'Em que momento ocorre a entrada de dados em um programa',
    options: [
      'Quando o programa é finalizado',
      'Antes do processamento de dados',
      'Durante o processamento de dados',
      'Depois do processamento de dados',
    ],
    answer: 'Antes do processamento de dados',
  },
  {
    starId: 3,
    type: 'drag-and-drop-list',
    stem: 'Reorganize o algoritmo, de modo que fique coerente com os conceitos de entrada processamento e saída',
    items: [
      {
        id: 1,
        label: 'LEIA idade',
      },
      {
        id: 2,
        label: 'idade <- 2022 - idade',
      },
      {
        id: 3,
        label: 'ESCREVA "A sua idade é: ", idade',
      },
    ],
    correctItemsIdsSequence: [1, 2, 3],
  },
  {
    starId: 3,
    type: 'open',
    stem: 'Complete a frase: a etapa na qual é exibido as informações de um programa é ______ de dados',
    answer: 'Saída',
  },
  {
    starId: 3,
    type: 'select-option',
    stem: 'Dentre os comandos abaixo que pode ser usado para saída de dados é',
    options: ['ESCREVA', 'LEIA', 'FACA', 'CORRA'],
    answer: 'ESCREVA',
  },
//   {
//     starId: 4,
//     type: 'select-option',
//     stem: 'Qual das alternativas a seguir representa uma atribuição de variável correta no Portugol?',
//     options: [
//       'nome_da_variavel <- valor',
//       'nome_da_variavel = valor',
//       'nome_da_variavel > valor',
//       'nome_da_variavel == valor',
//     ],
//     answer: 'nome_da_variavel <- valor',
//   },
//   {
//     starId: 4,
//     type: 'checkbox',
//     stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
//     options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
//     correctOptions: ['_idade', 'peso em kg'],
//   },
  {
    starId: 4,
    type: 'drag-and-drop-click',
    stem: 'Clique nos elementos abaixo para completar o algoritmo',
    lines: [
      {
        id: 1,
        texts: ['variavel_qualquer', 'dropZone'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'ESCREVA',
      },
      {
        id: 2,
        label: '"John Petros"',
      },
      {
        id: 3,
        label: 'Portugol',
      },
    ],
    correctItemsIdsSequence: [3, 2, 1],
  },
];
