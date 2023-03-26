export const challenges = [
  {
    id: 1,
    starId: 4,
    title: 'Enviar mensagem',
    texts: [
      {
        type: 'default',
        body: 'Parece que finalmente você encontrou um planeta à vista! Para veriifcar se há vida inteligente, você pode enviar uma mensagem dizendo: "Olá, mundo!". Para fazer isso você deve escrever um programa que receba essa mensagem e a escreva, sendo a entrada e saída de dados respectivamente, veja o exemplo',
      },
      {
        type: 'code',
        body: `Entrada: "Olá, mundo!"
Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Lembre-se de manter o comando leia( ) para capturar os dados de entrada',
      },
    ],
    testCases: [
      {
        input: ["'Olá, mundo!'"],
        expectedOutput: 'Olá, mundo!',
        isLocked: false,
      },
    ],

    code: `
var mensagem = leia()`,
    difficulty: 'easy',
    categories: ['básico'],
  },
  {
    id: 2,
    starId: 8,
    title: 'Análise do ambiente',
    texts: [
      {
        type: 'default',
        body: 'Parece que permitiram você adentrar no planeta Datahon! Entretanto, é melhor fazer uma análise do ambiente antes de fazer um pouso seguro, o que o seu foguete já fez de antemão, retornando para você dados do planeta como nome, idade, temperatura e se tem ar respirável.',
      },
      {
        type: 'default',
        body: 'Sua missão é escrever qual o tipo de dado de cada um na ordem em que são declarados, veja um exemplo',
      },
      {
        type: 'code',
        body: `var nomeEstrela = "Proxima Centauri"
var temCorAmarela = verdadeiro

escreva("tipo nomeEstrela: " + "texto" + ", tipo nomeEstrela: lógico")

saida: tipo nomeEstrela: texto, tipo temCorAmarela: lógico`,
      },
      {
        type: 'alert',
        body: 'Dica: você pode colocar o nome dos tipos em variáveis e concatená-las com os textos, mas lembre-se de respeitar as vírgulas e os espaços',
      },
    ],
    testCases: [
      {
        input: null,
        expectedOutput: `lógico`,
        isLocked: false,
      },
    ],

    code: `
var nome = "Datahon"
var temperatura = 53.5
var temOxigenio = falso

var tipoNome
var tipoTemperatura
var tipoOxigenio

escreva("lógico")`,
    difficulty: 'easy',
    categories: ['básico', 'textos', 'números'],
  },
  {
    id: 2,
    starId: 8,
    title: 'Análise do ambiente',
    texts: [
      {
        type: 'default',
        body: 'Parece que permitiram você adentrar no planeta Datahon! Entretanto, é melhor fazer uma análise do ambiente antes de fazer um pouso seguro, o que o seu foguete já fez de antemão, retornando para você dados do planeta como nome, idade, temperatura e se tem ar respirável.',
      },
      {
        type: 'default',
        body: 'Sua missão é escrever qual o tipo de dado de cada um na ordem em que são declarados, veja um exemplo',
      },
      {
        type: 'code',
        body: `var nomeEstrela = "Proxima Centauri"
var temCorAmarela = verdadeiro

escreva("tipo nomeEstrela: " + "texto" + ", tipo nomeEstrela: lógico")

saida: tipo nomeEstrela: texto, tipo temCorAmarela: lógico`,
      },
      {
        type: 'alert',
        body: 'Dica: você pode colocar o nome dos tipos em variáveis e concatená-las com os textos, mas lembre-se de respeitar as vírgulas e os espaços',
      },
    ],
    testCases: [
      {
        input: null,
        expectedOutput: `lógico`,
        isLocked: false,
      },
    ],

    code: `
var nome = "Datahon"
var temperatura = 53.5
var temOxigenio = falso

var tipoNome
var tipoTemperatura
var tipoOxigenio

escreva("lógico")`,
    difficulty: 'easy',
    categories: ['básico', 'textos', 'números'],
  },
  {
    id: 12,
    starId: null,
    title: 'Somar energias',
    texts: [
      {
        type: 'default',
        body: 'Em uma galáxia muito, muito distante, há uma nave espacial que precisa de um sistema para calcular a soma de energia de duas fontes diferentes.',
      },
      {
        type: 'default',
        body: 'Então, crie uma função que receba dois valores de energia como argumentos e retorne a soma total de energia',
      },
      {
        type: 'markdown',
        body: `
Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Não se esqueça de usar o "retorna" na função',
      },
    ],
    testCases: [
      {
        input: [3, 2],
        expectedOutput: 5,
        isLocked: false,
      },
      {
        input: [-3, -6],
        expectedOutput: -9,
        isLocked: false,
      },
      {
        input: [7, 3],
        expectedOutput: 3,
        isLocked: false,
      },
    ],

    code: `
function calcularEnergia(energia1, energia2) {

}`,
    difficulty: 'hard',
    categories: ['básico', 'matemática', 'números'],
  },
  {
    id: 13,
    starId: null,
    title: 'Pedido de ajuda',
    texts: [
      {
        type: 'default',
        body: 'Você está navegando pelo espaço e de repente seu foguete quebra 😢. Tudo o que resta fazer é enviar uma messagem de socorro espaço a fora',
      },
      {
        type: 'default',
        body: 'Logo, sua missão é criar uma simples função que retorne "Socorro, preciso de ajuda!"',
      },
      {
        type: 'code',
        body: `
Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Não se esqueça de usar o "retorna" na função',
      },
      {
        type: 'alert',
        body: 'Lembre-se de prestar atenção nas letras maiúsculas e minúsculas, assim como a pontuação',
      },
    ],
    function: 'pedirAjuda()',
    testCases: [
      {
        input: [],
        expectedOutput: 'Socorro, preciso de ajuda!',
        isLocked: false,
      },
    ],
    code: `
function hello() {

}`,
    difficulty: 'easy',
    categories: ['básico', 'textos'],
  },
  {
    id: 14,
    starId: null,
    title: 'Conversor de números para crons',
    texts: [
      {
        type: 'default',
        body: 'Você é um engenheiro de nave espacial em uma missão para explorar uma galáxia distante. A tripulação da nave utiliza uma unidade de tempo espacial para medir o tempo, que é diferente da unidade de tempo terrestre.',
      },
      {
        type: 'default',
        body: 'A unidade de tempo espacial é chamada de "cron". Um cron é igual a 60 minutos terrestres. Por exemplo, se a tripulação diz que um evento ocorrerá em 3 crons, isso significa que o evento ocorrerá em 3 x 60 = 180 minutos terrestres.',
      },
      {
        type: 'default',
        body: 'Você precisa criar uma função chamada minutosParaCrons que converta uma quantidade de minutos terrestres em crons.',
      },
      {
        type: 'markdown',
        body: `
Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Não se esqueça de usar o "retorna" na função',
      },
      {
        type: 'alert',
        body: 'Dica: Lembre-se de que um cron é igual a 60 minutos terrestres.',
      },
    ],
    testCases: [
      {
        input: [300],
        expectedOutput: 5,
        isLocked: false,
      },
      {
        input: [180],
        expectedOutput: 3,
        isLocked: false,
      },
      {
        input: [120],
        expectedOutput: 2,
        isLocked: false,
      },
    ],

    code: `
function converterMinutosParaCrons(minutos) {

}`,
    difficulty: 'easy',
    categories: ['básico', 'matemática', 'números'],
  },
];
