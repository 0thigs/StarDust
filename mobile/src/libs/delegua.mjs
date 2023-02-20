import { Lexador } from '@designliquido/delegua/fontes/lexador/index.js';
import { AvaliadorSintatico } from '@designliquido/delegua/fontes/avaliador-sintatico/index.js';
import { InterpretadorBase } from '@designliquido/delegua/fontes/interpretador/index.js';

export async function execute(code, callback) {
  const lexador = new Lexador(false);
  const avaliadorSintatico = new AvaliadorSintatico();
  const interpretador = new InterpretadorBase('./src/libs', false, callback);
  const resultadoLexador = lexador.mapear([code]);
  const resultadoAvaliacaoSintatica = avaliadorSintatico.analisar(resultadoLexador);

  return await interpretador.interpretar(resultadoAvaliacaoSintatica.declaracoes, false);
}
