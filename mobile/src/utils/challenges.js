export const challenges = [
  {
    id: 1,
    starId: 1,
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
Saida: 12
        `,
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
      },
      {
        input: [2, 4],
        expectedOutput: '8',
      },
      {
        input: [3, 4],
        expectedOutput: '12',
      },
    ],

    code: `
    classe Animal {
        correr() {
          escreva("Correndo Loucamente");
        }
      }
      classe Cachorro herda Animal {
        latir() {
          escreva("Au Au Au Au");
        }
      }
      var nomeDoCachorro = Cachorro();
      nomeDoCachorro.correr();
      nomeDoCachorro.latir();
    `,
    difficulty: 'easy',
  },
];
