export const challenges = [
  {
    id: 1,
    starId: 11,
    title: 'Multiplicar 2 números',
    texts: [
      {
        type: 'default',
        body: 'Escreva um programa que multiplique 2 números e que escreva o resultado na tela',
      },
      {
        type: 'code',
        body: `Entrada: x = 5, y = 7
Saida: 12`,
      },
      {
        type: 'alert',
        body: 'Lembre-se de usar o comando leia para pegar os dados de entrada',
      },
    ],
    testCases: [
      {
        input: [5, 5],
        expectedOutput: '25',
        isLocked: false,
      },
      {
        input: [2, 4],
        expectedOutput: '8',
        isLocked: false,
      },
      {
        input: [3, 4],
        expectedOutput: '12',
        isLocked: true,
      },
    ],

    code: `
     var x = leia()
     var y = leia()`,
    difficulty: 'easy',
  },
];

// var x = leia()
// var y = leia()
// escreva(x * y)
