import CustomInput from "@/components/CustomInput";
import { COLORS } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Importa SafeAreaProvider

const HomeScreen = () => {
  const [money, setMoney] = React.useState("");
  const [years, setYears] = React.useState("");
  const [moreMoneyYear, setMoreMoneyYear] = React.useState("");
  const [interestYear, setInterestYear] = React.useState("");
  return (
    <SafeAreaProvider style={globalStyles.bgColor}>
      <SafeAreaView>
        <View style={[globalStyles.bgColor, globalStyles.justifyScreen]}>
          <View style={globalStyles.contain}>
            <View>
              <Text style={[globalStyles.h1]}>Calculador de intereses</Text>
            </View>
            <CustomInput
              label="Dinero a invertir"
              onChangeVal={setMoney}
              value={money}
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
                marginTop: 10
              }}
              icon="send"
              mode="contained"
              textColor={COLORS.primary}
              onPress={() => console.log("Pressed")}
            >
              Press me
            </Button>
          </View>
        </View>
      </SafeAreaView>
      //{" "}
    </SafeAreaProvider>
  );
};

export default HomeScreen;
