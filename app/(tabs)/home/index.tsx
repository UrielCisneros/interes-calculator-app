import CustomInput from "@/components/CustomInput";
import CustomLoader from "@/components/CustomLoader";
import { COLORS } from "@/constants/Colors";
import useFinance from "@/hooks/useFinance";
import { globalStyles } from "@/styles/global-styles";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const HomeScreen = () => {
  const { formatMoney, calculateInterest } = useFinance();

  const [money, setMoney] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [moreMoneyYear, setMoreMoneyYear] = useState<string>("");
  const [interestYear, setInterestYear] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState({});

  const handleSendData = async () => {
    setLoading(true);
    const id = await calculateInterest({
      money_saving_years: 0,
      savings_now: 1000000,
      interested_years: 5,
      interest: 0.09,
    });
    setTimeout(async () => {
      setLoading(false);
      //redirect view data
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
    <SafeAreaView style={globalStyles.bgColor}>
      <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
        <CustomLoader loading={loading} />
        <ScrollView>
          <View style={globalStyles.contain}>
            <View>
              <Text style={[globalStyles.h1]}>Calculador de intereses</Text>
              <View>
                <Text
                  style={[globalStyles.h2, { fontFamily: "ChakraPetchBold" }]}
                >
                  Descripcion
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginVertical: 10,
                  }}
                >
                  <Text style={[globalStyles.textPoint]}>
                    1.-Dinero a invertir:
                    <Text style={[globalStyles.subTextPoint]}>
                      {` `}Dinero que tienes liquido para invertor o inversion
                      inicial.
                    </Text>
                  </Text>
                  <Text style={[globalStyles.textPoint]}>
                    2.-Años a invertir:
                    <Text style={[globalStyles.subTextPoint]}>
                      {` `}Cantidad de años que desea invertir su dinero.
                    </Text>
                  </Text>
                  <Text style={[globalStyles.textPoint]}>
                    3.-Dinero a ahorrar:
                    <Text style={[globalStyles.subTextPoint]}>
                      {` `}Dinero que puede ahorrar por año, y seguir metiendo
                      (sin contar inversion inicial).
                    </Text>
                  </Text>
                  <Text style={[globalStyles.textPoint]}>
                    4.-Interes anual:
                    <Text style={[globalStyles.subTextPoint]}>
                      {` `}Numero de interes que generara anual (ejemplo: 0.09%)
                    </Text>
                  </Text>
                </View>
              </View>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
