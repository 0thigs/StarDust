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
        body: 'Porém, há três asteroides gigantes em sua direção.',
      },
      {
        type: 'Que??',
        body: 'Seu dever é testar se o escudo protetor do foguete esteja ativo (valor verdadeiro) e que a resistência (valor 700) dele seja maior que a soma das forças dos três asteroides (A, B, C).',
      },
      {
        type: 'code',
        body: `
Entrada: 100, 200, 300, verdadeiro
Resultado: verdadeiro
Explicacao: a soma das forças dá 600 e a resistencia é 700. Como o escudo está ativo (verdadeiro) e essa soma é menor que 700, logo o resultado é verdadeiro

Entrada: 500, 500, 500, verdadeiro
Resultado: falso
Explicacao: soma é 1500 e a resitência é 700, logo o resultado já é falso

Entrada: 50, 100, 150, falso
Resultado: falso
Explicacao: soma é 300 e a resitência é 700, porém o escudo não está ativo, então o resultado é falso`,
      },
      {
        type: 'alert',
        body: 'Dica: coloque a soma das forças em uma variável soma e depois compare se ela é maior ou não que a resistência.',
      },
      {
        type: 'alert',
        body: 'Não se esqueça de comparar também se o escudo está ativo.',
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
        input: [300, 400, 800, 'falso'],
        expectedOutput: 'falso',
        isLocked: false,
      },
      {
        input: [100, 500, 100, 'verdadeiro'],
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
        input: ["{}"],
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
    title: 'Amostras de planetas',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Você é o comandante de uma nave espacial que está coletando amostras de vários planetas ao redor da galáxia.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para cada planeta, você coletou diferentes tipos de amostras, como rochas, líquidos, gases, organismos, etc.',
      },
      {
        type: 'list',
        body: 'Cada tipo de amostra é armazenado em um vetor separado e agora você precisa concatenar todos esses vetores em um único vetor para enviá-los de volta à base.',
      },
      {
        type: 'code',
        body: `
Entrada: ["Granito", "Mármore", "Obsidiana"], ["Água", "Metano", "Lava"]
Resultado: ["Granito", "Mármore", "Obsidiana", "Água", "Metano", "Lava"]

Entrada: ["Oxigênio", "Hélio", "Metano"], ["Bactérias", "Algas"]
Resultado: ["Oxigênio", "Hélio", "Metano", "Bactérias", "Algas"]`,
      },
      {
        type: 'alert',
        body: 'Os vetores devem ser concatenados na ordem dos argumentos, que são todos vetores.',
      },
    ],
    function: null,
    testCases: [
      {
        input: ["['rochas','água','grama'], ['hélio','sulfeto']"],
        expectedOutput: "['rochas','água','grama','hélio','sulfeto']",
        isLocked: false,
      },
      {
        input: ["['neônio','argônio'], ['metano','criptônio','radônio']"],
        expectedOutput: "['neônio','argônio','metano','criptônio','radônio']",
        isLocked: false,
      },
      {
        input: ["['gelo','ferro'], ['brone','diamante'], ['obsidian','ouro']"],
        expectedOutput: "['gelo','ferro','brone','diamante','obsidian','ouro']",
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
        expectedOutput: "verdadeiro",
        isLocked: false,
      },
      {
        input: [12345],
        expectedOutput: "falso",
        isLocked: false,
      },
      {
        input: [11111111],
        expectedOutput: "verdadeiro",
        isLocked: false,
      },
      {
        input: [0],
        expectedOutput: "verdadeiro",
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
        input: ["{}"],
        expectedOutput: '[]',
        isLocked: true,
      },
    ],

    code: `funcao converterObjetosNavesEmVetores(naves) {
    
}`,
    difficulty: 'easy',
    categories: ['básico', 'geometria', 'matemática', 'números'],
  }
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
        type: 'default',
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
Resultado: Plimp`,
      },
      {
        type: 'alert',
        body: 'Você resolver esse desafio usando tanto estrutura "se senao se e senao", quanto "escolha caso"',
      },
      {
        type: 'alert',
        body: 'Não remova os comando leia() do programa',
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
