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
        body: `escreva("explorar o espaço é legal")
  
  saida: explorar o espaço é legal`,
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
  escreva(seuNome)
  
  entrada: "João"
  saida: "João"`,
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
  var nomeCompleto = nome
  
  escreva(nomeCompleto)
  
  saida: Kauê Cabess`,
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
  escreva("e sua idade é ", idade)
  
  entrada: (Fernanda, 90)
  saida: seu nome completo é Fernanda e sua idade é 90`,
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
        body: 'Parece que sua mensagem foi enviada para planeta que você encontrou, mas você não obteve nenhuma resposta :(',
      },
      {
        type: 'default',
        title: 'Mas por quê?',
        body: 'Isso dever ter acontecido por causa do tipo de dado que você estava usando.',
      },
      {
        type: 'default',
        title: 'Pera aí, tipo de dado?',
        body: 'Isso mesmo! Em programação podemos usar vários tipos de dados diferentes, sendo os mais básicos os do tipo de texto, número e lógico.',
      },
      {
        type: 'alert',
        body: 'Por agora, vamos falar sobre o tipo de texto, que é o que nós mais usamos até agora.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, o tipo de texto é utilizado para representar valores que são texto, dã! Eles podem ser compostos por uma ou mais letras, como também números ou símbolos.',
      },
      {
        type: 'default',
        title: 'Declaração de dado do tipo texto',
        body: 'Para fazer com que o programa entenda que uma informação é do tipo texto, basta colocá-lo entre aspas, podendo ser simples (\'\') ou duplas ("") assim como nós já fizemos antes:',
      },
      {
        type: 'code',
        body: `var mensagem = "Olá, mundo!"`,
      },
      {
        type: 'default',
        title: 'Tá mas e o que mais?',
        body: 'Além disso, é possível unir textos por meio do operador +, ação que chamamos de concatenação:',
      },
      {
        type: 'code',
        body: `escreva('Eu encontrei um ' + 'planeta')
  
  Resultado: Eu encontrei um planeta
              `,
      },
      {
        type: 'alert',
        body: 'Você também pode concatenar conteúdos de texto que estão em variáveis. Veja o exemplo',
      },
      {
        type: 'code',
        body: `var nomePlaneta = "Datathon"
  escreva('Eu encontrei um' + 'planeta' + ' e ele se chama ' + nomePlaneta)
  
  Resultado: Eu encontrei um planeta e ele se chama Datahon`,
      },
      {
        type: 'default',
        title: null,
        body: 'Você também pode usar o que chamamos de interpolação, que é quando um texto possui em seu conteúdo algo como ${minha_variavel}, e se minha_variável foi definida anteriormente, o novo texto terá o valor de minha_variavel.',
      },
      {
        type: 'code',
        body: `var nomePlaneta = "Datahon"
  escreva("esse planeta \$\{nomePlaneta\} não parece ser amigável")
  
  Resultado: Esse planeta Datahon não parece ser amigável`,
      },
      {
        type: 'alert',
        body: 'Observe que para interpolar uma variável ela precisa estar em ${} senão não irá funcionar!',
      },
      {
        type: 'list',
        body: 'Agora que você conchece mais sobre o tipo texto, que tal reforçar isso com algumas questões?',
      },
    ],
  },
  {
    starId: 6,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Muito bom, já que eles não entendem mensagem do tipo texto, só resta tentar com o tipo numérico.',
      },
      {
        type: 'default',
        title: 'Tipo inteiro',
        body: 'Os números em um programa podem ser inteiros e reais. Primeiramente, vamos falar sobre o tipo inteiro. Ele diz respeito aos números sem parte decimal ou fracionária, como -5, 0, 1, 2, 3, entre outros.',
      },
      {
        type: 'default',
        title: 'Declarando inteiros',
        body: 'Podemos declarar uma variável com um tipo número inteiro dessa forma:',
      },
      {
        type: 'code',
        body: `var identificador: 2370`,
      },
      {
        type: 'alert',
        body: 'Perceba que diferentemente do tipo texto, é preciso que o valor numérico não esteja entre aspas.',
      },
      {
        type: 'default',
        title: 'Reais',
        body: 'Além dos inteiro há os números reais, também conhecidos como números de ponto flutuante, que nada mais são do que números com parte decimal, veja:',
      },
      {
        type: 'code',
        body: `var serie = 8.5`,
      },
      {
        type: 'default',
        title: 'Números e textos',
        body: 'Cuidado ao tentar concatenar números e textos que são números, acontece algo não tão surpreendente: número se torna um texto e acaba sendo juntado com número que já era texto, mas não havendo uma soma.',
      },
      {
        type: 'code',
        body: `
  var identificador = "2370"
  var serie = 8.5
  escreva("o RG do meu foguete é " + identificador + 70)
  
  resultado: o RG do meu foguete é 237070
     `,
      },
      {
        type: 'default',
        title: null,
        body: 'Perceba que que deu 23708.5 ao invés de 2378.5, justamente porque o número foi convertido para texto para aí sim ser concatenado com outro texto.',
      },
      {
        type: 'default',
        title: 'Conversão de números',
        body: 'Também é possível converter um número inteiro para real, basta que o resultado de uma operação com um inteiro (uma divisão, por exemplo) resulte em um tipo real. O contrário também é possível.',
      },
      {
        type: 'code',
        body: `
  var codigo = 467 / 2
  escreva("Enviar código: ", codigo)
  
  resultado: Enviar código: 233.5
     `,
      },
      {
        type: 'alert',
        body: 'Contudo, vamos falar sobre operações aritméticas mais tarde para não estragar a surpresa.)',
      },

      {
        type: 'list',
        body: 'Agora vamos testar o que você aprendeu sobre tipos numéricos!',
      },
    ],
  },
  {
    starId: 7,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Parece que sua mensagem foi enviada e finalmente foi entendida 🎉! Contudo, eles enviaram uma resposta e é do tipo diferente do que já foi visto antes.',
      },
      {
        type: 'default',
        title: 'E qual é?',
        body: 'Tipo lógico que não são nada mais do que valores que armazenam uma única opção entre apenas duas possibilidades possíveis: verdadeiro ou falso.',
      },
      {
        type: 'default',
        title: 'Declaração do tipo lógico',
        body: 'Para declarar um tipo de dado lógico, basta atribuir um valor verdadeiro ou um valor falso logo depois da variável:',
      },
      {
        type: 'code',
        body: `
  var respostaEnviada = verdadeiro
  var eInimigo = falso
              `,
      },
      {
        type: 'default',
        title: 'Declaração do tipo lógico',
        body: 'No exemplo acima, a primeira variável indica se a resposta foi enviada (verdadeiro) ou não foi envidada (false). A segunda variável indica se quem enviou é amigo (verdadeiro) ou inimigo (falso):',
      },
      {
        type: 'alert',
        body: 'Perceba que o nome dessas variáveis são compostas por palavras diferentes, mas sem ser separadas por espaço. ',
      },
      {
        type: 'alert',
        body: 'Até aí tudo bem, mas veja que todas as palavras estão em maiúsculas exceto a primeira. Esse padrão se chama camelCase por lembrar as costas de um camelo e é bem comum na hora de escrever nomes de variáveis.',
      },
      {
        type: 'alert',
        body: 'Usando dados lógicos, é possível usar esse valores para trabalhar com os operadores lógicos, como "e" e "ou", como também com estruturas condicionais, mas vamos deixar isso para outra hora.',
      },
      {
        type: 'default',
        title: 'O que eu faço com essa resposta enviada?',
        body: 'O planeta proíbe a entrada de pessoas com armas, então é bom deixar claro que você não tem nenhuma:',
      },
      {
        type: 'code',
        body: `
  var armas = nulo
          `,
      },
      {
        type: 'default',
        title: 'O que diabos é esse nulo?',
        body: 'Esqueci de dizer, mas existe um tipo de dado especial chamado nulo que basicamente quer dizer que a variável não tem nenhum valor. Isso quer dizer também que nulo é atribuído automaticamente a uma variável quando ela é declarada sem um valor atribuído a ela.',
      },
      {
        type: 'code',
        body: `var espaco
  escreva(espaco)
  
//  Resultado: nulo`,
      },
      {
        type: 'alert',
        body: 'Mais para frente veremos que nulo pode ser usado como um valor falso.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que você aprendeu um pouco mais sobre valores lógicos que tal praticar um pouco mais?',
      },
    ],
  },
  {
    starId: 8,
    texts: [
      {
        type: 'default',
        title: 'Missão cumprida!',
        body: 'Sim! Pelo visto o ambiente do planeta é habitável 🎉! Contudo, você ainda tem uma questão pendente.',
      },
      {
        type: 'default',
        title: 'E qual seria?',
        body: 'Você precisa verificar o custo vida, pois não dá para viver em um planeta sem analisar os gastos né?',
      },
      {
        type: 'default',
        title: 'E como faço isso?',
        body: 'Por sorte seu foguete é equipado com tecnologia de ponta que faz cálculos usando operadores aritméticos.',
      },
      {
        type: 'default',
        title: 'Pera aí, operadores aritméticos? Tipo somar e subtrair?',
        body: 'Sim!! não só aritméticos, mas também lógicos e relacionais!',
      },
      {
        type: 'alert',
        body: 'Porém, por enquanto vamos apenas usar os aritméticos para efetuar operações mais simples.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, já é uma boa hora de reabastecer o foguete com combustível, ou seja, precisamos adicionar combustível atual com combustível novo.',
      },
      {
        type: 'default',
        title: 'Adição (+)',
        body: 'E para isso nós usamos o operador "+" de adição, o mesmo usado para concatenar textos.',
      },
      {
        type: 'code',
        body: `
var combustivel = 100;
var combustivelAtual = 200;
var totalCombustivel = combustivel + combustivelAtual;
escreva("A nave agora tem " + totalCombustivel + "  galões de combustível");

// Resultado: A nave agora tem 300 galões de combustível.`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Subtração (-)',
        body: 'Além de reabastecer, o próprio foquete consegue calcular o quanto de supriementos vc já consumiu até agora, utilizando simplesmente o operador de subtração "-".',
      },
      {
        type: 'code',
        body: `
var suprimentosConsumidos = 250;
var suprimentosAtual = 300;
var suprimentosRestante = suprimentosAtual - suprimentosConsumidos;
escreva("Você possui " + suprimentosRestante " suprimentos");

// Resultado: Você possui 50 suprimentos`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Parece que você não tem muitos suprimentos agora não é mesmo?',
      },
      {
        type: 'default',
        title: 'Nem tudo está perdido.',
        body: 'Por sua sorte (de novo) seu foguete está preparado com uma máquina de produzir suprimentos.',
      },
      {
        type: 'default',
        title: 'Mas nem tudo são flores',
        body: 'A máquina de fazer suprimentos produz apenas 1 suprimento por dia. Logo, para fazer o cálculo da quantidade de suprimentos que você teria em um mês é necessário fazer uma operação de multiplicação.',
      },
      {
        type: 'default',
        title: 'Multiplicação (*)',
        body: 'Você não leu errado. Para fazer um cálculo de multiplicação, usamos o operador "*" em vez de "x"',
      },
      {
        type: 'code',
        body: `
var suprimento = 1;
var diasMes = 30;
var suprimentosMes = suprimento * diasMes;
escreva("Em um mês você terá " + suprimentosMes + " suprimentos");

//  Resultado: Em um mês você terá 30 suprimentos`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Será que é o suficiente?',
        body: 'Parece muito para você? Ok, mas agora é necessário calcular a quantidade de suprimentos que você consome por mês. Normalmente, vejo que seu consumo é 90 suprimentos ao mês, então basta dividir 90 por 30.',
      },
      {
        type: 'default',
        title: 'Divisão (/)',
        body: 'Aí temos mais uma caso diferenciado: em vez de usar o operador "÷" que você provavelmente já se acustumou a utilizar, é necessário usar a barra "/". Veja o exemplo:',
      },
      {
        type: 'code',
        body: `
var suprimentosMes = 90;
var diasMes = 30;
var suprimentosDia = suprimentosMes / diasMes;
escreva("Você consome " + suprimentosDia + " por dia");

//  Resultado: Você consome 3 suprimentos por dia`,
        isRunnable: true,
      },
      {
        type: 'default',
        body: 'Obviamente, você também pode usar múltiplos operadores, diferentes ou não, ao mesmo tempo em uma única linha.',
      },
      {
        type: 'alert',
        body: 'Cuidado! Os operadores obedecem a ordem de precedência da matemática, ou seja, operações de multiplicação ou divisão são executadas antes de adição ou subtração!',
      },
      {
        type: 'default',
        body: 'Por exemplo, ao querer calcular 5 + 5 * 5, o resultado não vai ser 50, mas sim 30!',
      },
      {
        type: 'code',
        body: `
escreva(5 + 5 * 5);

//  Resultado: 30`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas então o que eu faço?',
        body: 'Assim como na matemática, você deve colocar entre parênteses as expressões que deseja que sejam calculadas primeiro.',
      },
      {
        type: 'code',
        body: `
escreva((5 + 5) * 5);

//  Resultado: 50`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo usando vários operadores:',
      },
      {
        type: 'code',
        body: `
var diasMes = 30;
var suprimentosDia = 1;
var suprimentosAtual = 300;
var consumoTotal = suprimentosAtual - 250 + 1 * diasMes - 3 * diasMes;
escreva('no final do mês você terá ' + consumoTotal + ' de suprimentos');

//  Resultado: no final do mês você terá -10 de suprimentos`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Não é preciso ser o mestre da matemática pra perceber que você não terá quantides de suprimento para sobreviver nesse planeta, não é mesmo?',
      },
      {
        type: 'default',
        title: null,
        body: 'Nesse caso, suponho que você precise achar vida alienígena para obter outros tipos de suprimentos.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, ainda há questão de quanto de energia existe disponível para os dois motores presentes no foguete, pois por algum motivo a proporção não está igual.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Para o foguete funcionar direito, seus dois motores precisam dividir a energia de forma equivalente, caso contrário as chances dele explodir com você dentro aumentam bastante :)',
      },
      {
        type: 'default',
        title: null,
        body: 'No momento atual há disponível 10125 de energia. Para saber se é possível distribuir a energia igualmente para os dois motores, basta verificar se esse número é divisível por 2.',
      },
      {
        type: 'default',
        title: 'Módulo (%)',
        body: 'Para isso, podemos usar um operador especial chamado "módulo", que serve para calcular ao resto da divisão entre 2 números usando o símbolo de porcentagem (%).',
      },
      {
        type: 'code',
        body: `
var energiaAtual = 10125;
var resto = 10125 % 2;
escreva('o resto é igual a ' + resto);

//  Resultado: o resto é igual a 1`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Explicação',
        body: '10125 dividido por 2 é igual 5062 e sobra 1, ou seja, a proporção não será igual para os dois motores 😢.',
      },
    ],
  },
  {
    starId: 9,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Cá estamos, e tudo o que resta a fazer é cair fora desse planeta.',
      },
      {
        type: 'default',
        title: '#Partiu',
        body: 'No entanto, é preciso verificar se tudo está ok para fazer uma partida segura e manter uma viagem no espaço.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Por exemplo, é importante averiguar se a quantidade de combustível atualmente disponível é maior que a quantidade necessaária para fazer decolagem.',
      },
      {
        type: 'default',
        title: 'E como fazer isso?',
        body: 'É aí que entra em cena os operadores relacionais! Eles servem justamente para fazer uma comparação (relação) entre dois valores.',
      },
      {
        type: 'list',
        title: 'Operador de maior que (>)',
        body: 'Por exemplo, caso queira verificar se um número é maior que outro, você pode utilizar o operador "maior que" representado pelo símbolo ">", como você deve saber.',
      },
      {
        type: 'code',
        body: `
var combAtual = 100;
var combExigido = 5;
escreva(combAtual > combExigido);

//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Perceba que o resultado da comparação entre dois valores é um valor do tipo lógico, e isso vai acontecer toda vez você usar os operadores relacionais.',
      },
      {
        type: 'alert',
        body: 'Não se esqueça disso, pois isso vai ser bastante importante depois!',
      },
      {
        type: 'default',
        title: null,
        body: 'E é claro, se existe o operador de maior que, também existe o de menor que.',
      },
      {
        type: 'list',
        title: 'Operador de menor que (<)',
        body: 'Por exemplo, se quisermos fazer a mesma comparação anterior, só que verificando se a quantidade de combustível necessária é menor que a atual, teríamos que o operador "menor que" (<).',
      },
      {
        type: 'code',
        body: `
var combAtual = 100;
var combExigido = 5;
escreva(combAtual < combExigido);

//  Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Note que o resultado agora é falso justamente porque a quantidade atual é maior que a exigida.',
      },
      {
        type: 'default',
        title: null,
        body: 'Começamos a decolar! Entretanto, é preciso checar se a velocidade atual do foguete é igual ou pelo menos superior que a velocidade de decolagem necessária para sair da atmosfera.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer isso não dá para usar operador ">" porque ele só verifica se é maior ou não.',
      },
      {
        type: 'default',
        title: null,
        body: 'E no nosso caso a velocidade não precisa ser tão superior, mas no mínimo igual.',
      },
      {
        type: 'list',
        title: 'Operador maior ou igual a (>=)',
        body: 'É aí que entra em cena o novo operador que verifca se um valor é igual ou maior que outro valor, e por isso o motivo do símbolo ">=".',
      },
      {
        type: 'code',
        body: `
var velAtual = 300;
var velExigida = 300;
escreva(velAtual >= velExigida);

//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: 'Operador menor ou igual a (>=)',
        body: 'Se o caso fosse checar se um valor é menor ou igual a outro, utilizaríamos o "<=".',
      },
      {
        type: 'code',
        body: `
var velAtual = 300;
var velExigida = 300;
escreva(velAtual <= velExigida);

//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Perceba que o resultado é mesmo que usar o ">=", pois ambos os operadores checam se é verdadeiro uma de duas condições (se é maior/menor ou igual).',
      },
      {
        type: 'alert',
        body: 'Note também que a gente está usando apenas números para fazer as comparações. Caso usássemos outro tipo de dado, o programa daria erro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Beleza, mas ainda há outros questões a serem conferidas.',
      },
      {
        type: 'default',
        title: 'E quais seriam?',
        body: 'Por exemplo, lembra que eu disse que os dois motores do foguete precisam usar a mesma quantidade de energia?',
      },
      {
        type: 'default',
        title: 'Sim!',
        body: 'Então, é possível fazer isso agora usando o operador de igual, porém não o sinal "=", visto que esse serve para atribuir valores a variáveis.',
      },
      {
        type: 'list',
        title: 'Operador de igual (==)',
        body: 'Para verificar se um valor é igual a outro, a gente usa o símbolo de "==", justamente para diferenciar do operador de "=".',
      },
      {
        type: 'code',
        body: `
var energiaMoto1 = 501;
var energiaMoto2 = 500;
escreva(energiaMoto1 == energiaMoto2);

//  Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Como esperado, o resultado é falso, pois os dois não estão usando a mesma quantidade de energia!',
      },
      {
        type: 'default',
        title: null,
        body: 'O resultado seria verdadeiro se estivéssemos verificando se as quantidades são diferentes.',
      },
      {
        type: 'list',
        title: 'Operador de diferente (!=)',
        body: 'Para fazer isso, basta usar o operador de "!=", que checa se dois valores são diferentes.',
      },
      {
        type: 'code',
        body: `
var energiaMoto1 = 501;
var energiaMoto2 = 500;
escreva(energiaMoto1 != energiaMoto2);

//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora o resultado é verdadeiro, justamente porque ambos não são iguais.',
      },
      {
        type: 'default',
        title: 'Se é verdadeiro, então está de boa?',
        body: 'NÃO! Independentemente se é verdadeiro ou não, ainda estamos em uma fria porque o foguete tem chances de explodir já que as quantidades de energia estão diferentes 😢.',
      },
    ],
  },
  {
    starId: 10,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Ok, a prioridade agora é concertar os motores do foguete!',
      },
      {
        type: 'default',
        title: null,
        body: 'Estamos no compartimento dos motores, e agora devemos verificar o funcionamento de um por vez.',
      },
      {
        type: 'default',
        title: 'E como fazer isso?',
        body: 'Cada motor possui duas turbinas e elas devem estar girando ao mesmo tempo para ele funcionar corretamente.',
      },
      {
        type: 'default',
        title: 'E... Como fazer isso?',
        body: 'Para conferir se tanto um, quanto o outro estão girando, você pode conferir usando um operador lógico.',
      },
      {
        type: 'default',
        title: 'O que é um operador lógico?',
        body: 'Operadores lógicos são utilizados para comparar valores do tipo lógico, diferentemente dos relacionais, que só comparam números.',
      },
      {
        type: 'list',
        title: 'Operador (e)',
        body: 'Para testar se dois valores são verdadeiros, você deve usar o operador "e", que verifica se o primeiro valor é igual a verdadeiro E se o segundo também é verdadeiro.',
      },
      {
        type: 'code',
        body: `
var girandoTurbina1 = verdadeiro;
var girandoTurbina2 = falso;
escreva(girandoTurbina1 e girandoTurbina2);

//  Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'O resultado é falso, pois apenas a turbina 1 está girando e para que resultasse em verdadeiro, ambos os valores deveriam ser igual a verdadeiro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Pois bem, ao concertar a turbina 1, você deve verificar novamente, mas dessa vez você pode colocar o resultado da comparação em uma variável à parte.',
      },
      {
        type: 'code',
        body: `
var girandoTurbina1 = verdadeiro;
var girandoTurbina2 = verdadeiro;
var turbinasGirando = girandoTurbina1 e girandoTurbina2;
escreva(turbinasGirando);
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas é possível isso?',
        body: 'Sim! Lembre-se que esses operadores comparam valores do tipo lógico, então qualquer expressão que resulta em um valor lógico pode ser utilizado para comparar outro valor.',
      },
      {
        type: 'default',
        title: 'Explica mais',
        body: 'Por exemplo, você pode testar se o nível de combustível atual está acima do mínimo para o funcionamento, ou seja combAtual > combMin.',
      },
      {
        type: 'code',
        body: `
var turbinasGirando = verdadeiro;
var combAtual = 90;
var combMin = 10;
escreva(turbinasGirando e combAtual > combMin);
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Explicação',
        body: 'Como turbinasGirando é verdadeiro, assim como combAtual > combMin resulta em verdadeiro, então o resultado final é verdadeiro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Beleza! O motor 1 está funcionado corretamente. Agora resta verificar o motor 2',
      },
      {
        type: 'default',
        title: 'O segundo também está funcionando',
        body: 'É... Parece que as turbinas do motor 2 estão girando. Então, pode haver um problema no tipo de combustível que está sendo consumido pelo motor',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'O motor pode aceitar apenas dois tipos de combustível: Etherium e Plasmatron.',
      },
      {
        type: 'default',
        title: null,
        body: 'Logo, apenas uma condição precisa ser verdadeira para o motor funcionar.',
      },
      {
        type: 'list',
        title: 'Operador (ou)',
        body: 'Para fazer tal façanha, é só usar o operador "ou", que verifica se o primeiro valor é igual a verdadeiro OU o segundo é igual a verdadeiro.',
      },
      {
        type: 'code',
        body: `
var comb = "Quantum";
escreva(comb == "Etherium" ou comb == "Plasmatron");
    
//  Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Como esperado, o combustível consumido por esse motor não é aceitável',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas agora se trocarmos o combustível para "Plasmatron"...',
      },
      {
        type: 'code',
        body: `
var comb = "Plasmatron";
escreva(comb == "Etherium" ou comb == "Plasmatron");
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas e o Etherium?',
        body: 'Como você percebeu, o resultado é verdadeiro porque apenas uma das duas comparações precisa resultar em verdadeiro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Nesse caso, o combustível não é do tipo "Etherium", mas é do tipo "Plasmatron", o que também é aceitável.',
      },
      {
        type: 'default',
        title: 'Troca feita com sucesso!',
        body: 'Agora sim o motor 2 está funcionando corretamente.',
      },
      {
        type: 'default',
        title: 'Ufa!',
        body: 'Calma aí! É bom verificar antes se agora os dois motores estão funcionando corretamente:',
      },
      {
        type: 'code',
        body: `
var motor1Funcionando = verdadeiro;
var motor2Funcionando = verdadeiro;
var tudoOk = !motor1Funcionando e motor2Funcionando
escreva(tudoOk);
    
//  Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Calma aí! Mas as duas variáveis são verdadeiro!',
        body: 'Sim! Acontece que há um operador extra sendo utilizado.',
      },
      {
        type: 'default',
        title: 'Como assim? Onde?',
        body: 'Perceba que antes da variável motor1Funcionando há um ponto de exclamação. E sua similaridade com o operador "!=" não é coincidência.',
      },
      {
        type: 'list',
        title: 'Operador de negação (!)',
        body: 'Esse operador serve para inverter valores do tipo lógico. Ou seja, se colocado antes de um valor, ele inverte o seu valor lógico.',
      },
      {
        type: 'default',
        title: 'Sério?',
        body: 'Sim! Por exemplo, se o valor inicial for falso, ele será invertido para verdadeiro, e vice-versa.',
      },
      {
        type: 'code',
        body: `
escreva(!falso);
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Entendi!',
        body: 'Então basta tirar esse operador de negação.',
      },
      {
        type: 'code',
        body: `
var motor1Funcionando = verdadeiro;
var motor2Funcionando = verdadeiro;
var tudoOk = motor1Funcionando e motor2Funcionando
escreva(tudoOk);
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
    ],
  },
];
