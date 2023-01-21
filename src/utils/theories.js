export const theories = [
  {
    starId: 1,
    texts: [
      {
        type: 'default',
        body: 'Sempre que decidimos fazer qualquer atividade em nosso dia a dia, acabamos seguindo uma sequência lógica. Na maior parte do tempo, fazemos isso de maneira tão natural que nem nos damos conta, mas quando percebemos, conseguimos enxergar passos que levaram ao resultado final.',
      },

      {
        type: 'alert',
        title: '',
        body: 'Sequência Lógica são passos executados até atingir um objetivo ou solução de um problema.',
      },
      {
        type: 'default',
        body: 'Na grande maioria das vezes, não nos damos conta disso, mas ao fazer uma análise do nosso cotidiano, podemos compreender como todas as nossas ações são consequência de uma cadeia de outras ações menores que nos levaram até uma atitude final.',
      },
      {
        type: 'alert',
        body: ' Não estamos acostumados a pensar desta maneira sobre nossas atividades cotidianas, mas, quando falamos de programação, estipular uma sequência de etapas é um procedimento muito importante e necessário, uma vez que, diferente de nós, seres humanos, os computadores não são capazes de prever nenhum comportamento.',
      },
      {
        type: 'example',
        body: `
    ALGORITMO “declaracao” 

    VAR 
        varInteiro: inteiro 
        varReal: real
        varCaractere: caractere 
        varLogico: Logico 
    INICIO 
        varInteiro <- 1 
        varReal <- 1.5 
        varCaractere <- “teste” 
        varLogico <- VERDADEIRO 
        ESCREVAL(varInteiro, varReal, varCaractere, varLogico)

    FIMALGORITMO
        `,
      },
      {
        type: 'default',
        body: 'À maneira de pensar logicamente para estipular sequências de passos para a resolução de  um problema, damos o nome de lógica de programação; à sequência narrativa desses eventos, damos o nome de algoritmo.',
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
        type: 'default',
        body: 'Os algoritmos são descritos em uma linguagem chamada pseudocódigo. Este nome é uma alusão à posterior implementação em uma linguagem de programação, ou seja, quando formos programar em uma linguagem, por exemplo Javascript, estaremos gerando código em Javascript. Por isso os algoritmos são independentes das linguagens de  programação.',
      },
      {
        type: 'alert',
        body: 'Para escrever um algoritmo precisamos descrever a sequencia de instruções, de maneira simples e objetiva. Para isso utilizaremos algumas técnicas',
      },
      {
        type: 'example',
        body: `
       <ol>
            <li>Usar somente um verbo por frase</li>
            <li>
            Imaginar que você está desenvolvendo um algoritmo para pessoas que não trabalham com informática
            </li>
            <li>Usar frases curtas e simples Ser objetivo</li>
            <li>Procurar usar palavras que não tenham sentido dúbio</li>
      </ol>      
        `,
      },
      {
        type: 'alert',
        body: 'O algoritmo deve ser fácil de se interpretar e fácil de codificar. Ou seja, ele deve ser o intermediário entre a linguagem falada e a linguagem de programação.',
      },
    ],
  },
];
