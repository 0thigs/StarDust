export const challenges = [
  {
    id: 1,
    starId: 4,
    title: 'Enviar mensagem',
    texts: [
      {
        type: 'default',
        body: 'Parece que finalmente você encontrou um planeta à vista! Para veriifcar se há vida inteligente, você pode enviar uma mensagem dizendo: "Olá, mundo!". Para fazer isso você deve escrever um programa que receba essa mensagem e a escreva, sendo a entrada e saída de dados respectivamente, veja o exemplo',
      },
      {
        type: 'code',
        body: `Entrada: "Olá, mundo!"
Saida: "Olá, mundo!"`,
      },
      {
        type: 'alert',
        body: 'Lembre-se de manter o comando leia( ) para capturar os dados de entrada',
      },
    ],
    testCases: [
      {
        input: ["'Olá, mundo!'"],
        expectedOutput: 'Olá, mundo!',
        isLocked: false,
      },
    ],

    code: `
var mensagem = leia()`,
    difficulty: 'easy',
  },
];
