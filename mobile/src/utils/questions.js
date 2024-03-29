export const questions = [
  {
    starId: 1,
    type: 'selection',
    stem: 'Dentre as opções a seguir, qual NÃO se enquadra na hora de escrever um algoritmo?',
    options: ['raciocínio lógico', 'desordem', 'análise', 'encadeamento de passos'],
    answer: 'desordem',
  },
  {
    starId: 1,
    type: 'open',
    stem: 'O nome que se pode dar a uma sequencia lógica de instruções qualquer é',
    answer: ['algoritmo'],
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
    stem: 'Ordene a sequência correta de se vestir um traje espacial (Pressione e segure o item)',
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
    stem: 'Ordene a sequência correta de se ligar um foguete (Pressione e segure o item)',
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
  //   {
  //     starId: 3,
  //     type: 'checkbox',
  //     stem: 'quais dos itens abaixo pode ser um nome válido de variável?',
  //     options: ['_idade', '4mor', 'altura_em_cm', 'peso em kg'],
  //     correctOptions: ['_idade', 'altura_em_cm'],
  //   },
  {
    starId: 2,
    type: 'open',
    stem: 'O nome do comando para um programa receber informações é',
    answer: ['leia()', 'leia'],
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
    answer: ['escreva', 'escreva()'],
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
    stem: 'Clique nos elementos abaixo para completar o algoritmo.',
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
    answer: ['var'],
  },
  {
    starId: 5,
    type: 'open',
    stem: 'Se eu tenho um texto com aspas duplas, só é permitido inserir nele que tipo de aspas?',
    answer: ['aspas simples', 'simples'],
  },
  {
    starId: 5,
    type: 'checkbox',
    stem: 'Quais dos valores abaixo pode ser um tipo de texto válido?',
    options: ['letra', '"não é um texto"', '"100"', '2.5'],
    correctOptions: ['"não é um texto"', '"100"'],
  },
  {
    starId: 5,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código?',
    code: `var cor = "vermelha"
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
    stem: 'Complete o código para que ele escreva a data.',
    lines: [
      {
        id: 1,
        texts: ['var ', 'dropZone', '= "01/03/2023"'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva("mensagem enviada em "', 'dropZone', '", de nada)'],
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
    stem: 'Faça a interpolação de textos da maneira apropriada.',
    lines: [
      {
        id: 1,
        texts: ['var mensagem = "Olá, mundo!"'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva("a mensagem ', 'dropZone', ' não foi entendida")'],
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
    stem: 'Complete o código para que combustivel total seja igual a 75.',
    lines: [
      {
        id: 1,
        texts: ['var combustivelAtual = 25'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var combustivelTotal = ', 'combustivelAtual ', 'dropZone'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva("o foguete tem  ${combustivelTotal} de combustível no total")'],
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
    stem: 'Quais dos seguintes tipos de dados podem ser usados para armazenar números?',
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
    stem: 'Qual será o tipo de dado do resultado de 5 ÷ 2?',
    options: ['inteiro', '2.5', 'real', 'texto'],
    answer: 'real',
  },
  {
    starId: 6,
    type: 'selection',
    stem: 'Qual será o valor da variável distancia no seguinte código:',
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
    answer: ['verdadeiro'],
  },
  {
    starId: 7,
    type: 'selection',
    stem: 'Qual é o valor padrão de uma variável sem valor atribuído a ela?',
    options: ['falso', 'verdadeiro', 'nulo', 'falso e nulo'],
    answer: 'nulo',
  },
  {
    starId: 7,
    type: 'checkbox',
    stem: 'Quais os valores possíveis para uma variável do tipo lógico?',
    options: ['falso', 'verdadeiro', 'nulo', '"verdadeiro"'],
    correctOptions: ['falso', 'verdadeiro'],
  },
  {
    starId: 7,
    type: 'selection',
    stem: 'Qual será o resultado do seguinte código?',
    code: `var resposta = verdadeiro
var resposta = falso

escreva("Vai chover asteroide hoje? " + resposta)`,
    options: [
      'Vai chover asteroide hoje? falso',
      'Vai chover asteroide hoje? verdadeiro',
      'falso',
      'verdadeiro',
    ],
    answer: 'Vai chover asteroide hoje? falso',
  },
  {
    starId: 7,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que a resposta seja coerente com a afirmação.',
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
        texts: ['escreva(', 'dropZone', ')'],
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
    stem: 'Marque as opções que são operadores válidos para um programa.',
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
    stem: 'Complete a linha com os operadores, de modo que o resultado seja igual a 20.',
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
    stem: 'Qual será o resultado do seguinte código?',
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
    answer: ['>='],
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
    stem: 'Qual será o resultado do seguinte código?',
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
    stem: 'Complete a linha com o operador para que o resultado seja igual a VERDADEIRO.',
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
        texts: ['escreva(', 'temOxigenio ', 'dropZone', ' temComida)'],
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
    stem: 'Complete o código para que o resultado seja igual a VERDADEIRO.',
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
    correctItemsIdsSequence: [1, 2],
  },
  {
    starId: 10,
    type: 'open',
    stem: 'Qual o símbolo usado para inverter valores lógicos?',
    answer: ['!'],
  },
  {
    starId: 10,
    type: 'checkbox',
    stem: 'Marque as opções que são operadores lógicos.',
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
    code: `var planetaCor = "bege"
var temAtmosferaBoa = 2022 > 2023

se (temAtmosferaBoa) {
    planetaCor = "marrom"
}
escreva(planetaCor)
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
        texts: ['se (planetaDiametro ', 'dropZone', ' 1500) {'],
        indentLevel: 1,
      },
      {
        id: 3,
        texts: ['escreva("planeta ', 'dropZone', ' ")'],
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
    code: `var planetaPopulacao = 1000 * 1000
var temAtmosferaBoa = 2022 > 2023
var status = "pouca gente"

se (planetaPopulacao > 1000) {
    var status = "muita gente"
}
escreva(status)`,
    options: ['pouca gente', 'muita gente', 'gente', 'variável indefinida'],
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
        label: '4',
      },
      {
        id: 4,
        label: '8',
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
    stem: 'Complete o código para que a variavel qualOSentidoDaVida seja igual a 42',
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
        id: 4,
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
    answer: ['padrao'],
  },
  {
    starId: 14,
    type: 'selection',
    stem: 'Quail o valor possível para variável nave, de modo que resulte em "Nave desconhecida"?',
    code: `escolha (nave) {
    caso 'X-wing':
        escreva("Nave de combate usada pela Aliança Rebelde")
    caso 'TIE Fighter': 
        escreva("Nave de combate usada pelo Império Galáctico")
    caso 'Millennium Falcon': 
        escreva("Nave lendária pilotada por dois vagabundos famosos")
    padrao:
        escreva("Nave desconhecida")
}`,
    options: ['X-wing', 'TIE Fighter', 'Millennium Falcon', 'Star Destroyer'],
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
  {
    starId: 17,
    type: 'open',
    stem: 'Qual o nome da instrução que permite pular uma iteração?',
    answer: 'continua',
  },
  {
    starId: 17,
    type: 'selection',
    stem: 'Qual será o resultado da variável energia?',
    code: `var energia = 100;
faca { 
    combustivel -= 10;
} enquanto (energia > 1000)`,
    options: ['0', '90', '100', '1000'],
    answer: '90',
  },
  {
    starId: 17,
    type: 'selection',
    stem: 'Quantas vezes esse laço será executado?',
    code: `var nivelOxigenio = 100;
faca { 
    escreva("O oxigênio está em " + nivelOxigenio + "%")
} enquanto (nivelOxigenio < 100)`,
    options: ['10', '100', '1', 'infinitamente'],
    answer: 'infinitamente',
  },
  {
    starId: 17,
    type: 'drag-and-drop-list',
    stem: 'Reordene o laço para que o programa escreva a mensagem "Esse planeta tem 4 estrelas".',
    items: [
      {
        id: 1,
        label: 'var numero = 1;',
      },
      {
        id: 2,
        label: 'faca {',
      },
      {
        id: 3,
        label: '    escreva(`Esse planeta tem ${numero} estrelas.`)',
      },
      {
        id: 4,
        label: '    numero++',
      },
      {
        id: 5,
        label: '} enquanto (numero < 4)',
      },
    ],
  },

  {
    starId: 17,
    type: 'drag-and-drop-click',
    stem: 'Complete o laço, de modo que no final do programa a variável frase seja igual a "Planeta nº5"',
    lines: [
      {
        id: 1,
        texts: ['var temperatura = 50;'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone', '{'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['se (temperatura == ', 'dropZone', ') {'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['dropZone'],
        indentLevel: 4,
      },
      {
        id: 5,
        texts: ['}'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['temperatura -= 5;'],
        indentLevel: 2,
      },
      {
        id: 7,
        texts: ['} enquanto (temperatura != 25)'],
        indentLevel: 0,
      },
      {
        id: 8,
        texts: ['escreva(`A temperatura está no nível ideal, que é 25`);'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'faca',
      },
      {
        id: 2,
        label: 'enquanto',
      },
      {
        id: 3,
        label: 'pausa',
      },
      {
        id: 4,
        label: 'continua',
      },
      {
        id: 5,
        label: '50',
      },
      {
        id: 6,
        label: '25',
      },
    ],
    correctItemsIdsSequence: [1, 5, 3],
  },
  {
    starId: 18,
    type: 'selection',
    stem: 'Qual serão os elementos do vetor numerosDaSorte',
    code: `var numerosDaSorte = [2, 7, 2];
numerosDaSorte[3] = 3
escreva(numerosDaSorte)`,
    options: ['2, 7, 2, 3', '2, 7, 3', '2, 7, 3, 3', '3, 7, 2'],
    answer: '2, 7, 2, 3',
  },
  {
    starId: 18,
    type: 'checkbox',
    stem: 'Quais os possíveis números índice eu posso usar para pegar o elemento "Cruzador" no vetor tiposDeNave?',
    code: `var tiposDeNave = [
    'Cargueiro',
    'Caça',  
    'Explorador', 
    'Cruzador'
]`,
    options: ['3', '-1', '-3', '4'],
    correctOptions: ['3', '-1'],
  },
  {
    starId: 18,
    type: 'open',
    stem: 'Qual o número da posição do planeta "Mercúrio" no vetor planetas',
    code: `var planetas = ['Mercúrio', 'Vênus',  'Terra', 'Marte']`,
    answer: '0',
  },
  {
    starId: 18,
    type: 'drag-and-drop-click',
    stem: 'Complete o código abaixo para que seja escrito nessa ordem "Europa, Fobos, Titã"',
    lines: [
      {
        id: 1,
        texts: ['var luas = ["Titã", "Europa", "Mimas", "Fobos", "Dione"]'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreava(luas[ ', 'dropZone', ' ])'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreava(luas[ ', 'dropZone', ' ])'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreava(luas[ ', 'dropZone', ' ])'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '2',
      },
      {
        id: 2,
        label: '1',
      },
      {
        id: 3,
        label: '0',
      },
      {
        id: 4,
        label: '3',
      },
      {
        id: 5,
        label: '4',
      },
      {
        id: 6,
        label: '5',
      },
    ],
    correctItemsIdsSequence: [2, 4, 3],
  },
  {
    starId: 18,
    type: 'drag-and-drop-list',
    stem: 'Reordene os elementos do vetor, de modo que a constelação "Cão Maior" tenha índice 0, "Cassiopéia" tenha índice 1, "Águia" tenha índice 2 e "Órion" índice 3',
    items: [
      {
        id: 1,
        label: 'var constelacoes = [',
      },
      {
        id: 2,
        label: "   'Cão Maior'",
      },
      {
        id: 3,
        label: "    'Cassiopéia'",
      },
      {
        id: 4,
        label: "    'Águia'",
      },
      {
        id: 5,
        label: "    'Órion'",
      },
      {
        id: 6,
        label: ']',
      },
    ],
  },
  {
    starId: 19,
    type: 'selection',
    stem: 'O que será escrito por esse código?',
    code: `var numeros = [2, 4, 6];

numeros.remover(4);
numeros.adicionar(8);

escreva(numeros)`,
    options: ['2, 6, 8', '2, 4, 8', '2, 8, 6', '2, 4, 6, 8'],
    answer: '2, 6, 8',
  },
  {
    starId: 19,
    type: 'checkbox',
    stem: 'Quais são os métodos para deletar um item de um vetor?',
    options: ['deletar()', 'remover()', 'removerPrimeiro()', 'removerUltimo()', 'removerSegundo()'],
    correctOptions: ['remover()', 'removerPrimeiro()', 'removerUltimo()', 'removerSegundo()'],
  },
  {
    starId: 19,
    type: 'drag-and-drop-click',
    stem: 'Complete o código com os métodos adequados, de modo que o resultado seja igual a 2',
    lines: [
      {
        id: 1,
        texts: ['var aliens = ["Andromedans", "Borgs", "Draconians"]'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['aliens.', 'dropZone', '(Draconians)'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(aliens.', 'dropZone', '()'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'adicionar',
      },
      {
        id: 2,
        label: 'tamanho',
      },
      {
        id: 3,
        label: 'remover',
      },
      {
        id: 4,
        label: '4',
      },
    ],
    correctItemsIdsSequence: [1, 2, 3],
  },
  {
    starId: 19,
    type: 'drag-and-drop-click',
    stem: 'Complete o código abaixo, de modo que seja escrito nessa ordem "sabre de luz, canhão de plasma"',
    lines: [
      {
        id: 1,
        texts: ['var armas = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['dropZone'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['armas.removerPrimeiro()'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: [']'],
        indentLevel: 0,
      },
      {
        id: 6,
        texts: ['armas.adicionar(', 'dropZone', ')'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'blaster',
      },
      {
        id: 2,
        label: 'sabre de luz',
      },
      {
        id: 3,
        label: 'canhão de plasma',
      },
    ],
    correctItemsIdsSequence: [1, 2, 3],
  },
  {
    starId: 19,
    type: 'selection',
    stem: 'Qual será o tamanho do vetor planetasDestruidos',
    code: `var planetasDestruidos = [
        "Alderaan", 
        "Krypton", 
        "Vulcan", 
];

numeros.removerPrimeiro();
numeros.removerUltimo();
numeros.adicionar("Taris");`,
    options: ['2', '0', '4', '6'],
    answer: '2',
  },
  {
    starId: 20,
    type: 'selection',
    stem: 'O que será escrito no seguinte código?',
    code: `var tecnologias = [
        "propulsor", 
        "motor iônico", 
        "campo de força", 
];
tecnologias.removerPrimeiro();

se (tecnologias.inclui("propulsor")) {
    escreva("Sim, temos um propulsor")
} senao {
    escreva("Não, falta um propulsor")
}`,
    options: [
      'Sim, temos um propulsor',
      'Não, temos um propulsor',
      'Sim, falta um propulsor',
      'Não, falta um propulsor',
    ],
    answer: 'Não, falta um propulsor',
  },
  {
    starId: 20,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para o vetor droids seja igual a \nR2-D2, C-3PO, BB-8, K-250',
    lines: [
      {
        id: 1,
        texts: ['var droid = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"R2-D2",'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['dropZone', ','],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: [']'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: ['var droids = droids.', 'dropZone', '(', 'dropZone', ')'],
        indentLevel: 0,
      },
      {
        id: 6,
        texts: ['escreva(droids)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '["BB-8", "K-250"]',
      },
      {
        id: 2,
        label: 'inclui',
      },
      {
        id: 3,
        label: '"BB-8", "K-250"',
      },
      {
        id: 4,
        label: '"K-250"',
      },
      {
        id: 5,
        label: '"C-3PO"',
      },
      {
        id: 6,
        label: 'concatenar',
      },
    ],
    correctItemsIdsSequence: [5, 6, 1],
  },
  {
    starId: 20,
    type: 'selection',
    stem: 'Qual será o valor viloes',
    code: `var viloes = ["Darth Vader", "Kylo Ren", "Boba Fett", "Jabba"]
    
viloes.ordenar()
escreva(viloes[-1])`,
    options: [
      'Darth Vader, Kylo Ren, Boba Fett, Jabba',
      'Kylo Ren, Jabba, Darth Vader, Boba Fett',
      'Boba Fett, Darth Vader, Jabba, Kylo Ren',
      'Boba Fett, Jabba, Kylo Ren, Darth Vader',
    ],
    answer: 'Boba Fett, Darth Vader, Jabba, Kylo Ren',
  },
  {
    starId: 20,
    type: 'drag-and-drop-click',
    stem: 'Complete o vetor para o resultado do código seja falso',
    lines: [
      {
        id: 1,
        texts: ['var planetas = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"Marte"'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['dropZone', ','],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: [']'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: ['escreva(planetas.', 'dropZone', '("Terra")'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '"Terra"',
      },
      {
        id: 2,
        label: '"Saturno"',
      },
      {
        id: 3,
        label: 'inclui',
      },
      {
        id: 4,
        label: 'ordenar',
      },
      {
        id: 5,
        label: 'concatenar',
      },
    ],
    correctItemsIdsSequence: [2, 5],
  },
  {
    starId: 20,
    type: 'checkbox',
    stem: 'Quais valores eu poderia colocar no inclui() para que o código resultasse em verdadeiro?',
    code: `var especies = ['Wookiee', 'Jawa'];
var alvos = especies.concatenar(['Ewok', 'Zabrak', 'Rodians']);

escreva(alvos.inclui());`,
    options: ['Ewok', 'Jawa', 'Zabrak', 'Gugan'],
    correctOptions: ['Ewok', 'Jawa', 'Zabrak'],
  },
  {
    starId: 21,
    type: 'selection',
    stem: 'Qual será o valor de particulas[-1]',
    code: `var particulas = ["Elétron", "Próton", "Nêutron", "Quarks"]
    
particulas.reverso()
escreva(particulas[-1])`,
    options: ['Elétron', 'Nêutron', 'Próton', 'Quarks'],
    answer: 'Elétron',
  },
  {
    starId: 21,
    type: 'checkbox',
    stem: 'Quais itens estarão no vetor fatia?',
    code: `var elementos = [
      'Hidrogênio', 
      'Carbono',
      'Oxigênio',
      'Urânio',
];
var fatia = elementos.fatiar(2);

escreva(fatia);`,
    options: ['Hidrogênio', 'Carbono', 'Oxigênio', 'Urânio'],
    correctOptions: ['Oxigênio', 'Urânio'],
  },
  {
    starId: 21,
    type: 'drag-and-drop-click',
    stem: 'Complete o código a fim de que o vetor radioativos tenha 3 itens, ou seja o resultado final seja igual a 3',
    lines: [
      {
        id: 1,
        texts: ['var elementos = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"Hélio"'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['"Estrôncio"', ','],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['"Rádio"', ','],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['"Césio"', ','],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['"Polônio"', ','],
        indentLevel: 2,
      },
      {
        id: 7,
        texts: [']'],
        indentLevel: 0,
      },
      {
        id: 8,
        texts: ['var radioativos = ', 'elementos.', 'dropZone', '(1,', 'dropZone', ')'],
        indentLevel: 0,
      },
      {
        id: 9,
        texts: ['escreva(radioativos.', 'dropZone', '( )'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'tamanho',
      },
      {
        id: 2,
        label: 'fatiar',
      },
      {
        id: 3,
        label: 'somar',
      },
      {
        id: 4,
        label: '3',
      },
      {
        id: 5,
        label: '4',
      },
      {
        id: 6,
        label: 'inverter',
      },
    ],
    correctItemsIdsSequence: [2, 5, 1],
  },
  {
    starId: 21,
    type: 'open',
    stem: 'O que será escrito por esse código?',
    code: `var uns = [1, 1, 1, 1]
escreva(uns.somar())`,
    answer: '4',
  },
  {
    starId: 21,
    type: 'drag-and-drop-click',
    stem: 'Complete o método fatiar para que a fatia contenha:\nVia Láctea e Alfa Centauri',
    lines: [
      {
        id: 1,
        texts: ['var galaxias = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"Andrômeda"'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['"Via Láctea"', ','],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['"Alfa Centauri"', ','],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['"Betelgeuse"'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['];'],
        indentLevel: 0,
      },
      {
        id: 7,
        texts: ['var fatia = ', 'galaxias.fatiar', '(', 'dropZone', ',', 'dropZone', ');'],
        indentLevel: 0,
      },
      {
        id: 8,
        texts: ['escreva(fatia)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '0',
      },
      {
        id: 2,
        label: '1',
      },
      {
        id: 3,
        label: '3',
      },
      {
        id: 4,
        label: '4',
      },
      {
        id: 5,
        label: '2',
      },
    ],
    correctItemsIdsSequence: [2, 3],
  },
  {
    starId: 22,
    type: 'drag-and-drop-click',
    stem: 'Complete o encaixar para que a variável satelitesNaturais tenha os seguintes satelites:\nLua e Titã',
    lines: [
      {
        id: 1,
        texts: ['var cometas = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"Lua"', ','],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['"Titã"'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['"Skylab"', ','],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['"Sputnik 1"'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['];'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: [
          'var satelitesNaturais = ',
          'satelites.encaixar',
          '(',
          'dropZone',
          ',',
          'dropZone',
          ');',
        ],
        indentLevel: 0,
      },
      {
        id: 6,
        texts: ['escreva(satelitesNaturais);'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '0',
      },
      {
        id: 2,
        label: '1',
      },
      {
        id: 3,
        label: '3',
      },
      {
        id: 4,
        label: '4',
      },
      {
        id: 5,
        label: '2',
      },
    ],
    correctItemsIdsSequence: [1, 2],
  },
  {
    starId: 22,
    type: 'checkbox',
    stem: 'Quais itens sobrarão na variável foguetes?',
    code: `var foguetes = [
        'Soyuz', 
        'Atlas V',
        'Falcon 9',
        'Long March 5',
  ];

foguetes.encaixar(1, 1);`,
    options: ['Soyuz', 'Falcon 9', 'Atlas V', 'Long March 5'],
    correctOptions: ['Soyuz', 'Falcon 9', 'Long March 5'],
  },
  {
    starId: 22,
    type: 'drag-and-drop-click',
    stem: 'Adicione o cometa Lovejoy na posição 1 no vetor cometas',
    lines: [
      {
        id: 1,
        texts: ['var cometas = ['],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['"Halley"', ','],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['"Halle-Bop"', ','],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['"Hyakutake"', ','],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['];'],
        indentLevel: 0,
      },
      {
        id: 7,
        texts: ['cometas.encaixar', '(', 'dropZone', ',', 'dropZone', ',', 'dropZone', ');'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '0',
      },
      {
        id: 2,
        label: '1',
      },
      {
        id: 3,
        label: '"Lovejoy"',
      },
    ],
    correctItemsIdsSequence: [2, 1, 3],
  },
  {
    starId: 22,
    type: 'selection',
    stem: 'Qual asteroide estará na posição zero do vetor asteroides?',
    code: `var asteroides = [
        "Ceres",
        "Vesta", 
        "Pallas", 
        "Hygiea"
]
      
asteroides.encaixar(0, 3);
escreva(asteroides[0]);`,
    options: ['Ceres', 'Vesta', 'Pallas', 'Hygiea'],
    answer: 'Hygiea',
  },
  {
    starId: 22,
    type: 'open',
    stem: 'Qual o único numéro seria necessário colocar no encaixar() para pegar os dois últimos itens do vetor agenciasEspaciais?',
    code: `var agenciasEspaciais = ["NASA", "ESA", "JAXA"]
  escreva(agenciasEspaciais.encaixar())`,
    answer: '1',
  },
  {
    starId: 23,
    type: 'selection',
    stem: 'Que frase será escrita por esse código?',
    code: `var textos = [
        "Apollo",
        "é", 
        "legal",
]
  
var frase = textos.juntar("/");
escreva(frase);`,
    options: ['Apollo é legal', 'Apollo/é/legal', 'Apollo-é-legal', 'Apolloélegal'],
    answer: 'Apollo/é/legal',
  },
  {
    starId: 23,
    type: 'selection',
    stem: 'Quantos itens posso ter no vetor ao dividir a palavra "galáxia" usando a palavra "a" como separador',
    code: `var palavra = "galáxia";

var vetor = palavra.dividir("a")
escrever(vetor.tamanho());`,
    options: ['1', '2', '3', '4'],
    answer: '3',
  },
  {
    starId: 23,
    type: 'drag-and-drop-click',
    stem: 'Coloque o método e o separador correto para que o vetor astrônomos tenha três itens:\nCopérnico, Kepler, Newton',
    lines: [
      {
        id: 1,
        texts: ['var nomes = "Copérnico, Kepler, Newton";'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var astronomos = ', 'nomes.', 'dropZone', '(', 'dropZone', ');'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['escreva(astronomos);'],
        indentLevel: 2,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'dividir',
      },
      {
        id: 2,
        label: 'juntar',
      },
      {
        id: 3,
        label: '", "',
      },
      {
        id: 4,
        label: '"; "',
      },
      {
        id: 5,
        label: '"a"',
      },
      {
        id: 6,
        label: '" "',
      },
    ],
    correctItemsIdsSequence: [1, 3],
  },
  {
    starId: 23,
    type: 'checkbox',
    stem: 'Quais estrelas estarão presentes no vetor estrelas?',
    code: `var nomes = "Sol, Polaris, Antares, Sirius";

var estrelas = dividir(", ", 2);
escreva(estrelas);`,
    options: ['Sol', 'Polaris', 'Antares', 'Sirius'],
    correctOptions: ['Sol', 'Polaris', 'Long March 5'],
  },
  {
    starId: 23,
    type: 'drag-and-drop-list',
    stem: 'Reordene o código para que seja formada a frase:\n"O espaço é imenso"',
    items: [
      {
        id: 1,
        label: 'var palavras = [',
      },
      {
        id: 2,
        label: "   'O'",
      },
      {
        id: 3,
        label: "    'espaço'",
      },
      {
        id: 4,
        label: "    'é'",
      },
      {
        id: 5,
        label: "    'imenso'",
      },
      {
        id: 6,
        label: ']',
      },
      {
        id: 7,
        label: 'escreva(palavras.juntar(" "))',
      },
    ],
  },
  {
    starId: 24,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que o tamanho da variável palavra seja igual a seis, ou seja, que o código resulte em 6',
    lines: [
      {
        id: 1,
        texts: ['var palavra = "    Cosmos   ";'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['palavra.', 'dropZone', '( );'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(astronomos.', 'dropZone', '( ));'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'aparar',
      },
      {
        id: 2,
        label: 'dividir',
      },
      {
        id: 3,
        label: 'subtexto',
      },
      {
        id: 4,
        label: 'tamanho',
      },
      {
        id: 5,
        label: 'fatiar',
      },
    ],
    correctItemsIdsSequence: [1, 4],
  },
  {
    starId: 24,
    type: 'selection',
    stem: 'Qual será o valor da variável planeta?',
    code: `var frase = "Terra é redonda";
var novaFrase = frase.maiusculo();
var planeta = novaFrase.subtexto(0, 5)
escrever(planeta);`,
    options: ['Terra', 'TERRA', 'terra', 'redonda'],
    answer: 'TERRA',
  },
  {
    starId: 24,
    type: 'drag-and-drop-click',
    stem: 'Complete o subtexto para que a variável primeiraPalavra seja igual a "UNIVERSO"',
    lines: [
      {
        id: 1,
        texts: ['var palavra = "Universo infinito";'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: [
          'var primeiraPalavra = ',
          'palavra.subtexto',
          '(',
          'dropZone',
          ',',
          'dropZone',
          ');',
        ],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(primeiraPalavra.', 'dropZone', '( ));'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'maiusculo',
      },
      {
        id: 2,
        label: 'minusculo',
      },
      {
        id: 3,
        label: '0',
      },
      {
        id: 4,
        label: '8',
      },
      {
        id: 5,
        label: '7',
      },
    ],
    correctItemsIdsSequence: [3, 4, 1],
  },
  {
    starId: 24,
    type: 'checkbox',
    stem: 'Quais caractares da palavra "estrela" estarão contidas na variável caracteres?',
    code: `var estrela = "estrela";

var carcacteres = estrela.subtexto(2, 4);
escreva(estrelas);`,
    options: ['e', 's', 't', 'r'],
    correctOptions: ['t', 'r'],
  },
  {
    starId: 24,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para o resultado seja igual a falso',
    lines: [
      {
        id: 1,
        texts: ['var planeta = "Planeta vermelho: Marte";'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var planeta = ', 'planeta.', 'dropZone', '(', 'dropZone', ',', 'dropZone', ');'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['escreva(planeta.inclui("Marte"));'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '"Marte"',
      },
      {
        id: 2,
        label: 'remover',
      },
      {
        id: 3,
        label: 'substituir',
      },
      {
        id: 4,
        label: '"Vênus"',
      },
    ],
    correctItemsIdsSequence: [3, 1, 4],
  },
  {
    starId: 25,
    type: 'checkbox',
    stem: 'Quais textos serão substituídos por "Apollo"?',
    code: `var textos = ["Petros", "Suga", "Kaue", "0Thigs"];
var maiusculos = [];
para (var i = 0; i < textos.tamanho(); i++) {
    se (i == 2) {
        continua;
    }
    var textoAtual = textos[i].maiusculo();
    maiusculos.adicionar(textoAtual);
}
escreva(maiusculos);`,
    options: ['Petros', 'Suga', 'Kaue', '0Thigs'],
    correctOptions: ['Petros', 'Suga'],
  },
  {
    starId: 25,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que seja escrito:\nOlá, mundo, como vai?',
    lines: [
      {
        id: 1,
        texts: ['var palavras = ["Olá, ", "mundo, ", "como ", "vai", "?"];'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var frase = ""'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['para ', '(var i = 0;', 'i <', ' palavras.', 'dropZone', '( );', 'i++ {'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['frase.', 'dropZone', '(palavras[', 'dropZone', '])'],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 6,
        texts: ['escreva(frase);'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'i',
      },
      {
        id: 2,
        label: 'remover',
      },
      {
        id: 3,
        label: 'tamanho',
      },
      {
        id: 5,
        label: 'inclui',
      },
      {
        id: 6,
        label: 'concatenar',
      },
    ],
    correctItemsIdsSequence: [3, 6, 1],
  },
  {
    starId: 25,
    type: 'drag-and-drop-click',
    stem: 'Complete o laço "para-cada" adequadamente',
    lines: [
      {
        id: 1,
        texts: ['var animais = ["Astrogato", "Peixonauta", "Krypto", "Porg"];'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['dropZone', 'cada', 'dropZone', 'em', 'dropZone', '{'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['escreva(animal)'],
        indentLevel: 2,
      },
      {
        id: 5,
        texts: ['}'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'para',
      },
      {
        id: 2,
        label: 'enquanto',
      },
      {
        id: 3,
        label: 'animal',
      },
      {
        id: 5,
        label: 'animais',
      },
    ],
    correctItemsIdsSequence: [1, 3, 5],
  },
  {
    starId: 25,
    type: 'drag-and-drop-list',
    stem: 'Reordene o código para que seja escrito apenas números menores que 6',
    items: [
      {
        id: 1,
        label: 'var numeros = [2, 4, 6, 8]',
      },
      {
        id: 2,
        label: 'para cada numero em numeros {',
      },
      {
        id: 3,
        label: '    se (numero < 6)',
      },
      {
        id: 4,
        label: '        escreva(numero)',
      },
      {
        id: 5,
        label: '    }',
      },
      {
        id: 6,
        label: '}',
      },
    ],
  },
  {
    starId: 25,
    type: 'selection',
    stem: 'Qual será o tipo de dado de vetores[2][0]',
    code: `var vetores = [
        ['a', 'b', 'c'],
        [verdadeiro, 3, 4],
        ["falso", verdadeiro]
];

escreva(vetores[2][0]);`,
    options: ['lógico', 'texto', 'número', 'vetor'],
    answer: 'texto',
  },
  {
    starId: 26,
    type: 'drag-and-drop-list',
    stem: 'Coloque o código na ordem para que a função seja executada corretamente',
    items: [
      {
        id: 1,
        label: 'funcao escreverMensagem() {',
      },
      {
        id: 2,
        label: "    escreva('Sonhe com as estrelas.')",
      },
      {
        id: 3,
        label: '}',
      },
      {
        id: 4,
        label: 'escreverMensagem()',
      },
    ],
  },
  {
    starId: 26,
    type: 'drag-and-drop-click',
    stem: 'Complete a função "mostrarLancamento()"',
    lines: [
      {
        id: 1,
        texts: ['dropZone', 'mostrarLancamento(', 'data', ',', 'dropZone', ') {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['escreva("O foguete será lançado em ${', 'dropZone', '}'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['escreva("Em direção ao ${destino}");'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: ['dropZone', '("21/12/2012", "Planeta Kobos")'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'data',
      },
      {
        id: 2,
        label: 'destino',
      },
      {
        id: 3,
        label: 'funcao',
      },
      {
        id: 4,
        label: 'mostrarLancamento',
      },
    ],
    correctItemsIdsSequence: [3, 2, 1, 4],
  },
  {
    starId: 26,
    type: 'checkbox',
    stem: 'Quais são os parâmetros da função "mostrarPeso()"?',
    code: `funcao mostrarPeso(massa, gravidade);
    peso = massa * gravidade
    escreva("Seu peso é \${peso}.");
}
mostrarPeso(72, 9.8);`,
    options: ['massa', 'gravidade', 'peso', 'mostrarPeso'],
    correctOptions: ['massa', 'gravidade'],
  },
  {
    starId: 26,
    type: 'open',
    stem: 'Quantas vezes será escrito "Planeta grande"?',
    code: `funcao mostrarPlanetaGrande(diametro);
    se (diametro > 25000) {
        escreva("Planeta grande");
    }
}
mostrarPlanetaGrande(400000);
mostrarPlanetaGrande(100);
mostrarPlanetaGrande(8000000);`,
    answer: '2',
  },
  {
    starId: 26,
    type: 'selection',
    stem: 'Qual variável nesse código tem escopo local?',
    code: `funcao mostrarDistancia(velocidade, tempo) {
    var distancia = velocidade * tempo;
    escreva("Foguete percorreu \${distancia}km");
}

var velocidade = 180;
var tempo = 200;
mostrarDistancia(velocidade, tempo);`,
    options: ['velocidade', 'tempo', 'distancia', 'mostrarDistancia'],
    answer: 'distancia',
  },
  {
    starId: 27,
    type: 'open',
    stem: 'Qual será o resultado desse código?',
    code: `funcao subtrair(numero1, numero2) {
    retorna numero1 - numero2;
}
var subtracao = subtrair(12, 2);
escreva(subtracao * 2)`,
    answer: '20',
  },
  {
    starId: 27,
    type: 'checkbox',
    stem: 'Quais os possíveis valores que o parâmetro robo poderia ter para que fosse escrito "Isso é um robô"?',
    code: `funcao verificarRobo(robo) {
    retorna robo.inclui("Robô");
}

se (verificarRobo(robo)) {
    escreva("Isso é um robô");
}`,
    options: ['AstroRobô', 'RobôCop', 'Blitz', 'Wall-E'],
    correctOptions: ['AstroRobô', 'RobôCop', 'Wall-E'],
  },
  {
    starId: 27,
    type: 'drag-and-drop-click',
    stem: 'Complete a função para que ela retorne "Habitável"',
    lines: [
      {
        id: 1,
        texts: ['funcao verificarPlaneta(', 'dropZone', ') {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['var planetaHabitaveis = ["Terra", "Marte"];'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['se (planetaHabitaveis.inclui(planeta)) {'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['dropZone', '"Habitável";'],
        indentLevel: 4,
      },
      {
        id: 5,
        texts: ['}'],
        indentLevel: 2,
      },
      {
        id: 6,
        texts: ['retorna', ' dropZone'],
        indentLevel: 2,
      },
      {
        id: 7,
        texts: ['escreva(verificarPlaneta(', 'dropZone', '));'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'retorna',
      },
      {
        id: 2,
        label: '"Não habitável"',
      },
      {
        id: 3,
        label: 'planeta',
      },
      {
        id: 4,
        label: '"Vênus"',
      },
    ],
    correctItemsIdsSequence: [3, 1, 2, 4],
  },
  {
    starId: 27,
    type: 'checkbox',
    stem: 'Quais dessas funções SÃO anônimas',
    code: `var pegarNomeEstrela = funcao() {
        retorna "Órion";
}
funcao removerX (vetor) {
    retorna vetor.remover("x");
}
var adicionarPlanetas = funcao(vetor) {
    retorna vetor.concatenar(["Arrakis", "Gallifrey"]);
}`,
    options: ['removerX', 'adicionarPlanetas', 'pegarNomeEstrela', 'calcularGravidade'],
    correctOptions: ['adicionarPlanetas', 'pegarNomeEstrela'],
  },
  {
    starId: 27,
    type: 'drag-and-drop-click',
    stem: 'Complete a função anônima adequadamente',
    lines: [
      {
        id: 1,
        texts: ['dropZone', 'verificarPar', 'dropZone', 'funcao(num) {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['dropZone', 'num % 2 == 0;'],
        indentLevel: 2,
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
        label: 'retorna',
      },
      {
        id: 2,
        label: 'funcao',
      },
      {
        id: 3,
        label: 'var',
      },
      {
        id: 4,
        label: '=',
      },
    ],
    correctItemsIdsSequence: [3, 4, 1],
  },
  {
    starId: 28,
    type: 'selection',
    stem: 'Qual será o resultado desse código?',
    code: `var numero = texto(22);

escreva(22 + numero);`,
    options: ['44', '"2222"', '22', '"2244"'],
    answer: '"2222"',
  },
  {
    starId: 28,
    type: 'checkbox',
    stem: 'Quais os possíveis números podem ser retornados pelo "aleatorioEntre(1, 4)"?',
    options: ['1', '2', '3', '4'],
    correctOptions: ['1', '2', '3'],
  },
  {
    starId: 28,
    type: 'checkbox',
    stem: 'Quais funções nativas posso utilizar para converter um dado em um número?',
    options: ['texto()', 'numero()', 'inteiro()', 'real()'],
    correctOptions: ['inteiro()', 'real()'],
  },
  {
    starId: 28,
    type: 'checkbox',
    stem: 'Quais os dados abaixo podem ser convertidos para número?',
    options: ['"24"', 'verdadeiro', '"9999"', '[42]'],
    correctOptions: ['"24"', '"9999"'],
  },
  {
    starId: 28,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que seja retornado um texto.',
    lines: [
      {
        id: 1,
        texts: ['funcao converterEmTexto(dado) {'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['retorna ', 'dropZone', '(dado)'],
        indentLevel: 2,
      },
      {
        id: 3,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['converterEmTexto(', 'dropZone', ');'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: '500',
      },
      {
        id: 2,
        label: 'texto',
      },
      {
        id: 3,
        label: 'inteiro',
      },
      {
        id: 4,
        label: 'real',
      },
    ],
    correctItemsIdsSequence: [2, 1],
  },
  {
    starId: 29,
    type: 'selection',
    stem: 'Qual das funções abaixo é uma função avançada (alta ordem)?',
    code: `funcao fazerSaudacao(nome) {
    retorna "Olá, \${nome}! Tudo bem?";
}
    
  funcao retornarSaudacao(nome) {
    retorna fazerSaudacao(nome);
}

escreva(retornarSaudacao("John"));`,
    options: ['fazerSaudacao', 'escreva', 'retornarSaudacao', 'anônima'],
    answer: 'retornarSaudacao',
  },
  {
    starId: 29,
    type: 'drag-and-drop-click',
    stem: 'Complete o código para que todos nomes do vetor nomes estejam em maiúscula.',
    lines: [
      {
        id: 1,
        texts: ['var nomes = ["Star Yarts", "Doctor Boo", "The Hunger Aliens"]'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['funcao colocarEmMaiuscula(nome) {'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['retorna ', 'nome.', 'dropZone', '()'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 4,
        texts: ['var novosNomes = ', 'dropZone', '(nomes, colocarEmMaiuscula)'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'mapear',
      },
      {
        id: 2,
        label: 'filtrarPor',
      },
      {
        id: 3,
        label: 'maiuscula',
      },
      {
        id: 4,
        label: 'minuscula',
      },
    ],
    correctItemsIdsSequence: [3, 2],
  },
  {
    starId: 29,
    type: 'drag-and-drop-click',
    stem: 'Complete o "filtrarPor()" para que apenas números ímpares estejam no vetor impares.',
    lines: [
      {
        id: 1,
        texts: ['var numeros = [11, 22, 33, 44, 55]'],
        indentLevel: 0,
      },
      {
        id: 2,
        texts: ['funcao verificarImpar(', 'dropZone', ') {'],
        indentLevel: 0,
      },
      {
        id: 3,
        texts: ['retorna numero % 2 !== 0;'],
        indentLevel: 2,
      },
      {
        id: 4,
        texts: ['}'],
        indentLevel: 0,
      },
      {
        id: 5,
        texts: ['var impares = filtrarPor(', 'dropZone', ',', 'dropZone', ')'],
        indentLevel: 0,
      },
    ],
    dropItems: [
      {
        id: 1,
        label: 'verificarImpar',
      },
      {
        id: 2,
        label: 'numeros',
      },
      {
        id: 3,
        label: 'numero',
      },
      {
        id: 4,
        label: 'verificarPar',
      },
    ],
    correctItemsIdsSequence: [3, 2, 1],
  },
  {
    starId: 29,
    type: 'open',
    stem: 'QUANTOS itens terão no vetor racasComXeno?',
    code: `var racas = [
        "Xenomorfo", 
        "Zogxenon", 
        "Alien", 
        "Troxenor"
];
var racasComXeno = filtrarPor(racas, funcao(raca) {
    raca.minusculo();
    retorna raca.inclui("xeno");
});`,
    answer: '3',
  },
  {
    starId: 29,
    type: 'selection',
    stem: 'Qual função avançada de vetor eu teria que usar se eu quisesse que a quantidade de itens do vetor original se mantivesse?',
    options: ['mapear()', 'filtrarPor()', 'inclui()', 'numerar()'],
    answer: 'mapear()',
  },
];
