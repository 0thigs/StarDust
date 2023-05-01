const delegua = require('@designliquido/delegua');

function teste(oi) {
  console.log(oi);
}

async function execute(code, callback) {
  const lexador = new delegua.Lexador(false);
  const avaliadorSintatico = new delegua.AvaliadorSintatico();
  const interpretador = new delegua.InterpretadorBase('./src/libs', false, teste);
  const resultadoLexador = lexador.mapear(['escreva(55)']);
  const resultadoAvaliacaoSintatica = avaliadorSintatico.analisar(resultadoLexador);
  return await interpretador.interpretar(resultadoAvaliacaoSintatica.declaracoes, false);
}

execute()
module.exports = execute;
