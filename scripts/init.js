$(document).ready(() => {
  populaVerbaMensal();
})

function populaVerbaMensal() {
  const verbasMensais = [{
      label: 'R$5.000',
      value: 1
    },
    {
      label: '>= R$5.001 e <= R$30.000',
      value: 2
    },
    {
      label: '>= R$30.001 e <= R$100.000',
      value: 3
    },
    {
      label: '>= R$100.001 e <= R$500.000',
      value: 4
    },
    {
      label: '>= R$ 500.001',
      value: 5
    },
    {
      label: 'Não se aplica',
      value: 6
    },
  ]

  return verbasMensais.forEach(verba => {
    document.getElementById('verba_mensal')
      .append(new Option(verba.label, verba.value));
  })
}