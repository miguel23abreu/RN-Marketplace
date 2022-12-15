import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { MyButton } from "../../../components/Form/MyButton";
import { MyInput } from "../../../components/Form/MyInput";
import theme from "../../../global/style/theme";

const CriarConta = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta/Editar Dados</Text>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Nome</Text>
        <TextInput  style={styles.input}/>
        <Text style={styles.inputTitle}>Rua</Text>
        <TextInput style={styles.input}/>
        <View style={styles.twoinputTitle}>
            <View style={styles.inputTitless2}>
                <Text style={styles.inputTitle}>Numero</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.inputTitless}>
                <Text style={styles.inputTitle}>Bairro</Text>
                <TextInput style={styles.input}/>
            </View>
        </View>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.inputTitle}>Senha</Text>
        <TextInput style={styles.input}/>
        <MyButton title="Salvar" />
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
  inputTitless:{
    flex: 1,
    width: "100%",
  },
  inputTitless2:{
    flex: 1,
    width: "100%",
    paddingRight: Responsive.font(10)
  },
  twoinputTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    //width: "100%",
    //marginRight: Responsive.font(1),
    //marginRight: Responsive.font(100),
    fontSize: Responsive.font(14),
    color: theme.colors.primary,
    fontWeight: "bold",
    
  },
  inputTitle2:{
    flexDirection: "column",
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
    paddingVertical: Responsive.font(14),
    fontSize: Responsive.font(13),
    borderColor: theme.colors.subtitle,
    marginBottom: Responsive.font(16),
  },
  
});

export { CriarConta };
