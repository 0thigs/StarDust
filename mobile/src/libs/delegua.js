const delegua = require('@designliquido/delegua');

const olaMundo = `
var soma = 5 + 6
se (soma == 10) {
    escreva("A soma é igua a 10")
} senao {
    escreva("A soma NÃO é igua a 10")
}
`;
const lexador = new delegua.Lexador(false);
const avaliadorSintatico = new delegua.AvaliadorSintatico();
const interpretador = new delegua.InterpretadorBase(
  null,
  process.cwd(),
  false,
  console.log
);
const resultadoLexador = lexador.mapear([olaMundo]);
const resultadoAvaliacaoSintatica =
  avaliadorSintatico.analisar(resultadoLexador);

interpretador
  .interpretar(resultadoAvaliacaoSintatica.declaracoes, false)
  .then((resposta) => console.log(resposta));
