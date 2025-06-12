import { COLORS } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";

interface Props extends TextInputProps {
  value: string;
  onChangeVal: (text: string) => void;
  label: string;
}

const CustomInput = ({ value, onChangeVal, label, ...rest }: Props) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(val) => onChangeVal(val)}
      style={globalStyles.input}
      activeUnderlineColor={COLORS.active}
      outlineColor={COLORS.input.primary}
      contentStyle={{
        color: "white",
      }}
      {...rest}
    />
  );
};

export default CustomInput;
