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
  {
    title: 'Vetores',
    texts: [
      {
        type: 'default',
        title: null,
        body: 'Vetores são variáveis com capacidade de armazenar 0 ou mais valores. São úteis em ocasiões em que é necessário executar uma lógica com múltiplos valores.',
      },
      {
        type: 'default',
        title: null,
        body: 'São úteis em ocasiões em que é necessário executar uma lógica com múltiplos valores.',
      },
      {
        type: 'list',
        body: 'vetores são declarados usando colchetes [] e podem conter qualquer tipo de dado, como números, strings e objetos..',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: null,
        body: 'Cada um desses valores é acessado por meio de um índice numérico, que começa em zero e segue até o tamanho do vetor menos um.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];
            
    escreva(vetor[0]); // 1
    escreva(vetor[2]); // 3
    escreva(vetor[4]); // 5`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Métodos de vetor',
        body: 'Métodos de vetor são funções pré-definidas que permitem manipular vetores ',
      },
      {
        type: 'default',
        title: null,
        body: 'Os métodos de vetor são chamados diretamente no vetor usando a sintaxe de ponto (.) e podem ser encadeados para executar várias operações em sequência. Eles também podem receber argumentos para especificar o que fazer com os elementos do vetor.',
      },
      {
        type: 'default',
        title: null,
        body: 'OS métodos de vetor incluem:',
      },
      {
        type: 'list',
        title: 'adicionar()',
        body: 'Adiciona um ou mais elementos ao final do vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    vetor.adicionar(4);
    escreva(vetor);
    
    // Resultado: 1, 2, 3, 4`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'removerUltimo()',
        body: 'Remove o último elemento do vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    vetor.removerUltimo();
    escreva(vetor);
    
    // Resultado: 1, 2, 3`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'removerPrimeiro()',
        body: 'Remove o primeiro elemento de um vetor',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    vetor.removerPrimeiro();
    escreva(vetor);
    
    // Resultado: 2, 3`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'remover()',
        body: 'Remove o primeiro um elemento específico de um vetor',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    vetor.remover(2);
    escreva(vetor);
    
    // Resultado: 1, 3`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'fatiar()',
        body: 'Retorna uma cópia de uma parte de um vetor. Possui dois parâmetros:\nO primeiro indica de qual índice do vetor o fatiamento deve começar.\nO segundo indica em qual índice a fatia deve terminar. Se o segundo parâmetro não for passado, o fatiamente irá até o último índice do vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];
    var novoVetor = vetor.fatiar(2, 4);
    escreva(novoVetor);
    // Resultado: [ 3, 4 ]
    
    var novoVetor = vetor.fatiar(2);
    escreva(novoVetor);
    // Resultado: [ 3, 4, 5 ]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'encaixar()',
        body: 'Adiciona ou remove elementos de um vetor. Possui três parâmetros:\nO primeiro indica de qual índice do vetor a remoção deve começar.\nO segundo (opcional) indica quantos elementos deve ser removidos.\nO terceiro (opcional) indica o elemento que deve ser adicionado no índice inicial definido. Se o segundo parâmetro não for passado, serão removidos todos os itens do vetor partindo do índice inicial até o último. Além disso o encaixar também pode retornar os elementos removidos do vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];
    var elementosRemovidos = vetor.encaixar(2, 4);
    escreva(vetor);
    escreva(elementosRemovidos);
    // Resultado: [ 1, 2 ]
                  [ 3, 4, 5 ]
    
    vetor.encaixar(2);
    escreva(novoVetor);
    // Resultado: [ 1, 2 ]
    
    vetor.encaixar(2, 1, 'texto');
    escreva(vetor);
    // Resultado: [ 1, 2, 'texto', 4, 5 ]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'concatenar()',
        body: 'Retorna um novo vetor com os elementos do vetor original mais os elementos adicionados.',
      },
      {
        type: 'code',
        body: `var vetor1 = [1, 2, 3];
    var vetor2 = [4, 5, 6];
    var novoVetor = vetor1.concatenar(vetor2);
    escreva(novoVetor); 
    // Resultado: [1, 2, 3, 4, 5, 6]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'inclui()',
        body: 'Verifica se um valor específico está presente no vetor, retornando um valor lógico.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    escreva(vetor.inclui(2));
    // Resultado: verdadeiro`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'substituir()',
        body: 'Procura um elemento específico em um vetor e o substitui por outro, retornando um novo vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3];
    var novoAtor = vetor.substituir(2, 4);
    escreva(novoAtor);
    // Resultado: [ 1, 4, 3 ]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Laços e vetores',
        body: 'Os laços são muito úteis para trabalhar com vetores, permitindo percorrer todos os seus elementos e realizar uma ação específica em cada um deles.',
      },
      {
        type: 'list',
        title: 'Laço para',
        body: 'O laço for é o mais tradicional deles e permite controlar o índice do vetor manualmente. A estrutura do laço for é a seguinte:',
      },
      {
        type: 'code',
        body: `para (var i = 0; i < vetor.tamanho(); i++) {
            // código a ser executado em cada elemento
    }`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Onde',
        body: 'i é o índice do elemento atual do vetor.\nvetor é o vetor a ser percorrido.\nvetor.tamanho() é a quantidade de elementos no vetor.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];
    
    para (var i = 0; i < vetor.tamanho(); i++) {
        escreva(vetor[i]);
    }
    /* Resultado: 1
                  2
                  3
                  4
                  5 
    */`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Laço para-cada',
        body: 'O laço para...cada foi introduzido permite percorrer todos os elementos de um vetor sem precisar controlar o índice manualmente:',
      },
      {
        type: 'code',
        body: `para cada elemento em vetor {
        // código a ser executado em cada elemento
    }`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Onde',
        body: 'elemento é o valor atual do elemento do vetor.\nvetor é o vetor a ser percorrido.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
    para cada numero em numeros {
        escreva(numero);
    }
    /* Resultado: 1
                  2
                  3
                  4
                  5 
    */
    `,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Vetores',
    texts: [
      {
        type: 'default',
        title: 'Vetores',
        body: 'Um vetor é uma estrutura de dados que permite armazenar vários valores em uma única variável.',
      },
      {
        type: 'list',
        title: 'Declaração de vetor',
        body: 'Para declarar um vetor é preciso usar colchetes [] e separar os elementos por vírgulas.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];

var textos = ['maçã', 'banana', 'laranja'];

var misto = [10, 'texto', verdadeiro];`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Acessando elementos',
        body: 'É possível acessar elementos individuais de um vetor usando colchetes [] e fornecendo o índice do elemento desejado.',
      },
      {
        type: 'default',
        body: 'O índice de um vetor se trata do número que corresponde a posição em que o elemento se encontra no vetor, porém sempre começando do número 0, ou seja, para acessar o primeiro elemento é preciso usar índice 0; o segundo, índice 1; o terceiro, índice 2 e assim por diante.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
escreva(numeros[0]);
// Resultado: 1
escreva(numeros[1]); 
// Resultado: 2
escreva(numeros[2]); 
// Resultado: 3`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Caso seja colocado um número negativo como índice, a posição dos elementos será tratada de forma invertida, ou seja, também é possível acessar o último elemento usando índice -1; o penúltimo, -2 e assim por diante.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
escreva(numeros[-1]);
// Resultado: 5
escreva(numeros[-2]); 
// Resultado: 4
escreva(numeros[-3]); 
// Resultado: 3`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Substituindo elementos',
        body: 'Pode-se alterar o valor de um elemento de um vetor atribuindo um novo valor ao índice correspondente.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros[1] = 10;
        
escreva(numeros);
// Resultado: [1, 10, 3, 4, 5]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Métodos para vetor',
        body: 'É possível manipular vetores utilizando os métodos de vetor, que já vem incorporados na linguagem e fornecem funcionalidades úteis para adicionar, remover, ou copiar elementos de qualquer vetor criado.',
      },
      {
        type: 'list',
        title: 'adicionar()',
        body: 'Adiciona um ou mais elementos ao final de um vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3];
    
numeros.adicionar(4, 5);

escreva(numeros);
            
// Resultado: [1, 2, 3, 4, 5]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'remover()',
        body: 'Remove um elemento de um vetor. O item a ser removido deve ser especificado como argumento do método, ou seja, entre seus parênteses.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.remover(3);

escreva(numeros); 
// Resultado: [1, 2, 4]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'removerUltimo()',
        body: 'Remove o último elemento de um vetor',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.removerUltimo();

escreva(numeros); 
// Resultado: [1, 2, 3, 4]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'removerPrimeiro()',
        body: 'Remove o primeiro elemento de um vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.removerPrimeiro();

escreva(numeros); 
// Resultado: [2, 3, 4]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'tamanho()',
        body: 'Retorna quantidade de elementos presentes em um vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var quantidade = numeros.tamanho();

escreva(quantidade);
// Resultado: 5
            `,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'concatenar()',
        body: 'Combina dois ou mais vetores em um novo vetor.',
      },
      {
        type: 'code',
        body: `var numeros1 = [1, 2, 3];
var numeros2 = [4, 5, 6];

var numerosConcatenados = numeros1.concatenar(numeros2);

escreva(numerosConcatenados); 
// Resultado: [1, 2, 3, 4, 5, 6]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'fatiar()',
        body: 'Retorna uma cópia de uma parte do vetor, especificada por um índice inicial (obrigatório) e um índice final (opcional). Porém, o item que corresponde ao índice final nunca é incluído na fatia.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var subvetor = numeros.fatiar(1, 4);

escreva(subvetor);
// Resultado: [2, 3, 4]`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Se o índice final não for especificado, a cópia começará do índice inicial terminando no último elemento do vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var subvetor = numeros.fatiar(1);

escreva(subvetor);
    // Resultado: [2, 3, 4, 5]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'encaixar()',
        body: 'Permite remover, substituir ou adicionar elementos em posições específicas. Ele modifica o vetor original e retorna um novo vetor com os elementos removidos.',
      },
      {
        type: 'default',
        body: 'Ele possui três argumentos: o primeiro (obrigatório) é o índice inicial no qual a operação do "encaixar()" deve começar.',
      },
      {
        type: 'default',
        body: 'O segundo (opcional) é a quantidade de itens que vão ser removidos do vetor a partir do índice inicial.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.encaixar(1, 3);

escreva(numeros);
// Resultado: [1, 5]`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Os elementos removidos são retornados como vetor.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var removidos = numeros.encaixar(1, 3);

escreva(numeros);
// Resultado: [1, 5]
escreva(removidos);
// Resultado: [2, 3, 4]
    `,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Do terceiro argumento adiante (opcional) é definido os elementos que serão adicionados no vetor a partir do ídice inicial.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.encaixar(1, 3, "texto1", "texto2");
    
escreva(numeros);
// Resultado: [1, "texto1", "texto2", 5]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'inclui()',
        body: 'Verifica se um elemento está presente no vetor, retornando um valor lógico.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var estaPresente = numeros.inclui(3);

escreva(estaPresente);
// Resultado: verdadeiro`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'inverter()',
        body: 'Inverte a ordem dos elementos de um vetor',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
numeros.inverter();

escreva(numeros);
// Resultado: [5, 4, 3, 2, 1]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'ordenar()',
        body: 'Cria um novo vetor com os números do vetor original em ordem crescente.',
      },
      {
        type: 'code',
        body: `var numeros = [5, 4, 3, 2, 1];
    
var vetorOrdenado = numeros.ordenar();

escreva(vetorOrdenado);
// Resultado: [1, 2, 3, 4, 5]`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Caso o vetor contenha textos, a ordenação será por ordem alfabética.',
      },
      {
        type: 'code',
        body: `var nomes = ["Erika", "Ana", "Carlos", "Daniel", "Bianca"];
    
var vetorOrdenado = nomes.ordenar();

escreva(vetorOrdenado); 
// Resultado: ["Ana", "Bianca", "Carlos", "Daniel", "Erika"]`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Se o vetor possuir números e textos nenhum tipo de ordenação ocorrerá.',
      },
      {
        type: 'code',
        body: `var elementos = ["Zé", 5, "Erika", 7, "Bianca"];
    
elementos.ordenar();

escreva(elementos); 
// Resultado: ["Zé", 5, "Erika", 7, "Bianca"]
            `,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'somar()',
        body: 'Retorna a soma de um vetor de números.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var soma = numeros.somar();

escreva(soma);
// Resultado: 15`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Métodos para textos',
        body: 'Textos também podem ser tratados como vetores.',
      },
      {
        type: 'code',
        body: `var texto = "abc";
    
escreva(texto[0]);
// Resultado: a`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Logo, é possível usar alguns métodos de vetor em textos, como "tamanho()", "inverter()" e "concatenar()" e "inclui()".',
      },
      {
        type: 'code',
        body: `var texto = "abc";
    
  escreva(texto.tamanho());
  // Resultado: 3
  
  escreva(texto.inverter());
  // Resultado: cba
  
  escreva(texto.concatenar("def"));
  // Resultado: abcdef
  
  escreva(texto.inclui("z"));
  // Resultado: falso`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Porém, há métodos próprios para manipular textos:',
      },
      {
        type: 'list',
        title: 'aparar()',
        body: 'Remove os espaços em branco no início e no final de um texto.',
      },
      {
        type: 'code',
        body: `var texto = "   Olá, mundo   ";
  escreva(texto.aparar());
  // Resultado: Olá, mundo`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'apararFim()',
        body: 'Remove os espaços em branco no final de um texto.',
      },
      {
        type: 'code',
        body: `var texto = "Olá, mundo   ";
  escreva(texto.apararFim());
  // Resultado: Olá, mundo`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'apararInicio()',
        body: 'Remove os espaços em branco no início de um texto.',
      },
      {
        type: 'code',
        body: `var texto = "        Olá, mundo";
  escreva(texto.apararInicio());
  // Resultado: Olá, mundo`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'dividir()',
        body: 'divide uma texto em um vetor de subtextos com base em um separador especificado.',
      },
      {
        type: 'code',
        body: `var texto = "Olá, Mundo";
  var palavras = texto.dividir(","); 
  escreva(palavras);
  // Resultado ["Olá,", " Mundo!"]
          
  var frase = "Olá, Mundo! Como você está?";
  var palavras = frase.dividir(" "); 
  escreva(palavras);
  // Resultado ["Olá,", "Mundo!", "Como", "você", "está?"]`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'substituir()',
        body: 'substitui uma parte de uma string por outra',
      },
      {
        type: 'code',
        body: `var frase = "Eu gosto de caju"
frase.substituir("caju", "graviola") 
// Resultado: Eu gosto de graviola`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'subtexto()',
        body: 'Extrai uma parte específica de um texto.',
      },
      {
        type: 'default',
        body: 'Ele recebe dois parâmetros: o índice inicial (obrigatório) e o índice final (opcional) do subtexto desejado. O caractere no índice inicial está incluído no subtexto, enquanto o caractere no índice final não está incluído.',
      },
      {
        type: 'code',
        body: `var texto = "Olá, Mundo";
  var subtexto = texto.subtexto(0, 3);
  escreva(subtexto); 
  // Resultado: "Olá"`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Se o inídice final for omitido, o método subtexto() extrairá do índice fornecido até o final do texto original.',
      },
      {
        type: 'code',
        body: `var texto = "Olá, Mundo";
  var subtexto = texto.subtexto(5);
  escreva(subtexto); 
  // Resultado: "Mundo"`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'maiusculo()',
        body: 'Retorna um novo texto com todos os caracteres do texto original em letras maiúsculas.',
      },
      {
        type: 'code',
        body: `var texto = "olá, mundo";
  var textoMaiusculo = texto.maiusculo();
  
  escreva(textoMaiusculo); 
  // Resultado: "OLÁ, MUNDO"`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'minusculo()',
        body: 'Retorna um novo texto com todos os caracteres do texto original em letras minúsculas.',
      },
      {
        type: 'code',
        body: `var texto = "OLÁ, MUNDO";
var textoMinusculo = texto.minusculo();

escreva(textoMinusculo); 
// Resultado: "olá, mundo"`,
        isRunnable: false,
      },
    ],
  },
  {
    title: 'Funções',
    texts: [
      {
        type: 'default',
        title: 'Funções',
        body: 'Funções são blocos de código que podem ou não devolver um valor ao final de sua execução.',
      },
      {
        type: 'default',
        body: 'As funções podem ser identificadas por um nome ou não.',
      },
      {
        type: 'list',
        title: 'Função com nome',
        body: 'Funções com nome podem ser criadas usando a palavra-chave funcao (ou função), seguida de um nome, e uma lista de parâmetros dentro de parênteses, sendo cada elemento separado por vírgula. Além disso, cada função tem o seu bloco de código, que é delimitado entre chaves.',
      },
      {
        type: 'code',
        body: `funcao principal() {
    escreva("sim!");
}
              
principal();
// Resultado: Sim`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Parâmetros',
        body: 'As funções podem receber valores de entrada, que são chamadas de parâmetros. Os parâmetros são listados entre parênteses na definição da função. Quando uma função é chamada, também é possível fornecer os valores de entrada, que são chamados de argumentos.',
      },
      {
        type: 'code',
        body: `funcao saudacao(nome) {
    escreva("Olá, " + nome + "! Seja bem-vindo!");
}
              
saudacao("João");
// Resultado: Olá, João! Seja bem-vindo!`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Retorna',
        body: 'Uma função pode retornar um valor usando a palavra-chave "retorna". O valor de retorno pode ser usado em outras partes do código.',
      },
      {
        type: 'code',
        body: `funcao soma(a, b) {
    retorna a + b;
}
            
var resultado = soma(3, 4);
console.log(resultado);
// Resultado: 7`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Funções com "retorna" podem ser usadas como qualquer outra variável dentro do código.',
      },
      {
        type: 'code',
        body: `funcao exibirNome(nome) {
    retorna nome;
}
              
escreva("Olá, " + exibirNome('Márcio') + "! Seja bem-vindo!");
// Resultado: Olá, Márcio! Seja bem-vindo`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Escopo de variáveis',
        body: 'As variáveis declaradas dentro de uma função são chamadas de variáveis locais e só podem ser acessadas dentro da própria função.',
      },
      {
        type: 'default',
        body: 'Enquanto as variáveis declaradas fora de uma função são chamadas de variáveis globais e podem ser acessadas em qualquer parte do código.',
      },
      {
        type: 'code',
        body: `var global = "Variável global";
    
funcao exemplo() {
    var local = "Variável local";
    escreva(local); // Resultado: Variável local
    escreva(global); // Resultado: Variável global
}
            
exemplo();
escreva(local); // Resultado: Erro`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Função anônima',
        body: 'É possível criar funções sem um nome especificado. São usadas normalmente como variáveis em outras funções que peçam como argumento de outra função. Porém, uma das maneiras de chamar uma função desse tipo, é associar essa função a uma variável.',
      },
      {
        type: 'code',
        body: `var saudacao = funcao() {
    escreva("Olá, seja bem-vindo!");
};
escreva(saudacao());
// Resultado: Olá, seja bem-vindo!`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'Funções',
        body: 'Como dito, as funções anônimas são frequentemente usadas como argumentos de outras funções, especialmente funções de ordem superior, como mapear(), filtrarPor() etc.',
      },
      {
        type: 'code',
        body: `var funcaoParaMapear = funcao(a) { 
    retorna a * 2; 
};
            
escreva(mapear([5, 3], funcaoParaMapear));
// Resultado: 10, 6`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Funções nativas',
        body: 'Funções nativas são funções incorporadas na linguagem que fornecem funcionalidades pré-definidas para realizar tarefas específicas.',
      },
      {
        type: 'default',
        body: 'Essas funções estão disponíveis globalmente e podem ser usadas em qualquer parte do código sem a necessidade de definição adicional. As funções nativas mais famosas são "escreva()" e "leia()".',
      },
      {
        type: 'code',
        body: `
var mensagem= leia();
escreva(mensagem);`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'aleatorio()',
        body: 'Retorna um número real aleatório entre 0 e 1.',
      },
      {
        type: 'code',
        body: `var numeroAleatorio = aleatorio();
    
escreva(numeroAleatorio);
// 0.8540051495195808`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'aleatorioEntre()',
        body: 'Retorna um número inteiro aleatório entre os valores passados para a função. O primeiro parâmetro é o número mínimo e o segundo é o máximo. Além disso, o valor gerado aleatoriamente nunca será igual ao número máximo passado para a função: sempre será um a menos que o máximo.',
      },
      {
        type: 'code',
        body: `var numeroAleatorio = aleatorioEntre(1, 9);

escreva(numeroAleatorio);
// Resultado: um valor entre 1 e 8.`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Funções de conversão',
        body: 'São funções que permitem converter valores de um tipo de dado para outro tipo.',
      },
      {
        type: 'default',
        title: 'inteiro()',
        body: 'Converte um número flutuante ou texto, que não apresente letras, em um número inteiro.',
      },
      {
        type: 'code',
        body: `var testeTexto = "111";
    
escreva(111 + inteiro(testeTexto));
// Resultado: 222`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'real()',
        body: 'Converte um número inteiro ou texto, que não apresente letras, em um número flutuante.',
      },
      {
        type: 'code',
        body: `var testeTexto = "504.69";

escreva(0.01 + real(testeTexto));
// Resultado: 504.7`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'texto()',
        body: 'Transforma números flutuantes ou inteiros em texto.',
      },
      {
        type: 'code',
        body: `var testeNumero = 123;

escreva("123" + texto(testeNumero));
// Resultado: 123123`,
        isRunnable: false,
      },
      {
        type: 'list',
        title: 'Funções de ordem superior',
        body: 'Funções de ordem superior ou de alta ordem são funções que podem receber outras funções como argumentos e/ou retornar funções como resultado.',
      },
      {
        type: 'default',
        title: 'mapear()',
        body: 'Cria um novo vetor a partir de uma função que é executada usando cada elemento do vetor original como parâmetro.',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];

var numerosDobrados = numeros.mapear(funcao(numero) {
    retorna numero * 2;
});

escreva(numerosDobrados);
// Resultado: [2, 4, 6, 8, 10]`,
        isRunnable: false,
      },
      {
        type: 'default',
        body: 'Quando se trata de usar uma função de alta ordem como "mapear()", é possível optar por passar uma função anônima ou o nome de uma função como argumento. Ambas as abordagens são válidas e funcionam da mesma forma.',
      },
      {
        type: 'code',
        body: `var vetor = [1, 2, 3, 4, 5];

var funcaoAnonima = funcao(valor){
    retorna valor * 2;
};

escreva(mapear(vetor, funcaoAnonima));
// Resultado: [2, 4, 6, 8, 10]`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'filtrarPor()',
        body: 'Cria um novo vetor com todos os elementos que passam por um teste (função de filtragem).',
      },
      {
        type: 'code',
        body: `var numeros = [1, 2, 3, 4, 5];
    
var numerosPares = numeros.filtrarPor(funcao(numero) {
    retorna numero % 2 === 0;
});

escreva(numerosPares);
// Resultado: [2, 4]`,
        isRunnable: false,
      },
      {
        type: 'default',
        title: 'ordenar()',
        body: 'Ordena os elementos de um vetor com base em uma função de comparação.',
      },
      {
        type: 'code',
        body: `var numeros = [5, 2, 8, 1, 4];

numeros.ordenar(funcao(a, b) {
    retorna a - b;
});

escreva(numeros); 
// Resultado: [1, 2, 4, 5, 8]`,
        isRunnable: false,
      },
    ],
  },
];
