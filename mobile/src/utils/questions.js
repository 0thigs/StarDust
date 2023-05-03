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
    type: 'selection',
    stem: 'Como fazer que um programa escreva "que horas são?"',
    options: [
      'escreva(que horas são)',
      'imprima("que horas são")',
      'escreva("que horas são")',
      'escreva("14:52am")',
    ],
    answer: 'escreva("que horas são")',
  },
  {
    starId: 3,
    type: 'checkbox',
    stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
    options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
    correctOptions: ['_idade', 'altura_em_cm'],
  },
  {
    starId: 2,
    type: 'open',
    stem: 'O nome do comando para um programa receber informações é',
    answer: 'leia',
  },
  //   {
  //     starId: 2,
  //     type: 'drag-and-drop-list',
  //     stem: 'Reordene o programa para que ele exiba a atual quantidade de sumprimentos',
  //     items: [
  //       {
  //         id: 1,
  //         label: 'var quantidade',
  //       },
  //       {
  //         id: 2,
  //         label: 'quantidade = leia()',
  //       },
  //       {
  //         id: 3,
  //         label: 'escreva(quantidade)',
  //       },
  //     ],
  //   },
  {
    starId: 11,
    type: 'drag-and-drop-list',
    stem: 'Reordene o programa para que ele fique na ordem correta',
    items: [
      {
        id: 1,
        label: 'var planeta = verdadeiro',
      },
      {
        id: 2,
        label: 'se (planeta) {',
      },
      {
        id: 3,
        label: '    escreva("De fato se trata de um planeta")',
      },
      {
        id: 4,
        label: '}',
      },
    ],
  },
  {
    starId: 11,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['se ( ', 'dropZone', ' ) {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva(verdadeiro);'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'falso',
      },
      {
        id: 2,
        label: '1 > 2',
      },
      {
        id: 3,
        label: '!falso',
      },
      {
        id: 4,
        label: '!verdadeiro',
      },
    ],
    correctItemsIdsSequence: [3],
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
  {
    starId: 5,
    type: 'open',
    stem: 'O nome que se dá para o ato de juntar textos em um programa é',
    answer: 'concatenação',
  },
  {
    starId: 5,
    type: 'checkbox',
    stem: 'quais dos valores abaixo pode ser um tipo de texto válido',
    options: ['letra', '"não é um texto"', '"100"', '2.5'],
    correctOptions: ['"não é um texto"', '"100"'],
  },
  {
    starId: 5,
    type: 'selection',
    stem: 'Qual será a saída do seguinte código',
    code: `
      var cor = "vermelho"
      var nome = "Datahon"
      var nome = "Planeta " + nome

      escreva(nome, " tem a cor ", cor)`,
    options: [
      'Planeta Datahon tem a cor vermelha',
      'Planeta Datahon tem a cor azul',
      'Datahon tem a cor vermelha',
      'Planeta tem a cor vermelha',
    ],
    answer: 'Planeta Datahon tem a cor vermelha',
  },
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
    starId: 5,
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
        texts: ['var combustivelTotal', 'dropZone', 'combustivelAtual ', 'dropZone'],
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
  {
    starId: 6,
    type: 'checkbox',
    stem: 'Quais dos seguintes tipos de dados podem ser usados para armazenar números',
    options: ['Inteiro', 'Real', 'Texto', 'Lógico'],
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
    stem: 'Qual será o tipo do resultado de 5 ÷ 2',
    options: ['inteiro', '2.5', 'real', 'texto'],
    answer: 'real',
  },
  {
    starId: 6,
    type: 'selection',
    stem: 'Qual será o valor de distancia do seguinte código',
    code: `var distancia = 2500 + "1000"
var mensagem =  "A nave está a " + distancia + " anos-luz da Terra."
escreva(mensagem)`,
    options: ['3500', '25001000', '25002000', '35000000'],
    answer: '25001000',
  },
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
  {
    starId: 8,
    type: 'checkbox',
    stem: 'Marque as opções que são operadores válidos para um programa',
    options: ['/', '+', '÷', 'x'],
    correctOptions: ['/', '+'],
  },
  {
    starId: 8,
    type: 'selection',
    stem: 'Qual será o resultado de 5 + 3 * 2?',
    options: ['11', '16', '13', '15'],
    answer: '11',
  },
  {
    starId: 8,
    type: 'selection',
    stem: 'Qual será o resultado de 50 % 2?',
    options: ['0', '25', '1', '100'],
    answer: '0',
  },
  {
    starId: 8,
    type: 'drag-and-drop-click',
    stem: 'Complete a linha com os operadores para que o resultado seja igual a 20',
    lines: [
      {
        id: 1,
        texts: ['5 ', 'dropZone', ' 2 ', 'dropZone', ' 4', ' = 13'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '/',
      },
      {
        id: 2,
        label: '+',
      },
      {
        id: 3,
        label: '*',
      },
      {
        id: 4,
        label: 'x',
      },
      {
        id: 5,
        label: '-',
      },
    ],
    correctItemsIdsSequence: [2, 3],
  },
  {
    starId: 8,
    type: 'drag-and-drop-click',
    stem: 'Complete a linha com os operadores para que o resultado seja igual a 20',
    lines: [
      {
        id: 1,
        texts: ['dropZone', ' + ', 'dropZone', ' / ', '2', ' = 10'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '4',
      },
      {
        id: 2,
        label: '12',
      },
      {
        id: 3,
        label: '6',
      },
      {
        id: 4,
        label: '-4',
      },
      {
        id: 5,
        label: '10',
      },
    ],
    correctItemsIdsSequence: [1, 2],
  },
  {
    starId: 9,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código:',
    code: `
var altitudeAtual = 2000;
var altitudeSegura = 1500;

var altitudeSegura = altitudeSegura + 500
escreva(altitudeSegura < altitudeAtual)
    `,
    options: ['falso', 'verdadeiro', '1500', '2000'],
    answer: 'falso',
  },
  {
    starId: 9,
    type: 'open',
    stem: 'Qual símbolo você usuaria para verificar se 9 é maior ou igual a 7?',
    answer: '>=',
  },
  {
    starId: 9,
    type: 'selection',
    stem: 'Qual o tipo de dado que se obtém ao usar operadores relacionais?',
    options: ['falso', 'verdadeiro', 'lógico', 'texto'],
    answer: 'lógico',
  },
  {
    starId: 9,
    type: 'drag-and-drop-click',
    stem: 'Complete a linha com os operadores para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['var velocidadeLimite = 5000'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var velocidadeAtual ', 'dropZone', ' 2000'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva (', 'velocidadeLimite ', 'dropZone', ' velocidadeAtual)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '=',
      },
      {
        id: 2,
        label: '!=',
      },
      {
        id: 3,
        label: '==',
      },
      {
        id: 4,
        label: '<',
      },
    ],
    correctItemsIdsSequence: [1, 2],
  },
  {
    starId: 9,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['var combustivelAtual = ', 'dropZone', ';'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var combustivelNecessario = ', 'dropZone', ';'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva (combustivelAtual <= combustivelNecessario);'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '250',
      },
      {
        id: 2,
        label: '300',
      },
      {
        id: 3,
        label: 'verdadeiro',
      },
      {
        id: 4,
        label: '<',
      },
    ],
    correctItemsIdsSequence: [1, 2],
  },
  {
    starId: 10,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código? (Se for muito grande, você pode scrollar o código para baixo):',
    code: `var atmosfera = 7000;
var altituteAtual = 4000;
var fogueteDecolou = verdadeiro;
var saiuDoPlaneta = altituteAtual > atmosfera e fogueteDecolou
escreva(saiuDoPlaneta)
    `,
    options: ['falso', 'verdadeiro', '11000', 'lógico'],
    answer: 'falso',
  },
  {
    starId: 10,
    type: 'drag-and-drop-click',
    stem: 'Complete a linha com os operadores para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['var temOxigenio = verdadeiro;'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var temComida = falso;'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva (', 'temOxigenio ', 'dropZone', ' temComida)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'e',
      },
      {
        id: 2,
        label: '!',
      },
      {
        id: 3,
        label: 'ou',
      },
    ],
    correctItemsIdsSequence: [3],
  },
  {
    starId: 10,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['var acimaVelocidadeLuz = ', 'dropZone', ' < 3600;'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var fogueteTemResistencia = ', 'dropZone', ';'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['var seguranca = acimaVelocidadeLuz e fogueteTemResistencia'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '1200',
      },
      {
        id: 2,
        label: 'verdadeiro',
      },
      {
        id: 3,
        label: 'falso',
      },
      {
        id: 4,
        label: '3700',
      },
    ],
    correctItemsIdsSequence: [4, 2],
  },
  {
    starId: 10,
    type: 'open',
    stem: 'Qual o símbolo usado para inverter valores lógicos?',
    answer: '!',
  },
  {
    starId: 10,
    type: 'checkbox',
    stem: 'Marque as opções que são operadores lógicos',
    options: ['>', 'e', '!', 'ou'],
    correctOptions: ['e', '!', 'ou'],
  },
  {
    starId: 11,
    type: 'drag-and-drop-list',
    stem: 'Reordene o programa para que ele fique na ordem correta',
    items: [
      {
        id: 1,
        label: 'var planeta = verdadeiro',
      },
      {
        id: 2,
        label: 'se (planeta) {',
      },
      {
        id: 3,
        label: '    escreva("De fato se trata de um planeta")',
      },
      {
        id: 4,
        label: '}',
      },
    ],
  },
  {
    starId: 11,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código:',
    code: `var planetaCor = "bege";
var temAtmosferaBoa = 2022 > 2023;

se (temAtmosferaBoa) {
     planetaCor = "marrom";
}
escreva(planetaCor);
    `,
    options: ['bege', 'marrom', 'preto', 'indefinido'],
    answer: 'bege',
  },
  {
    starId: 11,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a "planeta grande"',
    lines: [
      {
        id: 1,
        texts: ['var planetaDiametro = 1800'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['se (planetaDiametro ', 'dropZone', ' 15000) {'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['escreva("planeta ', 'dropZone', ' ");'],
        indentLevel: 1,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '>',
      },
      {
        id: 2,
        label: '<=',
      },
      {
        id: 3,
        label: 'pequeno',
      },
      {
        id: 4,
        label: 'grande',
      },
    ],
    correctItemsIdsSequence: [1, 4],
  },
  {
    starId: 11,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a VERDADEIRO',
    lines: [
      {
        id: 1,
        texts: ['se ( ', 'dropZone', ' ) {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva(verdadeiro);'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'falso',
      },
      {
        id: 2,
        label: '1 > 2',
      },
      {
        id: 3,
        label: '!falso',
      },
      {
        id: 4,
        label: '!verdadeiro',
      },
    ],
    correctItemsIdsSequence: [3],
  },
  {
    starId: 11,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código:',
    code: `var planetaPopulacao = 1000 * 1000;
var temAtmosferaBoa = 2022 > 2023;
var status = "pouca gente";

se (planetaPopulacao > 1000) {
    var status = "muita gente"
}
escreva(status);
    `,
    options: ['pouca gente', 'muita gente', 'gente', 'indefinido'],
    answer: 'pouca gente',
  },
  {
    starId: 12,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o resultado seja igual a "planeta rico"',
    lines: [
      {
        id: 1,
        texts: ['var dinheiro = ', '2500 * 4'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['se (dinheiro > 10000) {'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(', 'dropZone', ')'],
        indentLevel: 1,
      },
      {
        id: 4,
        texts: ['} senao {'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: ['escreva( ', 'dropZone', ' )'],
        indentLevel: 1,
      },
      {
        id: 6,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'planeta rico',
      },
      {
        id: 2,
        label: 'planeta pobre',
      },
    ],
    correctItemsIdsSequence: [2, 1],
  },
  {
    starId: 12,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que seja possível formar um sistema solar',
    lines: [
      {
        id: 0,
        texts: ['var planetas = ', '8'],
        indentLevel: 0,
      },
      {
        id: 1,
        texts: ['var temSol = ', 'verdadeiro'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['se ('],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['temSol ', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 4,
        texts: ['planetas >', 'dropZone'],
        indentLevel: 1,
      },
      {
        id: 5,
        texts: [')'],
        indentLevel: 1,
      },
      {
        id: 6,
        texts: ['escreva("É possível formar um sistema solar")'],
        indentLevel: 1,
      },
      {
        id: 7,
        texts: ['} senao {'],
        indentLevel: 0,
      },
      {
        id: 8,
        texts: ['escreva("Não é possível formar um sistema solar")'],
        indentLevel: 1,
      },
      {
        id: 9,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'ou',
      },
      {
        id: 2,
        label: 'e',
      },
      {
        id: 3,
        label: '0',
      },
      {
        id: 4,
        label: '-8',
      },
    ],
    correctItemsIdsSequence: [2, 3],
  },
  {
    starId: 12,
    type: 'drag-and-drop-list',
    stem: 'Reordene o programa para que o resultado seja menor que 10',
    items: [
      {
        id: 1,
        label: 'var energiaNegativa = 10',
      },
      {
        id: 2,
        label: 'se (verdadeiro) {',
      },
      {
        id: 3,
        label: 'energiaNegativa -= 5',
      },
      {
        id: 4,
        label: '} senao {',
      },
      {
        id: 5,
        label: 'energiaNegativa += 5',
      },
      {
        id: 6,
        label: '}',
      },
    ],
  },
  {
    starId: 12,
    type: 'checkbox',
    stem: 'Quais as opções válidas para a variável radiacao para que o resultado seja "Seguro"?',
    code: `var radiacao = ?
se (radiacao > 500) {
  escreva("Não seguro");
} senao {
   escreva("Seguro");
}`,
    options: ['100', '200', '600', '700'],
    correctOptions: ['100', '200'],
  },
  {
    starId: 12,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que a variavel qualOSentidoDaVida seja igual a "42"',
    lines: [
      {
        id: 1,
        texts: ['var qualOSentidoDaVida = ', '2'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['qualOSentidoDaVida ', 'dropZone', ' 21'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(qualOSentidoDaVida)'],
        indentLevel: 1,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '+=',
      },
      {
        id: 2,
        label: '-=',
      },
      {
        id: 3,
        label: '*=',
      },
      {
        id: 3,
        label: '/=',
      },
    ],
    correctItemsIdsSequence: [3],
  },
  {
    starId: 13,
    type: 'checkbox',
    stem: 'Qual das seguintes opções são relacionadas a condições:',
    options: ['portanto', 'se', 'senao se', 'senao'],
    correctOptions: ['se', 'senao se', 'senao'],
  },
  {
    starId: 13,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código:',
    code: `var planetas = 0
var temSistemaSolar
se (planetas > 0) {
  temSistemaSolar = verdadeiro
} senao se (planetas < 0) {
  temSistemaSolar = falso
} senao {
  temSistemaSolar = verdadeiro
}
escreva(temSistemaSolar)`,
    options: ['verdadeiro', 'falso', 'indefinido', 'temSistemaSolar'],
    answer: 'verdadeiro',
  },
  {
    starId: 13,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que ele esteja correto',
    lines: [
      {
        id: 1,
        texts: ['se (meteoros > 10) {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone', '(escudoAtivo) {'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['escreva("Seguro")'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}', 'dropZone', '(resistencia > 10) {'],
        indentLevel: 1,
      },
      {
        id: 5,
        texts: ['escreva("Mais ou menos seguro") {'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['} senao {'],
        indentLevel: 1,
      },
      {
        id: 7,
        texts: ['escreva("Não seguro")'],
        indentLevel: 2,
      },
      {
        id: 8,
        texts: ['}', 'dropZone', ' {'],
        indentLevel: 0,
      },
      {
        id: 9,
        texts: ['escreva("Totalmente seguro")'],
        indentLevel: 1,
      },
      {
        id: 10,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'se',
      },
      {
        id: 2,
        label: 'senao',
      },
      {
        id: 3,
        label: 'senao se',
      },
      {
        id: 4,
        label: 'seguro',
      },
    ],
    correctItemsIdsSequence: [1, 3, 2],
  },
  {
    starId: 13,
    type: 'drag-and-drop-list',
    stem: 'Coloque os itens ordem de acordo com uma estrutura condional do tipo aninhada',
    items: [
      {
        id: 1,
        label: 'se',
      },
      {
        id: 2,
        label: 'senao se',
      },
      {
        id: 3,
        label: 'senao',
      },
    ],
  },
  {
    starId: 13,
    type: 'drag-and-drop-list',
    stem: 'Reordene o programa para que o resultado da condicional seja "Médio"',
    items: [
      {
        id: 1,
        label: 'se (tamanhoNave < 20) {',
      },
      {
        id: 2,
        label: '    escreva("pequeno")',
      },
      {
        id: 3,
        label: '} senao se (tamanhoNave < 200) {',
      },
      {
        id: 4,
        label: '    escreva("médio")',
      },
      {
        id: 5,
        label: '} senao se (tamanhoNave < 2000)  {',
      },
      {
        id: 6,
        label: '    escreva("enorme")',
      },
      {
        id: 7,
        label: '}',
      },
    ],
  },
  {
    starId: 14,
    type: 'selection',
    stem: 'Qual será o resultado deste escolha caso:',
    code: `var planeta = "Tatooine"
    
escolha (planeta) {
    caso 'Coruscant': 
        escreva("Planeta central da galáxia");
    caso 'Tatooine':
        escreva("Planeta desértico"); 
    caso 'roxo': 
        escreva("Planeta idílico"); 
    padrao:
        escreva("Planeta desconhecido");   
}`,
    options: [
      'Planeta idílico',
      'Planeta desértico',
      'Planeta central da galáxia',
      'Planeta desconhecido',
    ],
    answer: 'Planeta desértico',
  },
  {
    starId: 14,
    type: 'checkbox',
    stem: 'Quais casos podem resultar em "Clica agradável" ?',
    code: `escolha (planetaEstacao) {
    caso 'Outono':
    caso 'Inverno': 
        escreva("Clima frio"); 
    caso 'Verão': 
    caso 'Primavera': 
        escreva("Clima agradável");
    padrao:
        escreva("Estação desconhecida");   
}`,
    options: ['Outono', 'Verão', 'Inverno', 'Primavera'],
    correctOptions: ['Verão', 'Primavera'],
  },
  {
    starId: 14,
    type: 'open',
    stem: 'Qual o nome do bloco do "escolha caso" que sempre será executado quando o valor de escolha não conrresponder a nenhum caso?',
    answer: 'padrao',
  },
  {
    starId: 14,
    type: 'selection',
    stem: 'Quail o valor possível para variável nave, de modo que resulte em "Nave desconhecida"?',
    code: `escolha (nave) {
    caso 'X-wing':
        escreva("Nave de combate usada pela Aliança Rebelde"); 
    caso 'TIE Fighter': 
        escreva("Nave de combate usada pelo Império Galáctico"); 
    caso 'Millennium Falcon': 
        escreva("Nave lendária pilotada por dois vagabundos famosos");
    padrao:
        escreva("Nave desconhecida");
}`,
    options: ['X-wing', 'TIE Fighter', 'Verão', 'Star Destroyer'],
    answer: 'Star Destroyer',
  },
  {
    starId: 13,
    type: 'drag-and-drop-click',
    stem: 'Complete a estrutura escolha caso corretamente, de modo que ele resulte em "Sistema de armas desativado"',
    lines: [
      {
        id: 1,
        texts: ['var comando = ', 'dropZone'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone', '(comando) {'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['caso', 'dropZone', ':'],
        indentLevel: 1,
      },
      {
        id: 4,
        texts: ['escreva("Sistema de armas ativado")'],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['dropZone', ' "desativarArmas": '],
        indentLevel: 1,
      },
      {
        id: 6,
        texts: ['escreva("Sistema de armas desativado")'],
        indentLevel: 2,
      },
      {
        id: 7,
        texts: ['dropZone', ':'],
        indentLevel: 1,
      },
      {
        id: 8,
        texts: ['escreva("Comando inválido")'],
        indentLevel: 2,
      },
      {
        id: 9,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'escolha',
      },
      {
        id: 2,
        label: 'caso',
      },
      {
        id: 3,
        label: 'padrao',
      },
      {
        id: 4,
        label: 'ativarArmas',
      },
    ],
    correctItemsIdsSequence: [1, 4, 2, 3],
  },
  {
    starId: 14,
    type: 'selection',
    stem: 'Quail o valor possível para variável nave, de modo que resulte em "Nave desconhec',
    code: `escolha (nave) {
    caso 'X-wing':
        escreva("Nave de combate usada pela Aliança Rebelde"); 
    caso 'TIE Fighter': 
        escreva("Nave de combate usada pelo Império Galáctico"); 
    caso 'Millennium Falcon': 
        escreva("Nave lendária pilotada por dois vagabundos famosos");
    padrao:
        escreva("Nave desconhecida");
}`,
    options: ['X-wing', 'TIE Fighter', 'Verão', 'Star Destroyer'],
    answer: 'Star Destroyer',
  },
  {
    starId: 15,
    type: 'selection',
    stem: 'Qual é a estrutura correta de um laço?',
    options: [
      'para (var i = 0; i < 100; i++)',
      'para (i < 100; var i = 0; i++)',
      'para (i++; var i = 0; i < 100)',
      'para (var i = 0; i++; var i = 0)',
    ],
    answer: 'para (var i = 0; i < 100; i++)',
  },
  {
    starId: 15,
    type: 'drag-and-drop-click',
    stem: 'Complete o laço a seguir, de modo que ele escreva 5 vezes a frase "Que a lógica esteja com você!" ',
    lines: [
      {
        id: 1,
        texts: ['var msg = "Que a lógica esteja com você!"'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: [
          'dropZone',
          '(var contador = ',
          'dropZone',
          '; contador < ',
          'dropZone',
          '; contador++) {',
        ],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(msg)'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'se',
      },
      {
        id: 2,
        label: 'para',
      },
      {
        id: 3,
        label: '0',
      },
      {
        id: 4,
        label: '5',
      },
      {
        id: 4,
        label: 'contador',
      },
    ],
    correctItemsIdsSequence: [2, 3, 5],
  },
  {
    starId: 15,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte laço?',
    code: `para (var numero = 1; numero <= 10; numero++) {
    se (numero % 2 === 0) {
        escreva(numero);
    }
} 
    `,
    options: ['1, 3, 5, 7, 9', '2, 4, 6, 8, 10', '2, 5, 8', '1, 4, 7, 10'],
    answer: 'para (var contador = 0; contador < 100; contador++)',
  },
  {
    starId: 15,
    type: 'selection',
    stem: 'Quantas vezes a frase "Não se preocupe, é apenas um bug em um milhão!" será escrito pelo laço',
    code: `para (var vezes = 2; vezes <= 10; vezes += 2) {
    escreva("Não se preocupe, é apenas um bug em um milhão!")
} 
    `,
    options: ['2', '5', '4', '10'],
    answer: '5',
  },
  {
    starId: 15,
    type: 'drag-and-drop-click',
    stem: 'Complete o laço a seguir, de modo que a variavel energia seja igual a 50',
    lines: [
      {
        id: 1,
        texts: ['var energia = 0'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['para (var contador = 1; contador', 'dropZone', '50;', 'dropZone', '++) {'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['dropZone', '++'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['escreva(energia)'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '<',
      },
      {
        id: 2,
        label: '<=',
      },
      {
        id: 3,
        label: 'contador',
      },
      {
        id: 4,
        label: 'energia',
      },
    ],
    correctItemsIdsSequence: [2, 3, 4],
  },
  {
    starId: 16,
    type: 'open',
    stem: 'Qual o nome do laço que eu tenho que usar, caso eu não saiba o número de repetições dele?',
    answer: 'enquanto',
  },
  {
    starId: 16,
    type: 'selection',
    stem: 'Quantas vezes a frase "Brilha, brilha, estrelinha" será escrito na tela?',
    code: `para (var vezes = 1; vezes < 5; vezez++) {
    se (vezes == 3) {
        pausa;
    }
    escreva("Brilha, brilha, estrelinha")
} 
    `,
    options: ['5', '1', '2', '3'],
    answer: '2',
  },
  {
    starId: 16,
    type: 'drag-and-drop-click',
    stem: 'Complete o laço, de modo que no final do programa a variável frase seja igual a "Planeta nº5"',
    lines: [
      {
        id: 1,
        texts: ['var numero = 1;'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var frase = "";'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['dropZone', '(numero ', 'dropZone', '1'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['dropZone', '= `Planeta nº, ', '${', 'dropZone', '}`;'],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['numero--;'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 7,
        texts: ['escreva(frase);'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'frase',
      },
      {
        id: 2,
        label: 'enquanto',
      },
      {
        id: 3,
        label: '<',
      },
      {
        id: 4,
        label: '>',
      },
      {
        id: 5,
        label: 'numero',
      },
    ],
    correctItemsIdsSequence: [2, 4, 1, 5],
  },
  {
    starId: 16,
    type: 'selection',
    stem: 'enquanto ()',
    code: `var combustivel = 20
enquanto (combustivel > 0) {
    escreva(\`Tenho \${combustivel} de combustível\`);
}
combustivel--;
}`,
    options: ['0', 'Tenho 20 de combustível', 'Tenho 19 de combustível', 'laço infinito'],
    answer: 'laço infinito',
  },
  {
    starId: 16,
    type: 'drag-and-drop-list',
    stem: 'Reordene o laço para que ele escreva do 1 ao 4, ou seja, "Já visitei o planeta 1", "Já visitei o planeta 2", "Já visitei o planeta 3", "Já visitei o planeta 4".',
    items: [
      {
        id: 1,
        label: 'var numero = 1;',
      },
      {
        id: 2,
        label: 'enquanto(numero > 4) {',
      },
      {
        id: 3,
        label: '    escreva(`Já visitei o planeta ${numero}`)',
      },
      {
        id: 4,
        label: '    numero++',
      },
      {
        id: 5,
        label: '}',
      },
    ],
  },
];
