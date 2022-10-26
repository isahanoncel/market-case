export function formatMoney(money: number) {
  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  });

  return formatter.format(money);
}
