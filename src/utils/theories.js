export const theories = [
  {
    starId: 1,
    texts: [
      {
        type: 'default',
        body: 'Olá, seja bem-vindo. Primeiramente para começarmos essa jornada, é necessário deixar claro o conceito de lógica e algoritmos, pois esse conceito será de vital importância para o entendido de assuntos mais avançados, então vamos lá!.',
      },
      {
        type: 'emphasis',
        body: 'Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma sequência lógica. Na maior parte do tempo, fazemos isso de maneira tão natural que nem nos damos conta, mas quando percebemos, conseguimos enxergar passos que levaram ao resultado final.',
      },
      {
        type: 'alert',
        body: 'Ou seja, sequência lógica são passos executados até atingir um objetivo ou solução de um problema.',
      },
      {
        type: 'default',
        body: 'Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma cadeia de outras ações menores que nos levaram até uma atitude final.',
      },
      {
        type: 'emphasis',
        body: ' Não estamos acostumados a pensar desta maneira sobre nossas atividades cotidianas, mas, quando falamos de programação, estipular uma sequência de etapas é um procedimento muito importante e necessário, uma vez que, diferente de nós, seres humanos, os computadores não são capazes de prever nenhum comportamento.',
      },
      {
        type: 'default',
        body: 'Veja um exemplo a seguir mostrando uma sequência de passos lógicos comum no dia a dia.',
      },
      {
        type: 'example',
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
        body: 'Obviamente, há várias formas de chegar nesse mesmo resultado, mas a maneira de pensar logicamente para estipular sequências de passos para a resolução de  um problema dentro da área da computação, damos o nome de lógica de programação, enquanto a sequência narrativa desses eventos, damos o nome de algoritmo.',
      },
      {
        type: 'alert',
        body: 'A diferença é que qualquer sequência lógica de passos pode ser considerado um algorimto, já em programação, os algoritmos são escritos de tal forma que sempre deve obedecer uma série de regras estabelecidas por cada linguagem de programação.',
      },
      {
        type: 'emphasis',
        body: 'Agora que você aprendeu o conceito de lógica e algoritmos, vamos testar seus conhecimentos até então adquiridos 🚀.',
      },
    ],
  },
  {
    starId: 2,
    texts: [
      {
        type: 'default',
        body: 'Os programas de computadores nada mais são do que algoritmos escritos numa linguagem de programação (PHP, Python, JavaScript, entre outras) e que são interpretados e executados por uma máquina, no caso um computador.',
      },
      {
        type: 'alert',
        body: 'Uma linguagem de programação normalmente possui uma sintaxe própria, que é o conjunto de regras que determina quais combinações de símbolos e palavras-chaves podem ser utilizadas para escrever o código.',
      },
      {
        type: 'default',
        body: 'Os algoritmos, por sua vez, são descritos em uma linguagem chamada pseudocódigo.',
      },
      {
        type: 'default',
        body: 'O pseudocódigo é uma representação informal de um algoritmo, que permite a comunicação clara e eficiente de uma ideia de programação sem se preocupar com a sintaxe específica de uma linguagem de programação.',
      },
      {
        type: 'default',
        body: 'Por esse motivo o pseudocódigo acaba sendo uma ferramenta valiosa para ajudar a planejar e projetar a lógica de um programa antes de escrever o código de verdade.',
      },
      {
        type: 'default',
        body: 'Mas então por que usar pseudocódigo? Oras, usar pseudocódigo possui muitas vantagens, incluindo:',
      },
      {
        type: 'emphasis',
        body: '1 - Permite uma representação clara e compreensível do algoritmo, o que facilita a comunicação da ideia que você quer implementar com outras pessoas',
      },
      {
        type: 'emphasis',
        body: '2 - Ajuda a identificar e corrigir problemas de lógica antes de escrever o código de verdade',
      },
      {
        type: 'emphasis',
        body: '3 - Facilita a manutenção e atualização do código existente',
      },
      {
        type: 'emphasis',
        body: '4 - Não requer conhecimento avançado de sintaxe, o que facilita o aprendizado da lógica de programação',
      },
      {
        type: 'default',
        body: 'Existem algumas convenções gerais que ajudam a escrever pseudocódigo de forma clara e eficiente.',
      },
      {
        type: 'default',
        body: `
    . Use comandos claros e fáceis de entender
    . Indente (fazer recuo) o código de forma apropriada para indicar a estrutura do algoritmo
    . Use comentários para explicar o que o código está fazendo em termos gerais
    . Mantenha o pseudocódigo o mais simples possível, evitando detalhes desnecessários.`,
      },
      {
        type: 'alert',
        body: 'A pseudolinguagem que iremos utilizar será o portugol, pois ela possui a sintaxe (maneira de escrever um código) em português, o que facilita bastante para iniciantes o aprendizado de lógica de programação.',
      },
      {
        type: 'default',
        body: 'Veja um exemplo de pseudocódigo escrito em portugol:',
      },
      {
        type: 'default',
        body: `
        Início
        Leia número1
        Leia número2
        Se número1 > número2
          Escreva "número1 é maior"
        Senão
          Escreva "número2 é maior"
        Fim`,
      },
      {
        type: 'emphasis',
        body: 'Agora que você um pouco mais sobre programas e pseudocódigos tá na hora revisar tudo isso, preparado(a)?.',
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
