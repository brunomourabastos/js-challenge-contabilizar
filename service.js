

const validarEntradaDeDados = (lancamento) => {
   if (typeof lancamento.cpf !== 'string' && lancamento.cpf.length !== 11 && isNaN(lancamento.cpf)) {
      return 'CPF deve ser uma string com 11 caracteres numéricos'
   }
   if (typeof lancamento.valor !== 'number' || lancamento.valor > 15000 || lancamento.valor < -2000) {
      return 'Valor deve ser um número entre -2000 e 15000'
   }
   let Soma = 0;
   if (lancamento.cpf === '00000000000') return 'CPF inválido';
   for (i = 1; i <= 9; i++) Soma = Soma + parseInt(lancamento.cpf.substring(i - 1, i)) * (11 - i);
   let resto = (Soma * 10) % 11;
   if ((resto === 10) || (resto === 11)) resto = 0;
   if (resto !== parseInt(lancamento.cpf.substring(9, 10))) return 'CPF inválido';
   Soma = 0;
   for (i = 1; i <= 10; i++) Soma = Soma + parseInt(lancamento.cpf.substring(i - 1, i)) * (12 - i);
   resto = (Soma * 10) % 11;
   if ((resto === 10) || (resto === 11)) resto = 0;
   if (resto !== parseInt(lancamento.cpf.substring(10, 11))) return 'CPF inválido';

   return null;
}


const recuperarSaldosPorConta = (lancamentos) => {
   return []
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   return []
}

const recuperarMaioresSaldos = (lancamentos) => {
   return []
}

const recuperarMaioresMedias = (lancamentos) => {
    return []
}