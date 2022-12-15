import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { MyButton } from "../../../components/Form/MyButton";
import { MyInput } from "../../../components/Form/MyInput";
import theme from "../../../global/style/theme";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Email</Text>
        <MyInput placeholder="exemple@email.com" />
        <Text style={styles.inputTitle}>Password</Text>
        <MyInput />
        <MyButton title="Entrar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: Responsive.font(26),
    color: theme.colors.title,
    fontWeight: "bold",
  },
  inputTitle: {
    fontSize: Responsive.font(14),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    justifyContent: "center",
    padding: Responsive.font(24),
  },
  input: {
    width: "100%",
    borderBottomWidth: Responsive.font(1),
    paddingVertical: Responsive.font(2),
    fontSize: Responsive.font(13),
    borderColor: theme.colors.subtitle,
    marginBottom: Responsive.font(16),
  },
});

export { Login };
