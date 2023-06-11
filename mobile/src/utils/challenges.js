export const challenges = [
  {
    id: 1,
    starId: 4,
    title: 'Enviar mensagem',
    texts: [
      {
        type: 'default',
        body: 'Parece que finalmente você encontrou um planeta à vista!',
      },
      {
        type: 'default',
        body: 'Para verifcar se há vida inteligente, você pode enviar uma mensagem dizendo: "Olá, mundo!".',
      },
      {
        type: 'default',
        body: 'Para fazer isso você deve fazer um programa na aba de código que receba essa mensagem e a escreva, sendo a entrada e saída de dados respectivamente.',
      },
      {
        type: 'default',
        body: 'Veja o exemplo para entender melhor:',
      },
      {
        type: 'code',
        body: `Entrada: "Olá, mundo!"
Saída: "Olá, mundo!"`,
      },
      {
        type: 'list',
        body: 'Se o resultado do seu código passar no teste de caso na aba de resultado, você conclui o desafio 🎉.',
      },
      {
        type: 'alert',
        body: 'Lembre-se de manter o comando leia( ) no programa para capturar os dados de entrada.',
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
var mensagem = leia()

// Escreva seu código aqui embaixo
`,
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
        body: 'Parece que permitiram você adentrar no planeta Datahon! Entretanto, é melhor fazer uma análise do ambiente antes de fazer um pouso seguro, o que o seu foguete já fez de antemão, retornando para você dados do planeta como nome, temperatura e se tem ar respirável.',
      },
      {
        type: 'list',
        body: 'Sua missão é escrever qual o tipo de dado de cada um na ordem em que são declarados, veja um exemplo:',
      },
      {
        type: 'code',
        body: `var nomeEstrela = "Proxima Centauri"
var temperatura = 100
var temCorAmarela = falso

escreva(\${nomeEstrela}: texto, \${temperatura}: numero, \${temCorAmarela}: falso")

Resultado: 
Proxima Centauri: texto, 100: número, falso: lógico`,
      },
      {
        type: 'alert',
        body: 'Dica: você pode colocar o nome dos tipos em variáveis e concatená-las com os textos usando interpolação ou operador de adição.',
      },
    ],
    testCases: [
      {
        input: null,
        expectedOutput: `Datahon: texto, 53.5: número, falso: lógico`,
        isLocked: false,
      },
    ],

    code: `
var nome = "Datahon"
var temperatura = 53.5
var temOxigenio = verdadeiro

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
        body: 'Não são se esqueça de usar o "retorna" na função e também não alterar o nome da função que colocamos.',
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
  {
    id: 15,
    starId: null,
    title: 'Chuva de asteroides',
    texts: [
      {
        type: 'default',
        body: 'Faz alguns minutos que seu foguete saiu para o espaço, mas você já encontrou um planeta à vista!.',
      },
      {
        type: 'default',
        body: 'Porém, há três asteroides gigantes vindo em sua direção.',
      },
      {
        type: 'list',
        title: 'Que??',
        body: 'Seu dever é testar se o escudo protetor do foguete está ativo (valor verdadeiro) e que a resistência (valor 700) é maior que a soma das forças dos três asteroides (A, B, C).',
      },
      {
        type: 'code',
        body: `
Entrada: 100, 200, 300, verdadeiro
Resultado: verdadeiro
// Explicação:
// a soma das forças dá 600
// e a resistencia é 700.
// Como o escudo está ativo (verdadeiro)
// e essa soma é menor que 700, 
// logo o resultado é verdadeiro

Entrada: 500, 500, 500, verdadeiro
Resultado: falso
// Explicação:
// a soma é 1500 e a resitência é 700, 
// logo o resultado já é falso

Entrada: 50, 100, 150, falso
Resultado: falso
// Explicação: 
// a soma é 300 e a resitência é 700,
// porém o escudo não está ativo,
// então o resultado é falso`,
      },
      {
        type: 'alert',
        body: 'Dica: coloque a soma das forças em uma variável chamada soma e depois compare se ela é maior ou não que a resistência.',
      },
      {
        type: 'alert',
        body: 'Não se esqueça de comparar também se o escudo está ativo.',
      },
      {
        type: 'alert',
        body: 'O comando "leia()" é super importante para resolver o desafio. Então, por favor, não remova nenhum comando "leia()".',
      },
    ],
    function: null,
    testCases: [
      {
        input: [100, 100, 100, 'verdadeiro'],
        expectedOutput: 'verdadeiro',
        isLocked: false,
      },
      {
        input: [300, 400, 800, 'verdadeiro'],
        expectedOutput: 'falso',
        isLocked: false,
      },
      {
        input: [50, 200, 200, 'falso'],
        expectedOutput: 'falso',
        isLocked: false,
      },
      {
        input: [100, 500, 100, 'falso'],
        expectedOutput: 'falso',
        isLocked: false,
      },
    ],

    code: `
var asteroideA = leia();
var asteroideB = leia();
var asteroideC = leia();

var escudoAtivo = leia();

var resitencia = 700`,
    difficulty: 'easy',
    categories: ['matemática', 'básico', 'números'],
  },
  {
    id: 16,
    starId: null,
    title: 'Quantos planetas habitados?',
    texts: [
      {
        type: 'default',
        body: 'Em uma galáxia distante, existem várias naves espaciais que estão explorando novos mundos.',
      },
      {
        type: 'default',
        body: 'Cada nave tem sensores que coletam dados sobre a presença de diferentes formas de vida nos planetas visitados.',
      },
      {
        type: 'default',
        body: 'Os sensores são controlados por um sistema de inteligência artificial que detecta a presença ou ausência de vida com base em diferentes fatores.',
      },
      {
        type: 'default',
        body: 'Você tem uma funcão que recebe um vetor de valores lógicos coletados pelos sensores de várias naves espaciais, representando a presença ou ausência de vida em diferentes planetas.',
      },
      {
        type: 'default',
        body: 'Seu dasafio é: fazer com que a função deve retorne o número de valores "verdadeiro" no vetor.',
      },
      {
        type: 'code',
        body: `
Entrada: [verdadeiro, falso, falso, verdadeiro, falso]
Resultado: 2

Entrada: [falso, falso, falso, falso]
Resultado: 0

Entrada: []
Resultado: 2`,
      },
      {
        type: 'alert',
        body: 'A função deve retornar 0 se o vetor for vazio.',
      },
      {
        type: 'alert',
        body: 'Não se preocupe, todos os valores dos vetores são do tipo lógico',
      },
    ],
    functionName: 'quantosPlanetasHabitados',
    testCases: [
      {
        input: [['verdadeiro', 'falso', 'verdadeiro', 'verdadeiro', 'falso']],
        expectedOutput: 3,
        isLocked: false,
      },
      {
        input: [['falso', 'falso', 'falso']],
        expectedOutput: 0,
        isLocked: false,
      },
      {
        input: [['verdadeiro', 'verdadeiro', 'verdadeiro', 'verdadeiro']],
        expectedOutput: 4,
        isLocked: false,
      },
    ],

    code: `
function quantosPlanetasHabitados(planetas) {
    
}`,
    difficulty: 'easy',
  },

  {
    starId: null,
    title: 'Perímetro espacial',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Você é um engenheiro espacial responsável por construir uma nave em forma de retângulo.',
      },
      {
        type: 'list',
        body: 'Sua missão é calcular o perímetro desse retângulo em unidades espaciais, cosiderando sua largura e altura.',
      },
      {
        type: 'code',
        body: `
Entrada: 6, 7
Resultado: 26

Entrada: 20, 10
Resultado: 60

Entrada: 2, 9
Resultado: 22`,
      },
      {
        type: 'alert',
        body: 'Não são se esqueça de usar o "retorna" na função e também não alterar o nome da função que colocamos.',
      },
      {
        type: 'alert',
        body: 'Considere que o retângulo espacial não possui cantos arredondados e que as unidades espaciais são números inteiros.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [10, 30],
        expectedOutput: 80,
        isLocked: false,
      },
      {
        input: [20, 20],
        expectedOutput: 80,
        isLocked: false,
      },
      {
        input: [5, 8],
        expectedOutput: 18,
        isLocked: false,
      },
    ],

    code: `function calcularPerimetro(altura, largura) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Perímetro espacial',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Em um futuro distante, várias espécies alienígenas se unem para explorar o espaço. Cada espécie possui uma lista de espaçonaves identificadas por números, letras ou combinações.',
      },
      {
        type: 'list',
        body: 'Para facilitar a união, você deve unir as listas/vetores de cada espécie em uma só, para que todos possam explorar juntos.',
      },
      {
        type: 'code',
        body: `
Entrada: [1, 3, 5], [2, 6, 8]
Resultado: [1, 3, 5, 2, 6, 8]

Entrada: [7, 8], [10, 9, 1, 1, 2]
Resultado: [7, 8, 10, 9, 1, 1, 2]

Entrada: [4, 5, 1], [3, 3, 3, 3, 3]
Resultado: [4, 5, 1, 3, 3, 3, 3, 3]`,
      },
      {
        type: 'alert',
        body: 'Dica: Você pode resolver esse desafio usando dois laços "para", um para cada vetor e então juntar em um vetor único.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [
          [1, 2, 3],
          [4, 5, 6],
        ],
        expectedOutput: [[1, 2, 3, 4, 5, 6]],
        isLocked: false,
      },
      {
        input: [
          [0, 7, 8],
          [100, 200],
        ],
        expectedOutput: [[0, 7, 8, 100, 200]],
        isLocked: false,
      },
      {
        input: [[], [1, 2, 3]],
        expectedOutput: [[1, 2, 3]],
        isLocked: false,
      },
    ],

    code: `function calcularPerimetro(altura, largura) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Planetas pares encontrados',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Escapamos da explosão por um triz. Só que agora resta procurar outro planeta para explorar.',
      },
      {
        type: 'default',
        title: null,
        body: 'O radar do foguete indentificou uma quantidade de planetas, porém ele diz que apenas os planetas pares realmente são seguros',
      },
      {
        type: 'list',
        title: 'Desafio',
        body: 'Da quantidade total de planetas identificados (começando pelo 1) o seu papel é mostrar a quantidade de planetas são seguros.',
      },
      {
        type: 'code',
        body: `
Entrada: 8
Resultado: 4
Explicacao: entre 1 e 8 há 4 números pares

Entrada: 13
Resultado: entre 1 e 13 há 6 números pares

Entrada: 1
Resultado: 0
Explicacao: entre 1 e 1 não há números pares`,
      },
      {
        type: 'alert',
        body: 'Para resolver esse desafio, você pode usar qualquer um dos 3 tipos de laço (para, enquanto ou fazer enquanto)',
      },
      {
        type: 'alert',
        body: 'Dica: para saber se um número é par, você pode pegar o módulo do número por 2, usando o operador "%", ou seja, dividir por dois e verificar se há resto de divisão. Por exemplo: 4 é par, pois 4 módulo 2 (4 % 2) é igual a zero; 5 é ímpar, pois 5 módulo 2 é diferente de zero (5 % 2).',
      },
    ],
    function: null,
    testCases: [
      {
        input: [10],
        expectedOutput: 5,
        isInputArray: true,
        isLocked: false,
      },
      {
        input: [7],
        expectedOutput: 3,
        isArray: true,
        isLocked: false,
      },
      {
        input: [1],
        expectedOutput: 0,
        isLocked: false,
      },
      {
        input: [0],
        expectedOutput: 0,
        isLocked: false,
      },
    ],

    code: `function somarResistências(altura, largura) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Resistências em circuitos',
    texts: [
      {
        type: 'default',
        body: 'No planeta X-23, uma equipe de engenheiros espaciais precisa calcular a soma das resistências em uma série de circuitos de energia que alimentam as espaçonaves.',
      },
      {
        type: 'default',
        body: ' No entanto, eles enfrentam um problema único: as resistências são representadas por cristais mágicos encontrados apenas em planetas distantes.',
      },
      {
        type: 'default',
        title: null,
        body: 'Cada cristal mágico tem um valor de resistência associado a ele, medido em unidades místicas chamadas "ohms". A equipe de engenheiros precisa somar todas as X-resistências em uma série de cristais para determinar a resistência total do circuito.',
      },
      {
        type: 'list',
        title: 'Desafio',
        body: 'Sua tarefa é retornar a soma total das resistências de um vetor contendo valores de resistência (ohms) dos cristais mágicos em um circuito.',
      },
      {
        type: 'code',
        body: `
Entrada: [3, 5, 2, 8]
Resultado: "18 ohms"

Entrada: [16, 3.5, 6]
Resultado: "25.5 ohms"

Entrada: [0.5, 0.5]
Resultado: "1 ohm"`,
      },
      {
        type: 'alert',
        body: 'O sigular de ohms é ohm, ou seja, se a soma do vetor for 1, o "ohm" tem que estar no singular.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [[2, 4, 6, 8, 10]],
        expectedOutput: "30 ohms",
        isLocked: false,
      },
      {
        input: [[0.8, 1.2, 2.6, 3.4, 0.5]],
        expectedOutput: "8.5 ohms",
        isLocked: false,
      },
      {
        input: [[2.5, 1.5, 3.2, 4.8]],
        expectedOutput: "12 ohms",
        isLocked: false,
      },
      {
        input: [[0.5, 0.3, 0.1, 0.1]],
        expectedOutput: "1 ohm",
        isLocked: false,
      },
    ],

    code: `function calcularPerimetro(altura, largura) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: '',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Você tem uma lista de naves espaciais no formato de objetos. Converta cada objeto em um vetor e retorne uma lista de vetores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Cada objeto possui as seguintes propriedades.',
      },
      {
        type: 'default',
        body: '. nome: o nome da nave (texto)\n. tripulacao: o número de tripulantes da nave(inteiro)',
      },
      {
        type: 'code',
        body: `
Entrada: {nome: 'USS Enterprise', tripulacao: 449}
Resultado: [['nome', 'USS Enterprise'], ['tripulacao', 449]]

Entrada: {nome: 'Millennium Falcon', tripulacao: 5}
Resultado: [['nome', 'Millennium Falcon'], ['tripulacao', 5]]

Entrada: {nome: 'Light Freighter', tripulacao: 24}
Resultado: [['nome', 'Light Freighter'], ['tripulacao', 24]]

Entrada: {}
Resultado: []`,
      },
      {
        type: 'alert',
        body: 'Caso a entrada seja um objeto vazio, o retorno deverá ser um vetor vazio também.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["{ nome: 'Serenity', tripulacao: 9 }"],
        expectedOutput: '[name: "Serenity", tripulacao: 9]',
        isLocked: false,
      },
      {
        input: ["{ nome: 'vashta nerada', tripulacao: 530 }"],
        expectedOutput: '[name: "vashta nerada", tripulacao: 530]',
        isLocked: false,
      },
      {
        input: ['{}'],
        expectedOutput: '[]',
        isLocked: true,
      },
    ],
    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Vetor de múltiplos',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Em uma galáxia distante, a tripulação de uma nave espacial precisa calcular uma lista de múltiplos de um determinado número para ajudar em seus cálculos de navegação.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, o desafio é: retornar um vetor',
      },
      {
        type: 'default',
        title: 'Só isso?',
        body: 'Não qualquer tipo de vetor. Você receberá dois valores: numero e tamanho.',
      },
      {
        type: 'list',
        body: 'O vetor em questão deve ter a quantidades de números igual a "tamanho", contendo múltiplos do valor "numero".',
      },
      {
        type: 'code',
        body: `
Entrada: 7, 5
Resultado: [7, 14, 21, 28, 35]
Explicacao: o vetor tem cinco números, pois tamanho é igual a 5, e todos eles são múltiplos de 7

Entrada: 12, 2
Resultado: [12, 24]
Explicacao: o vetor tem dois números, pois tamanho é igual a 10, e todos eles são múltiplos de 12

Entrada: 17, 6
Resultado: [17, 34, 51, 68, 85, 102]
Explicacao: o vetor tem seis números, pois tamanho é igual a 6, e todos eles são múltiplos de 17`,
      },
      {
        type: 'alert',
        body: 'Note que o valor "numero" também está presente no vetor.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [7, 5],
        expectedOutput: [7, 14, 21, 28, 35],
        isLocked: false,
      },
      {
        input: [17, 6],
        expectedOutput: [17, 34, 51, 68, 85, 102],
        isLocked: false,
      },
      {
        input: [3, 1],
        expectedOutput: [3],
        isLocked: false,
      },
      {
        input: [2, 0],
        expectedOutput: [],
        isLocked: true,
      },
    ],
    code: `funcao concatenarAmostras(amostras) {
    
}`,
    difficulty: 'medium',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Amostras de planetas',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Suponha que uma equipe de astronautas tenha descoberto uma nave alienígena e está tentando decifrar o código de segurança para acessá-la.',
      },
      {
        type: 'default',
        title: null,
        body: 'Eles descobriram que o código de segurança consiste em um número repdigit, ou seja, um número positivo em que todos os dígitos são iguais.',
      },
      {
        type: 'list',
        body: 'Seu dever é recebe um número e verificar se ele é um repdigit. Seu programa deve retornar verdadeiro se o número for de fato um repdigit e falso caso contrário.',
      },
      {
        type: 'code',
        body: `
Entrada: 66
Resultado: verdadeiro
Explicacao: 66 tem dois dígitos, que são todos iguais 

Entrada: 113
Resultado: falso
Explicacao: 113 tem dois três, mas nem todos são iguais 

Entrada: -11
Resultado: falso
Explicacao: Um repdigit tem que ser um número positivo
`,
      },
      {
        type: 'alert',
        body: 'Caso o número seja 0, o programa deve retornar verdadeiro.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [666],
        expectedOutput: 'verdadeiro',
        isLocked: false,
      },
      {
        input: [12345],
        expectedOutput: 'falso',
        isLocked: false,
      },
      {
        input: [11111111],
        expectedOutput: 'verdadeiro',
        isLocked: false,
      },
      {
        input: [0],
        expectedOutput: 'verdadeiro',
        isLocked: true,
      },
    ],

    code: `funcao concatenarAmostras(amostras) {
    
}`,
    difficulty: 'medium',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: '',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Você tem uma lista de naves espaciais no formato de objetos. Converta cada objeto em um vetor e retorne uma lista de vetores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Cada objeto possui as seguintes propriedades.',
      },
      {
        type: 'list',
        body: '. nome: o nome da nave (texto)\n. tripulacao: o número de tripulantes da nave(inteiro)',
      },
      {
        type: 'code',
        body: `
Entrada: {nome: 'USS Enterprise', tripulacao: 449}
Resultado: [['nome', 'USS Enterprise'], ['tripulacao', 449]]

Entrada: {nome: 'Millennium Falcon', tripulacao: 5}
Resultado: [['nome', 'Millennium Falcon'], ['tripulacao', 5]]

Entrada: {nome: 'Light Freighter', tripulacao: 24}
Resultado: [['nome', 'Light Freighter'], ['tripulacao', 24]]

Entrada: {}
Resultado: []`,
      },
      {
        type: 'alert',
        body: 'Caso a entrada seja um objeto vazio, o retorno deverá ser um vetor vazio também.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["{ nome: 'Serenity', tripulacao: 9 }"],
        expectedOutput: '[name: "Serenity", tripulacao: 9]',
        isLocked: false,
      },
      {
        input: ["{ nome: 'vashta nerada', tripulacao: 530 }"],
        expectedOutput: '[name: "vashta nerada", tripulacao: 530]',
        isLocked: false,
      },
      {
        input: ['{}'],
        expectedOutput: '[]',
        isLocked: true,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Contando batatas',
    texts: [
      {
        type: 'default',
        body: 'No distante planeta Nebulosa Potatonia, uma civilização de seres espaciais com uma predileção por batatas criou uma variedade especial de batatas intergalácticas.',
      },
      {
        type: 'list',
        title: 'Desafio',
        body: 'Sua tarefa é retornar a quantidade de batatas de um dado texto contendo diferentes tipos de ingredientes separadas por vírgulas.',
      },
      {
        type: 'code',
        body: `
Entrada: "Batata,Feijão,Batata"
Resultado: 2

Entrada: "Arroz,Batata,Batata,Batata,Tomate"
Resultado: 3

Entrada: "Cenoura,Feijão,Alface"
Resultado: 0`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Dica matadora: Você pode transformar o texto em um vetor e contar quantas batatas tem.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ['\"Batata,Arroz,Batata,Feijão,Batata\"'],
        expectedOutput: 3,
        isLocked: false,
      },
      {
        input: ['\"Cenoura,Arroz,Tomate,Batata,Alface\"'],
        expectedOutput: 1,
        isLocked: false,
      },
      {
        input: ['\"Batata,Batata,Batata,Batata\"'],
        expectedOutput: 4,
        isLocked: false,
      },
      {
        input: ['\"Arroz,Feijão,Cenoura,Tomate\"'],
        expectedOutput: 0,
        isLocked: false,
      },
    ],

    code: `funcao contarBatatas(alimentos) {

}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Removendo textos',
    texts: [
      {
        type: 'default',
        body: 'No planeta Alpha Centauri, os habitantes são seres de diferentes espécies, incluindo criaturas mágicas e seres extraterrestres avançados',
      },
      {
        type: 'default',
        title: 'Legal!',
        body: 'Eles precisam de sua ajuda para filtrar uma lista de elementos em um vetor, contendo elementos de diferentes tipos, como números, textos e lógicos.',
      },
      {
        type: 'list',
        title: 'Desafio',
        body: 'Sua tarefa é retornar esse vetor mantendo apenas os elementos que não são do tipo texto.',
      },
      {
        type: 'code',
        body: `
var alimentos = [
    "lentilha lunar"
    "sapo lunar"
    "iogurte de gelo"
    "sapo lácteo"
];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Sapo?',
        body: 'Por algum motivo o foguete incluiu sapos entre os alimentos, eca!',
      },
      {
        type: 'list',
        title: 'Desafio:',
        body: 'Seu papel é remover todos os itens do vetor alimentos que incluam a palavra "sapo" no nome.',
      },
      {
        type: 'code',
        body: `
Entrada: [pimentão, sapo de só, melancia]
Resultado: [pimentão, melancia]

Entrada: [sapo de caju, sapo kiwi, milho de ricota]
Resultado: [milho de ricota]

Entrada: [cevada, tamarindo, sapo coalhado]
Resultado: [cevada, tamarindo]`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Para facilitar seu trabalho já coloquei um laço "para-cada" no seu código.',
      },
      {
        type: 'alert',
        body: 'Lembre-se dos métodos de vetor, caso esqueça algum você pode conferir no dicionário no menu superior.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [["'manga'", "'sapo gasoso'", "'berinjela'"]],
        expectedOutput: 'manga,berinjela',
        isLocked: false,
      },
      {
        input: [["'sapo condensado'", "'cebola doce'", "'camarão de batata'", "'sapo de morango'"]],
        expectedOutput: 'cebola doce,camarão de batata',
        isLocked: false,
      },
      {
        input: [["'sorvete de sapo'", "'requeijão'"]],
        expectedOutput: 'requeijão',
        isLocked: true,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Removendo sapos',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Enfim, são e salvos em nosso foguete. Está com fome?',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'O foguete no caminho ao resgate pegou vários alimentos para fazer nosso jantar, veja alguns:',
      },
      {
        type: 'code',
        body: `
var alimentos = [
    "lentilha lunar"
    "sapo lunar"
    "iogurte de gelo"
    "sapo lácteo"
];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Sapo?',
        body: 'Por algum motivo o foguete incluiu sapos entre os alimentos, eca!',
      },
      {
        type: 'list',
        title: 'Desafio:',
        body: 'Seu papel é remover todos os itens do vetor alimentos que incluam a palavra "sapo" no nome.',
      },
      {
        type: 'code',
        body: `
Entrada: [pimentão, sapo de só, melancia]
Resultado: [pimentão, melancia]

Entrada: [sapo de caju, sapo kiwi, milho de ricota]
Resultado: [milho de ricota]

Entrada: [cevada, tamarindo, sapo coalhado]
Resultado: [cevada, tamarindo]`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Para facilitar seu trabalho já coloquei um laço "para-cada" no seu código.',
      },
      {
        type: 'alert',
        body: 'Lembre-se dos métodos de vetor, caso esqueça algum você pode conferir no dicionário no menu superior.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [["'manga'", "'sapo gasoso'", "'berinjela'"]],
        expectedOutput: 'manga,berinjela',
        isLocked: false,
      },
      {
        input: [["'sapo condensado'", "'cebola doce'", "'camarão de batata'", "'sapo de morango'"]],
        expectedOutput: 'cebola doce,camarão de batata',
        isLocked: false,
      },
      {
        input: [["'sorvete de sapo'", "'requeijão'"]],
        expectedOutput: 'requeijão',
        isLocked: true,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Removendo sapos',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Em uma galáxia distante, em meio a várias raças extraterrestres, há um animal escondido entre elas',
      },
      {
        type: 'default',
        body: 'Os alienígenas possuem nomes esquisitos e escritos em letras maiúsculas, como "YHJR" ou "WSDFKK"',
      },
      {
        type: 'default',
        body: 'Já os nomes de animais terrestres, como gato, vaca, cachorro etc, são escritos em letras minúsculas.',
      },
      {
        type: 'default',
        body: 'Contudo, os nomes desses seres estão embaralhados em um texto gigante, como "UgUNFYGaFYFYGtNUoH"',
      },
      {
        type: 'list',
        title: 'Desafio:',
        body: 'Sua tarefa é retornar o nome do animal terrestre dessa sopa de letras',
      },
      {
        type: 'default',
        body: 'Veja o exemplo para entender melhor:',
      },
      {
        type: 'code',
        body: `Entrada: "UgUNFYGaFYFYGtNUoH"
Resultado: "gato"

Entrada: "bEEFGBvFBRrHaUHlcNFYaYr"
Resultado: "vaca"

Entrada: "YFcaHUFBbczFBYhFBYLloGBYEFGBMENTrro"
Resultado: "cachorro"`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Note que apesar do nome do animal está espalhado entra várias letras, a ordem das letras que compõem o nome do animal permanece na ordem correta.',
      },
      {
        type: 'alert',
        body: 'Lembre-se: as letras do nome do animal estão em minúscula, mas as demais em maiúscula.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["RrTEaOMTtPBoAPC"],
        expectedOutput: 'rato',
        isLocked: false,
      },
      {
        input: ["KPserFCVBMpenTLteDA"],
        expectedOutput: 'serpente',
        isLocked: false,
      },
      {
        input: ["caYWDYUOvaQWEvPaOLlo"],
        expectedOutput: 'cavalo',
        isLocked: true,
      },
      {
        input: ["RTTTUAforUWWmiASgPPPa"],
        expectedOutput: 'formiga',
        isLocked: true,
      },
    ],

    code: `funcao procurarAnimal(letras) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Removendo sapos',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Enfim, são e salvos em nosso foguete. Está com fome?',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'O foguete no caminho ao resgate pegou vários alimentos para fazer nosso jantar, veja alguns:',
      },
      {
        type: 'code',
        body: `
var alimentos = [
    "lentilha lunar"
    "sapo lunar"
    "iogurte de gelo"
    "sapo lácteo"
];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Sapo?',
        body: 'Por algum motivo o foguete incluiu sapos entre os alimentos, eca!',
      },
      {
        type: 'list',
        title: 'Desafio:',
        body: 'Seu papel é remover todos os itens do vetor alimentos que incluam a palavra "sapo" no nome.',
      },
      {
        type: 'code',
        body: `
Entrada: [pimentão, sapo de só, melancia]
Resultado: [pimentão, melancia]

Entrada: [sapo de caju, sapo kiwi, milho de ricota]
Resultado: [milho de ricota]

Entrada: [cevada, tamarindo, sapo coalhado]
Resultado: [cevada, tamarindo]`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Para facilitar seu trabalho já coloquei um laço "para-cada" no seu código.',
      },
      {
        type: 'alert',
        body: 'Lembre-se dos métodos de vetor, caso esqueça algum você pode conferir no dicionário no menu superior.',
      },
    ],
    function: null,
    testCases: [
      {
        input: [["'manga'", "'sapo gasoso'", "'berinjela'"]],
        expectedOutput: 'manga,berinjela',
        isLocked: false,
      },
      {
        input: [["'sapo condensado'", "'cebola doce'", "'camarão de batata'", "'sapo de morango'"]],
        expectedOutput: 'cebola doce,camarão de batata',
        isLocked: false,
      },
      {
        input: [["'sorvete de sapo'", "'requeijão'"]],
        expectedOutput: 'requeijão',
        isLocked: true,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Removendo sapos',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Em uma galáxia distante, em meio a várias raças extraterrestres, há um animal escondido entre elas',
      },
      {
        type: 'default',
        body: 'Os alienígenas possuem nomes esquisitos e escritos em letras maiúsculas, como "YHJR" ou "WSDFKK"',
      },
      {
        type: 'default',
        body: 'Já os nomes de animais terrestres, como gato, vaca, cachorro etc, são escritos em letras minúsculas.',
      },
      {
        type: 'default',
        body: 'Contudo, os nomes desses seres estão embaralhados em um texto gigante, como "UgUNFYGaFYFYGtNUoH"',
      },
      {
        type: 'list',
        title: 'Desafio:',
        body: 'Sua tarefa é identificar o nome do animal terrestre nessa sopa de letras',
      },
      {
        type: 'default',
        body: 'Veja o exemplo para entender melhor:',
      },
      {
        type: 'code',
        body: `Entrada: "UgUNFYGaFYFYGtNUoH"
Resultado: "gato"

Entrada: "bEEFGBvFBRrHaUHlcNFYaYr"
Resultado: "vaca"

Entrada: "YFcaHUFBbczFBYhFBYLloGBYEFGBMENTrro"
Resultado: "cachorro"`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Note que apesar do nome do animal está espalhado entra várias letras, a ordem das letras que compõem o nome do animal permanece correto.',
      },
      {
        type: 'alert',
        body: 'Lembre-se: as letras do nome do animal estão em minúscula, mas as demais em maiúscula.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["'RrTEaOMTtPBoAPC'"],
        expectedOutput: 'rato',
        isLocked: false,
      },
      {
        input: ["'KPserFCVBMpenTLteDA'"],
        expectedOutput: 'serpente',
        isLocked: false,
      },
      {
        input: ["'caYWDYUOvaQWEPOlLo'"],
        expectedOutput: 'cavalo',
        isLocked: true,
      },
      {
        input: ["'RTTTUAforUWWmiASgPPPa'"],
        expectedOutput: 'formiga',
        isLocked: true,
      },
    ],

    code: `funcao procurarAnimal(letras) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: '',
    texts: [
      {
        type: 'default',
        body: 'Em uma nave espacial, a tripulação está tentando enviar mensagens importantes para outras espaçonaves.',
      },
      {
        type: 'default',
        body: 'No entanto, o teclado principal da nave está com defeito e algumas teclas não estão funcionando corretamente. Isso dificulta a digitação correta das mensagens.Por exemplo, ao digitar "Olá, mundo", a mensagem pode ser enviada como "Oxá, zundo"',
      },
      {
        type: 'list',
        body: 'Sua tarefa é identificar quais teclas estão quebradas, ou seja, as teclas que foram digitadas incorretamente devido ao defeito do teclado.',
      },
      {
        type: 'default',
        body: 'Você receberá uma função chamada "identificarTeclas" recebendo dois parâmetros: a frase correta e a incorreta.',
      },
      {
        type: 'default',
        body: 'Você deve retornar um vetor contendo as letras que são diferentes entre os duas frases',
      },
      {
        type: 'code',
        body: `Entrada: 'missão em progresso', 'Millão em progrello'
Saída: ['s']

Entrada: 'alien encontrado', 'Alien enzongrado'
Saída: ['c', 't']

Entrada: 'exploração bem-sucedida', 'Excloração fem-xucedida'
Saída: ['p', 'b', 's']
`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Note que no primeiro exemplo o vetor de resultado tem apenas a letra "s" e não quatro letras "s". Isso porque você deve identificar apenas uma tecla quebrada por frase, ou seja, o vetor retornado não pode conter letras repetidas',
      },
      {
        type: 'alert',
        body: 'Isso porque você deve identificar apenas uma tecla quebrada por frase, ou seja, o vetor retornado não pode conter letras repetidas',
      },
      {
        type: 'alert',
        body: 'Todas as frases passadas para você estarão em letras minúsculas.',
      },
      {
        type: 'alert',
        body: 'A ordem das letras do vetor a ser retornado deve corresponder com a ordem em que elas são encontradas na frase correta.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["'laser ativado'", "'baser ativago'"],
        expectedOutput: ['l', 'd'],
        isLocked: false,
      },
      {
        input: ["'energia está completa'", "'enerbiu está completu'"],
        expectedOutput: ['g', 'a'],
        isLocked: false,
      },
      {
        input: ["'sistema comprometido'", "'sisdemo bompromedido'"],
        expectedOutput: ['t', 'a', 'c'],
        isLocked: false,
      },
    ],

    code: `funcao identificarTeclas(fraseCorreta, fraseIconrreta) {

}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'Verificando número cósmico',
    texts: [
      {
        type: 'default',
        body: 'Em uma galáxia distante, existem criaturas místicas que residem em diferentes planetas. Cada criatura é identificada por um número único que representa sua essência cósmica.',
      },
      {
        type: 'default',
        body: 'É fornecido a você uma função chamada "verificarNumero", que receberá um número cósmico como parâmetro.',
      },
      {
        type: 'list',
        title: 'Tarefa',
        body: 'Sua tarefa é retornar verdadeiro se o número for menor ou igual a zero, e falso caso contrário.',
      },
      {
        type: 'default',
        body: 'Aqui está um exemplo para entender o desafio.',
      },
      {
        type: 'code',
        body: `
Entrada: 5
Resultado: falso

Entrada: 0
Resultado: verdadeiro

Entrada: -2
Resultado: verdadeiro`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Você terá que retornar um número, então não esqueça de utilizar a instrução "retorna" dentro da função.',
      },
    ],
    function: 'verificarNumero',
    testCases: [
      {
        input: [0],
        expectedOutput: 'verdadeiro',
        isLocked: false,
      },
      {
        input: [10],
        expectedOutput: 'falso',
        isLocked: false,
      },
      {
        input: [-5.5],
        expectedOutput: 'falso',
        isLocked: false,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
  {
    starId: null,
    title: 'O Castelo',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Chegamos ao castelo.',
      },
      {
        type: 'default',
        title: 'Que castelo meu?',
        body: 'Por que castelo? Porque a pessoa que estava pedindo a nossa ajuda é na verdade uma princesa.',
      },
      {
        type: 'default',
        body: 'Contudo, não fazemos a menor ideia onde ela está, e o desafio é encontrar ela no castelo.',
      },
      {
        type: 'default',
        body: 'O castelo em questão tem trê partes, representado por três vetores: topo, meio e baixo',
      },
      {
        type: 'code',
        body: `var castelo = [
    [1, 1, 1], // Parte do topo do castelo
    [1, 1, 1], // Parte do meio castelo
    [1, 1, 1], // Parte de baixo do castelo 
];`,
      },
      {
        type: 'default',
        body: 'Cada parte do castelo possui cômodos, que são representados por números, como você bem deve ter percebido.',
      },
      {
        type: 'default',
        body: 'Logo, o castelo é um vetor de vetores',
      },
      {
        type: 'default',
        body: 'Só que a parte do meio pode ter mais vetores, assim como cada parte pode ter mais ou menos números (cômodos).',
      },
      {
        type: 'code',
        body: `var castelo = [
    [1, 1], // Parte do topo do castelo
    [1, 1, 1], // Parte do meio castelo
    [1, 1, 1], // Parte do meio castelo
    [1, 1, 1, 1, 1], // Parte de baixo do castelo 
];`,
      },
      {
        type: 'default',
        body: 'A princesa é representada pelo número 0. Então o vetor que tiver o número será onde está a princesa.',
      },
      {
        type: 'code',
        body: `var castelo = [
    [1, 1], 
    [1, 1, 1],
    [1, 0, 1], // É aqui onde está a princesa
    [1, 1, 1, 1],  
];`,
      },
      {
        type: 'list',
        title: 'Desafio',
        body: 'A sua missão é indicar onde está a princesa. Você deve pegar o vetor correto e substituir o número zero pelo texto "princesa" em minúsculo, e por fim retornar esse vetor transformado.',
      },
      {
        type: 'code',
        body: `
Entrada: [[1,1,1], [1,0,1], [1,1,1]]
Resultado: [1, "princesa", 1]

Entrada: [[1,1,1], [1,1,1], [0,1,1,1]]
Resultado: ["princesa", 1, 1, 1]

Entrada: [[1,1,1], [1,1,1], [0,1,1]]
Resultado: ["princesa", 1, 1,]
 
Entrada: [[1,0], [1,1], [1,1], [1]]
Resultado: [1, "princesa"]`,
      },
      {
        type: 'alert',
        body: 'Você pode resolver esse desafio usando apenas laço, mas recomendo usar a função "filtrarPor()" e sem seguida "mapear()", pois assim será mais fácil.',
      },
      {
        type: 'alert',
        body: 'Já armei a função "procurarPrincesa()" onde você deve colocar o "retorna" do vetor de resultado. Então, por favor, não altere o nome dessa função.',
      },
      {
        type: 'alert',
        body: 'Dica: Você pode criar suas próprias funções em qualquer lugar do programa, desde que cada uma respeite o escopo da outra.',
      },
      {
        type: 'alert',
        body: 'Lembre-se: o retorno de uma função de alta ordem que usa vetores, como "filtrarPor" e "mapear" sempre será um vetor.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ['[[1,1,1], [1,0,1], [1,1,1]]'],
        expectedOutput: [[1, 'princesa', 1]],
        isLocked: false,
      },
      {
        input: ['[[1,1,1], [1,1,1], [0,1,1,1]]'],
        expectedOutput: [['princesa', 1, 1, 1]],
        isLocked: false,
      },
      {
        input: ['[[1,1,1], [1,1,1], [0,1,1]]'],
        expectedOutput: [['princesa', 1, 1]],
        isLocked: false,
      },
      {
        input: ['[[1,0], [1,1], [1,1], [1]]'],
        expectedOutput: [[1, 'princesa']],
        isLocked: false,
      },
    ],

    code: `funcao concatenarAmostras(amostras) {
    
}`,
    difficulty: 'medium',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
];

[
  {
    starId: null,
    title: 'Reconhecendo raça alienígena',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Conseguimos passar pelo portal roxo 🚀! Só que agora paramos em um planeta desconhecido.',
      },
      {
        type: 'default',
        title: null,
        body: 'Está vindo uma raça estranha em nossa direção, e o foguete está com problema em reconhecê-la. Contudo, ela possui caracteríscas comuns com outras raças no banco de dados (várias olhos e cor diferenciada)',
      },
      {
        type: 'default',
        title: null,
        body: 'Existem 3 raças com esse fenótipo:',
      },
      {
        type: 'list',
        body: 'Trox: se tiver 3 olhos e cor verde',
      },
      {
        type: 'list',
        body: 'Blonk: se tiver 2 olhos e cor laranja',
      },
      {
        type: 'list',
        body: 'Plimp: se tiver 6 olhos e cor marrom',
      },
      {
        type: 'list',
        title: 'O que fazer?',
        body: 'O seu desafio é escrever um programa que escreva o nome da raça de acordo com esses dados. Se não não se encaixarem em nenhuma das raças conhecidas, o programa deve escrever "desconhecido".',
      },
      {
        type: 'code',
        body: `Entrada: 3, "verde"
Resultado: Trox

Entrada: 2, "laranja"
Resultado: Blonk

Entrada: 6, "marrom"
Resultado: Plimp

Entrada: 1, "branco"
Resultado: desconhecido`,
      },
      {
        type: 'alert',
        body: 'Note que se a quantidade de olhos e cor não corresponder a nenhuma dessa raças, o resultado será desconhecido!',
      },
      {
        type: 'alert',
        body: 'Qual será a melhor estrutua para resolver esse desafio: "se senao se e senao" ou "escolha caso"? 🤔',
      },
      {
        type: 'alert',
        body: 'Não remova nenhum comando leia() do programa!',
      },
    ],
    function: null,
    testCases: [
      {
        input: [3, "'verde'"],
        expectedOutput: 'Trox',
        isLocked: false,
      },
      {
        input: [2, "'laranja'"],
        expectedOutput: 'Blonk',
        isLocked: false,
      },
      {
        input: [6, "'marrom'"],
        expectedOutput: 'Plimp',
        isLocked: false,
      },
      {
        input: [4, "'preto'"],
        expectedOutput: 'desconhecido',
        isLocked: false,
      },
    ],

    code: `/*
Trox: se tiver 3 olhos e cor verde
Blonk: se tiver 2 olhos e cor laranja
Plimp: se tiver 6 olhos e cor marrom
 */

var olhos = leia();
var cor = leia();`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  },
];

`var alimentos = leia();
var alimentosSemSapos = [];
para cada alimento em alimentos {
    // Escreva seu código aqui abaixo

}

escreva(alimentosSemSapos);
`;

`
var multiplos = [];
para (var i = 1; i <= tamanho; i++) {
  multiplos.empilhar(numero * i);
}
retorna multiplos;
`