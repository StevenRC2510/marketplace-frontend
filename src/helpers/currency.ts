export function calculateTotalValue(data: any) {
  let total = 0;
  if (data) {
    data.map(({ price, quantity }: any) => (total += price * quantity));
  } else {
    total = 0;
  }
  return dictionaryCurrency('COP', total);
}

export const dictionaryCurrency = (countryCode: string, amount: number) => {
  const getTypeCurrency = {
    precision: 0,
    currencySymbol: '$',
  };
  const countryCurrency = {
    COP: {
      integerDivider: '.',
      decimalsDivider: ',',
    },
  };

  function formmatter(priceAmount: number, precision: number) {
    const { integerDivider, decimalsDivider } = countryCurrency[
      countryCode as keyof typeof countryCurrency
    ];
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    let numberValue = priceAmount.toString();

    const [integer, decimals = ''] = numberValue.split('.');
    numberValue = integer.replace(regex, integerDivider);

    if (priceAmount % 1 !== 0 && precision > 0) {
      numberValue += `${decimalsDivider}${decimals.slice(0, precision)}`;
    }
    return numberValue;
  }

  const { currencySymbol, precision } = getTypeCurrency;
  const defaultValue = `${amount < 0 ? '-' : ''}${currencySymbol} ${formmatter(
    Math.abs(amount),
    precision
  )}`;

  const renderValue: Record<string, string> = {
    COP: defaultValue,
  };

  return renderValue[countryCode] || defaultValue;
};
