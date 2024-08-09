import useLocalStorage from "use-local-storage";
// import "./App.css";

import MiniDrawer from "./component/dashboard/SideBar.jsx";
import LayoutDashboard from "./component/dashboard/LayoutDashboard.jsx";
import { useMaterialUIController } from "./component/context/index.js";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  const darkMoodFunc = () => {
    setIsDark(dispatch, !isDark);
  };

  return (
    <ThemeProvider theme={darkMode ? themeDArk : theme}>
      <CssBaseline></CssBaseline>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <LayoutDashboard darkMoodFunc={darkMoodFunc} />
      </div>
    </ThemeProvider>
  );
};

export default App;
