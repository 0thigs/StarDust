export const challenges = [
  {
    id: 1,
    title: 'Somar 2 números',
    texts: [
      {
        type: 'default',
        body: 'Escreva um programa que some 2 números e escreva o resultado na tela',
      },
      {
        type: 'code',
        body: `
Entrada: num1 = 5, num2 = 7
Saída: 12
        `,
      },
      {
        type: 'alert',
        body: 'Lembre-se de usar o comando leia para pegar os dados de entrada',
      },
    ],
    cases: {
      input: [
        [2, 2],
        [4, 4],
        [8, 8],
      ],
      output: ['4', '8', '16'],
    },
  },
];
