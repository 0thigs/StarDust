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
        title: null,
        title: 'Introdução',
        body: 'Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma sequência lógica. Na maior parte do tempo, fazemos isso de maneira tão natural que nem nos damos conta, mas quando percebemos, conseguimos enxergar passos que levaram ao resultado final.',
      },
      {
        type: 'default',
        title: null,
        body: 'Ou seja, sequência lógica são passos executados até atingir um objetivo ou solução de um problema.',
      },
      {
        type: 'default',
        title: null,
        body: 'Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma cadeia de outras ações menores que nos levaram até uma atitude final.',
      },
      {
        type: 'alert',
        body: ' Não estamos acostumados a pensar desta maneira sobre nossas atividades cotidianas, mas, quando falamos de programação, estipular uma sequência de etapas é um procedimento muito importante e necessário, uma vez que, diferente de nós, seres humanos, os computadores não são capazes de prever nenhum comportamento.',
      },
      {
        type: 'default',
        title: null,
        body: 'Veja um exemplo a seguir mostrando uma sequência de passos lógicos comum no dia a dia.',
      },
      {
        type: 'code',
        body: `
      Tomar Banho

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
        title: null,
        body: 'Obviamente, há várias formas de chegar nesse mesmo resultado, mas a maneira de pensar logicamente para estipular sequências de passos para a resolução de  um problema dentro da área da computação, damos o nome de lógica de programação, enquanto a sequência narrativa desses eventos, damos o nome de algoritmo.',
      },
      {
        type: 'alert',
        body: 'A diferença é que qualquer sequência lógica de passos pode ser considerado um algorimto, já em programação, os algoritmos são escritos de tal forma que sempre deve obedecer uma série de regras estabelecidas por cada linguagem de programação.',
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
