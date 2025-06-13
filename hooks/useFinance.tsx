import Currency from "currency-formatter";

interface CalculateInterestProps {
  money_saving_years?: number; //Dinero que puedes ahorrar por año
  savings_now: number; //Dinero que ya tienes ahorrado y con el cual iniciaras
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

  const calculateInterest = async ({
    money_saving_years = 0, //Dinero que puedes ahorrar por año
    savings_now, //Dinero que ya tienes ahorrado y con el cual iniciaras
    interested_years, //Años que estaras ahorrando
    interest,//Interes que ganaras anual
  }: CalculateInterestProps) => {
    let saving_calculate_years = savings_now;
    let temp_gain_year = 0;

    const dataYears = [];

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
      dataYears.push({
        id: i,
        current_year: i + 1,
        total_gains: formatMoney(parseFloat(saving_calculate_years.toFixed(2))),
        gain_for_year: gain,
        gain_without_berore_gain: formatMoney(temp_gain_year),
        mouth_gain: formatMoney(temp_gain_year / 12),
      });
    }

    return {
      savings: formatMoney(Number(saving_calculate_years.toFixed(2))),
      years: interested_years,
      total_gain: formatMoney(
        calculate_gain(
          saving_calculate_years,
          interested_years,
          savings_now,
          money_saving_years
        )
      ),
      calculate_years: dataYears,
    };
  };

  return {
    formatMoney,
    calculateInterest,
  };
};

export default useFinance;
