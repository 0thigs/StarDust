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
  
  Resultado: explorar o espaço é legal`,
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
  
  resultado: nulo
              `,
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
  ];