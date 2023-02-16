export const questions = [
  {
    starId: 1,
    type: 'selection',
    stem: 'Dentro das opções que não se enquadra na hora de criar um algoritmo é',
    options: ['raciocínio lógico', 'aleatoriedade', 'análise', 'encadeamento de passos'],
    answer: 'aleatoriedade',
  },
  {
    starId: 1,
    type: 'open',
    stem: 'O nome que se pode dar a uma sequencia lógica de instruções qualquer é',
    answer: 'algoritmo',
  },
  {
    starId: 1,
    type: 'selection',
    stem: 'O que é lógica de programação?',
    options: [
      'sequência lógica de instruções',
      'fazer programa',
      'uma linguagem de programação',
      'algoritmo sofisticado',
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
        label: 'jogar o chiclete fora',
      },
      {
        id: 4,
        label: 'colocar chiclete na boca',
      },
    ],
  },
  {
    starId: 2,
    type: 'drag-and-drop-list',
    stem: 'Segure e arraste cada elemento, de modo que fique logicamente correto',
    items: [
      {
        id: 1,
        label: 'acordar',
      },
      {
        id: 2,
        label: 'vestir-se',
      },
      {
        id: 3,
        label: 'tirar o carro da garagem',
      },
      {
        id: 4,
        label: 'ir para o trabalho',
      },
    ],
  },
  {
    starId: 2,
    type: 'open',
    stem: 'O nome que se dá para a representação informal de um algoritmo é',
    answer: 'Pseudocódigo',
  },
  {
    starId: 2,
    type: 'selection',
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
    type: 'selection',
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
        label: 'armazenar os dados',
      },
      {
        id: 2,
        label: 'manipulação dos dados',
      },
      {
        id: 3,
        label: 'exibir os resultados',
      },
    ],
  },
  {
    starId: 3,
    type: 'selection',
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
  },
  {
    starId: 3,
    type: 'open',
    stem: 'Complete a frase: a etapa na qual é exibido as informações de um programa é ______ de dados',
    answer: 'Saída',
  },
  {
    starId: 3,
    type: 'selection',
    stem: 'Dentre os comandos abaixo que pode ser usado para saída de dados é',
    options: ['ESCREVA', 'LEIA', 'FACA', 'CORRA'],
    answer: 'ESCREVA',
  },
  {
    starId: 4,
    type: 'selection',
    stem: 'Qual das alternativas a seguir representa uma atribuição de variável correta no Portugol?',
    options: [
      'nome_da_variavel <- valor',
      'nome_da_variavel = valor',
      'nome_da_variavel > valor',
      'nome_da_variavel == valor',
    ],
    answer: 'nome_da_variavel <- valor',
  },
  {
    starId: 4,
    type: 'checkbox',
    stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
    options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
    correctOptions: ['_idade', 'altura_em_cm'],
  },
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
    correctItemsIdsSequence: [2],
  },
  {
    starId: 4,
    type: 'drag-and-drop-list',
    stem: 'Organize o código na ordem como ele deve ser lido (de cima para baixo)',
    items: [
      {
        id: 1,
        label: 'var altura: inteiro',
      },
      {
        id: 2,
        label: 'inicio',
      },
      {
        id: 3,
        label: 'escreva ("Entre com sua altura: ")',
      },
      {
        id: 4,
        label: 'leia (altura)',
      },
      {
        id: 5,
        label: 'escreva ("Sua altura é: ", altura)',
      },
      {
        id: 6,
        label: 'fimalgoritmo',
      },
    ],
  },
  {
    starId: 4,
    type: 'open',
    stem: 'O nome do comando para declarar variáveis é',
    answer: 'VAR',
  },
  {
    starId: 5,
    type: 'open',
    stem: 'Um nome em inglês que se pode dar para valores do tipo caracter é ',
    answer: 'string',
  },
  {
    starId: 5,
    type: 'open',
    stem: 'O nome do tipo para declarar valores que são texto é',
    answer: 'caractere',
  },
  {
    starId: 5,
    type: 'checkbox',
    stem: 'quais dos itens abaixo pode ser um tipo de text válido',
    options: ['letra', '"não é uma string"', '"100"', '2.5'],
    correctOptions: ['"não é uma string"', 'altura_em_cm'],
  },
  {
    starId: 5,
    type: 'selection',
    stem: 'Como declarar uma variável do tipo texto?',
    options: [
      'var nome : inteiro',
      'var nome : caractere',
      'var nome : real',
      'var nome : logico',
    ],
    answer: 'var nome : caractere',
  },
  {
    starId: 5,
    type: 'drag-and-drop-click',
    stem: 'Clique nos valores para completar as variáveis corretamente',
    lines: [
      {
        id: 1,
        texts: ['var'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['fruta: ', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['inicio'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['fruta <- ', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 5,
        texts: ['fimalgoritmo'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '"maçã"',
      },
      {
        id: 2,
        label: 'caractere',
      },
      {
        id: 3,
        label: 'inteiro',
      },
    ],
    correctItemsIdsSequence: [2, 1],
  },
  {
    starId: 6,
    type: 'open',
    stem: 'Qual o nome do tipo mais apropriado para 3.3333?',
    answer: 'real',
  },
  {
    starId: 6,
    type: 'checkbox',
    stem: 'Quais dos seguintes tipos de dados podem ser usados para armazenar números',
    options: ['Inteiro', 'Real', 'Texto', 'Boolean'],
    correctOptions: ['Inteiro', 'Real'],
  },
  {
    starId: 6,
    type: 'checkbox',
    stem: 'Quais dos valores abaixo pode ser um tipo inteiro?',
    options: ['"10"', '10', '2.5', '-10'],
    correctOptions: ['10', '-10'],
  },
  {
    starId: 6,
    type: 'selection',
    stem: 'Qual será o tipo do resultado da expressão 5 / 2',
    options: ['inteiro', '2.5', 'real', 'caractere'],
    answer: 'real',
  },
  {
    starId: 6,
    type: 'drag-and-drop-click',
    stem: 'Clique nos tipos para que o algoritmo esteja correto',
    lines: [
      {
        id: 1,
        texts: ['var'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['peso: ', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 4,
        texts: ['altura: ', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 5,
        texts: ['inicio'],
        indentLevel: 0,
      },
      {
        id: 6,
        texts: ['Escreva("Peso (Kg): ")'],
        indentLevel: 1,
      },
      {
        id: 7,
        texts: ['Leia(peso)'],
        indentLevel: 1,
      },
      {
        id: 8,
        texts: ['Escreva("Altura (cm): ")'],
        indentLevel: 1,
      },
      {
        id: 9,
        texts: ['Leia(altura)'],
        indentLevel: 1,
      },
      {
        id: 12,
        texts: ['Escreva("Eu peso ", peso ", kilos")'],
        indentLevel: 1,
      },
      {
        id: 13,
        texts: ['Escreva("Eu meço ", altura ", centímetros")'],
        indentLevel: 1,
      },
      {
        id: 15,
        texts: ['Fimalgoritmo'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'Inteiro',
      },
      {
        id: 2,
        label: 'Real',
      },
      {
        id: 3,
        label: 'Lógico',
      },
      {
        id: 4,
        label: 'Caractere',
      },
    ],
    correctItemsIdsSequence: [2, 1],
  },
];
