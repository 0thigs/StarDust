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
        expectedOutput: `tipo nome: texto, tipo temperatura: número, tipo temOxigênio: lógico`,
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

escreva()`,
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
        expectedOutput: `tipo nomeEstrela: texto, tipo nomeEstrela: lógico`,
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
        body: `Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Não são se esqueça de usar o "retorna" na função e também não alterar o nome da função que colocamos',
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
        type: 'code',
        body: `
Entrada: 240
Saida: 4

Entrada: 360
Saida: 6`,
      },
      {
        type: 'alert',
        body: 'Não são se esqueça de usar o "retorna" na função e também não alterar o nome da função que colocamos',
      },
      {
        type: 'alert',
        body: 'Dica: Lembre-se de que um cron é igual a 60 minutos terrestres.',
      },
    ],
    function: 'converterMinutosParaCrons()',
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
  {
    id: 14,
    starId: null,
    title: 'Detector de naves bumerangue',
    texts: [
      {
        type: 'default',
        body: 'Em uma galáxia muito distante, existe uma frota de naves espaciais que patrulham o espaço em busca de ameaças alienígenas.',
      },
      {
        type: 'default',
        body: 'O código de cada uma dessas naves é composto por três números de 1 a N e são equipadas com um dispositivo que pode detectar a presença de outras naves em um raio de alcance.',
      },
      {
        type: 'default',
        body: 'Aqui está o desafio: escreva uma função conteBumerangues que retorne o número de vezes que uma nave do tipo "bumerangue" é detectada em uma determinada patrulha. O código de uma nave "bumerangue" possui uma sequência de três números consecutivos em que a primeiro e a terceiro são o mesmo, mas o segundo número é diferente.',
      },
      {
        type: 'default',
        body: 'Por exemplo, se o vetor de entrada for [1, 2, 1, 3, 1, 4, 2, 5, 2, 6], a função deve retornar 2, porque existem duas sequências de três números consecutivos em que a primeira e a terceiro número são iguais: [1, 2, 1] e [2, 5, 2].',
      },
      {
        type: 'code',
        body: `
Entrada: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
Resultado: 3
Explicacao: a partir do vetor de entrada é possível extrair 3 naves bumerangues: [3, 7, 3], [1, 5, 1], [2, -2, 2]

Entrada: [9, 5, 9, 5, 1, 1, 1]
Resultado: 2
Explicacao: a partir do vetor de entrada é possível extrair 2 naves bumerangues: [9, 5, 9], [5, 9, 4]

Entrada: [1, 7, 1, 7, 1, 7, 1]
Resultado: 5
Explicacao: a partir do vetor de entrada é possível extrair 5 naves bumerangues: [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], e [1, 7, 1]`,
      },
      {
        type: 'alert',
        body: 'Observe que [5, 5, 5] (vetor com 3 dígitos identicos) não é considerado uma nave bumerangue porque o valor do meio é identico ao primeiro e o terceiro.',
      },
    ],
    function: 'conteNavesBumerangues()',
    testCases: [
      {
        input: [[5, 6, 6, 7, 6, 3, 9]],
        expectedOutput: 1,
        isLocked: false,
      },
      {
        input: [[4, 4, 4, 9, 9, 9, 9]],
        expectedOutput: 0,
        isLocked: true,
      },
      {
        input: [[1, 2, 1, 3, 1, 4, 2, 5, 2, 6]],
        expectedOutput: 3,
        isLocked: true,
      },
    ],

    code: `
function conteNavesBumerangues(numeros) {

}`,
    difficulty: 'hard',
    categories: ['vetores', 'laços'],
  },
];

[
  {
    starId: null,
    title: 'Área do escudo protetor',
    texts: [
      {
        type: 'default',
        body: 'Em um planeta distante da galáxia, os habitantes da Terra foram desafiados a calcular a área de um triângulo que representa o escudo protetor da cidade espacial.',
      },
      {
        type: 'default',
        body: 'Sua tarefa é calcular a área desse triângulo analisando sua base e altura.',
      },
      {
        type: 'code',
        body: `
    Entrada: (3, 2)
    Resultado: 3
    
    Entrada: (7, 4)
    Resultado: 14
    
    Entrada: (10, 10)
    Resultado: 50`,
      },
      {
        type: 'alert',
        body: 'Lembre-se: a área de um triângulo é base vezes a altura dividido por 2',
      },
      {
        type: 'alert',
        body: 'Não são se esqueça de usar o "retorna" na função e também não alterar o nome da função que colocamos',
      },
    ],
    function: 'converterMinutosParaCrons',
    testCases: [
      {
        input: [10, 5],
        expectedOutput: 25,
        isLocked: false,
      },
      {
        input: [8, 12],
        expectedOutput: 48,
        isLocked: false,
      },
      {
        input: [15, 3],
        expectedOutput: 22.5,
        isLocked: false,
      },
    ],

    code: `
funcao calcularAreaEscudo(base, altura) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
];
