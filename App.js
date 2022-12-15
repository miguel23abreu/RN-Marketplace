import {ThemeProvider} from "styled-components"
import theme from "./src/global/style/theme"
import { Login } from "./src/screens/User/Login";
import { CriarConta } from "./src/screens/User/CriarConta";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CriarConta/>
    </ThemeProvider>
  
  );
}
