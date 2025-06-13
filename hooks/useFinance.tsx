import Currency from "currency-formatter";

interface CalculateInterestProps {
  money_saving_years?: number;
  savings_now: number;
  interested_years: number;
  interest: number;
}

const useFinance = () => {
  const formatMoney = (amount: number) =>
    Currency.format(amount, { code: "MX" });

  const calculate_gain = (
    saving_for_now: number,
    year: number,
    savings_now: number,
    money_saving_years: number
  ) => Number(saving_for_now - savings_now - year * money_saving_years);

  const CalculateInterest = ({
    money_saving_years = 0,
    savings_now,
    interested_years,
    interest,
  }: CalculateInterestProps) => {
    let saving_calculate_years = savings_now;
    let temp_gain_year = 0;

    const data = [];

    for (let i = 0; i < interested_years; i++) {
      saving_calculate_years += saving_calculate_years * interest;
      saving_calculate_years += money_saving_years;
      const gain = calculate_gain(
        saving_calculate_years,
        i + 1,
        savings_now,
        money_saving_years
      );
      temp_gain_year = gain - temp_gain_year;
      data.push({
        id: i,
        current_year: i + 1,
        total_gains: formatMoney(parseFloat(saving_calculate_years.toFixed(2))),
        gain_for_year: gain,
        gain_without_berore_gain: formatMoney(temp_gain_year),
        mouth_gain: formatMoney(temp_gain_year / 12)
      });
      console.table({
        Ahorro_por_año: `$${formatMoney(
          parseFloat(saving_calculate_years.toFixed(2))
        )}`,
        Año_de_ahorro: i + 1,
        Ganancia_total: `$${formatMoney(gain)}`,
        Ganacia_por_año_actual: `$${formatMoney(temp_gain_year)}`,
        Ganancia_por_mes: `$${formatMoney(temp_gain_year / 12)}`,
      });
    }

    return data;
  };

  return {
    formatMoney,
    CalculateInterest
  };
};

export default useFinance;
