
// import { useState } from 'react';
// import { Problem } from '../components/Problem';
// import { Code } from '../components/Code';
// import { Result } from '../components/Result';
// import { challenges } from '../utils/challenges';
// import { execute } from '../libs/delegua.mjs';

// export function useChallenge(id) {
//   const { title, texts, code, testCases } = challenges.find(challenge => challenge.id === id);
//   const [userCode, setUserCode] = useState('');
//   const [userOutput, setUserOutput] = useState('');
//   const [results, setResults] = useState([]);
//   //   console.log(results);

//   // TODO: Tratar erros
//   function showError(error) {
//     console.log(error);
//   }

//   function handleUserOutput(userOutput) {
//     setUserOutput(userOutput.toString());
//   }

//   function testUserCode(expectedOutput) {
//     console.log({userOutput});
//   }

//   function formatCode(code, input) {
//     const matches = code.match(/(leia\(\))/g);
//     if (matches.length !== input.length) {
//       return;
//     }

//     input.forEach(input => (code = code.replace(matches[0], input)));
//     return code;
//   }

//   async function verifyCase({ input, expectedOutput }) {
//     const formatedUserCode = formatCode(userCode, input);
//     const { erros, resultado } = await execute(formatedUserCode, handleUserOutput);
//     if (erros.length > 0) {
//       showError(erros[0].message);
//       return;
//     }
//     testUserCode(expectedOutput);
//   }

//   function verifyUserCode() {
//     setResults([]);
//     testCases.forEach(verifyCase);
//   }

//   const slides = [
//     {
//       id: 1,
//       component: <Problem title={title} texts={texts} />,
//     },
//     {
//       id: 2,
//       component: <Code code={code} setUserCode={setUserCode} verifyUserCode={verifyUserCode} />,
//     },
//     {
//       id: 3,
//       component: <Result testCases={testCases} />,
//     },
//   ];

//   return {
//     slides,
//     setUserCode,
//   };
// }
