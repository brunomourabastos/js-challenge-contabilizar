

const validarEntradaDeDados = (lancamento) => {
   const { cpf, valor } = lancamento;
   if (typeof cpf !== 'string' && cpf.length !== 11 && isNaN(cpf)) {
      return 'CPF deve ser uma string com 11 caracteres numéricos'
   }
   if (typeof valor !== 'number' || valor > 15000 || valor < -2000) {
      return 'Valor deve ser um número entre -2000 e 15000'
   }
   let Soma = 0;
   if (cpf === '00000000000') return 'CPF inválido';
   for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
   let resto = (Soma * 10) % 11;
   if ((resto === 10) || (resto === 11)) resto = 0;
   if (resto !== parseInt(cpf.substring(9, 10))) return 'CPF inválido';
   Soma = 0;
   for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
   resto = (Soma * 10) % 11;
   if ((resto === 10) || (resto === 11)) resto = 0;
   if (resto !== parseInt(cpf.substring(10, 11))) return 'CPF inválido';

   return null;
}


const recuperarSaldosPorConta = (lancamentos) => {
   if (lancamentos.length === 0) {
      return []
   }
   let allData = []
   for (const lancamento of lancamentos) {
      const { cpf, valor } = lancamento
      allData.push({
         cpf,
         valor
      })
   }
   return allData
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   const lancamentosFiltrados = lancamentos.filter(lancamento => lancamento.cpf === cpf)
   if (lancamentosFiltrados.length === 0) {
      return []
   }

   const maiorLancamento = lancamentosFiltrados.reduce((maior, lancamento) => {
      if (lancamento.valor > maior.valor) {
         return lancamento
      }
      return maior
   })
   const menorLancamento = lancamentosFiltrados.reduce((menor, lancamento) => {
      if (lancamento.valor < menor.valor) {
         return lancamento
      }
      return menor
   })
   if (maiorLancamento === menorLancamento) {
      return [maiorLancamento]
   }
   return [maiorLancamento, menorLancamento]
}


const recuperarMaioresSaldos = (lancamentos) => {
   if (lancamentos.length === 0) {
      return []
   }

   const saldosPorCpf = lancamentos.reduce((saldos, lancamento) => {
      const { cpf, valor } = lancamento
      if (saldos[cpf]) {
         saldos[cpf] += valor
      } else {
         saldos[cpf] = valor
      }
      return saldos
   }, {})
   const saldosOrdenados = Object.entries(saldosPorCpf).sort((a, b) => b[1] - a[1])
   const maioresSaldos = saldosOrdenados.slice(0, 3).map(saldo => {
      return {
         cpf: saldo[0],
         valor: saldo[1]
      }
   })
   return maioresSaldos
}


const recuperarMaioresMedias = (lancamentos) => {
    return []
}