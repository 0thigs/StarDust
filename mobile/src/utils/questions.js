export const questions = [
  {
    starId: 1,
    type: 'selection',
    stem: 'Dentro das opções que NÃO se enquadra na hora de fazer um algoritmo é',
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
    stem: 'O que é lógica de programação mesmo?',
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
    stem: 'Ordene a sequência correta de se vestir um traje espacial (Pressione e segure item)',
    items: [
      {
        id: 1,
        label: 'retirar o traje do compartimento',
      },
      {
        id: 2,
        label: 'abrir zíper do traje',
      },
      {
        id: 3,
        label: 'colocar o traje',
      },
      {
        id: 4,
        label: 'fechar o zíper do traje',
      },
    ],
  },
  {
    starId: 1,
    type: 'drag-and-drop-list',
    stem: 'Ordene a sequência correta de se ligar um foguete (Pressione e segure item)',
    items: [
      {
        id: 1,
        label: 'ir para o painel de controle',
      },
      {
        id: 2,
        label: 'encontrar o botão de ligar',
      },
      {
        id: 3,
        label: 'pressionar o botão',
      },
      {
        id: 4,
        label: 'esperar o foguete decolar',
      },
    ],
  },
  {
    starId: 2,
    type: 'open',
    stem: 'O nome do comando para um programa receber informações é',
    answer: 'leia',
  },
  {
    starId: 2,
    type: 'selection',
    stem: 'Como com que um programa escreva "que horas são?"',
    options: [
      'escreva(que horas são)',
      'imprima("que horas são")',
      'escreva("que horas são")',
      'escreva("14:52am")',
    ],
    answer: 'escreva("que horas são")',
  },
  {
    starId: 2,
    type: 'drag-and-drop-list',
    stem: 'Reordene o programa para que ele exiba a atual quantidade de sumprimentos',
    items: [
      {
        id: 1,
        label: 'var quantidade',
      },
      {
        id: 2,
        label: 'quantidade = leia()',
      },
      {
        id: 3,
        label: 'escreva(quantidade)',
      },
    ],
  },
  {
    starId: 2,
    type: 'drag-and-drop-click',
    stem: 'Clique nos elementos abaixo para completar o programa',
    lines: [
      {
        id: 1,
        texts: ['var nomeDoFoguete = ', 'dropZone'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone', '(nomeDoFoguete)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'receba',
      },
      {
        id: 2,
        label: 'escreva',
      },
      {
        id: 3,
        label: 'leia( )',
      },
      {
        id: 4,
        label: 'leia',
      },
    ],
    correctItemsIdsSequence: [3, 2],
  },
  {
    starId: 2,
    type: 'open',
    stem: 'O nome do comando para um programa mostrar informações é',
    answer: 'escreva',
  },
  {
    starId: 3,
    type: 'selection',
    stem: 'Qual das alternativas a seguir representa uma atribuição de variável correta?',
    options: [
      'nomeDaVariavel <- valor',
      'nomeDaVariavel = valor',
      'nomeDavariavel < valor',
      'nomeDavariavel == valor',
    ],
    answer: 'nomeDaVariavel = valor',
  },
  {
    starId: 3,
    type: 'checkbox',
    stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
    options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
    correctOptions: ['_idade', 'altura_em_cm'],
  },
  {
    starId: 3,
    type: 'drag-and-drop-click',
    stem: 'Clique nos elementos abaixo para completar o algoritmo',
    lines: [
      {
        id: 1,
        texts: ['variavel_aleatoria = ', 'dropZone'],
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
        label: '3Delegua',
      },
    ],
    correctItemsIdsSequence: [2],
  },
  {
    starId: 3,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código?',
    code: `
var nomePlaneta = "0thigs"
var nome = "Datahon"
nomePlaneta = nome

escreva("planeta encontrado: ", nomePlaneta)`,
    options: [
      'planeta encontrado: Datahon',
      'planeta encontrado: 0thigs',
      'planeta encontrado: nomePlaneta',
      'planeta encontrado: "Datanhon"',
    ],
    answer: 'planeta encontrado: Datahon',
  },
  {
    starId: 3,
    type: 'open',
    stem: 'O nome do comando para declarar variáveis é',
    answer: 'var',
  },
  //   {
  //     starId: 5,
  //     type: 'open',
  //     stem: 'O nome que se dá para o ato de juntar textos em um programa é',
  //     answer: 'concatenação',
  //   },
  //   {
  //     starId: 5,
  //     type: 'checkbox',
  //     stem: 'quais dos valores abaixo pode ser um tipo de texto válido',
  //     options: ['letra', '"não é um texto"', '"100"', '2.5'],
  //     correctOptions: ['"não é um texto"', '"100"'],
  //   },
  //   {
  //     starId: 5,
  //     type: 'selection',
  //     stem: 'Qual será a saída do seguinte código',
  //     code: `
  //     var cor = "vermelho"
  //     var nome = "Datahon"
  //     var nome = "Planeta " + nome

  //     escreva(nome, " tem a cor ", cor)`,
  //     options: [
  //       'Planeta Datahon tem a cor vermelha',
  //       'Planeta Datahon tem a cor azul',
  //       'Datahon tem a cor vermelha',
  //       'Planeta tem a cor vermelha',
  //     ],
  //     answer: 'Planeta Datahon tem a cor vermelha',
  //   },
  {
    starId: 5,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que ele escreva a data correta',
    lines: [
      {
        id: 1,
        texts: ['var ', 'dropZone', '= "01/03/2023"'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva("mensagem enviada em "', 'dropZone', '" obrigado)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '"data"',
      },
      {
        id: 2,
        label: '+ data +',
      },
      {
        id: 3,
        label: '- data -',
      },
      {
        id: 4,
        label: 'data',
      },
    ],
    correctItemsIdsSequence: [4, 2],
  },
  {
    starId: 6,
    type: 'drag-and-drop-click',
    stem: 'Concatene os textos da maneira apropriada',
    lines: [
      {
        id: 1,
        texts: ['var mensagem = "Olá, mundo!"'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva(`a mensagem ', 'dropZone', ' não foi entendida`)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'mensagem',
      },
      {
        id: 2,
        label: '+ mensagem +',
      },
      {
        id: 3,
        label: '${mensagem}',
      },
      {
        id: 4,
        label: "'Olá, mundo!'",
      },
    ],
    correctItemsIdsSequence: [3],
  },
  {
    starId: 6,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que combustivel total seja igual 75',
    lines: [
      {
        id: 1,
        texts: ['var combustivelAtual = 25'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var combustivelTotal = combustivelAtual ', 'dropZone'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(`o foguete tem  ${combustivelTotal} de combustível no total'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '- 50',
      },
      {
        id: 2,
        label: '+ "50"',
      },
      {
        id: 3,
        label: '+ 50',
      },
      {
        id: 4,
        label: '75',
      },
    ],
    correctItemsIdsSequence: [3],
  },
//   {
//     starId: 6,
//     type: 'checkbox',
//     stem: 'Quais dos seguintes tipos de dados podem ser usados para armazenar números',
//     options: ['Inteiro', 'Real', 'Texto', 'Lógico'],
//     correctOptions: ['Inteiro', 'Real'],
//   },
//   {
//     starId: 6,
//     type: 'checkbox',
//     stem: 'Quais dos valores abaixo pode ser um tipo inteiro?',
//     options: ['"10"', '10', '2.5', '-10'],
//     correctOptions: ['10', '-10'],
//   },
//   {
//     starId: 6,
//     type: 'selection',
//     stem: 'Qual será o tipo do resultado de 5 ÷ 2',
//     options: ['inteiro', '2.5', 'real', 'texto'],
//     answer: 'real',
//   },
//   {
//     starId: 6,
//     type: 'selection',
//     stem: 'Qual será o valor de distancia do seguinte código',
//     code: `var distancia = 2500 + "1000"
// var mensagem =  "A nave está a " + distancia + " anos-luz da Terra."
// escreva(mensagem)`,
//     options: ['3500', '25001000', '25002000', '35000000'],
//     answer: '25001000',
//   },
  {
    starId: 7,
    type: 'open',
    stem: 'Qual seria o valor lógico para a pergunta "10 é maior que 5?"',
    answer: 'verdadeiro',
  },
  {
    starId: 7,
    type: 'selection',
    stem: 'Qual o valor padrão de uma variável do tipo lógico',
    options: ['falso', 'verdadeiro', 'nulo', 'falso e nulo'],
    answer: 'falso',
  },
  {
    starId: 7,
    type: 'checkbox',
    stem: 'Quais os valores possíveis para uma variável do tipo lógico',
    options: ['falso', 'verdadeiro', 'nulo', '"verdadeiro"'],
    correctOptions: ['falso', 'verdadeiro'],
  },
  {
    starId: 7,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código?',
    code: `
var
  vaga: logico  
inicio
    vaga <- verdadeiro
    vaga <- falso

    escreva("Tem vaga hoje? ")
    escreva(vaga)
fimalgoritmo
    `,
    options: ['Tem vaga hoje? falso', 'Tem vaga hoje? verdadeiro', 'falso', 'verdadeiro'],
    answer: 'Tem vaga hoje? falso',
  },
  {
    starId: 7,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que a resposta seja coerente com a afirmação',
    lines: [
      {
        id: 1,
        texts: ['var resposta = ', 'dropZone'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva("A terra é plana e não redonda: ")'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva( ', 'dropZone', ' )'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'verdadeiro',
      },
      {
        id: 2,
        label: 'falso',
      },
      {
        id: 3,
        label: 'nulo',
      },
      {
        id: 4,
        label: 'resposta',
      },
    ],
    correctItemsIdsSequence: [2, 4],
  },
];
