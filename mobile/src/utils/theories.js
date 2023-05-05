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
  {
    starId: 11,
    texts: [
      {
        type: 'default',
        title: 'São e salvo',
        body: 'Muito bem!! você se salvou da chuva de asteroides gigantes 🎉!.',
      },
      {
        type: 'default',
        body: 'Agora, resta visitar o novo planeta que você descobriu, e por sorte ele é totalmente amigável!',
      },
      {
        type: 'default',
        title: 'Pera aí! Como você sabe disso?',
        body: 'Simples, o foguete entende estruturas condicionais sempre que a situação pede.',
      },
      {
        type: 'default',
        title: 'Que? Estruturas condicionais?',
        body: 'Sim! Estruturas condicionais são recursos da programação que permitem que um trecho de código seja executado apenas se uma determinada condição for verdadeira.',
      },
      {
        type: 'alert',
        body: 'Há 3 maneiras de criar uma instrução condicional:\n 1 - se\n 2 - senão\n 3 - senão se.\n Por enquanto, vamos começar pelo básico',
      },
      {
        type: 'list',
        title: 'Estrutura condicional simples (se)',
        body: 'A forma mais básica é escrever "se" e depois a condição que deve ser verificada entre parênteses. Em seguida você abre e fecha chaves ({}) e coloca o código que você deseja que seja executado.',
      },
      {
        type: 'code',
        body: `
var planetaAmigavel = verdadeiro;

se (planetaAmigavel) {
    escreva(planetaAmigavel)
}
    
//  Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Legal!',
        body: 'Perceba que a condição (tudo escrito em parênteses), deve resultar em verdadeiro para que o código entre chaves seja executado.',
      },
      {
        type: 'default',
        title: 'Mas se não for?',
        body: 'Simples: o programa ignora tudo que está entre chaves do se e executa todo o resto do código após ele.',
      },
      {
        type: 'code',
        body: `
var souBonito = falso;

se (souBonito) {
    escreva(souBonito)
}
    
//  Resultado: sem resultado`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Só isso?',
        body: 'Nós podemos usar tudo que vimos anteriormente que conseguem resultar em valores lógicos dentro da condição do se.',
      },
      {
        type: 'code',
        body: `
var poder = 8000 * 1000;

se (poder > 8000) {
    escreva('Seu poder é mais de 8 mil!')
}
    
//  Resultado: Seu poder é mais de 8 mil!`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Entendi!',
        body: 'Bacana, mas acho que já é hora de você entender o que é escopo de variável.',
      },
      {
        type: 'default',
        title: 'Essopo?',
        body: 'Não, escopo. No geral, o escopo é a região do código em que uma variável pode ser acessada dentro do programa.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Em programação, normalmente existem dois tipos de escopo de variável: global e local.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'As variáveis globais são aquelas que são declaradas fora de qualquer tipo de instrução (se, para, funcao e por aí vai).',
      },
      {
        type: 'default',
        title: 'Como assim? Para? Função?',
        body: 'No momento se concentre apenas a na instrução "se" que estamos estudando agora.',
      },
      {
        type: 'default',
        title: 'Ok.',
        body: 'Por exemplo, caso tentemos acessar uma variável declarada dentro de "se", o código resultará em "variável indefinida"',
      },
      {
        type: 'code',
        body: `
var planetaAmigavel = verdadeiro; /* variável global */

se (verdadeiro) {
    var planetaNome = "Ifthenia"; /* variável local */
    }
    
    escreva(planetaNome);
//  Resultado: ERRO: Variável não definida: 'planetaNome'`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'O "/* */" é outra forma de colar comentários dentro do código',
      },
      {
        type: 'default',
        title: 'Nossa...',
        body: 'O erro no código acima ocorre, pois planetaNome é uma variável local porque ela foi declarada dentro da instrução se.',
      },
      {
        type: 'default',
        title: 'Então é só colocar para fora do se?',
        body: 'Sim! Aí você tranformaria ela em uma variável de escopo global, assim como a variável planetaAmigavel.',
      },
      {
        type: 'code',
        body: `
var planetaAmigavel = verdadeiro; /* variável global */
var planetaNome = "Ifthenia"; /* variável global */

se (verdadeiro) {
}
escreva(planetaNome);
escreva(planetaAmigavel);
    
//  Resultado: Ifthenia verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Humm...',
        body: 'É como se os escopos fossem dois universos paralelos: Pode haver uma variável local com o mesmo nome de uma global, porém elas ainda vão ser comportar de maneira diferente.',
      },
      {
        type: 'code',
        body: `
var planetaNome = "Ifthenia"; /* variável global */

se (verdadeiro) {
    var planetaNome = "Elsethenia" /* variável local */
}
escreva(planetaNome);

//  Resultado: Ifthenia`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Entendi tudo!',
        body: 'Legal! Então, que tal praticar um pouco?',
      },
    ],
  },
  {
    starId: 12,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Já que você está indo em direção ao planeta, é bom regular a velocidade do foguete para fazer um pouso seguro.',
      },
      {
        type: 'default',
        title: 'Como fazer isso?',
        body: 'A velocidade atual do foguete é 50, caso a força da gravidade seja maior que 10, a velocidade deverá diminuir em 20, caso contrário precisará aumentar em 20.',
      },
      {
        type: 'code',
        body: `
var velFoguete = 50;
var gravidade = 11;

se (gravidade > 10) {
  velFoguete -= 20;
}

se (gravidade < 10) {
  velFoguete += 20;
}
 
escreva(velFoguete);
// Resultado: 30`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Perceba que usei += e -= para alterar o valor de velFoguete. Isso é a mesma coisa que escrever: velFoguete = velFoguete + 20 e velFoguete = velFoguete - 20, só que de um jeito mais curto.',
      },
      {
        type: 'alert',
        body: 'Esse operador especial é chamado de operador de atribuição aritmética, ou seja, ele pode ser usado para fazer qualquer uma das quatros operações aritméticas (+=, -=, *=, /=)',
      },
      {
        type: 'default',
        title: null,
        body: 'Voltando ao código, você pode achar ele cumpre o seu papel perfeitamente, o que de fato é verdade.',
      },
      {
        type: 'default',
        title: 'Mas, então?',
        body: 'Acontece que geralmente após terminar a escrita um código, haverá sempre a oportunidade de melhorá-lo, tornando-o mais eficiente e limpo.',
      },
      {
        type: 'default',
        title: null,
        body: "Neste caso, em vez de usar dois 'se', é possível usar outra estrutura, chamada se-senão, veja só:",
      },
      {
        type: 'code',
        body: `
var velFoguete = 50;
var gravidade = 11;

se (gravidade > 10) {
  velFoguete -= 20;
} senao {
  velFoguete += 20;
}

escreva(velFoguete);
// Resultado: 70
`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: null,
        body: 'Como o nome implica, caso a primeira condição não seja verdadeira, apenas o código contido em senao é executado.',
      },
      {
        type: 'list',
        title: null,
        body: 'Ou seja, se for verdadeiro faça algo, senão faça outra coisa.',
      },
      {
        type: 'default',
        title: 'Entendi',
        body: 'Agora que a velocidade está regulada, é preciso verificar se o ar é respirável ou não.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Basta checar se a atmosfera tem níveis de oxigênio adequado e se têm ausência de gases tóxicos',
      },
      {
        type: 'code',
        body: `
var oxigenioLevel = 20; /* nível de oxigênio */
var nitrogenioLevel = 78; /* nível de nitrogênio */
var outrosGasesLevel = 2; /* níveis de outros gases */

se (
    oxigenioLevel >= 19 e 
    oxigenioLevel <= 23 e 
    nitrogenioLevel >= 75 e 
    nitrogenioLevel <= 81 e 
    outrosGasesLevel <= 5
    ) {
  escreva("A atmosfera é respirável!");
} senao {
  escreva("A atmosfera não é respirável!");
}

// Resultado: A atmosfera é repirável!`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Acho que você já deve ter percebido, mas como visto no código acima, é possível usar mais de um operador lógico para formar uma condição, como também escrever uma condição debaixo da outra, que o programa será executado normalmente.',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'Agora com a confirmação de que a atmosfera é respirável, podemos aterrissar no planeta de forma segura, mas não antes de praticar o que vimos.',
      },
    ],
  },
  {
    starId: 13,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Enfim, pousamos com segurança!',
      },
      {
        type: 'default',
        title: 'Ufa!',
        body: 'Parece que várias pessoas desse planeta já começaram a rodear o foguete.',
      },
      {
        type: 'default',
        title: 'O que fazer?',
        body: 'É bom dizer oi para eles, mas como eles não falam a nossa língua, será preciso usar um tradutor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por padrão ele traduz 2 línguas estrangeiras: Xanxiriano e Krynnishiano. Porém, caso não seja nenhuma das duas, o tradutor procurará outro idioma em seu banco de dados',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer um programa disso, utilizaremos a terceira variação da estrutura condicional: senão-se.',
      },
      {
        type: 'default',
        title: 'Mas não já vimos isso antes?',
        body: 'Não confunda com um simples senão. Neste caso, o senão-se (escrito no código como senao se) sempre virá depois do primeiro se e antes de senão (caso tenha):',
      },
      {
        type: 'code',
        body: `
var idioma = 'Vortaxiano'

se (idioma = 'Xanxiriano') {
  escreva("Traduzir de Xanxiriano");
} senao se (idioma = 'Krynnishiano') {
  escreva("Traduzir de Krynnishiano");
} senao {
  escreva("Traduzir de outro idioma");
}

// Resultado: Traduzir de outro idioma`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Perceba que o senao se funciona como um se normal, exigindo que passemos uma condição, que caso seja verdadeira, seu bloco de código será executado em vez o do senao.',
      },
      {
        type: 'default',
        title: 'Legal',
        body: 'Além disso, a estrutura senão-se também é conhecido como "se aninhado", justamente porque podemos colocar vários senao se dentro de uma estrura condicional.',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso será convenientemente útil, pois para você abrir a saída do foguete, você precisará de uma senha correta.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'A senha é composta por 4 números, e dependendo da combinação pode abrir um compartimento diferente do foguete, veja só:',
      },
      {
        type: 'code',
        body: `
var senha = 9713;

se (senha = 2222) {
  escreva("Abrir cozinha");
} senao se (senha = 4567) {
  escreva("Abrir banheiro");
} senao se (senha = 7568) {
  escreva("Abrir quarto de dormir");
} senao se (senha = 5781) {
  escreva("Abrir sala de controle");
}
...
} senao
  escreva("Senha não existe");
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Existe uma forma mais fácil de fazer isso usando outro tipo de estrutura, mas podemos falar sobre ela depois.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por enquanto quero que você perceba que agora podemos construir estruturas complexas, colando se dentro de se.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, você pode quere desconfiar se os alienígenas lá fora são verdadeiramente amigáveis',
      },
      {
        type: 'default',
        title: null,
        body: 'Neste caso, podemos usar uma condição dentro de outra condição:',
      },
      {
        type: 'code',
        body: `
var povoAmigavel = verdadeiro;
var povoArmado = falso;
        
se (povoAmigavel == falso) {
    se (povoArmado == verdadeiro) {
        escreva('Fugir para longe')
    } senao {
        escreva('Cair na porrada')
    }
} senao {
    escreva('Tentar conversar') 
}

// Resultado: Tentar conversar`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Lembre-se: caso a condição de um se (se, senão ou senão se) for verdadeiro, todo o bloco de código presente nele será executado, sejam outras estruturas condicionais ou não. Caso seja de fato executado, o computador sai do se e depois executa tudo que está fora dele.',
      },
    ],
  },
  {
    starId: 14,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Pela conversa que estamos tendo com esse povo, parece que não estão muito felizes de termos acabado de pousar em um jardim importante para eles.',
      },
      {
        type: 'default',
        title: 'Mas e agora?',
        body: 'Eles querem nos levar para seu rei para termos uma conversa, então resta obedecer.',
      },
      {
        type: 'default',
        title: 'Vish...',
        body: 'Chegando ao palácio, o rei aparece furioso, e logo encarrega-se de pedir que escolhemos uma entre 4 pílulas (verde, amarelo, azul e vermelho).',
      },
      {
        type: 'default',
        title: 'Do que se trata disso?',
        body: 'Envolve escolher o tipo de morte que desejamos ter 😨.',
      },
      {
        type: 'default',
        title: 'Putz',
        body: 'Podemos fazer um programa a partir disso, colocando a cor da pílula escolhida em uma variável e verificando qual tipo de morte ela corresponde.',
      },
      {
        type: 'code',
        body: `
var cor = 'verde';
var morte = '';

se (cor == 'azul') {
  morte = 'Morrer asfixiado';
} senao se (cor == 'amarelo') {
  morte = 'Morrer de dor de cabeça';
} senao se (cor == 'verde') {
  morte = 'Morrer de diarreia';
} senao se (cor == 'vermelho') {
  morte = 'morrer de ataque cardíaco';
} senao {
  morte = 'Não morrer';
}

escreva(morte);
// Resultado: Morrer de diarreia`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Veja que é bem parecido com o programa de verificar a senha correta para abrir a saída do foguete.',
      },
      {
        type: 'default',
        title: 'Verdade',
        body: 'Tanto nesse caso quanto no outro é melhor usar outro tipo de estrutura condicional, que é chamado de "Escolha caso"',
      },
      {
        type: 'default',
        title: 'Queee?',
        body: 'Essa é uma estrutura condicional bastante diferenciada. Nela, em vez de usar instruções que já vimos ("se", "senao se" e "se"), devemos utilizar apenas 3, que são completamente diferentes: "escolha", "caso", "padrao"',
      },
      {
        type: 'default',
        title: 'Não entendi',
        body: 'Preste atenção, a estrutura escolha caso permite que você execute diferentes blocos de código com base no valor de algo.',
      },
      {
        type: 'default',
        title: 'Ok',
        body: 'Esse valor de algo é avaliado uma vez e, em seguida, é comparado com cada um dos casos no bloco escolha, veja:',
      },
      {
        type: 'code',
        body: `
var cor = 'verde';
var morte = '';

escolha (cor) {
  caso 'azul': 
    morte = 'Morrer asfixiado';
  caso 'amarelo': 
    morte = 'Morrer de dor de cabeça';
  caso 'verde': 
    morte = 'Morrer de diarreia';
  caso 'vermelho': 
    morte = 'Morrer de ataque cardíaco';
  padrao:
    morte = 'Não morrer';
}

escreva(morte);
// Resultado: Morrer de diarreia`,
        isRunnable: true,
      },
      {
        type: 'list',
        body: 'O resultado é o mesmo que antes. O valor de cor entre parêntese é comparado com os valores de cada caso dentro do bloco escolha.',
      },
      {
        type: 'list',
        body: 'Se corresponder com um, então será executado tudo que estiver dentro do bloco deste caso, não precisando mais comparar com os casos restantes, ou seja, o programa para de executar o "escolha caso" a partir do momento em que é encontrado um caso conrrespondente.',
      },
      {
        type: 'list',
        body: 'Agora se o valor de cor não corresponder a nenhum caso, então será executado o que estiver no bloco "padrao", ou seja, se o valor de cor não for igual a nenhum caso específico, execute o que for padrão.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, é claro que não queremos morrer de diarreia, então saímos correndo em direção ao foguete para fujirmos.',
      },
      {
        type: 'default',
        title: null,
        body: 'Os guardas estão na nossa cola, resta entrar em uma caverna para despistá-los.',
      },
      {
        type: 'default',
        title: null,
        body: 'Dentro da caverna é possível ver portais abrindo e fechando.',
      },
      {
        type: 'default',
        title: null,
        body: 'Eu ouvi falar que se você entrar em um portal roxo você pode parar em um lugar fantástico, mas caso seja vermelho ou azul, ele te pode levar a um limbo sem fim, e se for de qualquer outra cor ele não leva para lugar nenhum.',
      },
      {
        type: 'default',
        title: 'Sério?',
        body: 'Sim, então essa é mais uma situação para usarmos a estrutura de escolha caso',
      },
      {
        type: 'code',
        body: `
var cor = 'roxo';
var destino = '';

escolha (cor) {
  caso 'azul': 
  caso 'vermelho': 
    destino = 'Limbo';
  caso 'roxo': 
    destino = 'Lugar fantástico';
  padrao:
    destino = 'nenhum';
}

escreva(destino);
// Resultado: Lugar fantástico`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Não expliquei antes, porém dois ou mais casos podem ter o mesmo bloco, isto é, podem excutar um mesmo bloco de código.',
      },
      {
        type: 'alert',
        body: 'Ou seja, nesta situação se um portal for tanto azul ou vermelho, o destino será o limbo',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas como encontramos um portal roxo, resta entrar nele e ver o que nos aguarda.',
      },
    ],
  },
  {
    starId: 15,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Ufa, parace que aqueles aliens estranhos foram para outra direção.',
      },
      {
        type: 'default',
        title: null,
        body: 'Contudo, agora estamos em um planeta completamente desconhecido.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para começar tentar descobrir, podemos fazer uma varredura do local em que estamos, coletando amostras do solo.',
      },
      {
        type: 'default',
        title: null,
        body: 'Toda vez que o fogute coleta uma amostra, podemos fazer um programa que incremente 1 a uma variavel do tipo número com o nome "totalAmostras".',
      },
      {
        type: 'code',
        body: `
var totalAmostras = 0;
totalAmostras++;

escreva(totalAmostras)

// Resultado: 1`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Eu não te contei, mas esse é outro operador especial, chamado "operador de incremento" (++), que se colocado após uma variável do tipo número ele acrescenta 1 ao seu valor atual.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, o foguete possui 10 lotes disponíveis para armazenar amostras. Então, devemos incrementar a variável totalAmostras 10 vezes.',
      },
      {
        type: 'code',
        body: `
var totalLotes = 10;
var totalAmostras = 0;

totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;
totalAmostras++;

escreva(totalAmostras)

// Resultado: 10`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Pronto',
        body: 'É claro que existe uma maneira muuuuuuito mais fácil de fazer isso.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Usando estrutura de repetição, ou para os mais íntimos, laço de repetição ou apenas laço.',
      },
      {
        type: 'default',
        title: 'Laço?',
        body: 'Sim!! Os laços são usados para executar um conjunto de instruções várias vezes. Isso ajuda a reduzir o código e evitar repetições desnecessárias.',
      },
      {
        type: 'default',
        title: 'Interessante',
        body: 'Existem 3 maneiras de usar laços, mas considerando esse nosso caso, iremos utilizar a instrução "para"',
      },
      {
        type: 'list',
        title: 'Para',
        body: 'A instrução "para" é o tipo de laço mais comum, e é usado para executar um bloco de código por um número específico de vezes. Para escrevê-la, a sintaxe é a seguinte:',
      },
      {
        type: 'code',
        body: `
var totalLotes = 10;
var totalAmostras = 0;

para (var contador = 0; contador < totalLotes; contador++) {
    totalAmostras++
}

escreva(totalAmostras)

// Resultado: 10`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Não entendi nada',
        body: 'Vamos por partes: todo laço "para" tem que ter 3 parâmetros, que são as expressões separadas por ponto e vírgula e que estão entre parênteses após a palavra para.',
      },
      {
        type: 'list',
        title: 'Inicialização',
        body: 'A primeira é a inicialização, que é a primeira coisa a ser executada antes do "para" fazer o seu trabalho de fato.',
      },
      {
        type: 'alert',
        body: 'A inicialização serve para iniciar a variável de controle do laço, que explicarei mais sobre depois.',
      },
      {
        type: 'list',
        title: 'Condição',
        body: 'A segunda é a condição, que é a expressão lógica avaliada no início de cada iteração do laço. Se a condição for verdadeira, o bloco de código dentro do laço é executado; caso contrário, o laço é encerrado.',
      },
      {
        type: 'alert',
        body: 'Iteração do laço refere-se quantas vezes o bloco de código será executado, ou seja, 10 iterações significam 10 repetições.',
      },
      {
        type: 'list',
        title: 'Expressão final',
        body: 'A última é a Expressão final, que é a instrução executada no final de cada iteração do laço. Geralmente é usada para atualizar a variável de controle citada anteriormente.',
      },
      {
        type: 'alert',
        body: 'A variável de controle é uma variável que é utilizada para determinar quando a execução do laço irá parar. Geralmente, o valor dela é atualizada a cada iteração e esse novo valor é usada na condição do laço antes que uma nova execução seja feita.',
      },
      {
        type: 'default',
        title: 'Expressão final',
        body: 'Agora voltando ao código que acabamos de fazer:',
      },
      {
        type: 'code',
        body: `
var totalLotes = 10;
var totalAmostras = 0;

para (var contador = 0; contador < totalLotes; contador++) {
    totalAmostras++
}

escreva(totalAmostras)

// Resultado: 10`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Nesse caso específico, na inicialização do "para" declaramos uma variável contador iniciando com 0 e ela fará o papel de controlar o laço.',
      },
      {
        type: 'default',
        title: null,
        body: 'A condição será verificar se o valor de contador é menor que o valor de totalLotes, que é 10.',
      },
      {
        type: 'default',
        title: null,
        body: 'Na expressão final o contador será incrementado em 1 a cada iteração.',
      },
      {
        type: 'default',
        title: null,
        body: ' No bloco de código, definimos que a variável totalAmostras também dever ser incrementada em 1 a cada iteração.',
      },
      {
        type: 'default',
        title: null,
        body: 'Dessa forma, se a variável totalAmostras for igual ou maior que totalLotes, o para é encerrado, totalizando 10 iterações, ou seja, o valor de totalAmostras foi icrementada em 1 por 10 vezes seguidas.',
      },
      {
        type: 'default',
        title: 'Acho que comecei a entender',
        body: 'É claro que podemos colocar qualquer código válido dentro do bloco do "para", inclusive outras estruturas.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Por exemplo, se quisermos que ao coletar 5 amostras seja escrito "Já coletei 5 amostras", podemos colocar uma estrutura condicional dentro do para.',
      },
      {
        type: 'code',
        body: `
var totalLotes = 10;
var totalAmostras = 0;

para (var contador = 0; contador < totalLotes; contador++) {
    se (contador == 5) {
        escreva("Já coletei 5 amostras")
    }
    totalAmostras++
}

escreva(totalAmostras)

// Resultado: Já coletei 5 amostras 10`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Legal!',
        body: 'Também podemos colocar laço dentro de outro laço, mas podemos falar sobre isso em outra hora.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que já temos amostras coletadas, podemos ver o que nesse novo planeta pode nos surpreender.',
      },
    ],
  },
  {
    starId: 16,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Com as amostras coletadas, resta analisá-las.',
      },
      {
        type: 'default',
        title: 'Ok',
        body: 'Contudo, para o foguete fazer à análise ele precisa abrir conexão com o analisador. Além disso, a conexão em si precisa estar ativa enquanto ocorre a análise.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer o programa a partir disso podemos usar outro tipo de laço, conhecido como "enquanto"',
      },
      {
        type: 'default',
        title: null,
        body: 'Para escrever esse laço será mais facil que o "para".',
      },
      {
        type: 'list',
        title: 'enquanto',
        body: 'O "enquanto" apenas precisa da condição, que enquanto for verdadeira será executado o seu bloco de código repetidas vezes.',
      },
      {
        type: 'default',
        title: 'Por que?',
        body: 'No nosso caso, como temos no total 10 amostras, sempre que uma for analisada, será subtraído 1 do total.',
      },
      {
        type: 'code',
        body: `var conexaoAtiva = verdadeiro; 
var totalAmostras = 10;

enquanto(conexaoAtiva){
    totalAmostras--;
}

escreva(totalAmostras)`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'Perceba que foi utilizado outro operador especial, no caso o operador de decremento, ou seja, ao contrario do de incremento, ele subtrai 1 do valor atual de uma variavel. ',
      },
      {
        type: 'default',
        title: null,
        body: 'Como dito a instrução enquanto executará tudo que estiver no seu bloco enquanto sua condição for verdadeira.',
      },
      {
        type: 'default',
        title: 'Eu vi',
        body: 'Porém, neste caso a execução nunca terminará, pois a variável conexaoAtiva sempre sera verdadeira até o fim do programa.',
      },
      {
        type: 'default',
        title: null,
        body: 'Chamamos isso de laço infinito, o que sempre deve ser evitado em qualquer programa. Para evitar isso podemos modificar a condição, de modo que haja uma variável de controle.',
      },
      {
        type: 'default',
        title: null,
        body: 'Neste caso, podemos colocar a variavel totalAmosras na condição, dizendo que enquanto ela for maior que zero continua executando o bloco.',
      },
      {
        type: 'code',
        body: `var conexaoAtiva = verdadeiro; 
var totalAmostras = 10;

enquanto(conexaoAtiva e totalAmostras > 0) {
    totalAmostras--;
}                        
 
escreva(totalAmostras)
// Resultado: 0`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Assim, a partir do momento em que totalAmostras for igual a zero, o enquanto é encerrado. ',
      },
      {
        type: 'default',
        title: null,
        body: 'É possivel tambem forçar o enquanto parar de executar. Para isso, é preciso usar uma instrução especial chamada pausa.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, caso queiramos que apenas cinco amostras sejam analisadas, podemos colocar o pausa quando a variável totalAmostras for igual a esse valor:',
      },
      {
        type: 'code',
        body: `var conexaoAtiva = verdadeiro; 
var totalAmostras = 10;

enquanto(conexaoAtiva e totalAmostras > 0) {
    se (totalAmostras == 5) {
      pausa;
    }
    totalAmostras--;
}                        
 
escreva(totalAmostras)
// Resultado: 5`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Legal',
        body: 'É claro que isso também funciona para outros tipos de laço, como o para.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, é totalmente possível realizar o que acabamos de fazer, usando um simples para.',
      },
      {
        type: 'code',
        body: `var conexaoAtiva = verdadeiro; 
var totalAmostras = 10;

para (; totalAmostras > 0 e conexaoAtiva; totalAmostras--) {
    se (totalAmostras == 5) {
        pausa;
    }
}                        

escreva(totalAmostras)
// Resultado: 5`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Veja que não há inicialização nesse para, pois a variável de controle, no caso totalAmostras, foi declarada fora dele, e ao invés de incremetá-la na expressão final, estamos decrementando-a.',
      },
      {
        type: 'default',
        title: 'Mas quando usar para ou enquanto',
        body: 'Muito bem, usamos o enquanto apenas em situações que não sabemos quantas repetições o laço irá ter, e o para quando já sabemos disso.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, caso não soubéssemos se a conexão está ativa ou não, teríamos que usar apenas o laço enquanto, pois como a variável conexaoAtiva tem valor lógico, não teria como mudar o valor dela a cada iteração na expressão final do laço para.',
      },
      {
        type: 'default',
        title: 'Entendi',
        body: 'Agora com as amostras devidamente analisadas, já temos a reposta de qual planeta estamos.',
      },
    ],
  },
  {
    starId: 17,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Tenho más notícias. De acordo com a análise das amostras, estamos em um planeta com o núcleo bastante instável.',
      },
      {
        type: 'default',
        title: 'E?',
        body: 'Acontece que esse planeta não tem mais vida longa, o que quer dizer que é bom sairmos desse lugar imediatamente!',
      },
      {
        type: 'default',
        title: null,
        body: 'Para começar, podemos aumentar a potência dos motores até chegarem ao máximo da sua capacidade limite.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer isso, podemos criar um programa que, enquanto os motores não chegarem ao seu limte (100), continuaremos a aumentar sua potência em 10.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, ao começar aumentar a potência, é ligado a vetoinha para evitar superaquecimento, mas apenas depois que a potência é aumentada por pelo menos uma vez.',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que só podemos parar de aumentar a potência apenas depois que a ventoinha for desligada.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então temos uma situação complicada.',
      },
      {
        type: 'code',
        body: `var potencia = 20; 
var limite = 100;
var ventoinhaLigada = falso;

enquanto (ventoinhaLigada) {
    potencia += 10;
    se (potencia == limite) {
        ventoinhaLigada = falso;
    } senao {
        ventoinhaLigada = verdadeiro;
    }
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Percebeu que a conta não fecha? O processo de aumentar a potência só para quando ventoinhaLigada for verdadeiro, mas o valor dela, que começa em falso, só muda a partir do momento em que eu começo aumentar a potência 🤨.',
      },
      {
        type: 'default',
        title: 'Putz...',
        body: 'Para resolver esse problema podemos usar o terceiro tipo de laço: o "faca enquanto"',
      },
      {
        type: 'list',
        title: 'Faça enquanto',
        body: 'O "faca enquanto" é um laço que permite executar um bloco de código pelo menos uma vez e depois repetir a execução do bloco enquanto uma condição especificada for verdadeira.',
      },
      {
        type: 'default',
        title: 'Hmm...',
        body: 'No nosso caso vai cair com uma luva, pois a condição do laço é verificada apenas após seu bloco de código ser executado pelo menos uma vez, permitindo que a condição (ventoinhaLigada) seja falsa em um primeiro momento, veja:',
      },
      {
        type: 'code',
        body: `var potencia = 20; 
var limite = 100;
var ventoinhaLigada = falso;

faca {
    potencia += 10;
    se (potencia == 100) {
        ventoinhaLigada = falso;
    } senao {
        ventoinhaLigada = verdadeiro;
    }
} enquanto (ventoinhaLigada)

escreva(potencia);
// Resultado: 100`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Então essa é a diferença entre "enquanto" e "faca enquanto": o "faca enquanto" garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição do laço inicialmente for falsa, o que pode ser bastante últil em algumas situações como essa agora.',
      },
      {
        type: 'alert',
        body: 'Em contrapartida, o "enquanto" não executa o bloco de código se a condição especificada for falsa desde o início.',
      },
      {
        type: 'default',
        title: 'É cada uma meu',
        body: 'Está tudo muito bonito, mas ainda temos que cair fora desse planeta.',
      },
      {
        type: 'default',
        title: null,
        body: 'A medida que subimos, estamos aumentando de velocidade e diminuindo a distância até o espaço.',
      },
      {
        type: 'code',
        body: `var velocidade = 0; 
var distanciaAteEspaco = 1500;
var comprimentoDaOrbita = 500;

enquanto (distanciaAteEspaco > 0) {
    velocidade++;
    distanciaAteEspaco--;
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Porém no momento que conseguirmos sairmos da atmosfera, temos que estabilizar a velocidade em um valor fixo para entrar em órbita do planeta e então acelerar denovo para pegar mais impulso para ir ainda mais longe.',
      },
      {
        type: 'default',
        title: null,
        body: 'Sabe como resolver isso?',
      },
      {
        type: 'default',
        title: 'Usando se senao?',
        body: 'Pode ser uma boa, mas tem um jeito mais elegante de fazer isso em um laço.',
      },
      {
        type: 'default',
        title: 'De que jeito?',
        body: 'Usando outra instrução especial: o "continua"',
      },
      {
        type: 'list',
        title: 'Continua',
        body: 'O "continua" é uma instrução usada dentro de laços, como o "pause", só que ele permite pular a interação atual e ir para a próxima imediatamente.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Quando o "continua" é executado dentro de um laço, o código abaixo da instrução não é executado e a próxima iteração do laço é iniciada.',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso pode ser útil em situações em que você deseja que parte de um bloco de código seja ignorada em uma determinada situação.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, no nosso caso queremos que a variável velocidade pare de ser incrementada enquanto estivermos em órbita do planeta, o que ocorre enquanto distanciaAteEspaco for menor ou igual 1000 e comprimentoDaOrbita for maior que 0',
      },
      {
        type: 'code',
        body: `var velocidade = 50; 
var distanciaAteEspaco = 1500;
var comprimentoDaOrbita = 500;

enquanto (distanciaAteEspaco > 0) {
  se (distanciaAteEspaco <= 1000 e comprimentoDaOrbita > 0) {
      comprimentoDaOrbita--
      continua;
  }
  velocidade++;
  distanciaAteEspaco--;
}

escreva("distanciaAteAtmosfera: " + distanciaAteAtmosfera);
escreva("comprimentoDaOrbita: " + comprimentoDaOrbita);
escreva("velocidade: " + velocidade);
/* Resultado: 
distanciaAteAtmosfera: 0
comprimentoDaOrbita: 0
velocidade: 1500
*/
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Dessa forma, sempre que distanciaAteEspaco e comprimentoDaOrbita for maior que 500, tudo o que estiver após isso, no caso velocidade++; e distanciaAteEspaco--; não é executado.',
      },
      {
        type: 'default',
        title: null,
        body: 'E a partir do momento em que a condição do se não for mais verdadeira, a segunda parte mencionada do bloco (velocidade++; e distanciaAteEspaco--;) volta a ser executada.',
      },
      {
        type: 'default',
        title: 'Complicado isso',
        body: 'Vou colocar uma variável "vezes" para ajudar você a entender melhor o que está acontecendo.',
      },
      {
        type: 'code',
        body: `var velocidade = 50; 
var distanciaAteEspaco = 1500;
var comprimentoDaOrbita = 500;
var vezes = 0;

enquanto (distanciaAteEspaco > 0) {
  vezes++;
  se (distanciaAteEspaco <= 1000 e comprimentoDaOrbita > 0) {
      comprimentoDaOrbita--
      continua;
  }
  velocidade++;
  distanciaAteEspaco--;
}

escreva("distanciaAteAtmosfera: " + distanciaAteAtmosfera);
escreva("comprimentoDaOrbita: " + comprimentoDaOrbita);
escreva("velocidade: " + velocidade);
escreva("vezes: " + vezes);
/* Resultado: 
distanciaAteAtmosfera: 0
comprimentoDaOrbita: 0
velocidade: 1500
vezes: 2000
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Veja que a variável vezes indica que o enquanto foi executada 2000 vezes, porém a velocidade só foi aumentada em 1500 vezes.',
      },
      {
        type: 'default',
        title: null,
        body: 'Ou seja, nas vezes em que "continua" foi executado, velocidade++ não foi, justamente porque essa instrução fez com que o laço começasse outra iteração antes que ela fosse incrementada.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, resumidamente, o "continua" serve para pular uma repetição do laço em um dado ponto do seu bloco de código.',
      },
      {
        type: 'default',
        title: 'Acho que entendi, talvez...',
        body: 'Com o tempo você pega o jeito, agora é hora de se concentra na fuga.',
      },
    ],
  },
  {
    starId: 18,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Agora que já encontramos vários planetas para explorar, podemos configurar para a rota o mais próximo.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas ainda mais importante que isso é verificar se os suprimentos do foguete estão tudo ok.',
      },
      {
        type: 'default',
        title: 'Como fazer isso',
        body: 'Primeiro, vejamos o que temos de comida no momento.',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
escreva(alimentos)
  
// Resultado: maçã, batata, bife, geleia`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas o que é isso na variável alimentos?',
        body: 'Isso nada mais é do que um vetor.',
      },
      {
        type: 'list',
        title: 'Vetores',
        body: 'Vetores são uma coleção ordenada de valores, onde cada valor é identificado por um índice. Em outras palavras, um vetor é um conjunto de elementos que podem ser acessados ​​por sua posição numérica dentro do vetor.',
      },
      {
        type: 'default',
        title: 'Acesso por posição numérica?',
        body: 'Sim! Por exemplo, caso queiramos pegar a maçã da variável "alimentos" devemos fazer da seguinte forma:',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
escreva(alimentos[0])
  
// Resultado: maçã`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Como dito, para acessar qualquer elemento dentro de uma variável que é um vetor, temos que colocar entre colchetes ([]) ao lado da vriável o número do seu índice, isto é, sua posição na lista de elementos conforme a ordem normal com direção de esquerda para direita.',
      },
      {
        type: 'alert',
        body: 'Veja que foi escrito apenas maçã, em vez de todos os alimentos, visto que estamos acessando apenas o primeiro elemento, o que possível por meio do número que corresponde a sua posição no vetor, no caso, o zero.',
      },
      {
        type: 'default',
        title: 'Mas por que zero',
        body: 'Isso porque a posicao dos elementos sempre começa pelo zero, ou seja, se você quisesse pegar o segundo elemento de qualquer vetor, teríamos que colocar 1 entre colchetes.',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
escreva(alimentos[1])
  
// Resultado: batata`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Dica: É possível acessar o último elemento de qualquer vetor, independentemente quantos elementos ele tenha. Para isso, basta colocar 1 negativo (-1)',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
escreva(alimentos[-1])
  
// Resultado: geleia`,
        isRunnable: true,
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5, 6, 7]
 
escreva(alimentos[-1])
  
// Resultado: 7`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas por que um negativo?',
        body: 'Isso porque se você colocar números negativos como índice, você estará invertendo a ordem de direção normal de acesso (esquerda para direita) para direita a esquerda.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, caso colocássemos -2 como índice, estaríamos pegando o penúltimo elemento de um vetor.',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
escreva(alimentos[-2])
  
// Resultado: bife`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora você pode pergutar, como eu faço para adicionar um novo elemento ao vetor.',
      },
      {
        type: 'default',
        title: 'o que eu posso fazer para adicionar um novo elemento ao vetor?',
        body: 'Para fazer isso, basta colocar o elemento na posição que queremos que ele tenha dentro do vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Como no momento temos 4 alimentos, podemos colocar uma goiabada na quinta posição desse vetor, então colocaríamos qual índice?',
      },
      {
        type: 'default',
        title: '5?',
        body: 'Não! Lembre-se os índices/posições de um vetor sempre começam do 0, logo o quinto índice corresponde a 4',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
alimentos[4] = 'goiabada'
      
escreva(alimentos)
  
// Resultado: maçã, batata, bife, geleia, goiabada`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Cuidado, dependendo da posição em que você colocar o novo elemento, poderá haver espaços vazios no vetor.',
      },
      {
        type: 'alert',
        body: 'Por exemplo, se tivéssemos colocado a goiabada no índice 7, as posições 4, 5 e 6 ficariam vagas.',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
alimentos[7] = 'goiabada'
      
escreva(alimentos)
  
// Resultado: maçã, batata, bife, geleia, , , , goiabada`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Caso isso aconteça, podemos substituir essas posíções por alimentos de verdade.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora você pode pergutar denovo, como eu faço para substituir um elemento de um vetor?',
      },
      {
        type: 'default',
        title: 'como eu faço para substituir um elemento de um vetor?',
        body: 'Da mesma forma que colocamos novos elementos em um vetor. Caso já exista algum elemento na posição que especificarmos, esse elemento será substituído pelo novo.',
      },
      {
        type: 'code',
        body: `var alimentos = ['maçã', 'batata', 'bife', 'geleia']
 
alimentos[2] = 'iogurte'
      
escreva(alimentos)
  
// Resultado: maçã, batata, iogurte, geleia`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Existem outras formas de acrescentar novos elementos a um vetor, mas por agora já estamos bem em conhecimento novo.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora você pode pergutar denovo, como eu faço para remover um elemento de um vetor?',
      },
      {
        type: 'default',
        title: 'Como eu faço para remover um elemento de um vetor?',
        body: 'Como disse, já estamos bem em conhecimento novo, até a próxima.',
      },
    ],
  },
];
