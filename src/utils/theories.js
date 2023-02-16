export const theories = [
  {
    starId: 1,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Olá, seja bem-vindo. Primeiramente para começarmos essa jornada, é necessário deixar claro o conceito de lógica e algoritmos, pois esse conceito será de vital importância para o entendido de assuntos mais avançados, então vamos lá!.',
      },
      {
        type: 'default',
        title: 'Introdução',
        body: 'Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma sequência lógica. Na maior parte do tempo, fazemos isso de maneira tão natural que nem nos damos conta, mas quando percebemos, conseguimos enxergar passos que levaram ao resultado final.',
      },
      {
        type: 'default',
        title: null,
        body: 'Ou seja, uma sequência lógica são passos executados até atingir um objetivo ou solução de um problema.',
      },
      {
        type: 'default',
        title: 'Algoritmo está em todo lugar',
        body: 'Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma cadeia de outras ações menores que nos levaram até uma atitude final.',
      },
      {
        type: 'alert',
        body: 'Embora, não estamos acostumados a pensar desta maneira sobre nossas atividades cotidianas, mas, quando falamos de programação, estipular uma sequência de etapas é um procedimento muito importante e necessário, uma vez que, diferente de nós, seres humanos, os computadores não são capazes de prever nenhum comportamento.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo a seguir mostrando uma sequência de passos lógicos comum no dia a dia.',
      },
      {
        type: 'code',
        body: `
     algorimto Tomar Banho
  
      Início
    
        Pegar a toalha e roupas;
        Entrar no banheiro e fechar a porta;
        Tirar a roupa que está usando;
        Ligar o chuveiro e esperar a água esquentar;
        Entrar no box do banho;
        Se molhar, ensaboar, enxaguar = banho;
        Fechar o chuveiro;
        Pegar a toalha e se secar;
        Sair do box;
        Se vestir com a roupa limpa;
        Sair do banheiro.
    
      Fim
            `,
      },
      {
        type: 'default',
        body: 'Obviamente, há várias formas de chegar nesse mesmo resultado, mas a maneira de pensar logicamente para estipular uma sequência de passos para a resolução de um problema, damos o nome de lógica de programação dentro da área da computação, enquanto a sequência narrativa desses eventos, damos o nome de algoritmo.',
      },
      {
        type: 'alert',
        body: 'A diferença é que qualquer sequência lógica de passos pode ser considerado um algorimto, já em programação, os algoritmos são escritos de tal forma que sempre deve obedecer uma série de regras estabelecidas por cada linguagem de programação, o que a gente chama de sintaxe.',
      },
      {
        type: 'default',
        title: 'Por que aprender Lógica de Programação?',
        body: 'Aprender lógica de programação é importante porque permite que você resolva problemas de maneira mais eficiente e organizada, ajuda na solução de tarefas complexas e facilita a criação de programas que automatizam tarefas e processos. Além disso, é uma habilidade altamente valorizada no mercado de trabalho.',
      },
      {
        type: 'default',
        title: 'Como funciona a Lógica de Programação?',
        body: 'Como você já percebeu, a Lógica de Programação funciona através de algoritmos, ou seja, por meio de passos lógicos e bem definidos que deve ser seguidos para resolver um problema. Esses passos são escritos em um código que é interpretado pelo computador para que ele possa executar a tarefa desejada.',
      },
      {
        type: 'list',
        body: 'Agora que você aprendeu o conceito de lógica e algoritmos, vamos testar seus conhecimentos até então adquiridos 🚀.',
      },
    ],
  },
  {
    starId: 2,
    texts: [
      {
        type: 'default',
        title: 'Introdução',
        body: 'Os programas de computadores nada mais são do que algoritmos escritos numa linguagem de programação (PHP, Python, JavaScript, entre outras) e que são interpretados e executados por uma máquina, no caso um computador.',
      },
      {
        type: 'alert',
        body: 'Uma linguagem de programação normalmente possui uma sintaxe própria, que é o conjunto de regras que determina quais combinações de símbolos e palavras-chaves podem ser utilizadas para escrever o código.',
      },
      {
        type: 'default',
        title: null,
        body: 'Os algoritmos, por sua vez, são descritos em uma linguagem chamada pseudocódigo.',
      },
      {
        type: 'default',
        title: 'O que é pseudocódigo ?',
        body: 'O pseudocódigo é uma representação informal de um algoritmo, que permite a comunicação clara e eficiente de uma ideia de programação sem se preocupar com a sintaxe específica de uma linguagem de programação',
      },
      {
        type: 'alert',
        body: 'Colocando dessa maneira, o pseudocódigo não é uma linguagem de programação, pois ele é uma descrição genérica de um algoritmo e tampou pode ser executado ou compilado por nenhum compilador ou interpretador.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por esse motivo o pseudocódigo acaba sendo uma ferramenta valiosa para ajudar a planejar e projetar a lógica de um programa antes de escrever o código de verdade.',
      },
      {
        type: 'default',
        title: 'Mas então por que usar pseudocódigo?',
        body: 'Oras, usar pseudocódigo possui muitas vantagens, incluindo:',
      },
      {
        type: 'list',
        body: '1 - Permite uma representação clara e compreensível do algoritmo, o que facilita a comunicação da ideia que você quer implementar com outras pessoas',
      },
      {
        type: 'list',
        body: '2 - Ajuda a identificar e corrigir problemas de lógica antes de escrever o código de verdade',
      },
      {
        type: 'list',
        body: '3 - Facilita a manutenção e atualização do código existente',
      },
      {
        type: 'list',
        body: '4 - Não requer conhecimento avançado de sintaxe, o que facilita o aprendizado da lógica de programação',
      },
      {
        type: 'default',
        title: 'Como escrever pseudocódigo?',
        body: 'Existem algumas convenções gerais que ajudam a escrever pseudocódigo de forma clara e eficiente.',
      },
      {
        type: 'list',
        body: '. Use comandos claros e fáceis de entender, geralmente em português',
      },
      {
        type: 'list',
        body: '. Indente (fazer recuo) o código de forma apropriada para indicar a estrutura do algoritmo;',
      },
      {
        type: 'list',
        body: '. Use comentários para explicar o que o código está fazendo em termos gerais',
      },
      {
        type: 'list',
        body: '. Mantenha o pseudocódigo o mais simples possível, evitando detalhes desnecessários.',
      },
      {
        type: 'alert',
        body: 'A pseudolinguagem que iremos utilizar será o portugol, pois ela possui a sintaxe (maneira de escrever um código) em português, o que facilita bastante para iniciantes o aprendizado de lógica de programação.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo de pseudocódigo escrito em portugol:',
      },
      {
        type: 'code',
        body: `
          Início
          Leia número1
          Leia número2
          Se número1 > número2
            Escreva "número1 é maior"
          Senão
            Escreva "número2 é maior"
          Fimalgoritmo`,
      },
      {
        type: 'alert',
        body: 'Você não precisa enteder toda essa estrutura por agora, pois entraremos em cada detalhe ao decorrer da jornada.',
      },
      {
        type: 'default',
        title: 'conclusão',
        body: 'Em resumo, o pseudocódigo é uma ferramenta valiosa para ajudar a projetar e planejar a lógica de um programa antes de escrever o código de verdade. Ao usar pseudocódigo, é possível comunicar de forma clara e eficiente a ideia de um algoritmo, identificar problemas de lógica e facilitar a manutenção e atualização do código existente.',
      },
      {
        type: 'alert',
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
        body: 'Nesta aula, você aprenderá sobre os três elementos básicos de qualquer programa de computador utilizando a pseudo-linguagem Portugol: entrada, processamento e saída. Estes três elementos são importantes para compreender a lógica por trás de qualquer programa de computador, independentemente da linguagem de programação ou do sistema operacional utilizado.',
      },
      {
        type: 'default',
        title: 'Entrada',
        body: 'A entrada é o processo de ler ou receber informações do usuário ou de outra fonte externa. Em Portugol, a entrada de dados pode ser feita através do comando "LEIA". Por exemplo:',
      },
      {
        type: 'code',
        body: `
          leia nome
          `,
      },
      {
        type: 'default',
        title: 'Processamento',
        body: 'O processamento é o processo de transformar as informações de entrada em resultados úteis. Em Portugol, isso pode ser feito através de comandos matemáticos, condicionais e de loop. Por exemplo, para calcular a média de duas notas:',
      },
      {
        type: 'code',
        body: `
          leia nota1
          leia nota2
          media <- (nota1 + nota2) / 2
          `,
      },
      {
        type: 'Saída',
        title: 'Processamento',
        body: 'A saída é o processo de apresentar os resultados do processamento para o usuário ou para outra fonte externa. Em Portugol, a saída pode ser feita através do comando "ESCREVA". Por exemplo, para exibir a média calculada:',
      },
      {
        type: 'code',
        body: `
          ESCREVA "A média é: ", media
          `,
      },
      {
        type: 'default',
        title: 'Exemplo completo',
        body: 'Aqui está um exemplo completo de cálculo da média de duas notas em Portugol:',
      },
      {
        type: 'code',
        body: `
          LEIA nota1
          LEIA nota2
          media <- (nota1 + nota2) / 2
          ESCREVA "A média é: ", media
          `,
      },
      {
        type: 'alert',
        body: 'Note que quando queremos escrever alguma mensagem na tela (letra, frase, número etc.) literalmente, devemos utilizar aspas para identificar o que será escrito, pois o que estiver entre aspas no algoritmo, será exatamente o que aparecerá na tela do computador. Diferente de quando queremos escrever conteúdo de uma variável, pois neste caso não utiliza-se aspas.',
      },
      {
        type: 'default',
        title: 'Conclusão',
        body: 'Em resumo, entrada, processamento e saída são os três elementos básicos de qualquer programa de computador e em Portugol eles podem ser implementados através dos comandos "LEIA", "ESCREVA" e comandos matemáticos, condicionais e de loop, conceitos que abordaremos mais para frente.',
      },
      {
        type: 'default',
        body: ' A compreensão desses elementos é fundamental para a construção de qualquer programa eficaz e funcional em Portugol. Agora, qua tal verificar o que você acabou de ver sobre entrada, processamento e saída respondendo algumas questões?',
      },
    ],
  },
  {
    starId: 4,
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Olá, parabéns por conseguir chegar nessa nova etapa! Vamos começar a falar agora sobre variáveis.',
      },
      {
        type: 'default',
        title: 'O que são variáveis?',
        body: 'Antes de aprender a atribuir valores a variáveis, precisamos entender o que são variáveis. Em programação, uma variável é uma localização na memória do computador onde é possível armazenar um valor.',
      },
      {
        type: 'default',
        title: null,
        body: 'Cada variável tem um nome único que a identifica e um tipo de dado que determina o tipo de informações que ela pode armazenar.',
      },
      {
        type: 'default',
        title: null,
        body: 'Por esse motivo, eles são usados para armazenar dados que podem ser modificados ao longo do tempo, como nomes de pessoas, idades, preços de produtos e outros.',
      },
      {
        type: 'default',
        title: 'O que é declaração de variáveis?',
        body: 'Antes de começarmos a utilizar variáveis em nosso código, é preciso que as declaremos. A declaração de uma variável em Portugol é simples e consiste na definição do tipo da variável e do seu nome.',
      },
      {
        type: 'code',
        body: `
    nome_da_variavel: tipo;
          `,
      },
      {
        type: 'default',
        title: null,
        body: 'Ok, se eu quiser declarar uma variável inteira chamada "idade", escreveremos:',
      },
      {
        type: 'code',
        body: `
          var
              idade: inteiro;
          `,
      },
      {
        type: 'alert',
        body: 'Observe que deve ser usado o comando "VAR" para informar que estamos declarando variáveis. Em seguida, informamos o nome da variável e o tipo de dado que será armazenado nela.',
      },
      {
        type: 'list',
        body: 'Os tipos de variáveis disponíveis em Portugol são: inteiro, real, caractere e lógico',
      },
      {
        type: 'alert',
        body: 'Não se preocupe, vamos falar sobre cada um dos tipos ao decorrer desse mundo.',
      },
      {
        type: 'default',
        title: 'O que é atribuição?',
        body: 'A atribuição é a maneira utilizada para atribuir um valor a uma variável, ou seja, para armazenar um determinado conteúdo em uma variável.',
      },
      {
        type: 'default',
        title: null,
        title: 'Como fazer atribuição?',
        body: 'A sintaxe básica para atribuir valores a variáveis em Portugol é a seguinte.',
      },
      {
        type: 'code',
        body: `
    nome_da_variavel <- valor;
          `,
      },
      {
        type: 'alert',
        body: 'Perceba que a operação de atribuição, normalmente, é representada por uma seta apontando para a esquerda, mas existem outros símbolos para representar a atribuição dependendo da forma de representação do algoritmo mas aqui vamos nos contentar apenas com setas',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo.',
      },
      {
        type: 'code',
        body: `
    nome <- "João";
    idade <- 30;
          `,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, estamos criando duas variáveis, uma chamada "NOME" que armazenará o valor "João" e outra chamada "IDADE" que armazenará o valor 30.',
      },
      {
        type: 'alert',
        body: 'Além disso, você também pode atribuir o valor de uma variável a outra, utilizando o seguinte formato:.',
      },
      {
        type: 'code',
        body: `
          uma_variavel <- outra_variavel
          `,
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo.',
      },
      {
        type: 'code',
        body: `
    nome_completo <- "Lucas Silva"
    nome_para_uso <- nome_completo
          `,
      },
      {
        type: 'default',
        title: null,
        body: 'Neste exemplo, estamos atribuindo o valor da variável "nome_completo" à variável "nome_para_uso". Agora, ambas as variáveis possuem o mesmo valor.',
      },
      {
        type: 'default',
        title: 'Regras para nomes de variáveis',
        body: 'Ao nomear suas variáveis em Portugol, é importante seguir algumas regras básicas:',
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
        body: '3 - O nome da variável não pode ser uma palavra reservada do Portugol, ou seja, um nome de um comando por exemplo.',
      },
      {
        type: 'list',
        body: '4 - O nome da variável deve ser descritivo e fácil de entender.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora observe um exemplo completo utilizando tudo que aprendemos até agora.',
      },
      {
        type: 'code',
        body: `
algoritmo "Exemplo"
var
    nome: caractere
    idade: inteiro
inicio
    escreva("Seu nome é: ", nome)
    escreva("Sua idade é: ", idade)
fimalgoritmo
          `,
      },
      {
        type: 'default',
        title: 'Conclusão',
        body: 'A atribuição de variáveis é uma parte fundamental da programação, pois permite armazenar valores e acessá-los ao longo do código. Ao seguir as regras e a sintaxe corretas, você poderá atribuir valores a suas variáveis sem problemas em Portugol.',
      },
      {
        type: 'default',
        title: null,
        body: 'Agora que tal testar seus conhecimentos?.',
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
