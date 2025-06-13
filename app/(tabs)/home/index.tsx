import CustomInput from "@/components/CustomInput";
import CustomLoader from "@/components/CustomLoader";
import { COLORS } from "@/constants/Colors";
import useFinance from "@/hooks/useFinance";
import { globalStyles } from "@/styles/global-styles";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { formatMoney, calculateInterest } = useFinance();

  const [money, setMoney] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [moreMoneyYear, setMoreMoneyYear] = useState<string>("");
  const [interestYear, setInterestYear] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState({});

  const handleSendData = async() => {
    setLoading(true);
    const data = await calculateInterest({
      money_saving_years: 0,
      savings_now: 1000000,
      interested_years: 5,
      interest: 0.09,
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleChangeMoney = (money: string) => {
    if (money === "") return setMoney("");
    const moneyConvert = Number(money.replaceAll(",", ""));
    if (isNaN(moneyConvert)) return;
    const moneyFormat = formatMoney(Number(moneyConvert));
    setMoney(moneyFormat.slice(0, -3));
  };

  return (
    <SafeAreaProvider style={globalStyles.bgColor}>
      <SafeAreaView>
        <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
          <CustomLoader loading={loading} />
          <View style={globalStyles.contain}>
            <View>
              <Text style={[globalStyles.h1]}>Calculador de intereses</Text>
            </View>
            <CustomInput
              label="Dinero a invertir"
              onChangeVal={handleChangeMoney}
              value={money}
              keyboardType="numeric"
              left={
                <TextInput.Icon
                  color={(isTextInputFocused: boolean) =>
                    isTextInputFocused ? COLORS.active : undefined
                  }
                  icon="currency-usd"
                />
              }
            />
            <CustomInput
              label="Años a invertir"
              value={years}
              onChangeVal={(text) => setYears(text)}
              left={
                <TextInput.Icon
                  color={(isTextInputFocused: boolean) =>
                    isTextInputFocused ? COLORS.active : undefined
                  }
                  icon="finance"
                />
              }
            />
            <CustomInput
              label="Dinero a ahorrar"
              value={moreMoneyYear}
              onChangeVal={(text) => setMoreMoneyYear(text)}
              left={
                <TextInput.Icon
                  color={(isTextInputFocused: boolean) =>
                    isTextInputFocused ? COLORS.active : undefined
                  }
                  icon="hand-coin"
                />
              }
            />
            <CustomInput
              label="Interes anual"
              value={interestYear}
              onChangeVal={(text) => setInterestYear(text)}
              left={
                <TextInput.Icon
                  color={(isTextInputFocused: boolean) =>
                    isTextInputFocused ? COLORS.active : undefined
                  }
                  icon="percent"
                />
              }
            />
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: COLORS.active,
                marginTop: 10,
              }}
              icon="send"
              mode="contained"
              textColor={COLORS.primary}
              onPress={handleSendData}
            >
              Press me
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
