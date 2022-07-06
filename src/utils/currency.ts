export const formatCurrency = (value: number) => {
  const normalizedValue = value || 0
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(normalizedValue)
}
