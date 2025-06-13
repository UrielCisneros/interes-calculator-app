import Currency from "currency-formatter";

const useFinance = () => {
  const formatMoney = (amount: number) =>
    Currency.format(amount, { code: "MX" });

  return {
    formatMoney
  };
};

export default useFinance;
