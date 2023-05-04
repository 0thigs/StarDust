export const topics = [
  {
    title: 'Básico',
    texts: [
      {
        type: 'default',
        title: 'Variáveis',
        body: 'Variáveis são as primeiras estruturas de dados que todo programador aprende. São caracterizadas por ter um nome e armazenar um valor em memória.',
      },
      {
        type: 'default',
        title: 'Variáveis',
        body: 'São declaradas com var.',
      },
      {
        type: 'code',
        body: `var variavel = "1"; // Aqui declaro uma variável chamada "variável", um texto, cujo valor é "1".`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Variáveis',
        body: 'Variáveis podem ter seus valores alterados a qualquer momento do código.',
      },
      {
        type: 'code',
        body: `
var a = "1";
a = "2";
escreva(a); // escreve 2 na saída.`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Entrada e Saída',
        body: 'Existem duas funções nativas para entrada e saída de dados:',
      },
      {
        type: 'list',
        body: 'escreva(): usado para escrever uma variável ou literal na saída-padrão;',
      },
      {
        type: 'list',
        body: 'leia(): usado para ler uma variável na entrada-padrão.',
      },
      {
        type: 'default',
        title: 'escreva()',
        body: 'A função escreva() pode aceitar N valores',
      },
      {
        type: 'code',
        body: `
escreva(1) // Escreverá 1
var a = 'Texto'
escreva(a) // Escreverá 'Texto'
escreva(a, 1, 2, 3) // Escreverá 'Texto' 1 2 3`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'leia()',
        body: 'Para ler dados da entrada do usuário, você pode usar a função leia(), que aceita 0 ou 1 valores.',
      },
      {
        type: 'code',
        body: `
var teste = leia()
escreva('Resultado: ' + teste)`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Tipos de dados',
    texts: [
      {
        type: 'default',
        title: 'Texto',
        body: 'Variáveis do tipo texto são expressas com aspas duplas ("") ou aspas simples (\'\')',
      },
      {
        type: 'code',
        body: `
var texto = "abc";
var texto2 = 'abc';`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Interpolação de texto',
        body: 'Quando um texto possui em seu conteúdo algo como ${minha_variavel}, e se minha_variável foi definida anteriormente, o novo texto terá o valor de minha_variavel.',
      },
      {
        type: 'code',
        body: `
var minha_variavel = "Strogonoff"
escreva("Eu gosto de \${minha_variavel}") // Escreverá "Eu gosto de Strogonoff"`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Números',
        body: 'Números são inteiros ou de ponto flutuante (com parte decimal). Por padrão, todos os números são armazenados como ponto flutuante.',
      },
      {
        type: 'code',
        body: `
var numeroInteiro = 3;

var numeroFlutuante = 8.5;`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Lógicos',
        body: 'Tipo de variável que pode conter apenas dois valores: verdadeiro ou falso.',
      },
      {
        type: 'code',
        body: `
var variavel1 = verdadeiro;
var variavel0 = falso;`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Operadores',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Operadores, assim como na matemática, são símbolos ou palavras reservadas que indicam uma operação a ser realizada em um ou mais valores.',
      },
      {
        type: 'default',
        title: null,
        body: 'Eles podem ser classificados em diferentes categorias, como operadores aritméticos, operadores de atribuição, operadores de comparação (relacionais), operadores lógicos e operadores de pertencimento.',
      },
      {
        type: 'default',
        title: 'Operadores aritiméticos',
        body: 'Realizam operações matemáticas em valores numéricos, como adição (+), subtração (-), multiplicação (*), divisão (/), resto (%) e incremento/decremento (++/--).',
      },
      {
        type: 'list',
        title: 'Adição (+)',
        body: 'Se ambos os operandos são inteiros, o resultado será inteiro.\n Se um dos operandos é um número real, o resultado será um número real',
      },
      {
        type: 'code',
        body: `escreva(2 + 2); 
Resultdo: 4`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Também há o operador de adição que incrementa 1 a uma variável',
      },
      {
        type: 'code',
        body: `var numero = 2; 
numero++;
escreva(numero)
Resultdo: 3`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Subtração (-)',
        body: '. Se ambos os operandos são inteiros, o resultado será inteiro.\n. Se um dos operandos é um número real (ponto flutuante), o resultado será em ponto flutuante.',
      },
      {
        type: 'code',
        body: `escreva(10 - 7); 
Resultdo: 3`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Também há o operador de subtração que decrementa 1 a uma variável',
      },
      {
        type: 'code',
        body: `var numero = 2; 
numero--;
escreva(numero)
Resultdo: 1`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Multiplicação (*)',
        body: '. Se ambos os operandos são inteiros, o resultado será inteiro.\n. Se um dos operandos é um número real (ponto flutuante), o resultado será em ponto flutuante.',
      },
      {
        type: 'code',
        body: `escreva(10 * 3); 
Resultdo: 30`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Divisão (/)',
        body: '. Se o resto da divisão é zero, o valor retornado será inteiro.\n. Caso contrário, o valor retornado será em ponto flutuante.',
      },
      {
        type: 'code',
        body: `escreva(100 / 5); 
Resultdo: 20`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Resto da divisão/módulo (%)',
        body: '. Retorna o resto da divisão entre dois números',
      },
      {
        type: 'code',
        body: `escreva(25 / 4); 
Resultdo: 1`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Exponenciação (**)',
        body: '. Retorna o primeiro operando elevado à potência do segundo operando.',
      },
      {
        type: 'code',
        body: `escreva(2 ** 5); 
Resultdo: 32`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Operadores de atribuição',
        body: 'São usados para atribuir valores a variáveis, como o operador de atribuição simples (=), operadores de atribuição combinados com operações aritméticas (+=, -=, *=, /=, %=).',
      },
      {
        type: 'code',
        body: `var soma = 2; 
soma += 2

var subtracao = 10;
subtracao -= 3;

var multiplicacao = 7;
multiplicacao *= 3;

var divisao = 50;
divisao /= 5;

var modulo = 12;
modulo %= 2;

escreva(soma);
escreva(subtracao);
escreva(multiplicacao);
escreva(divisao);
escreva(modulo);

// Resultdo: 4 7 21 10 0`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Operadores relacionais',
        body: 'São usados para comparar valores, retornando um valor booleano (true ou false). Alguns exemplos de operadores de comparação são ==, !=, <, <=, >, >=.',
      },
      {
        type: 'code',
        body: `
== - Igual a
1 == 1 // verdadeiro
1 == 2 // falso

!= - Diferente de
1 != 1 // falso
1 != 2 // verdadeiro

>= - Maior ou igual que
1 >= 1 // verdadeiro
1 >= 2 // falso

<= - Menor ou igual que
1 <= 1 // verdadeiro
1 <= 2 // verdadeiro

> - Maior que
1 > 1 // falso
1 > 2 // falso

< - Menor que
1 < 1 // falso
1 < 2 // verdadeiro`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Avaliação da verdade em variáveis não lógicas',
        body: 'Todos os tipos de dados, exceto nulos e falsos, possuem valor lógico verdadeiro',
      },
      {
        type: 'code',
        body: `{} // verdadeiro
1 // verdadeiro
verdadeiro // verdadeiro
[] // verdadeiro

1 == '1' // falso, devido a disparidade de tipos
nulo // falso
falso // falso`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Operadores lógicos',
        body: 'São usados para combinar expressões, resultando em um valor lógico (verdadeiro ou falso). Alguns exemplos de operadores lógicos são e, ou e ! (negação).',
      },
      {
        type: 'code',
        body: `8 > 2 e 2 < 8 // verdadeiro
4 > 0 ou 2 > 4 // verdadeiro
!4 == 2 // verdadeiro`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Operadores de pertencimento',
        body: '. Retorna verdadeiro se o valor da esquerda estiver incluído no valor da direita, caso o valor da direita seja um vetor (Por definição, variáveis e literais de texto são vetores). Caso contrário, retorna falso.\n. Retorna verdadeiro se o valor da esquerda é uma chave dentro do valor da direita, caso o valor da direita seja um objeto. Caso contrário, retorna falso.',
      },
      {
        type: 'code',
        body: `'a' em ['b']; // falso
'b' em ['b']; // verdadeiro
'c' em 'abc'; // verdadeiro
'chave' em {'chave': 'valor'}; // verdadeiro
'valor' em {'chave': 'valor'}; // falso`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Prioridade dos operadores',
        body: 'Os operadores têm uma ordem clara de prioridade, semelhante à matemática, na qual as operações são realizadas em uma ordem específica (ordenadas de cima para baixo com a maior precedência no topo):',
      },
      {
        type: 'code',
        body: `// **
\\, /, * e %
+ e -
> e <
== e !=
em, e e ou`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Condicionais',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'As condicionais permitem que o programa execute diferentes blocos de código, dependendo se uma determinada condição é verdadeira ou falsa',
      },
      {
        type: 'default',
        title: null,
        body: ' Existem duas principais formas de implementar condicionais: se-senao se/se-senao e escolha-caso.',
      },
      {
        type: 'list',
        title: 'Se Senao',
        body: 'Permite que o programa execute um bloco de código se uma determinada condição for verdadeira e outro bloco se ela for falsa',
      },
      {
        type: 'code',
        body: `se (verdadeiro) {
    escreva('sim');
}

// Resultado: sim`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Instruções senão se e senão são opcionais e devem ser anexadas a uma instrução se. Cada declaração é seguida por um bloco de escopo que é executado de acordo com a condição da declaração.',
      },
      {
        type: 'alert',
        body: 'O bloco de escopo de uma instrução se é executado se a condição for avaliada como verdadeira. Caso contrário, quaisquer instruções senão se anexadas serão avaliadas na ordem fornecida e, se qualquer uma dessas condições for avaliada como verdadeira, seus blocos de escopo serão executados.',
      },
      {
        type: 'default',
        title: null,
        body: 'Se a instrução se não for executada e nenhuma instrução senão se também não for, o bloco senão será executado, se fornecido.',
      },
      {
        type: 'code',
        body: `// Escreva "correspondente 2"
var a = 2;
se (a == 1) {
    escreva('correspondente 1');
} senao se (a == 2) {
    escreva('correspondente 2');
} senao {
    escreva('sem valor correspondente');
}
// Resultado: correspondente 2

var a = 3;
se (a == 1) {
    escreva('correspondente 1');
} senao se (a == 2) {
    escreva('correspondente 2');
} senao {
    escreva('Sem valor correspondente');
    
}

// Resultado: Sem valor correspondente`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Escolha Caso',
        body: 'E outra estrutura condicional que permite que o programa execute diferentes blocos de código dependendo do valor de uma variável.',
      },
      {
        type: 'alert',
        body: 'É uma maneira eficiente de encadear várias instruções se quando a comparação envolve uma variável e uma lista de valores possíveis.',
      },
      {
        type: 'default',
        title: null,
        body: 'A sintaxe requer um valor (que é comparado a cada caso), blocos de caso e um bloco padrao, que é opcional. No início da escolha, o valor é avaliado e comparado ao valor de cada expressão caso. Se os valores foram iguais, o bloco de escopo do caso em questão é executado.',
      },
      {
        type: 'default',
        title: null,
        body: 'Se nenhum caso for executado, o bloco de escopo padrao será executado, se fornecido.',
      },
      {
        type: 'code',
        body: `var diaDaSemana = "segunda-feira";

escolha (diaDaSemana) {
    caso "segunda-feira":
        escreva("Hoje é segunda-feira");
    caso "terça-feira":
        escreva("Hoje é terça-feira");
    caso "quarta-feira":
        escreva("Hoje é quarta-feira");
    caso "quinta-feira":
        escreva("Hoje é quinta-feira");
    caso "sexta-feira":
        escreva("Hoje é sexta-feira");
    caso "sábado":
        escreva("Hoje é sábado");
    caso "domingo":
        escreva("Hoje é domingo");
    padrao:
        escreva("Dia da semana inválido");
}
// Resultado: Hoje é segunda-feira`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Dois ou mais casos podem ter o mesmo bloco:',
      },
      {
        type: 'code',
        body: `var mesAtual = "fevereiro";
var diasNoMes;
        
escolha (mesAtual){
    caso "janeiro":
    caso "março":
    caso "maio":
    caso "julho":
    caso "agosto":
    caso "outubro":
    caso "dezembro":
        diasNoMes = 31;
    caso "abril":
    caso "junho":
    caso "setembro":
    caso "novembro":
        diasNoMes = 30;
    caso "fevereiro":
        diasNoMes = 28;
    padrao:
        diasNoMes = "Mês inválido"
}
escreva(diasNoMes);

// Resultado: 31`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Cada caso pode ter mais de uma instrução:',
      },
      {
        type: 'code',
        body: `var nivelPermissao = "admin";

escolha (nivelPermissao){
    caso "admin":
        escreva("Bem-vindo, administrador!");
        escreva("Você tem acesso total ao sistema.");
    caso "editor":
        escreva("Bem-vindo, editor!");
        escreva("Você pode apenas criar e editar conteúdo.");
    caso "convidado":
        escreva("Bem-vindo, convidado!");
        escreva("Você pode apenas visualizar o conteúdo.");
    padrao:
        escreva("Nível de permissão inválido!");
}

// Resultado: Bem-vindo, administrador! Você tem acesso total ao sistema.
`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Laços',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Laços de repetição, também conhecidos como apenas laços, são estruturas de controle de fluxo em programação que permitem executar um conjunto de instruções repetidamente até que uma determinada condição seja atendida.',
      },
      {
        type: 'default',
        title: null,
        body: 'As três principais estruturas de repetição são o "para", "enquanto" e "fazer-enquanto".',
      },
      {
        type: 'list',
        title: 'Para',
        body: 'O "para" é um laço que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira. A sua sintaxe consiste em três expressões separadas por ponto e vírgula, dentro de parênteses, que são:',
      },
      {
        type: 'list',
        title: 'Inicialização',
        body: 'É primeira parte, sendo executada apenas uma vez, no início do laço. Ela serve para inicializar uma variável de controle. Por exemplo: var i = 0;',
      },
      {
        type: 'list',
        title: 'Condição',
        body: 'É a segunda parte, sendo a condição que será avaliada a cada iteração do laço. Enquanto essa condição for verdadeira, o laço continuará executando. Por exemplo: i < 10;',
      },
      {
        type: 'list',
        title: 'Passo',
        body: 'É a terceira parte, sendo executada ao final de cada iteração do laço e é usada para atualizar a variável de controle. Por exemplo: i++.',
      },
      {
        type: 'code',
        body: `para (var i = 0; i < 5; i = i + 1) {
  escreva(i);
}
// Resultado: 0
              1
              2
              3
              4
              5

// Exemplo com inicializador e Passo omitidos.
para (; verdadeiro; ) {
  escreva("Olá, mundo");
}
// Resutado: Laço infinito devido à condição ser sempre verdadeira.`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Enquanto',
        body: 'O enquanto também é um laço que executa um bloco de código repetidamente enquanto uma condição for verdadeira.',
      },
      {
        type: 'code',
        body: `enquanto (verdadeiro) {
            escreva("Olá mundo");
}
// Resultado: Laço infinito`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Fazer ... enquanto',
        body: 'O "fazer-enquanto" é um laço muito parecido com o "enquanto", só com uma diferença crucial: a condição de execução é verificada no final do bloco de código ao invés no início.',
      },
      {
        type: 'default',
        title: null,
        body: 'Isso significa que o bloco de código dentro do "fazer-enquanto" será executado pelo menos uma vez, independentemente de a condição ser verdadeira ou falsa. Se a condição for verdadeira, o bloco de código será executado novamente, caso contrário, a execução do laço será interrompida.',
      },
      {
        type: 'code',
        body: `fazer {
    escreva("Olá, mundo");
} enquanto (falso)
// Resultado: "Olá, mundo" é escrito uma única vez

var i = 0;
fazer {
  escreva(i);
  i = i + 1;
} enquanto (i < 5)
// Resultado: 0
              1
              2
              3
              4
              5`,
        isRunnable: false,
      },
    ],
  },
];
