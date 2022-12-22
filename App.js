import { ThemeProvider } from "styled-components";
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native";
import theme from "./src/global/style/theme";
import { AuthProvider } from "./src/context/auth";
import { Approutes } from "./src/routes/app.routes"; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductScreen } from "./src/screens/Product/ProductScreen";
import { PrincipalScreen } from "./src/screens/PrincipalScreen";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <PrincipalScreen />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});