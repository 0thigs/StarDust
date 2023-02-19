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
    testCases: [
      {
        input: [2, 2],
        expectedOutput: '4',
      },
      {
        input: [4, 4],
        expectedOutput: '8',
      },
      {
        input: [6, 6],
        expectedOutput: '12',
      },
    ],

    code: `
Algoritmo "Calculoimc"

Var
    M , A, IMC: Real

Inicio
    Escreva("Massa(Kg): ")
    Leia(M)
    Escreva("Altura (m): ")
    Leia(A)
    IMC <- M / (A ^ 2)
    Escreval("IMC: ", IMC:5:2)
    Se (IMC >= 18.5) e (IMC < 25) entao
        Escreva("Você está no seu peso ideal")
    senao
        Escreva("Você não está no peso ideal")
    Fimse

Fimalgoritmo
    `,
  },
];
