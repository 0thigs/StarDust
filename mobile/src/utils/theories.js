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
        body: `var alimentos = [
    'maçã',
    'batata',
    'bife',
    'geleia'
]
 
alimentos[2] = 'iogurte'
      
escreva(alimentos)
  
// Resultado: maçã, batata, iogurte, geleia`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Perceba que escrevi o vetor de um jeito diferenciado: Em vez de colocar os elementos um do lado do outro, coloquei um em baixo do outro separados por vírgulas, o que também é totalmente possível',
      },
      {
        type: 'default',
        title: null,
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
  {
    starId: 19,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Agora que nós conseguimos vizualizar o que temos de alimentos na nave, percebemos que temos poucos alimentos para uma viagem longa.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para a nossa sorte, estamos perto de um mercadão espacial, que é uma estação gigante onde é possível comprar qualquer tipo de coisa que você pode imaginar.',
      },
      {
        type: 'default',
        title: '#PatiuMercadao',
        body: 'Agora que estamos no mercadão, podemos colocar os itens no carrinho.',
      },
      {
        type: 'default',
        title: '#PatiuMercadao',
        body: 'E é claro que nosso carrinho se trata de um vetor, então vejamos o que temos por enquanto:',
      },
      {
        type: 'code',
        title: null,
        body: `var carrinho = [];
    
escreva(carrinho);
// Resultado: Nada`,
      },
      {
        type: 'default',
        title: null,
        body: 'Absolutamente nada, ou seja, temos um vetor completamente vazio.',
      },
      {
        type: 'default',
        title: null,
        body: 'Anteriormente você aprendeu como adicionar um item em um vetor usando os números de índice.',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'Como prometido vou explicar outro método para adicionar itens, que é bem mais fácil na minha opinião.',
      },
      {
        type: 'default',
        title: 'Qual???',
        body: 'Para isso usaremos o método "adicionar"',
      },
      {
        type: 'default',
        title: 'Método?',
        body: 'Sim! Métodos são funções para manipular vetores, o que inclui adicionar ou remover elementos, classificar os itens em ordem crescente ou decrescente, pesquisar um elemento específico e muito mais!',
      },
      {
        type: 'default',
        title: 'Não sei se entendi direito',
        body: 'Métodos, em programação, são ações que um objeto pode executar. Pense em um objeto do mundo real, como um carro. Um carro tem métodos, como "ligar", "acelerar" e "frear". Esses métodos permitem que o carro execute ações específicas.',
      },
      {
        type: 'default',
        title: null,
        body: 'Da mesma forma, em programação, um objeto (no nosso caso um vetor) também tem métodos que podem ser executados para realizar tarefas específicas.',
      },
      {
        type: 'default',
        title: 'Adicionar()',
        body: 'Um desses métodos é o "adicionar()", que permite, obviamente, adicionar um novo elemento a um vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para usá-lo, basta colocar o novo item entre os parâmetese do método, e para executá-lo, basta colocá-lo ao lado do vetor separado por um ponto (.).',
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')

escreva(carrinho)
// Resultado: castanhas do planeta Parávion`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'É através do ponto (.) que você poderá usar os métodos, e alguns podem exigir que você passe alguns valores entre os seus parênteses.',
      },
      {
        type: 'alert',
        body: 'Como tinha dito, métodos são funções, e veremos mais sobre eles futuramente, não se preocupe :).',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, é claro que algumas castanhas não serão sufuciente para uma viagem longa, então vamos adicionar mais alguns itens.',
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereais')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('casacos')
carrinho.adicionar('cobertores')
carrinho.adicionar('luvas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

escreva(carrinho);`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Tudo isso meu?',
        body: 'Sim, tudo isso. O que acontece é que o próximo planeta é puramente glacial, então é bom você estar bem preparado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Podemos ver quantos itens já temos no carrinho, utilizando outro método de vetor: "tamanho()"',
      },
      {
        type: 'list',
        title: 'Tamanho()',
        body: 'O método "tamanho()" literalmente retorna o tamanho de um vetor, isto é, o número de itens que há atualmente nele.',
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereais')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('casaco')
carrinho.adicionar('radar')
carrinho.adicionar('luvas')
carrinho.adicionar('botas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

escreva(carrinho.tamanho());
// Resultado: 12`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Como esperado, o carrinho atualmente tem 12 itens. Ao passar no caixa teremos que remover cada um.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas agora é claro que utilizaremos um método para facilitar esse trabalho, no caso utilizaremos o método remover().',
      },
      //   {
      //     type: 'list',
      //     title: 'remover()',
      //     body: 'Você já deve ter percebido que os métodos possuem nomes óbvios, e é assim como deve ser. Lembre-se disso quando criar suas próprias funções (sim, é possível criar novos métodos).',
      //   },
      {
        type: 'list',
        title: 'remover()',
        body: 'Para remover um determinado item de um vetor, você terá que colocar o valor desse item entre os parênteses, veja o exemplo.',
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereais')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('casaco')
carrinho.adicionar('radar')
carrinho.adicionar('luvas')
carrinho.adicionar('botas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

carrinho.remover('lanterna')
carrinho.remover('casaco')
carrinho.remover('radar')
carrinho.remover('luvas')

escreva(carrinho.tamanho());
// Resultado: 8`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Dica: existem outros métodos para remover um iten de um vetor, como o removerPrimeiro(), que como o nome implica, ele remove sempre o primeiro elemento de um vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4];
    

carrinho.removerPrimeiro()

escreva(numeros);
// Resultado: 2, 3, 4`,
        isRunnable: true,
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereais')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('radar')
carrinho.adicionar('cobertores')
carrinho.adicionar('luvas')
carrinho.adicionar('botas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

carrinho.remover('lanterna')
carrinho.remover('radar')
carrinho.remover('cobertores')
carrinho.remover('luvas')

carrinho.removerPrimeiro()

escreva(carrinho.tamanho());
// Resultado: 7`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Você pode me perguntar: se existe removerPrimeiro(), então existe removerUltimo(). De fato, você está certo, e esse método sempre remove o último item de qualquer vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4];
    

carrinho.removerUltimo()

escreva(numeros);
// Resultado: 1, 2, 3`,
        isRunnable: true,
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereais')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('casacos')
carrinho.adicionar('cobertores')
carrinho.adicionar('luvas')
carrinho.adicionar('botas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

carrinho.remover('lanterna')
carrinho.remover('casacos')
carrinho.remover('cobertores')
carrinho.remover('luvas')

carrinho.removerPrimeiro()
carrinho.removerUltimo()

escreva(carrinho.tamanho());
// Resultado: 6`,
        isRunnable: true,
      },
      {
        type: 'default',
        title:
          'Será que não dá para usar laço para agilizar no trabalho de remover todos esses itens?',
        body: 'De fato temos um gênio. Sim, na maioria das vezes usamos laços para trabalhar com vetores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, para remover todos os itens de uma vez podemos usar o removerUltimo() e o tamanho do vetor dentro de um laço enquanto, veja:',
      },
      {
        type: 'code',
        body: `var carrinho = [];
    
carrinho.adicionar('castanhas do planeta Parávion')
carrinho.adicionar('carregador solar')
carrinho.adicionar('kit de primeiros socorros')
carrinho.adicionar('barras de cereal')
carrinho.adicionar('baterias')
carrinho.adicionar('lanterna')
carrinho.adicionar('casaco')
carrinho.adicionar('radar')
carrinho.adicionar('luvas')
carrinho.adicionar('botas')
carrinho.adicionar('cordas')
carrinho.adicionar('aquecedor')

enquanto (carrinho.tamanho() > 0) {
    carrinho.removerUltimo()
}

escreva(carrinho.tamanho());
// Resultado: 0`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, enquanto o tamanho do vetor for maior que 0, continuaremos removendo o último item dele.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que já terminamos as compras, boa sorte tentando levar tudo isso ao foguete.',
      },
    ],
  },
  {
    starId: 20,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Finalmente, já pousamos na superficie do planeta.',
      },
      {
        type: 'default',
        title: null,
        body: 'Antes de sairmos do fogute é bom verificar se estamos levando um aquecedor entre nossos equipamentos, que, é claro, se trata de um vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer isso, devemos usar outro método, no caso, o "inclui".',
      },
      {
        type: 'code',
        body: `var equipamentos = ["mochila", 
        "lanterna", 
        "aquecedor", 
        "sinalizador"
];
    
escreva(equipamentos.inclui("aquecedor"));
// Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: 'inclui()',
        body: 'O método "inclui" verifica se um elemento específico passado entre parênteses esta presente no vetor ou nao. Esse método retorna um valor logico, ou seja, caso um item esteja incluido ele irá retornar verdadeiro, caso contrário retornará falso.',
      },
      {
        type: 'default',
        title: null,
        body: 'É por esse motivo que nesse caso o resultado deu verdadeiro, pois de fato temos um aquecedor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Depois de verificar nosso aquecedor, vamos olhar novamente em nossos equipamentos para ver se possuimos alguma arma, uma blaster, por exemplo, que servirará para a nossa defesa pois apesar de estar congelado, esse novo planeta pode possuir criaturas selvagens.',
      },
      {
        type: 'code',
        body: `var equipamentos = ["mochila", 
        "lanterna", 
        "aquecedor", 
        "sinalizador"
];
    
escreva(equipamentos.inclui("blaster"));
// Resultado: falso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Obiviamente deu falso, pois já te contei que não temos armas há 4 planetas atrás.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, você não acha que ainda está faltando equipamentos importantes, tipo um kit de primeiro socorros ou um radar?.',
      },
      {
        type: 'default',
        title: 'Talvez',
        body: 'De fato esquecemos coisas que ainda não tiramos do nosso vetor compras.',
      },
      {
        type: 'code',
        body: `var compras = ["kit de primeiro socorros", "radar", "baterias"]`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Para adicionar esses itens no vetor equipamentos, podemos fazer de várias formas.',
      },
      {
        type: 'default',
        title: null,
        body: 'A mais simples é usando um método que junte esses vetores em um único vetor, ou seja, que concatene eles.',
      },
      {
        type: 'default',
        title: 'Então existe o método concatenar()?',
        body: 'Isso, você já deve ter percebido que temos métodos para quase tudo.',
      },
      {
        type: 'list',
        title: 'concatenar()',
        body: 'O método "concatenar()" uni vetores em um, só que ele não altera nenhum dos vetores originais. Então o resultado dessa união tem que ser colocada em um novo vetor.',
      },
      {
        type: 'code',
        body: `var equipamentos = [
        "mochila", 
        "lanterna", 
        "aquecedor", 
        "sinalizador"
];
var compras = [
    "kit de primeiro socorros", 
    "radar", 
    "bateria"
];

var meusItens = equipamentos.concatenar(compras)

escreva(meusItens);
// Resultado: mochila, lanterna, aquecedor, sinalizador, kit de primeiro socorros, radar, bateria`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Veja que os vetores "equipamentos" e "compras" ainda existem, mas não precisamos mais deles, todos os elementos presentes nos dois estão também no vetor todosEquipamentos.',
      },
      {
        type: 'alert',
        body: 'Essa é uma boa técnica para adicionar vários elementos de uma vez em um vetor, só que a única desvatagem seria ter que criar uma nova caso quiséssemos manipular esse novo vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3];

var novosNumeros = numeros.concatenar([4, 5, 6])

escreva(novosNumeros);
// Resultado: 1, 2, 3, 4, 5, 6`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Muito bem, mas acho que você deve estar se perguntando: "A gente não vai levar alimento nenhum?"',
      },
      {
        type: 'default',
        title: null,
        body: 'Não passeremos fome. Eu colequei os alimentos para exploração em um vetor separado.',
      },
      {
        type: 'code',
        body: `var alimentos = [
            "garrafa d'água", 
            "barra de cereal", 
            "carne enlatada", 
            "fruta"
];

var qtdAlimentos = [2, 7, 3, 4]

escreva(alimentos);
escreva(qtdAlimentos);
/* Resultado: garrafa d'água, barra de cereal, carne enlatada, fruta
              2, 7, 3, 4
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'O que são qtdAlimentos?',
        body: 'São as quantidades para cada item do vetor alimentos, assim não teremos valores repetidos em um vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para deixar tudo mais organizado, podemos ordernar os alimentos em ordem alfabética.',
      },
      {
        type: 'default',
        title: null,
        body: 'E como fazer isso? Claro, usando um método chamado "ordernar()"',
      },
      {
        type: 'list',
        title: 'ordenar()',
        body: 'O método ordenar() é usado para colocar os elementos de um vetor em ordem alfabética caso ele tenha textos, ou numérica, caso tenha números. Esse método já não cria um novo vetor, mas sim modifica o vetor original.',
      },
      {
        type: 'code',
        body: `var alimentos = [
                "garrafa d'água", 
                "barra de cereal", 
                "carne enlatada", 
                "fruta"
    ];

    var qtdAlimentos = [2, 7, 3, 4]

    alimentos.ordenar()
    qtdAlimentos.ordernar()

    escreva(alimentos);
    escreva(qtdAlimentos);
    /* Resultado: barra de cereal, carne enlatada, fruta, garrafa d'água
                2, 3, 4, 7
    */`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'É possível definir a forma de ordenação do ordernar(). Por exemplo, e se quiséssemos colocar quantidades em ordem descrecente? Mas isso podemos deixar para depois.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que temos tudo organizado, podemos partir para a exploração.',
      },
    ],
  },
  {
    starId: 21,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Muito bem, já faz algum tempo que estamos andando nesse planeta e já adquirimos alguns itens:',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua"
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];

var qtdItens = [9, 4, 20, 37, 12, 1, 2, 1];
`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Assim como fizemos com os alimentos, separamos os nomes dos itens das quantidades de cada um.',
      },
      {
        type: 'default',
        title: null,
        body: 'E se quiséssemos saber a quantidade total dos itens?',
      },
      {
        type: 'default',
        title: 'Usando o método tamanho()?',
        body: 'Na verdade o método "tamanho()" retornaria quantos itens há no vetor, que no nosso caso é 8.',
      },
      {
        type: 'default',
        title: 'Então somar()?',
        body: 'Isso!',
      },
      {
        type: 'code',
        body: ` 
var qtdItens = [9, 4, 20, 37, 12, 1, 2, 1];

var soma = qtdItens.somar();

escreva(soma);
// Resultado: 86`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: 'Somar()',
        body: 'O método "somar()" gera um número sendo a soma de todos os números presente no vetor.',
      },
      {
        type: 'alert',
        body: 'Você percebeu que eu coloquei o resultado de "somar()" em uma variável, o que também seria possível usando o método "inclui()".',
      },
      {
        type: 'code',
        body: ` 
var numeros = [1, 2, 3];

var temNumero2 = numeros.inclui(2);

escreva(temNumero2);
// Resultado: verdadeiro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas e se o vetor tivesso texto?',
        body: 'Boa pergunta! Nesse caso os primeiros itens que são números seriam somados, mas ao encontrar um texto ele juntaria os restantes para formar um texto.',
      },
      {
        type: 'code',
        body: ` 
var qtdItens = [9, 4, 20, 'texto', 37, 12, 1, 2, 1];

var soma = qtdItens.somar();

escreva(soma);
// Resultado: 33texto3712121`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Mas isso não o que a gente quer usando o método "somar()" não é?',
      },
      {
        type: 'default',
        title: null,
        body: 'Ok, contudo, esse vetor itens está muito bagunçado! Podemos organizá-lo melhor separando os itens por categoria.',
      },
      {
        type: 'default',
        title: 'Como assim?',
        body: 'Por exemplo, podemos pegar os itens que são alimentos e colocá-los em um vetor separado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que aí teríamos que criar um novo vetor contendo parte dos itens de um vetor principal.',
      },
      {
        type: 'default',
        title: null,
        body: 'E como fazer isso? Claro, usando um método.',
      },
      {
        type: 'list',
        title: 'Fatiar()',
        body: 'Com o método "fatiar()" literalmente pegaremos uma fatia de um vetor. Para usá-lo é preciso passar dois valores entres os seus parênteses: índice inicial e ínidice final.',
      },
      {
        type: 'default',
        title: 'Como assim índice inicial e final?',
        body: 'O índice quer dizer o índice de vetor mesmo, ou seja, sua posição. Primeiramente definimos a partir de qual índice/posição do vetor, começaremos a fatiá-lo. Após isso, definimos em qual posição a fatia deve parar.',
      },
      {
        type: 'default',
        title: null,
        body: 'Dessa forma, os itens desse novo vetor, serão aqueles cujo os índices estão presentes nessa fatia.',
      },
      {
        type: 'default',
        title: 'Não entendi',
        body: 'Por exemplo, os alimentos do vetor itens são os três primeiros, ou seja, índices 0, 1, e 2. Logo para pegar uma fatia contendo esses itens, definimos o índice inicial como 0 e o índice final como 3.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];

var alimentos = itens.fatiar(0, 3);

escreva(alimentos);
// Resultado: fruta, ovo de Icelope, amêndua`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas por que 3?',
        body: 'Isso porque o item que tenha o seu índice igual ao índice final nunca não estará presente nessa fatia. Ele serve apenas como ponto de parada.',
      },
      {
        type: 'alert',
        body: 'Como deve ter percebido, o método "fatiar()" gera um novo vetor, mas não altera o vetor original, apenas avisando.',
      },
      {
        type: 'default',
        title: 'Hmm...',
        body: 'Esse método é um pouco mais complicado de entender, então continuaremos usando-o para organizar os demais itens.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];

var alimentos = itens.fatiar(0, 3);
var minerais = itens.fatiar(3, 5);
var ferramentas = itens.fatiar(5, 6);
var exoticos = itens.fatiar(6);

escreva(alimentos);
escreva(minerais);
escreva(ferramentas);
escreva(exoticos);

// Excecute para ver o resultado`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Assim, temos:\n(0, 3) - Primeiro item até o terceiro item\n(3, 5) - Quarto item até o quinto item\n(5, 6) - Sexto item até ele mesmo\n(6) - Sétimo item até o último item',
      },
      {
        type: 'default',
        title: 'Mas espera aí! no útimo, o fatiar só tem um valor nos parênteses!',
        body: 'Bem observado! Não te contei, mas é possível omitir o índice final. Caso você faça isso, o índice final será sempre o útimo índice do vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'O que quer dizer que se apenas o índice inicial for passado, o fatiar() retornará o item com esse índice e todos os demais itens do vetor após ele.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5]

var fatia = numeros.fatiar(2);

escreva(fatia)
// Resultado: 3, 4, 5
// fatiar(2) = Terceiro item até o último item do vetor`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Tá mas, o que fazemos com vetor itens?',
        body: 'Sim, agora temos itens duplicados em vetores diferentes, justo porque o "fatiar()" não modifica o vetor originial.',
      },
      {
        type: 'default',
        title: null,
        body: 'Entretanto, há um método que faz exatamente o que "fatiar()" faz, porém ele consegue alterar o original.',
      },
      {
        type: 'default',
        title: 'Qual?',
        body: 'Contarei na próxima.',
      },
      {
        type: 'default',
        title: ':(',
        body: 'Mas, como bônus por você ter chegado até aqui, vou te ensinar um método extra.',
      },
      {
        type: 'default',
        title: 'Qual?',
        body: 'O método "inverter()".',
      },
      {
        type: 'list',
        title: 'inverter()',
        body: 'O método "inverter()" é usado para inverter a ordem dos elementos de um vetor. Ele não cria um novo vetor, mas sim modifica o vetor original.',
      },
      {
        type: 'list',
        body: 'E estou falando de inverter mesmo, ou seja, ao aplicar o método "inverter()" em um vetor, o último elemento passa a ser o primeiro, o penúltimo passa a ser o segundo, e assim por diante.',
      },
      {
        type: 'code',
        body: `var alimentos = [
          "fruta",
          "ovo de Icelope", 
          "amêndua"
        
]

alimentos.inverter();

escreva(alimentos)
// Resultado: amêndua, ovo de Icelope, fruta`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: 'Ah...',
        body: 'Pode não parecer muito útil, mas vai que né.',
      },
    ],
  },
  {
    starId: 22,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Ok, mas ainda temos um problema.',
      },
      {
        type: 'default',
        title: null,
        body: 'Eu disse que o método "fatiar()" não altera o vetor original, mas sim gera um novo.',
      },
      {
        type: 'default',
        title: 'E agora?',
        body: 'A nossa sorte que é existe um método que pode fazer a mesma coisa que o "fatiar()" faz, mas alterando o vetor original.',
      },
      {
        type: 'default',
        title: 'Fala logo qual!',
        body: 'O método "encaixar()".',
      },
      {
        type: 'list',
        title: 'Encaixar()',
        body: 'O método "encaixar()" pode ser utilizado de várias maneiras, mas a principal é remover elementos de um vetor.',
      },
      {
        type: 'list',
        body: 'Nos parênteses do "encaixar()" é necessário colocar 2 números obrigatórios.\nO primeiro indica a partir de qual índice/posição do vetor devem ser removidos os elementos.\n O segundo indica quantos elementos devem ser removidos.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];
  
// encaixar(0, 3) = Começar a remoção a partir da posição 0 e remover 3 elementos
itens.encaixar(0, 3);
    
escreva(itens);
escreva('Temos agora ' + itens.tamanho());
// Execute e veja o resultado
    `,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Percebeu? O vetor itens foi modificado, restando apenas 5 itens.',
      },
      {
        type: 'default',
        title: 'Mas e quanto aos alimentos?',
        body: 'É método "encaixar()" retorna os elementos removidos por ele. Então, para pegar os alimentos removidos pelo "encaixar()" será preciso criar uma nova varíavel.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];
    
// encaixar(0, 3) = Começar a remoção a partir da posição 0 e remover 3 elementos
var alimentos = itens.encaixar(0, 3);
escreva(alimentos);
// Resultado: fruta, ovo de Icelope, amêndua`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora sim! Conseguimos remover os alimentos do vetor principal e colocamos em um vetor separado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora vamos fazer com os demais itens.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];

var alimentos = itens.encaixar(0, 3);
var minerais = itens.encaixar(3, 5);
var ferramentas = itens.encaixar(5, 6);
var exoticos = itens.encaixar(6);

escreva(alimentos);
escreva(minerais);
escreva(ferramentas);
escreva(exoticos);

// Aperte em executar para ver o resultado catastrófico`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Pera aí, mas agora deu tudo errado!',
        body: 'Sim. Acontece que toda vez que o "encaixar()" é executado, os itens são removidos do vetor original, correto? Então na próxima execução, o vetor itens terá menos elementos do que o esperado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso é para mostrar que o "encaixar()" não fuciona da mesma maneira que o "fatiar()".',
      },
      {
        type: 'alert',
        body: 'Lembre-se: A diferença entre os dois é que o segundo número do "encaixar()" indica a QUANTIDADE de elementos que serão removidos, enquanto o do "fatiar()" indica o ponto de parada da fatia. E apenas o "encaixar()" consegue alterar o vetor original.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora vamos fazer do jeito certo. Nesse caso, basta começarmos sempre da posição zero, já que estamos sempre removendo os primeiros itens do vetor itens.',
      },
      {
        type: 'code',
        body: `var itens = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado"
];

var alimentos = itens.encaixar(0, 3);
var minerais = itens.encaixar(0, 2);
var ferramentas = itens.encaixar(0, 1);
var exoticos = itens.encaixar(0);

escreva(alimentos);
escreva(minerais);
escreva(ferramentas);
escreva(exoticos);

escreva(itens)

// Aperte em executar para ver o resultado mágico`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora sim!',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja que no último foi colocado apenas um número. Isso quer dizer que se você passar apenas um número no "encaixar()" ele vai remover todo os itens do vetor a partir desse índice.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja também que agora o vetor itens está vazio, então nos livramos completamente dele. Agora sim podemos continuar nossa exploração.',
      },
      {
        type: 'default',
        title: null,
        body: '...',
      },
      {
        type: 'default',
        title: null,
        body: 'Já andamos faz algum tempo, mas ainda não encontramos mais nada interessante.',
      },
      {
        type: 'default',
        title: null,
        body: 'Pera aí! Acabamos de receber uma mensagem no nosso radar:',
      },
      {
        type: 'code',
        body: `var mensagem = ["Saia", 1, "planeta", 0, 2];
var textos = ["é", "daí", "perigoso"];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Parece que compramos um radar bem vagabundo. A messagem veio toda em pedaços.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para nossa sorte acabamos de conhecer o método "encaixar()".',
      },
      {
        type: 'default',
        title: 'E daí?',
        body: 'Lembra que eu disse que o "encaixar()" pode ser usado de várias maneiras?',
      },
      {
        type: 'default',
        title: null,
        body: 'Você deve ter se perguntado, por que "encaixar" tem esse nome? É porque com ele podemos remontar qualquer vetor, removendo ou adicionando itens.',
      },
      {
        type: 'list',
        body: 'Sim, podemos adicionar itens usando "encaixar()". Para isso, deve-se passar um terceiro valor, mas não necessariamente um número, pode ser um texto, um lógico ou ainda outro vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'É possível ver que no vetor mensagem, há números indicando onde os itens do vetor textos devem ser colocados para completar a mensagem.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então faremos isso: primeiro encaixaremos a palavra "daí" onde está o índice 1',
      },
      {
        type: 'code',
        body: `var mensagem = ["Saia", 1, "planeta", 3];

var textos = ["perigoso", "daí"];

// encaixar(1, 1, "daí") = A partir do índice 1 do vetor mensagem remover um elemento e adicionar o texto "daí"
mensagem.encaixar(1, 1, "daí");

escreva(mensagem);
// Resultado: Saia, daí, planeta, 3`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Se o número do meio fosse zero, nenhum elemento seria removido, ou seja, o resultado seria:\nSaia, 1, daí, planeta, 3.',
      },
      {
        type: 'alert',
        body: 'Mas ao colocar 1, o método "encaixar()" torna-se uma boa maneira também de substituir um valor de um vetor por outro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora colocaremos a outra palavra.',
      },
      {
        type: 'code',
        body: `var mensagem = ["Saia", "daí", "planeta", 3];

var textos = ["perigoso", "daí"];

// encaixar(3, 1, "perigoso") = A partir do índice 3 remover um elemento e colocar o texto "perigoso"
mensagem.encaixar(3, 1, "perigoso");

escreva(mensagem);
// Resultado: Saia, daí, planeta, perigoso`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora temos uma resultado:\nSaia, daí, planeta, perigoso',
      },
      {
        type: 'default',
        title: null,
        body: 'Ok... Então esse planeta deve ser mais perigoso do que eu pensava. Mas agora eu pergunto: quem será que mandou essa mensagem?',
      },
    ],
  },
  {
    starId: 23,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Acabamos de receber mais de uma mensagem no nosso radar:',
      },
      {
        type: 'code',
        body: `var mensagem = ["Preciso", "de", "ajuda"];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Já que todas as mensagens estão sendo recebidas como vetor, podemos juntar os itens para formar um texto.',
      },
      {
        type: 'list',
        title: 'juntar()',
        body: 'O método juntar() permite unir os elementos de um vetor, transformando em um único texto.',
      },
      {
        type: 'list',
        title: null,
        body: 'Só que para usar o "juntar()", é preciso passar um elemento de texto nos parênteses para que ele use esse texto como separador para cada elemento.',
      },
      {
        type: 'list',
        title: null,
        body: 'Além disso, o método juntar() não altera o vetor original, então será preciso colocar o texto gerado em uma nova variável.',
      },
      {
        type: 'code',
        body: `var mensagem = ["Preciso", "de", "ajuda"];
                
var mensagemCerta = mensagem.juntar("");

escreva(mensagemCerta);
// Resultado: Precisodeajuda
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Não é exatamente isso que queremos. Isso aconteceu porque colocamos o separador como um texto vazio.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas queremos que as palavras estejam separadas por um espaço, correto?',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, por exemplo, se colocarmos um traço (-) no "juntar()":',
      },
      {
        type: 'code',
        body: `var mensagem = ["Preciso", "de", "ajuda"];
                
var mensagemCerta = mensagem.juntar("-");

escreva(mensagemCerta);
// Resultado: Preciso-de-ajuda
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Cada palavra será inserido um traço separando elas.',
      },
      {
        type: 'default',
        title: null,
        body: 'Logo, para separar cada palavra adequadamente, usando espaço, basta colocar um texto que seja um espaço no "juntar()".',
      },
      {
        type: 'code',
        body: `var mensagem = ["Preciso", "de", "ajuda"];
                
var mensagemCerta = mensagem.juntar(" ");

escreva(mensagemCerta);
// Resultado: Preciso de ajuda
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Assim fica bem melhor para ler as mensagens.',
      },
      {
        type: 'default',
        title: null,
        body: 'Algum desconhecido está querendo que saiamos desse planeta para ajudá-lo. Então, mande uma mensagem para o foguete vir nos pegar.',
      },
      {
        type: 'default',
        title: 'Ok',
        body: 'Só que, como radar está tranformando as mensagens recebidas em vetores, então é de se presumir que ele também transformará as que serão enviadas quando chegar ao foguete.',
      },
      {
        type: 'default',
        title: 'Vish...',
        body: 'Então podemos tentar engenharia reversa. Talvez se mandarmos a mensagem já como vetor, ele se transformará em texto quando chegar ao foguete.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para nossa sorte (de novo), existe um método que faz literalmente isso: o método "dividir()".',
      },
      {
        type: 'list',
        title: 'Dividir()',
        body: 'O método "dividir()" divide um texto em subtextos, transformando-o em um vetor.',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha já aqui";

var mensagemCerta = mensagem.dividir();       

escreva(mensagemCerta);
// Resultado: Venha já aqui
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas não aconteceu nada!',
        body: 'Isso porque é também é preciso passar nos parênteses do "juntar()" um texto que servirá como separador da divisão.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, se passarmos a letra "a" como separador:',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha já aqui";

var mensagemCerta = mensagem.dividir("a");       

escreva(mensagemCerta);
// Resultado: [ Venh, já, qui ]
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Veja que toda letra "a" foi removida do texto, e os textos que estavam envolta de cada letra "a" se tranformaram em um elemento de um vetor.',
      },
      {
        type: 'alert',
        body: 'O caractere "à" não foi removido por causa do acento, ou seja, "à" é diferente de "a", então cuidado com isso.',
      },
      {
        type: 'default',
        title: 'Mas como separar as palavras da forma correta?',
        body: 'Para isso, definiremos o separador como um espaço vazio (" ");',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha já aqui";

var mensagemCerta = mensagem.dividir(" ");       

escreva(mensagemCerta);
// Resultado: [ Venha, já, aqui ]
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora temos um vetor decente.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas, para chamar o foguete, podemos encurtar a mensagem, mandando apenas "Venha".',
      },
      {
        type: 'default',
        title: null,
        body: 'Para facilitar podemos dizer para o "dividir()" que apenas gere um vetor com apenas 1 elemento.',
      },
      {
        type: 'default',
        title: 'Mas, como fazer isso?',
        body: 'Através do segundo valor passado nos parênteses do "dividir()", que difine quantos itens o vetor gerado deve conter.',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha já aqui";

// Nesse caso, vetor gerado por dividir() terá apenas 1 palavra
var mensagemCerta = mensagem.dividir(" ", 1);       

escreva(mensagemCerta);
// Resultado: Venha
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora sim! Só resta esperar que o foguete venha, caso ele tenha recebido a mensagem, é claro.',
      },
    ],
  },
  {
    starId: 24,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Estamos esperando a um tempão, e nada do foguete.',
      },
      {
        type: 'default',
        title: null,
        body: 'Talvez ter usado engenharia reversa não tenha dado certo.',
      },
      {
        type: 'default',
        title: null,
        body: 'Acho que o radar só transforma mensagens recebidas em vetores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então, podemos tranquilamente enviar mensagens em texto mesmo.',
      },
      {
        type: 'code',
        body: `var mensagem = "   Venha aqui, por f4vor   ";

escreva(mensagem)        `,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Espera aí, o texto da mensagem tem espaços em branco.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mais um caso onde podemos solucionar usando um método de vetor.',
      },
      {
        type: 'default',
        title: 'Vetor? Mas estamos usando texto',
        body: 'Isso pode explodir sua cabeça, mas textos também podem ser vetores.',
      },
      {
        type: 'default',
        title: 'Que??',
        body: 'Textos em variáveis podem ser tratados como vetores, veja só:',
      },
      {
        type: 'code',
        body: `var texto = "abc";

escreva(texto[0]);
// Resultado: a
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title:
          'Então, quer dizer que podemos usar os métodos de vetor que vimos anteriormente em textos?',
        body: 'A resposta é sim! Obviamente nem todos, como o "remover()", "adicionar()", "ordenar()", nem mesmo o "inverter()"',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas podemos usar alguns como "tamanho()", "inclui()" e "concatenar()"',
      },
      {
        type: 'code',
        body: `var texto = "abc";

escreva(texto.tamanho());
escreva(texto.inclui("b"));
escreva(texto.concatenar("d"));
/* Resultado: 3
              verdadeiro
              abcd
*/
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, existem métodos própios para textos.',
      },
      {
        type: 'default',
        title: 'Sério?',
        body: 'Por exemplo, nesse caso para retirar os espaços em branco da mensagem, podemos utilizar o método "aparar()".',
      },
      {
        type: 'list',
        title: 'aparar()',
        body: 'O método "aparar()" é usado para remover os espaços em branco do início e do final de um texto, ou seja aparar as pontas do texto.',
      },
      {
        type: 'code',
        body: `var mensagem = "   Venha aqui, por f4vor   ";
        
var novaMensagem = mensagem.aparar();

escreva(novaMensagem);
// Resultado: Venha aqui, por f4vor`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora sim!',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas espera aí de novo, há um número quatro na palavra "favor".',
      },
      {
        type: 'default',
        title: null,
        body: 'É melhor substituir o 4 pela letra "a".',
      },
      {
        type: 'list',
        title: 'substituir()',
        body: 'O método de texto "substituir()" procura um subtexto dentro de um texto e o substitui por outro. Assim, um novo texto é gerado.',
      },
      {
        type: 'list',
        title: 'substituir()',
        body: 'Para usá-lo é simples: é preciso passar dois valores, o primeiro indica qual subtexto deve ser procurado e substituido, enquanto o segundo é o subtexto que deve ser colocado como substituto.',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha aqui, por f4vor";
        
var novaMensagem = mensagem.substituir("4", "a");

escreva(novaMensagem);
// Resultado: Venha aqui, por f4vor`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Aviso: o método "substituir()" só substitui o primeiro subtexto que ele encontrar. Isso quer dizer que se a mensagem tivesse mais números quatro, apenas o primeiro 4 seria substituido.',
      },
      {
        type: 'code',
        body: `var mensagem = "Venh4 4qui, por f4vor";
        
var novaMensagem = mensagem.substituir("4", "a");

escreva(novaMensagem);
// Resultado: Venha 4qui, por f4vor`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora está bem melhor, mas podemos melhorar ainda mais.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Tirando esse texto "aqui, por favor". Eu disse antes que apenas a palavra "Venha" basta, assim poupamos memória desse radar mequetrefe.',
      },
      {
        type: 'default',
        title: null,
        body: 'Se cada caractere da mensagem fosse um item de um vetor, poderíamos usar o método "fatiar()".',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas já que estamos usando texto, podemos usar o método subtexto() que literalmente consegue fazer o que o "fatiar()" faz, só que para textos.',
      },
      {
        type: 'list',
        title: 'subtexto()',
        body: 'O método "subtexto()" permite extrair uma parte de um texto a partir de um índice inicial até um índice final.',
      },
      {
        type: 'default',
        title: null,
        body: 'Cada índice de um texto corresponde a um caractere. Então se quisermos pegar só a palavra "Venha" da mensagem:',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha aqui, por favor";
         
// subtexto(0, 5) = extrair do primeiro caractere até o quinto caractere
var novaMensagem = mensagem.subtexto(0, 5);

escreva(novaMensagem);
// Resultado: Venha`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Essa parte dos índices do "subtexto()" é bem igual ao "fatiar()" mesmo, ou seja, será extraido todos os caracteres nas posições que estão entre o primeiro e segundo indíces definidos entre parênteses, mas não contando o caractere que corresponde ao índice final.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja eu extraindo a palavra "aqui"',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha aqui, por favor";
         
// subtexto(6, 10) = começar a extrair do quinto caractere até o décimo caractere
var aqui = mensagem.subtexto(6, 10);

escreva(aqui);
// Resultado: aqui`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Se o índice final não for passado, o subtexto começará do indíce inicial e terminará até o último índice do vetor, assim como acontece no "fatiar()"',
      },
      {
        type: 'code',
        body: `var mensagem = "Venha aqui, por favor";
         
// subtexto(12) = começar a extrair do décimo segundo caractere até o último caractere
var subtexto = mensagem.subtexto(12);

escreva(subtexto);
// Resultado: por favor`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'E sim, o "subtexto()" não altera o texto original.',
      },
      {
        type: 'default',
        title: null,
        body: 'Opa! Acabamos de receber uma mensagem do foguete.',
      },
      {
        type: 'code',
        body: `var mensagem = ["Não", "quero"];
escreva(mensagem.juntar(" "));
// Resultado: Não quero`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'O foguete disse que não quer vir aqui?',
        body: 'Pode não parecer, mas o foguete é bem espertinho.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então é melhor mandar uma mensagem mais educada mesmo.',
      },
      {
        type: 'code',
        body: `var mensagem = "Por favor, venha até aqui"`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Recebemos outra mensagem dele.',
      },
      {
        type: 'code',
        body: `var mensagem = ["Já", "falei", "que", "não", "quero"];
escreva(mensagem.juntar(" "));
// Resultado: Já falei que não quero`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'É, parece que esse foguete está bem afoito.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mande assim: Se não vier agora, irei te mandar para o ferro-velho!',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas antes, tranforme o texto em caixa alta, isto é, coloque tudo em letra MAIÚSCULA para ele entender bem.',
      },
      {
        type: 'list',
        title: 'maiusculo()',
        body: 'o método maiusculo() é bem simples: gera um texto com carecteres em maiúsculo a partir do texto original.',
      },
      {
        type: 'code',
        body: `var mensagem = "Se não vier agora, irei te mandar para o ferro-velho!";

var novaMensagem = mensagem.maiusculo()

escreva(novaMensagem);
// Resultado: SE NÃO VIER AGORA, IREI TE MANDAR PARA O FERRO-VELHO!`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Antes que pergunte, também existe o método "minusculo()".',
      },
      {
        type: 'code',
        body: `var texto = "TUDO EM MAIÚSCULO";

escreva(texto.minusculo());
// Resultado: tudo em maiúsculo`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Acabamos de receber mais uma mensagem do foguete.',
      },
      {
        type: 'code',
        body: `var mensagem = [
            "não", 
            "vou", 
            "porque", 
            "não", 
            "faço", 
            "ideia", 
            "onde",
            "você",
            "está"
];

escreva(mensagem.juntar(" "));
// Resultado: não vou porque não faço ideia onde você está`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'É, agora o foguete tem um ponto.',
      },
    ],
  },
  {
    starId: 25,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Temos um vetor com várias coordenadas diferentes:',
      },
      {
        type: 'code',
        body: `var coordenadas = [
            "x:12;y:6", 
            "x:70;y:32", 
            "x:25;y:18", 
            "x:8;y:40", 
];

escreva(coordenadas);`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'O nosso trabalho é achar a coordenada correta dentro desse vetor, que no caso é "x:25;y:18", e colocá-lo em uma mensagem para enviar ao foguete.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para isso, podemos usar o poder dos laços.',
      },
      {
        type: 'default',
        title: null,
        body: 'Eu disse antes que a forma mais comum para trabalhar com vetores é usando laços, então vamos aprender mais sobre isso.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer a primeira tarefa, vamos começar por partes.',
      },
      {
        type: 'default',
        title: null,
        body: 'Primeiramente montamos um "para", com a variável de controle (i) iniciando com 0, já que os índices de vetor começam do zero e não do um.',
      },
      {
        type: 'code',
        body: `
para (var i = 0;) {

}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Depois colocamos a condição do laço como i menor que o tamanho do vetor coordenadas, ou seja, indicamos que o "para" execute algo até que a variável i seja igual ou maior que a quantidade de coordenadas.',
      },
      {
        type: 'code',
        body: `
para (var i = 0; i < coordenadas.tamanho();) {

}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Por fim, incrementamos a variável i a cada nova iteração.',
      },
      {
        type: 'code',
        body: `
para (var i = 0; i < coordenadas.tamanho(); i++) {

}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora no bloco do "para" colocamos a variável i como índice do vetor coordenadas.',
      },
      {
        type: 'code',
        body: `var coordenadas = [
            "x:12;y:6", 
            "x:70;y:32", 
            "x:25;y:18", 
            "x:8;y:40", 
];

para (var i = 0; i < coordenadas.tamanho(); i++) {
    coordenadas[i];
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Se escrevermos "coordenadas[i]" em cada iteração:',
      },
      {
        type: 'code',
        body: `var coordenadas = [
            "x:12;y:6", 
            "x:70;y:32", 
            "x:25;y:18", 
            "x:8;y:40", 
];

para (var i = 0; i < coordenadas.tamanho(); i++) {
    escreva(coordenadas[i]);
}

/* Resultado:  x:12;y:6, 
               x:70;y:32, 
               x:25;y:18, 
               x:8;y:40,
*/ `,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Percebeu a mágica? A cada iteração o i é um número diferente. Dessa forma podemos pegar cada valor do vetor usando essa variável como índice.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora podemos verificar se o valor atual do vetor é igual ao que buscamos.',
      },
      {
        type: 'code',
        body: `var coordenadas = [
            "x:12;y:6", 
            "x:70;y:32", 
            "x:25;y:18", 
            "x:8;y:40", 
];

para (var i = 0; i < coordenadas.tamanho(); i++) {
    se (coordenadas[i] == "x:25;y:18") {
        escreva("Achei a coordenada certa: "+coordenadas[i]);
    }
}

// Resultado: Achei a coordenada certa: x:25;y:18`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Aí sim! Agora, só colocar a coordenada certa em uma variável a parte e concatenar com a mensagem:',
      },
      {
        type: 'code',
        body: `var coordenadas = [
            "x:12;y:6", 
            "x:70;y:32", 
            "x:25;y:18", 
            "x:8;y:40", 
];

var coordenadaCerta = "";
para (var i = 0; i < coordenadas.tamanho(); i++) {
    se (coordenadas[i] == "x:25;y:18") {
        coordenadaCerta = coordenadas[i];
    }
}

var mensagem = "Essas são minhas coordenadas: \${coordenadaCerta}";
escreva(mensagem);
// Resultado: Essas são minhas coordenadas: x:25;y:18`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'A variável coordenadaCerta foi colocada para fora do laço porque senão ela seria reiniciada toda vez a cada iteração do laço. E também porque ela não poderia ser acessada de fora do escopo do "para" ou do "se", lembra?',
      },
      {
        type: 'default',
        title: null,
        body: 'Ok, mas podemos treinar mais essa questão de usar laços com vetores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, e se quiséssemos adicionar todos os alimentos que adiquirimos na exploração na nossa mochila?',
      },
      {
        type: 'code',
        body: `var alimentos = ["fruta", "ovo de Icelope", "amêndua"];

var mochila = [];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Será um trabalho bem mais fácil usando laço.',
      },
      {
        type: 'code',
        body: `var alimentos = ["fruta", "ovo de Icelope", "amêndua"];

var mochila = [];
para (var i = 0; i < alimentos.tamanho(); i++) {
    var alimentoAtual = alimentos[i];
    mochila.adicionar(alimentoAtual);
}

escreva(mochila);
// Resultado: fruta, ovo de Icelope, amêndua`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Mas podemos não usar apenas o "para", mas qualquer outro tipo de laço que já vimos, como o "enquanto".',
      },
      {
        type: 'code',
        body: `var minerais = ["cristal", "pirita"];

var i = 0;
var mochila = [];

enquanto (i < minerais.tamanho()) {
    var mineralAtual = minerais[i];
    mochila.adicionar(mineralAtual);

    i++;
}

escreva(mochila);
// Resultado: cristal, pirita`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'E o "fazer-enquanto".',
      },
      {
        type: 'code',
        body: `var exoticos = ["fóssil de urso anão", "meteorito congelado"];
var mochila = [];
var i = 0;

fazer {
    var exoticoAtual = exoticos[i];
    mochila.adicionar(exoticoAtual);

    i++;
} enquanto (i < exoticos.tamanho())

escreva(mochila);
// Resultado: fóssil de urso anão, meteorito congelado`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora só resta colocar o vetor que tem as quantidades de cada item.',
      },
      {
        type: 'code',
        body: `var mochila = [
            "fruta",
            "ovo de Icelope", 
            "amêndua",
            "cristal", 
            "pirita", 
            "bastão laser quebrado", 
            "fóssil de urso anão",
            "meteorito congelado"
];

var qtdItens = [9, 4, 20, 37, 12, 1, 2, 1];

mochila.adicionar(qtdItens);
escreva(mochila);`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas aí não estaríamos colocando um vetor dentro de outro?',
        body: 'Sim! é possível colocar vetores dentro de um vetor sem problema algum. Na verdade é possível colocar qualquer tipo de dado dentro um vetor, seja texto, número ou lógico.',
      },
      {
        type: 'default',
        title: null,
        body: 'Espera, tem algo vindo em nossa direção!',
      },
      {
        type: 'default',
        title: 'É um pássaro gigante?',
        body: 'Aquilo é um pássaro Icelope!!',
      },
      {
        type: 'default',
        title: null,
        body: 'Nós tínhamos pegado 4 quatro ovos de Icelope durante a exploração, lembra?',
      },
      {
        type: 'default',
        title: null,
        body: 'Provavelmente essa seja a mãe deles.',
      },
      {
        type: 'default',
        title: null,
        body: 'Rápido, pegue aqueles ovos de volta da mochila.',
      },
      {
        type: 'code',
        body: `var mochila = [
            "fruta",
            "ovo de Icelope", 
            "amêndua",
            "cristal", 
            "pirita", 
            "bastão laser quebrado", 
            "fóssil de urso anão",
            "meteorito congelado",
            [9, 4, 20, 37, 12, 1, 2, 1]
];

para cada item em mochila {
    se (item == "ovo de Icelope") {
        escreva(item);
    }
}

// Resultado: ovo de Icelope`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas que espécie de para é esse?',
        body: 'Apresento-lhe o "para-cada"',
      },
      {
        type: 'list',
        title: 'Para cada',
        body: 'O laço "para-cada" faz a mesma coisa que um simples "para" só que com um código mais bonito.',
      },
      {
        type: 'list',
        body: 'Ele é especialmente útil para fazer laço com vetores.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4]
            
para cada numero em numeros {
    escreva(numero);
}

/* Resultado: 1
              2
              3
              4
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, numeros é o vetor que está sendo usado no laço, e numero é a variável que assume um valor de numeros a cada iteração do laço.',
      },
      {
        type: 'alert',
        body: 'E detalhe, a variável que vai ao lado de "para cada" não precisa ser declarada antes e você pode dar o nome que você quiser.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja mais alguns exemplos de "para-cada" para entender bem.',
      },
      {
        type: 'code',
        body: `var valores = [falso, verdadeiro, falso];
          
para cada valor em valores {
  escreva(valor);
}

/* Resultado: falso
              verdadeiro
              falso
*/`,
        isRunnable: true,
      },
      {
        type: 'code',
        body: `var palavras = ['Petros', 'Kaue', '0Thigs'];
          
para cada palavra em palavras {
  escreva(palavra);
}

/* Resultado: Petros
              Kaue
              0Thigs
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Mas voltando para o urgente: temos que devolver os ovos para a mãe deles.',
      },
      {
        type: 'default',
        title: null,
        body: 'Já temos o item ovo, só precisamos multiplicar pelo quantidade que pegamos.',
      },
      {
        type: 'code',
        body: `var mochila = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado",
        [9, 4, 20, 37, 12, 1, 2, 1]
];

var ovos = [];
para cada item em mochila {
    se (item == "ovo de Icelope") {
        var qtdOvos = mochila[-1][1];
        escreva('Quantidade de ovos: '+qtdOvos)
    }
}

// Resultado: 'Quantidade de ovos: 4`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Um vetor com dois índices?',
        body: 'Lembra que agora o último item da mochila é um vetor? Então, podemos pegar um elemento de um vetor dentro de outro através de índice também.',
      },
      {
        type: 'default',
        title: null,
        body: 'escrever mochila[-1][1] quer dizer:\n[-1] = Pegar o último item de mochila, que no caso é um vetor.\n[1] = Pegar o segundo valor desse vetor interno, que no caso é quatro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que temos o número 4, multiplicamos com o item "ovo de Icelope"',
      },
      {
        type: 'code',
        body: `var mochila = [
        "fruta",
        "ovo de Icelope", 
        "amêndua",
        "cristal", 
        "pirita", 
        "bastão laser quebrado", 
        "fóssil de urso anão",
        "meteorito congelado",
        [9, 4, 20, 37, 12, 1, 2, 1]
];

var ovos = [];
para cada item em mochila {
    se (item == "ovo de Icelope") {
        var qtdOvos = mochila[-1][1];
        para (var i = 0; i < qtdOvos; i++) {
            ovos.adicionar(item);
        }
    }
}

escreva(ovos);
// Resultado: ovo de Icelope, ovo de Icelope, ovo de Icelope, ovo de Icelope`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Não disse que é possível usar laço dentro de laço? Agora sim estamos começando a escrever códigos mais complexos.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que a mãe pássaro está com seus ovos, resta apenas esperar o foguete chegar.',
      },
    ],
  },
  {
    starId: 26,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Aqui estamos mais uma vez no espaço.',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que agora temos que procurar quem mandou aquela mensagem de ajuda.',
      },
      {
        type: 'default',
        title: null,
        body: 'E agora com o radar do próprio foguete não precimos mais daquele que compramos.',
      },
      {
        type: 'default',
        title: null,
        body: 'E por falar em mensagem, acabamos de receber mais uma.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para visualizar a mensagem é necessário fazer alguns passos.',
      },
      {
        type: 'default',
        title: null,
        body: '1. ligar todos sensores do radar;\n2. Aumentar a resolução em 20;\nVerificar se a mensagem contém script malicioso;\n3. Verificar se a tela está acesa;\n4. Escrever a mensagem.',
      },
      {
        type: 'code',
        body: `var mensagem = 'Por favor, me ajundem!'
        
var sensores = [falso, falso, falso];
var resolucao = 10;
var telaAcesa = verdadeiro;

para (var i = 0; i < sensores.tamanho(); i++) {
    sensores[i] = verdadeiro;
}

resolucao += 20;

se (!mensagem.inclui('script') e telaAcesa) {
    escreva(mensagem);
}
// Resultado: Por favor, me ajundem!`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Ok, já entendemos que essa pessoa precisa da nossa ajuda, mas porque ela não fala onde ela está?',
      },
      {
        type: 'default',
        title: null,
        body: 'Só resta perguntar isso, mande uma mensagem escrito: "Quais são suas coordenadas?"',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que para mandar uma mensagem com o radar é preciso seguir os mesmos passos de receber uma mensagem, por motivos de segurança, é claro.',
      },
      {
        type: 'code',
        body: `var mensagem = 'Quais são suas coordenadas?'
        
var sensores = [falso, falso, falso];
var resolucao = 10;
var telaAcesa = verdadeiro;

para (var i = 0; i < sensores.tamanho(); i++) {
    sensores[i] = verdadeiro;
}

resolucao += 20;

se (!mensagem.inclui('script') e telaAcesa) {
    escreva(mensagem);
}
// Resultado: Quais são suas coordenadas?`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Isso, acabamos de receber uma resposta.',
      },
      {
        type: 'code',
        body: `var mensagem = 'Mas por que você quer saber?'
        
var sensores = [falso, falso, falso];
var resolucao = 10;
var telaAcesa = verdadeiro;

para (var i = 0; i < sensores.tamanho(); i++) {
    sensores[i] = verdadeiro;
}

resolucao += 20;

se (!mensagem.inclui('script') e telaAcesa) {
    escreva(mensagem);
}
// Resultado: Mas por que você quer saber?`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Tá, responda que é para saber onde ela está.',
      },
      {
        type: 'code',
        body: `var mensagem = 'É para saber onde você está';
        
var sensores = [falso, falso, falso];
var resolucao = 10;
var telaAcesa = verdadeiro;

para (var i = 0;i < sensores.tamanho(); i++) {
    sensores[i] = verdadeiro;
}

resolucao += 20;

se (!mensagem.inclui('script') e telaAcesa) {
    escreva(mensagem);
}
// Resultado: É para saber onde você está

var mensagem = 'Tem certeza?'
        
var sensores = [falso, falso, falso];
var resolucao = 10;
var telaAcesa = verdadeiro;

para (var i = 0;i < sensores.tamanho(); i++) {
    sensores[i] = verdadeiro;
}

resolucao += 20;

se (!mensagem.inclui('script') e telaAcesa) {
    escreva(mensagem);
}
// Resultado: Tem certeza?`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Ok, isso já está ficando chato.',
      },
      {
        type: 'default',
        title: null,
        body: 'Percebeu que estamos repetindo um monte de código?',
      },
      {
        type: 'default',
        title: 'Sim...',
        body: 'Então, essa é uma boa ocasição para explicar um conceito importantíssemo na programação.',
      },
      {
        type: 'default',
        title: 'Funções?',
        body: 'Isso... É, o nome desse módulo já entregou tudo.',
      },
      {
        type: 'default',
        title: 'Funções?',
        body: 'Mas como prometido vou explicar o que são funções 🎉.',
      },
      {
        type: 'list',
        title: 'Funções',
        body: 'Funções nada mais são do que blocos de código que executam uma determinada tarefa e que podem ser reutilizados em diferentes partes de um programa.',
      },
      {
        type: 'list',
        body: 'As funções são escrita utilizando a palavra-chave "funcao" (sem ~)',
      },
      {
        type: 'code',
        body: `funcao`,
        isRunnable: false,
      },
      {
        type: 'list',
        body: 'seguida pelo nome da função e um conjunto de parênteses.',
      },
      {
        type: 'code',
        body: `funcao usarRadar()`,
        isRunnable: false,
      },
      {
        type: 'alert',
        body: 'O nome da função pode ser qualquer coisa, mas é ideal que seja algo relacionado ao o que ela faz, né?',
      },
      {
        type: 'list',
        body: 'Por fim, é só colocar todo o bloco de código que a funcão executará entre chaves.',
      },
      {
        type: 'code',
        body: `funcao usarRadar() {
    var mensagem = 'Mande suas coordenadas, por favor';

    var sensores = [falso, falso, falso];
    var resolucao = 10;
    var telaAcesa = verdadeiro;
    
    para (var i = 0;i < sensores.tamanho(); i++) {
        sensores[i] = verdadeiro;
    }
    
    resolucao += 20;
    
    se (!mensagem.inclui('script') e telaAcesa) {
        escreva(mensagem);
    }
}`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas não aconteceu absolutamente nada!',
        body: 'Isso porque não falamos para a função "usarRadar()" executar o seu bloco de código.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para fazer isso, devemos fazer o que chamamos de "chamar uma função", que é escrever o nome dela depois que a criamos.',
      },
      {
        type: 'code',
        body: `funcao usarRadar() {
    var mensagem = 'Mande suas coordenadas, por favor';

    var sensores = [falso, falso, falso];
    var resolucao = 10;
    var telaAcesa = verdadeiro;
    
    para (var i = 0;i < sensores.tamanho(); i++) {
        sensores[i] = verdadeiro;
    }
    
    resolucao += 20;
    
    se (!mensagem.inclui('script') e telaAcesa) {
        escreva(mensagem);
    }
}

usarRadar();
// Resultado: Mande suas coordenadas, por favor`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Aí sim! Temos nossa primeira função criada.',
      },
      {
        type: 'alert',
        body: 'Cuidado: funções também tem o seu próprio escopo, o que quer dizer que variáveis criadas dentro de uma função não pode ser acessadas de fora dela.',
      },
      {
        type: 'code',
        body: `funcao minhaFuncao() {
    var minhaVariavel = ['Petros']
}

escreva(minhaVariavel[0])
// Resultado: Erro`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Tudo bem, mas podemos melhor nossa função.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Sabe para que servem os parênteses de uma função? Servem para passar valores para código dentro dela.',
      },
      {
        type: 'default',
        title: 'Oi?',
        body: 'É isso mesmo! Ao chamar uma função, podemos passar qualquer valor entre seus parênteses.',
      },
      {
        type: 'code',
        body: `funcao mostrarMensagem() {

}

mostrarMensagem("Olá, mundo!");`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Para usar esse "Olá, mundo!" dentro da função "mostrarMensagem()", devemos criar variáveis entre os parênteses da função',
      },
      {
        type: 'code',
        body: `funcao mostrarMensagem(mensagem) {
            escreva(mensagem);
}

mostrarMensagem("Olá, mundo!");
// Resultado: Olá, mundo!
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Essas variáveis entre parênteses se chamam parâmetros de função e elas podem ter qualquer nome, e caso você queira passar mais valores para a função, você terá que criar mais parâmetros.',
      },
      {
        type: 'code',
        body: `funcao somar(numero1, numero2, numero3) {
        var soma = numero1 + numero2 + numero3;
        escreva(soma);
}

mostrarMensagem(1, 2, 3);
// Resultado: 6
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Por meio dos parâmetros é que podemos criar resultados dinâmicos com uma mesma função.',
      },
      {
        type: 'default',
        title: null,
        body: 'No nosso caso, podemos passar a mensagem que queremos como parâmetro da função "usarRadar()"',
      },
      {
        type: 'default',
        title: null,
        body: 'Assim, a função ira fazer todo o trabalho de configurar o radar usando qualquer tipo de mensagem, seja de resposta ou de envio, veja:',
      },
      {
        type: 'code',
        body: `funcao usarRadar(mensagem) {
    var sensores = [falso, falso, falso];
    var resolucao = 10;
    var telaAcesa = verdadeiro;

    para (var i = 0;i < sensores.tamanho(); i++) {
        sensores[i] = verdadeiro;
    }

    resolucao += 20;

    se (!mensagem.inclui('script') e telaAcesa) {
        escreva(mensagem);
    }
}

usarRadar("Ok, vou procurar");
usarRadar("Tudo bem, vou estar te esperando");
usarRadar("Minhas coordenadas são: x:42;y:84");
usarRadar("Muito obrigado!");
/* Resultado: Ok, vou procurar
            Tudo bem, vou estar te esperando
            Minhas coordenadas são: x:42;y:84
            Muito obrigado!
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Viu só, enviamos e recebemos várias mensagens diferentes, e precisamos escrever o código de configuração do radar apenas uma vez.',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso não é incrível? Agora temos um código bem mais limpo e organizado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas voltando... Agora vamos em direção a essa pessoa desconhecida.',
      },
    ],
  },
  {
    starId: 27,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Agora que temos as coordenadas certas, podemos saber para qual planeta temos que ir.',
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, antes, precisamos reabastecer nosso foguete né?',
      },
      {
        type: 'default',
        title: null,
        body: 'Por sorte temos um posto espacial aqui perto.',
      },
      {
        type: 'default',
        title: null,
        body: 'No posto, ele disponibilizam uma função para calcular o preço do combustível com base em quantos litros queremos.',
      },
      {
        type: 'code',
        body: `funcao calcularPreco(litros) {
    var preco = 2;
    var precoTotal = litros * preco;
    retorna precoTotal
}
`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'O que é esse retorna?',
        body: 'Você se lembra que eu falava que ao executar um método de vetor era retornado determinado valor?',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'Isso porque métodos também são funções. E agora que você aprendeu a criar suas próprias funções, precisa saber a usar a palavra-chave "retorna".',
      },
      {
        type: 'list',
        title: 'Retorna',
        body: 'O retorna é uma instrução usada em funções para retornar um determinado valor.',
      },
      {
        type: 'default',
        title: null,
        body: 'E esse valor retornado pode ser usado para fora da função.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Colocando esse valor retornado em uma variável. Olhe:',
      },
      {
        type: 'code',
        body: `funcao calcularPreco(litros) {
    var preco = 2;
    var precoTotal = preco * litros;
    retorna precoTotal
}

var preco = calcularPreco(24);
escreva(preco);
// Resultado: 48
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Viu só? O valor de precoTotal vou retornado pela função, e esse valor retornado foi colocado na variável preco.',
      },
      {
        type: 'alert',
        body: 'ATENÇÃO: No código, há duas variáveis preco, porém elas não são iguais, porque possuem escopo diferente.',
      },
      {
        type: 'default',
        title: null,
        body: 'Contudo, podemos melhorar a escrita dessa função. Está vendo que a variável precoTotal é igual a multiplicação de preco e litros?',
      },
      {
        type: 'default',
        title: 'Sim',
        body: 'Podemos retornar diretamente essa multiplicação sem a necessidade de colocar o resultado final em uma variável.',
      },
      {
        type: 'code',
        body: `funcao calcularPreco(litros) {
    var preco = 2;
    retorna preco * litros
}

var preco = calcularPreco(24);
escreva(preco);
// Resultado: 48
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Parece mágica, mas não é. Além disso, é possível retornar qualquer valor que é resultado de uma expressão, seja um cálculo ou comparação, como no código abaixo.',
      },
      {
        type: 'code',
        body: `funcao conferirMaior(numero1, numero2) {
    retorna numero1 > numero2;
}

var resultado = conferirMaior(2, 8);
escreva(resultado);
// Resultado: falso
`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Porém, voltando, o preço desse combustível tá bem salgado, mas é o que temos para hoje, né?',
      },
      {
        type: 'default',
        title: null,
        body: 'Com o combustível comprado, temos que colocá-lo no tanque.',
      },
      {
        type: 'default',
        title: null,
        body: 'Na verdade eu criei uma função que faz isso para gente. Basta colocar o novo combustível e ele retorna quantos litros tem agora.',
      },
      {
        type: 'code',
        body: `var reabastecer = funcao (litros) {
    // Reabastecendo
    var totalLitros = 4 + litros;
    escreva("Agora há \${totalLitros} litros.");
}

reabastecer(48);
// Resultado: Agora há 52 litros`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Mas que espécie de função é essa?',
        body: 'Isso se trata de uma função anônima.',
      },
      {
        type: 'list',
        title: 'Função anônima',
        body: 'funções anônimas são o que o nome diz, funções que não tem um nome, simplesmente isso.',
      },
      {
        type: 'list',
        body: 'Geralmente elas são usadas para serem colocadas em varíaveis. Elas não tem diferença com funções com nomes, e podem ser usadas como uma função qualquer, ou seja, elas também podem usar parâmetros e retornar valores.',
      },
      {
        type: 'code',
        body: `var reabastecer = funcao (litros) {
    // Reabastecendo
    var totalLitros = litros;
    escreva("Agora há \${litros} litros.");
    retorna litros;
}

escreva(reabastecer(48));
/* Resultado: Agora há 52 litros
              48
*/`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Caso a função anônima seja associada a uma variável, para chamar essa função, deverá ser usado o nome dessa variável.',
      },
      {
        type: 'code',
        body: `var calcularArea = funcao(base, altura) {
    retorna base * altura;
};

escreva(calcularArea(2, 5));
// Resultado: 10`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Então, porque usar funções anônimas, já que não há diferença?',
        body: 'Embora também seja possível com funcções nomeadas, as funções anônimas permitem serem usadas como parâmetros para outras funções mais facilmente.',
      },
      {
        type: 'default',
        title: null,
        body: 'Sim, usar função dentro de outra função. Mas, isso é assunto para outra hora.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora com o tanque cheio, falta localizar o planeta pelas coordenadas.',
      },
      {
        type: 'default',
        title: null,
        body: 'Nas redondezas, há apenas 3 planetas diferentes, podemos achar o correto por meio de uma função.',
      },
      {
        type: 'code',
        body: `funcao acharPlaneta(coordenadas) {
    se (coordenadas == "x:20;y:10") {
        retorna "Planeta Xalax";
    } senao se (coordenadas == "x:72;y:36") {
        retorna "Planeta Valtor";
    } senao {
        retorna "Planeta Kyron";
    }
}

escreva("O \${acharPlaneta('x:42;y:84')} é para onde temos que ir!");
// Resultado "O Planeta Kyron é para onde temos que ir!"`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Nessa função, colocamos três "retorna" diferentes, o que também é totalmente possível.',
      },
      {
        type: 'alert',
        body: 'Quando um retorna é executado, a função para de executar o resto do código dentro dela.',
      },
      {
        type: 'code',
        body: `funcao mostrarAlgo() {
    retorna
    escreva("Escrevendo algo.")
}

mostrarAlgo()
// Resultado: Nada`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'Também é possível uma função não retornar nada. Isso pode ser útil em uma estrutura condicional, por exemplo.',
      },
      {
        type: 'code',
        body: `funcao verificarIdade(idade) {
    se (idade > 18) {
        escreva("Pode pilotar um foguete");
        retorna;
    } 
    escreva("Não pode pilotar um foguete");
}

verificarIdade(999);
// Resultado Pode pilotar um foguete`,
        isRunnable: true,
      },
      {
        type: 'alert',
        body: 'No exemplo acima, o escreva de baixo não foi executado, por que o retorna encerrou a execução da função, impedindo que o escreva de baixo fosse executado.',
      },
      {
        type: 'code',
        body: `funcao acharPlaneta(coordenadas) {
    se (coordenadas == "x:20;y:10") {
        retorna "Planeta Xalax";
    } senao se (coordenadas == "x:72;y:36") {
        retorna "Planeta Valtor";
    } senao {
        retorna "Planeta Kyron";
    }
}

escreva("O \${acharPlaneta('x:42;y:84')} é para onde temos que ir!")
// Resultado "O Planeta Kyron é para onde temos que ir!"`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Viu que no exemplo acima eu usei a função como se fosse uma variável? Esse é o poder do "retorna".',
      },
      {
        type: 'default',
        title: null,
        body: 'já que a função está tendo um valor, você não precisa necessariamente colocar esse valor em uma variável para usá-lo.',
      },
      {
        type: 'default',
        title: null,
        body: 'A mesma coisa que fazíamos com os métodos de vetor, lembra? Às vezes colocávamos o valor retornado do método em uma variável ou usávamos diretamente.',
      },
      {
        type: 'code',
        body: `var letras = ['a', 'b', 'c'];
var numeros = [1, 2, 3]
        
var qtdLetras = letras.tamanho();

escreva(qtdLetras);
escreva(numeros.tamanho());

/* Resultado: 3
              3
*/`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora tudo está se encaixando!',
      },
      {
        type: 'default',
        title: null,
        body: 'Com as coordenadas definidas, chegaremos ao planeta rapidinho!',
      },
    ],
  },
  {
    starId: 28,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Pousamos no planeta são e salvos!',
      },
      {
        type: 'default',
        title: null,
        body: 'O que falta agora? Achar a pessoa, é claro.',
      },
      {
        type: 'default',
        title: null,
        body: 'E já que esse planeta não é pequeno, isso pode levar dias ou até meses.',
      },
      {
        type: 'default',
        title: null,
        body: 'Espera, há alguém vindo em nossa direção, e ele parece ser bem grande!',
      },
      {
        type: 'default',
        title: null,
        body: 'Ele disse que sabe quem estamos procurando e que pode nos levar até ela.',
      },
      {
        type: 'default',
        title: 'E confiamos nesse cara?',
        body: 'Bom, parece ser melhor do que nada. Além disso, o que alguém desse tamanho fará com a gente se recusarmos?',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que, ao longo do caminho ele passará alguns desafios, e o primeiro começa agora.',
      },
      {
        type: 'default',
        title: 'Desafios?',
        body: 'O primeiro deles é fácil: adivinhar um número.',
      },
      {
        type: 'default',
        title: null,
        body: 'O grandão, vamos chamar ele assim, vai gerar um número aleatório por meio de uma função nativa.',
      },
      {
        type: 'default',
        title: 'Função nativa?',
        body: 'Sim, também conhecida como funções internas.',
      },
      {
        type: 'list',
        title: 'Função nativa',
        body: 'São funções pré-criadas, que já vem prontas para serem usadas em qualquer programa sem a necessidade de você mesmo criá-las.',
      },
      {
        type: 'default',
        title: null,
        body: 'São como o "escreva()", "leia()" e os métodos de vetor, sabe? Em nenhum momento criamos essas funções. (não sei se tinha percebido, mas "escreva()" e "leia()" também são funções).',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que, há outras funções nativas, como o "aleatorio()".',
      },
      {
        type: 'list',
        title: 'aleatorio()',
        body: 'A função "aleatorio()" apenas retorna um número aleatório. Mas não qualquer número aleatório, mas um entre 0 e 0.99999999999...',
      },
      {
        type: 'code',
        body: `var numeroAleatorio = aleatorio();
        
escreva(numeroAleatorio);
// Resultado: Um número aleatório entre 0 e 0.99999...`,
        isRunnable: true,
      },
      {
        type: 'default',
        body: 'Não importa quantas vezes você execute sempre será retornado um número aleatório entre esses dois números.',
      },
      {
        type: 'default',
        body: 'Pode não parecer útil, de fato com certeza não é, mas existe um que pode ser.',
      },
      {
        type: 'list',
        title: 'aleatorioEntre()',
        body: 'a função "aleatorioEntre()" também gera um número aleatório. Porém, o número gerado estará sempre entre os valores passado para a função.',
      },
      {
        type: 'list',
        body: 'O primeiro parâmetro é o número "mínimo" e o segundo é o "máximo", o número aleatório deverá estar entre esses dois números.',
      },
      {
        type: 'code',
        body: `var numeroAleatorio = aleatorioEntre(1, 9)
        
escreva(numeroAleatorio)
// Resultado: Um número aleatório entre 1 e 8`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Não era para ser um número aleatório entre 1 e 9?',
        body: 'a função aleatorioEntre(0, 9) tem um porém: o valor gerado aleatoriamente nunca será igual ao número máximo passado para a função, mas pode ser igual ao mínimo.',
      },
      {
        type: 'code',
        body: `var numero = aleatorioEntre(1, 2);
        
escreva(numero);
// Resultado: Sempre vai ser 1, porque o máximo (2) nunca é incluído`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Agora vamos resolver o desafio do grandão.',
      },
      {
        type: 'code',
        body: `var maximo = 10;
var minimo = 4 * 2 + 1;

var numero = aleatorioEntre(minimo, maximo);
        
// Qual será o valor de numero?
escreva(numero);`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Se o máximo é 10 e o mínimo é 9, então o resultado só pode ser 9.',
      },
      {
        type: 'code',
        body: `var maximo = 10;
var minimo = 4 * 2 + 1;

var numero = aleatorioEntre(minimo, maximo);
        
escreva(numero);
// Resultado: 9`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Essa foi muito fácil.',
      },
      {
        type: 'default',
        title: null,
        body: 'Já andamos um tanto, e o grandão vai passar outro desafio.',
      },
      {
        type: 'default',
        title: null,
        body: 'E o desafio é: criar uma função que transforma um número em um texto!',
      },
      {
        type: 'code',
        body: `funcao transformarNumero(numero) {
    
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'E ele já armou a função para gente escrever o retorno nela',
      },
      {
        type: 'default',
        title: 'Mas como transformar um número em texto?',
        body: 'Essa vai ser fácil também, pois existem funções nativas que convertem um tipo de dado para outro.',
      },
      {
        type: 'default',
        title: null,
        body: 'Essas funções nativas são 3:',
      },
      {
        type: 'list',
        title: 'texto()',
        body: 'a função "texto()" converte um número, real ou inteiro, para texto, retornando esse novo texto.',
      },
      {
        type: 'code',
        body: `var numero = 42;

var texto = texto(numero);

escreva(texto)
// Resultado: 42;`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Também há conversores para inteiro e real.',
      },
      {
        type: 'list',
        title: 'inteiro()',
        body: 'Converte um número real ou texto, que não apresente letras, em um número inteiro.',
      },
      {
        type: 'code',
        body: `var numTexto = "111";

escreva(111 + inteiro(numTexto));
// Resultado: 222`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: 'real()',
        body: 'Converte um número inteiro ou texto, que não apresente letras, em um número real.',
      },
      {
        type: 'code',
        body: `var numTexto = "504.69";

escreva(0.01 + real(numTexto));

// Resultado: 504.7`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Viu? Os números foram somados! Caso fosse texto, aconteceria uma concatenação.',
      },
      {
        type: 'alert',
        body: 'Só que, como eu disse, para converter para número (inteiro ou real), o texto precisa necessariamente conter apenas números. Caso contrário vai dar erro.',
      },
      {
        type: 'code',
        body: `var texto = "Olá";

escreva(real(texto));

// Resultado: Erro`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Então, para resolver o desafio do grandão:',
      },
      {
        type: 'code',
        body: `funcao transformarNumero(numero) {
    retorna texto(numero);
}

escreva(transformarNumero(999));
// Resultado: 999`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Sim, estamos retornando o retorno de outra função. Então, acabamos de criar uma função de alta ordem 😀!',
      },
      {
        type: 'default',
        title: 'Alta o que?',
        body: 'Porém, o grandão acabou de dizer que isso foi só um aperitivo, e que os verdadeiros desafios começam agora.',
      },
      {
        type: 'default',
        title: 'Vish...',
        body: ':)',
      },
    ],
  },
  {
    starId: 29,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'O próximo desafio é dobrar cada número de um vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, um vetor sendo [1, 2, 3, 4], deve gerar um vetor com [2, 4, 6, 8].',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4];
var novoVetor = [];

para (var i = 0; i < numeros.tamanho(); i++) {
    var novoNumero = numeros[i] * 2;
    novoVetor.adicionar(novoNumero);
}

escreva(novoVetor);
// Resultado: 2, 4, 6, 8`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: 'Pronto',
        body: 'Muito bem!!',
      },
      {
        type: 'default',
        title: null,
        body: 'Só que, há uma maneira de fazer exatamente isso em bem menos linhas.',
      },
      {
        type: 'default',
        title: 'Como?',
        body: 'Usando funções de alta ordem!',
      },
      {
        type: 'list',
        title: 'Funções de alta ordem',
        body: 'Funções de alta ordem ou funções de ordem superior (vamos chamar de apenas funções avançadas), são funções que recebem outras funções como parâmetro.',
      },
      {
        type: 'code',
        body: `funcao cumprimentar() {
    escreva("Olá!");
};

funcao souOutraFuncao(funcaoCumprimentar) {
    funcaoCumprimentar();
};

souOutraFuncao(cumprimentar);
// Resultado: Olá!`,
        isRunnable: true,
      },
      {
        type: 'list',
        title: null,
        body: 'Nesse exemplo, a função "cumprimentar()" foi passado como parâmetro para a funcao "souOutraFuncao()". Assim, a função "cumprimentar()" foi executada dentro de "souOutraFuncao()".',
      },
      {
        type: 'list',
        title: null,
        body: 'Uma função avançada também é aquela que retorna uma função passada que foi passada como parâmetro.',
      },
      {
        type: 'code',
        body: `funcao somar(num1, num2) {
    retorna num1 + num2;
};

funcao executarSomar(num1, num2, somar) {
   retorna somar(num1, num2);
};

escreva(executarSomar(1, 2, somar))
// Resultado: 3`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, a funcao "executarSomar()" recebe 3 parâmetros. Os dois primeiros são números e o terceiro é uma função que soma dois números.',
      },
      {
        type: 'default',
        title: null,
        body: 'A função "soma()" é executada dentro da funcao "executarSomar()" usando os parâmetros que foram originalmente passados para a funcao "executarSomar()".',
      },
      {
        type: 'default',
        title: null,
        body: 'E o retorno de "somar()" é retornado pela funcao "executarSomar()".',
      },
      {
        type: 'default',
        title: null,
        body: 'Parece complicado? Tealvez seja.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas você percebeu que a forma de escrever uma função desse tipo não é diferente de escrever uma função normal.',
      },
      {
        type: 'default',
        title: null,
        body: 'Então no final das contas, "função de ordem superior" acaba sendo um nome chique de funções que recebem ou que retornam outras funções.',
      },
      {
        type: 'default',
        title: null,
        body: 'Mas porque eu estou explicando isso? Porque a função nativa que iremos usar agora é uma função desse tipo.',
      },
      {
        type: 'default',
        title: null,
        body: 'Existem algumas funções avançadas de são usadas especificamente para vetores, e uma delas é o "mapear()".',
      },
      {
        type: 'list',
        title: 'mapear()',
        body: 'A função "mapear()" transforma cada elemento de um vetor através de um laço, retornando um novo vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Para escrevê-la é simples:',
      },
      {
        type: 'code',
        body: `var novoVetor = mapear(vetorOriginal, funcaoTranformadora);`,
        isRunnable: false,
      },
      {
        type: 'list',
        body: 'O "mapear()" recebe dois parâmetros, o primeiro é o vetor original e o segundo é a função transformadora, ou seja, a que transformará cada elemento do vetor original.',
      },
      {
        type: 'default',
        title: null,
        body: 'Quando o "mapear()" for executado essa função transformadora será aplicada a cada elemento do vetor original.',
      },
      {
        type: 'default',
        title: null,
        body: 'No nosso caso, a função transformadora será função que dobra um número. Então vamos criá-la.',
      },
      {
        type: 'code',
        body: ` var numeros = [1, 2, 3, 4];

funcao dobrar(numero) {
    retorna numero * 2;
};
        
var novosNumeros = mapear(numeros, dobrar);

escreva(novosNumeros);
// Resultado: 2, 4, 6, 8`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'A função transformadora, no caso "somar()", está recebendo um parâmetro. Mas de onde ele está vindo?',
      },
      {
        type: 'default',
        title: null,
        body: 'Lembra que eu disse que a mapear faz uma laço no vetor passado como primeiro parâmetro?',
      },
      {
        type: 'default',
        title: null,
        body: 'A cada iteração desse laço a função "dobrar()" é executada recebendo como parâmetro o número atual do vetor números.',
      },
      {
        type: 'default',
        title: 'Que?',
        body: 'Bugou agora? Aqui temos uma função que mostra o funcionamento do "mapear()" por baixo dos panos.',
      },
      {
        type: 'code',
        body: `funcao meuMapear(vetor, funcaoTrasnformadora) {
    var novoVetor = [];
          
    para (var i = 0; i < vetor.tamanho(); i++) {
        var elementoTransformado = funcaoTrasnformadora(vetor[i]);
        novoVetor.adicionar(elementoTransformado);
    }
          
    retorna novoVetor;
}`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Hmm...',
        body: 'É bem parecido com o laço que criamos logo no começo, não é? Só que o "mapear()" faz isso automaticamente, veja de novo.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4];

funcao dobrar(numero) {
    retorna numero * 2;
};
        
var novosNumeros = mapear(numeros, dobrar);

escreva(novosNumeros);
// Resultado: 2, 4, 6, 8`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Muito bem, pronto para mais um desafio? O próximo é criar um vetor com os números de outro vetor que são maiores que 10.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por exemplo, um vetor [1, 4, 9, 12, 45, 60] deve gerar um vetor [12, 45, 60].',
      },
      {
        type: 'default',
        title: null,
        body: 'Não será possível fazer com o "mapear()", porque esse método retorna obrigatoriamente um vetor com a mesma quantidade de itens do vetor original. O vetor gerado nesse desafio pode ter bem menos, não é?',
      },
      {
        type: 'default',
        title: null,
        body: 'Então teremos que usar outra função avançada, no caso que filtre os elementos de um vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Esse é um trabalho para a função "filtrarPor()".',
      },
      {
        type: 'list',
        title: 'filtrarPor()',
        body: 'Esse método cria outro vetor contendo apenas os elementos do vetor original que passem em uma condição fornecida.',
      },
      {
        type: 'list',
        body: 'E já que ele é uma função avançada, assim como o mapear, ele cria um laço no vetor, onde cada elemento na iteração é passado como parâmetro para função filtradora.',
      },
      {
        type: 'code',
        body: `var novoVetor = filtrarPor(vetorOriginal, funcaoFiltradora);`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Então, no nosso caso:',
      },
      {
        type: 'code',
        body: `var numeros = [5, 10, 15, 20];

funcao verificarSeMaiorQue10(numero) {
    retorna numero > 10;
};
                
var numerosFiltrados = filtrarPor(numeros, verificarSeMaiorQue10);
        
escreva(numerosFiltrados);
// Resultado: 15, 20`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Está vendo que a função "verificarSeMaiorQue10()" retorna um lógico?',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso porque a função filtradora deve obrigatoriamente retornar um lógico, que:\nse for verdadeiro, o elemento atual é colocado no novo vetor, caso falso ele é excluído.',
      },
      {
        type: 'default',
        title: null,
        body: 'Talvez você ache que o nome da função filtradora grande demais (o que não é problema nenhum), você pode usar uma função anônima no lugar.',
      },
      {
        type: 'default',
        title: null,
        body: 'Assim ó:',
      },
      {
        type: 'code',
        body: `var numeros = [5, 10, 15, 20];

var numerosFiltrados = filtrarPor(numeros, funcao(numero) {
        retorna numero > 10;
});
        
escreva(numerosFiltrados);
// Resultado: 15, 20`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Essa é uma das vantagens da função anônima que eu disse antes, de criar a função diretamente como parâmetro de outra função.',
      },
      {
        type: 'default',
        title: null,
        body: 'E antes que pergunte, sim, também dá para usar função anônima no "mapear()".',
      },
      {
        type: 'code',
        body: `
var numeros = [1, 2, 3, 4];

var novosNumeros = mapear(numeros, funcao(num) {
    retorna num * 2;
});

escreva(novosNumeros);
// Resultado: 2, 4, 6, 8`,
        isRunnable: true,
      },
      {
        type: 'default',
        title: null,
        body: 'Acabamos todos os desafios do grandão, e ele disse que já estamos aptos a encontrar com a pessoa desconhecida.',
      },
      {
        type: 'default',
        title: null,
        body: 'Quem será que é essa pessoa?',
      },

      //   {
      //     type: 'default',
      //     title: null,
      //     body: 'Com mais um desafio concluído, só resta o último: Ordenar um vetor de números em ordem crescente.',
      //   },
      //   {
      //     type: 'default',
      //     title: null,
      //     body: 'Por exemplo, um vetor [8, 2, 6, 12, 1] gerará um vetor [1, 2, 6, 8, 12]',
      //   },
    ],
  },
];
