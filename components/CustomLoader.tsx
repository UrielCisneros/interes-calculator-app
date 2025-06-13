import { COLORS } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Modal, Text, View } from "react-native";
import { PacmanIndicator } from "react-native-indicators";

interface Props {
  loading: boolean;
}

const CustomLoader = ({ loading = false }: Props) => {
  if (!loading) return null;
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={loading}
      onRequestClose={() => {}} // Evitar el cierre al tocar fuera del modal
    >
      <View style={globalStyles.loading}>
        <View
          style={{
            width: "50%",
            height: 130,
          }}
        >
          <PacmanIndicator size={90} color={COLORS.active} />
          <Text style={globalStyles.textLoading}>Cargando...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoader;
