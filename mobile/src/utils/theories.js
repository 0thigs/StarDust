export const theories = [
  {
    starId: 1,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Olá, seja bem-vindo. Primeiramente, para começarmos essa jornada é necessário deixar claro o conceito de lógica e algoritmos, pois esses conceitos serão de vital importância para o entendimento de assuntos mais avançados, então vamos lá! 🚀.',
      },
      {
        type: 'default',
        title: 'Começando pelo começo',
        body: 'Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma sequência lógica.',
      },
      {
        type: 'default',
        title: null,
        body: 'Na maior parte do tempo, fazemos isso de maneira tão natural que nem nos damos conta, mas quando percebemos, conseguimos enxergar passos que levaram ao resultado final.',
      },
      {
        type: 'default',
        title: 'Ou seja...',
        body: 'Uma sequência lógica nada mais são que passos executados até atingir um determinado objetivo.',
      },
      {
        type: 'default',
        title: 'Lógica está em todo lugar',
        body: 'Imagine que você é aspirante a explorador espacial e deseja desbravar os confins do espaço longínquo com seu foguete. O problema é que você não tem equipamento para isso e muito menos um foguete :(',
      },
      {
        type: 'alert',
        body: 'A lógica de programação é semelhante a isso, mas em vez de solucionar a questão de como fazer uma exploração espacial, você está resolvendo um problema em um programa de computador. Para tanto, você precisa pensar de forma lógica e organizada para criar uma sequência de passos que resolva esse problema.',
      },
      {
        type: 'default',
        title: 'Aí que entra os algoritmos',
        body: 'Um algoritmo é como um roteiro para um programa de computador. Ele é uma sequência de passos que o programa deve seguir para alcançar um objetivo específico. Como aspirante a explorador espacial, você pode pensar em um algoritmo como uma lista de tarefas que você precisa para resolver o primeiro problema que você se depara.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, se o seu objetivo é arrumar equipamento adequado para a viagem espacial, o seu algoritmo pode ter os seguintes passos:',
      },
      {
        type: 'code',
        body: `algoritmo arrumar um foguete
  
  Inicio

Invadir um centro espacial;
Encontrar um foguete;
Entrar no foguete enquanto ninguém estiver olhando;
Conferir se não há combustível suficiente;
Conferir a quantidade de suprimentos;
Conferir quantidade de oxigênio;
Se não tiver = sair e roubar mais
senao ligar o foguete;
Esperar foquete entrar em órbita;
Relaxar e curtir a viagem;
  
  Fim`,
      },
      {
        type: 'default',
        title: 'Mas é só isso?',
        body: 'Obviamente, há várias formas de chegar nesse mesmo resultado, como também pode existir mais passos antes de outros passos. Contudo, o objetivo sempre vai ser esse: pensar logicamente para estipular uma sequência de passos para a resolução de um problema, o que damos o nome de lógica de programação dentro do contexto da computação, enquanto a sequência em si desses eventos, damos o nome de algoritmo.',
      },
      {
        type: 'alert',
        body: 'A diferença é que qualquer sequência lógica de passos pode ser considerado um algoritmo, como uma receita de bolo ou um assalto a um centro espacial. Já em programação, os algoritmos são escritos para criar programas, mas sempre obedecendo uma série de regras estabelecidas por cada linguagem de programação, o que é o que a gente chama de sintaxe.',
      },
      {
        type: 'default',
        title: 'Por que aprender Lógica de Programação?',
        body: 'Aprender lógica de programação é importante porque permite que você resolva problemas de maneira mais eficiente e organizada, ajuda na solução de tarefas complexas e facilita a criação de programas que automatizam tarefas e processos. Além disso, é uma habilidade altamente valorizada no mercado de trabalho.',
      },
      {
        type: 'default',
        title: 'Como funciona a Lógica de Programação na prática?',
        body: 'Como você já percebeu, a Lógica de Programação funciona através de algoritmos, ou seja, por meio de passos lógicos e bem definidos que deve ser seguidos para resolver um problema. Esses passos são escritos em um código que é interpretado pelo computador para que ele possa executar a tarefa desejada.',
      },
      {
        type: 'list',
        body: 'Agora que você aprendeu o básico de lógica e algoritmos, vamos testar seus conhecimentos até então adquiridos 🚀.',
      },
    ],
  },
  {
    starId: 2,
    texts: [
      {
        type: 'default',
        title: 'Introdução',
        body: 'Agora que você finalmente está no espaço, imagino que você queira explorar novos planetas e talvez econtrar novas vidas alienígenas.',
      },
      {
        type: 'default',
        title: 'Introdução',
        body: 'Para isso você vai ter que instruir seu foguete escrevendo códigos.',
      },
      {
        type: 'alert',
        body: 'Uma linguagem de programação normalmente possui uma sintaxe própria, que é o conjunto de regras que determina quais combinações de símbolos e palavras-chaves podem ser utilizadas para fazer com que o programa faça algo.',
      },
      {
        type: 'default',
        title: 'Qual linguagem usar?',
        body: 'Para nossa sorte, o foguete entende uma linguagem especial chamada Delégua. Ela possui uma sintaxe fácil e intuitiva em português, o que facilita bastante.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, para fazer com que o foguete imprima no painel: "explorar o espaço é legal", basta fazer isso',
      },
      {
        type: 'code',
        body: `escreva("explorar o espaço é legal")`,
      },
      {
        type: 'default',
        title: null,
        body: 'Simples e fácil, mas caso você queria que o foguete leia e receba informações suas, você pode usar o comando leia:',
      },
      {
        type: 'code',
        body: `var seuNome = leia()`,
      },
      {
        type: 'default',
        title: 'O que diabos é var?',
        body: 'Para receber dados, naturalmente você tem que colocar em algum lugar, que no caso sempre vai ser em algo que chamamos de variável.',
      },
      {
        type: 'default',
        title: 'Mas o que diabos são variáveis?',
        body: 'variáveis nada mais são do que espaços na memória de um programa, onde você pode armazenar um tipo de dado, elas tem esse nome porque elas podem variar, ou seja, receber outros valores no decorrer do programa.',
      },
      {
        type: 'alert',
        body: 'Você não precisa entender tudo de variáveis agora, pois usaremos elas mais para frente.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora é só fazer o programa exibir o dado dentro da variável.',
      },
      {
        type: 'code',
        body: `var seuNome = leia()
escreva(seuNome)`,
      },
      {
        type: 'default',
        title: null,
        body: 'Legal, mas na hora de escrever um código consistente, você precisa tomar alguns cuidados:',
      },
      {
        type: 'list',
        body: '1 - É preciso respeitar sempre a sintaxe definida pela linguagem, por exemplo, caso você tivesse colocado EXIBA ao invés de ESCREVA, deixado de usar os parênteses ou as aspas para exibir textos, o código daria erro. ',
      },
      {
        type: 'list',
        body: '2 - Você deve entender a função, quando e porquê usar cada comando, por exemplo, para escrever dados externos na tela, eu preciso usar o comando leia, pois ele tem a serve para ler informações que vem de fora do programa, para aí então usar o comando escreva.',
      },
      {
        type: 'list',
        body: '3 - É crucial compreender que o fluxo de um programa é sempre de cima para baixo, ou seja, não faz sentido eu tentat ler uma informação com leia depois de exibi-la na tela com escreva',
      },
      {
        type: 'alert',
        body: 'leia e escreva são considerados comandos de entrada e saída respectivamente, justamente porque com o leia você está entrando com dados, enquanto com o escreva você está fazendo dados saírem para serem exibidos digamos assim.',
      },
      {
        type: 'list',
        body: 'Agora que você um pouco mais sobre programas e pseudocódigos tá na hora revisar tudo isso, preparado(a)?.',
      },
    ],
  },
  {
    starId: 3,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Ok, parace que você não encontrou nenhum nada de interessante no espaço ainda, justamente porque seu foguete não sabe quem o está pilotando.',
      },
      {
        type: 'default',
        title: 'E agora?',
        body: 'Para resolver esse problema você tem que escrever um programa que exiba seu nome para ele, e para isso você terá que usar os comandos leia e escreva explicados anteriormente.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, como você já sabe, é necessário armazenar seu nome em uma variável no código para então escrevê-lo.',
      },
      {
        type: 'default',
        title: 'Explica o que são variáveis logo!',
        body: 'Variáveis são espaços reservados na memória de um programa para algum tipo de dado, pronto.',
      },
      {
        type: 'default',
        title: 'Como usar essa tais de variáveis?',
        body: 'Para usá-las de fato é necessário declarar elas para o programa que ela existe, escrevendo o comando var, seguido do nome da variável que você deseja que ela tenha, exemplo:',
      },
      {
        type: 'code',
        body: `var nomeCompleto`,
      },
      {
        type: 'default',
        title: 'Como colocar dados nelas?',
        body: 'Simples, basta colocar o sinal de "=" depois da variável e em seguida o dado que você deseja.',
      },
      {
        type: 'code',
        body: `var nome = "Kauê Cabess"
var idade = 90`,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, estamos criando duas variáveis, uma chamada "nome" que armazenará o valor "Kauê Cabess" e outra chamada "idade" que armazenará o valor 90.',
      },
      {
        type: 'alert',
        body: 'Além disso, você também pode atribuir o valor de uma variável a outra, utilizando o seguinte formato:.',
      },
      {
        type: 'code',
        body: `
var nome = "Kauê Cabess"
var nomeCompleto = nome`,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora observe um exemplo completo utilizando tudo que vimos até agora.',
      },
      {
        type: 'code',
        body: `var nome = leia()
var idade = leia()
var nomeCompleto = nome

escreva("seu nome completo é ", nomeCompleto)
escreva("sua idade é ", idade)`,
      },
      {
        type: 'alert',
        body: 'Dica: você também fazer com que o programa escreva um texto e o conteúdo de uma variável ao mesmo tempo, basta separá-los entre vírgulas, assim como mostrado no exemplo acima.',
      },
      {
        type: 'default',
        title: 'Regras para nomes de variáveis',
        body: 'Ao nomear suas variáveis, é importante seguir algumas regras básicas:',
      },
      {
        type: 'list',
        body: '1 - O nome da variável deve iniciar com uma letra ou sublinhado (_).',
      },
      {
        type: 'list',
        body: '2 - O nome da variável não pode conter espaços.',
      },
      {
        type: 'list',
        body: '3 - O nome da variável não pode ser uma palavra reservada da liguagem, ou seja, um nome de um comando por exemplo.',
      },
      {
        type: 'list',
        body: '4 - O nome da variável deve ser descritivo e fácil de entender.',
      },
      {
        type: 'default',
        title: 'Concluindo',
        body: 'A atribuição de variáveis é uma parte fundamental da programação, pois permite armazenar valores e acessá-los ao longo do código. Ao seguir as regras e a sintaxe corretas, você poderá atribuir valores a suas variáveis sem problemas em programas futuros.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que você aprendeu mais um pouco, que tal praticar tudo o que já vimos até agora?',
      },
    ],
  },
 
  {
    starId: 5,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Olá, agora que você aprendeu mais sobre variáveis para armazenar dados, vamos nos aprofundar nos tipos de dados',
      },
      {
        type: 'default',
        title: null,
        body: 'Na programação, os tipos de dados são importantes para identificarmos o tipo de informação que estamos lidando, e, com isso, agir de maneira adequada na manipulação dos dados.',
      },
      {
        type: 'default',
        title: null,
        body: 'como você já sabe, existem 4 tipos de dados básicos',
      },
      {
        type: 'list',
        body: `
          1 - Caractere 
          2 - Inteiro 
          3 - Real 
          4 - Lógico
          `,
      },
      {
        type: 'alert',
        body: 'Por agora, vamos falar sobre o tipo que caracter, que nada mais do que um tipo para lidar com textos.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, o tipo caractere é utilizado para representar valores que são compostos por uma ou mais letras, números ou símbolos. Esses valores são conhecidos como "strings".',
      },
      {
        type: 'default',
        title: 'Declaração de caractere',
        body: 'Para declarar uma variável do tipo caractere em Portugol, você deve escrever o seguinte:',
      },
      {
        type: 'code',
        body: `
      var
          nome: caractere
            `,
      },
      {
        type: 'default',
        title: 'Declaração de caractere',
        body: 'Agora você pode atribuir valores a variáveis do tipo caractere da seguinte forma:',
      },
      {
        type: 'code',
        body: `
      nomeDaVarivael <- "algum texto"
            `,
      },
      {
        type: 'alert',
        body: 'Lembre-se sempre de colocar as aspas para indicar que é uma string.',
      },
      {
        type: 'alert',
        body: 'É importante notar também que, na hora de atribuir um valor à uma variável, o tipo de dado da variável seja compatível com o tipo de dado da informação que estamos atribuindo, ou seja, uma variável do tipo caractere apenas aceitas valores que são string',
      },
      {
        type: 'default',
        title: 'Declaração de caractere',
        body: 'Aqui estão alguns exemplos de como você pode declarar e atribuir valores a variáveis do tipo caractere em Portugol:',
      },
      {
        type: 'code',
        body: `
  algoritmo "aprendendoSobreStrings"
  
  var
      nome: caractere
      sobrenome: caractere
      frase: caractere 
  
  inicio
      nome <- "João"
      sobrenome <- "Santos"
      frase <- "Olá, mundo!" 
  fimalgoritmo 
            `,
      },
      {
        type: 'default',
        title: 'Concatenação',
        body: 'É possível também unir textos por meio do operador +, ação que chamamos de concatenação:',
      },
      {
        type: 'code',
        body: `
      escreva('Hoje fui para' + 'padaria')
  
      Resultado:
          Hoje fui para padaria
            `,
      },
      {
        type: 'alert',
        body: 'Você também pode concatenar conteúdos de texto que estão em variáveis. Veja o exemplo',
      },
      {
        type: 'code',
        body: `
  jogador1 = "Pedro"
  jogador2 = "Matheus"
  escreva("Os jogadores: " + jogador1 + "e" + jogador2)
  escreva("vão estreiar na quadra hoje!")
  
  Resultado:
  Os jogadores Pedro e Matheus vão treinar na quadra hoje!
            `,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que você conchece mais sobre tipo caractere, que tal reforçar isso com algumas questões?.',
      },
    ],
  },
  {
    starId: 6,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Muito bom, agora vamos falar sobre o tipos que representam os numéricos.',
      },
      {
        type: 'default',
        title: 'Tipo inteiro',
        body: 'Primeiramente, vamos falar o tipo inteiro. Ele diz respeito aos números sem parte decimal ou fracionária, como -5, 0, 1, 2, 3, entre outros.',
      },
      {
        type: 'default',
        title: 'Declarando inteiros',
        body: 'No Portugol, declaramos uma variável inteira da seguinte forma:',
      },
      {
        type: 'code',
        body: `
      var
          numero: inteiro
            `,
      },
      {
        type: 'default',
        title: 'Declarando inteiros',
        body: 'Em seguida, podemos atribuir um valor a ela, por exemplo:',
      },
      {
        type: 'code',
        body: `
          numero <- 5
            `,
      },
      {
        type: 'default',
        title: 'Operações Matemáticas com Inteiros',
        body: 'Podemos realizar operações matemáticas com inteiros, como adição, subtração, multiplicação e divisão e atribuir a variáveis. Aqui estão alguns exemplos:',
      },
      {
        type: 'code',
        body: `
          var
              a = 10;
              b = 5;
          inicio
              soma = a + b;
              subtracao = a - b;
              multiplicacao = a * b;
              divisao = a / b;
  
              escreval(soma)
              escreval(subtracao)
              escreval(multiplicacao)
              escreva(divisao)
          fimalgoritmo
  
          resultado:
          15
          5
          50
          2
   `,
      },
      {
        type: 'alert',
        body: 'Cuidade, ao dividir inteiros, o resultado será sempre inteiro. Por exemplo, 10 dividido por 3 é 3, e não 3,3333...',
      },
      {
        type: 'default',
        title: null,
        body: 'Falaremos mais sobre esses operadores futuramente. Agora como lidar com números reais?',
      },
      {
        type: 'default',
        title: 'Tipo real',
        body: 'Tipo real é um tipo de dado que armazena números com parte decimal ou fracionária, como 3.14, -0.5, 0.0, entre outros.',
      },
      {
        type: 'default',
        title: 'Declaração de real',
        body: 'No Portugol, declaramos uma variável real da seguinte forma:',
      },
      {
        type: 'code',
        body: `
      var
          pi: real
            `,
      },
      {
        type: 'default',
        title: 'Declaração de real',
        body: 'Em seguida, podemos atribuir um valor a ela, por exemplo:',
      },
      {
        type: 'code',
        body: `
      pi <- 3.14;
            `,
      },
      {
        type: 'alert',
        body: 'Em outras palavras, um tipo inteiro sempre vai ser um número inteiro, enquanto um tipo real sempre vai ser um número real dã.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora vamos testar o que você aprendeu sobre numéricos',
      },
    ],
  },
  {
    starId: 7,
    texts: [
      {
        type: 'default',
        title: 'introdução',
        body: 'Os dados do tipo lógico são valores que armazenam uma única opção entre duas possibilidades possíveis: Verdadeiro ou Falso.',
      },
      {
        type: 'alert',
        body: 'O tipo lógico também é conhecido por booleano ou em inglês boolean em homenagem ao matemático George Boole.',
      },
      {
        type: 'default',
        title: null,
        body: 'O tipo lógico representa a linguagem que um computador verdadeiramente entende, ou seja, o binário, já que verdadeiro e falso representam 1 e 0 respectivamente:',
      },
      {
        type: 'alert',
        body: 'Dessa forma, é possível usar esse valores para trabalhar com operações lógicas, como "e" e "ou", como também com estruturas condicionais, mas vamos deixar isso para outra hora.',
      },
      {
        type: 'default',
        title: 'Declaração do tipo lógico',
        body: 'Em Portugol, o tipo de dado lógico é representado pela palavra reservada logico. Logo, para declarar uma variável do tipo lógico, podemos usar a seguinte sintaxe:',
      },
      {
        type: 'code',
        body: `
      var
          nomeDaVariavel: logico
            `,
      },
      {
        type: 'default',
        title: 'declaração do tipo lógico',
        body: 'Por exemplo, para declarar uma variável que armazena se uma pessoa é maior de idade, podemos fazer:',
      },
      {
        type: 'code',
        body: `
      var
          eMaiorDeIdade: logico
            `,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora, podemos inicializar a variável com um valor lógico (verdadeiro ou falso):',
      },
      {
        type: 'code',
        body: `
          eMaiorDeIdade <- verdadeiro
            `,
      },
      {
        type: 'alert',
        body: 'Quando não iniciamos uma variável do tipo lógico ela recebe o valor padrão de falso',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que você aprendeu um pouco mais sobre valores lógicos que tal praticar um pouco mais?',
      },
    ],
  },
];

// Work in Progress
// body: `
// ALGORITMO “declaracao”

// VAR
//     varInteiro: inteiro
//     varReal: real
//     varCaractere: caractere
//     varLogico: Logico
// INICIO
//     varInteiro <- 1
//     varReal <- 1.5
//     varCaractere <- “teste”
//     varLogico <- VERDADEIRO
//     ESCREVAL(varInteiro, varReal, varCaractere, varLogico)

// FIMALGORITMO
//     `,

// TIPOS DE DADOS
/*
    Olá! Vamos começar uma aula introdutória sobre tipos de dados usando Portugol.
    
    O que são tipos de dados?
    Tipos de dados são categorias que são atribuídas a variáveis em um programa de computador. Isso ajuda a identificar o tipo de informação que uma variável armazena, permitindo ao computador tomar decisões sobre como tratar esses dados.
    
    Quais são os tipos de dados básicos no Portugol?
    
    INTEIRO: Armazena números inteiros, sem casas decimais. Exemplo: -10, 0, 5, 100.
    REAL: Armazena números reais, com casas decimais. Exemplo: -10,5, 0,25, 5,7.
    CARACTERE: Armazena um único caractere, entre aspas simples. Exemplo: 'a', 'Z', '#'.
    CADEIA: Armazena uma cadeia de caracteres, entre aspas duplas. Exemplo: "Olá mundo!", "12345".
    
    Olá! Vamos começar uma aula introdutória sobre tipos de dados usando Portugol.
    
    O que são tipos de dados?
    Tipos de dados são categorias que são atribuídas a variáveis em um programa de computador. Isso ajuda a identificar o tipo de informação que uma variável armazena, permitindo ao computador tomar decisões sobre como tratar esses dados.
    
    Quais são os tipos de dados básicos no Portugol?
    
    INTEIRO: Armazena números inteiros, sem casas decimais. Exemplo: -10, 0, 5, 100.
    REAL: Armazena números reais, com casas decimais. Exemplo: -10,5, 0,25, 5,7.
    CARACTERE: Armazena um único caractere, entre aspas simples. Exemplo: 'a', 'Z', '#'.
    CADEIA: Armazena uma cadeia de caracteres, entre aspas duplas. Exemplo: "Olá mundo!", "12345".
    Por que é importante identificar o tipo de dado de uma variável?
    Identificar o tipo de dado de uma variável é importante porque permite ao computador saber como tratar esses dados. Por exemplo, se você está trabalhando com uma variável INTEIRO, o computador sabe que essa variável armazena apenas números inteiros, então ele só permitirá que você execute operações matemáticas válidas para números inteiros. Se você tentar fazer uma operação inválida, como dividir um número inteiro por outro número inteiro e obter um resultado com casas decimais, o computador apresentará um erro.
    
    Como declarar variáveis com tipos de dados no Portugol?
    Para declarar uma variável com um tipo de dado específico, você precisa usar a seguinte sintaxe:
    TIPO NOME_DA_VARIAVEL;
    Exemplos:
    INTEIRO idade;
    REAL altura;
    CARACTERE primeiraLetra;
    CADEIA nomeCompleto;
    
    Em resumo, os tipos de dados são importantes porque permitem que o computador saiba como tratar as informações armazenadas em variáveis. No Portugol, existem 4 tipos de dados básicos: INTEIRO, REAL, CARACTERE e CADEIA. É importante declarar as variáveis corretamente para garantir que o programa funcione de maneira correta.
    
    */
