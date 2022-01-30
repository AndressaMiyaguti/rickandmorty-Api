import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Theme/styled";
import GlobalTheme from "./Components/Global/styled";
import ThemeButton from "./Components/ThemeButton/styled";
import CardList from "./Pages/CardList/CardList";
import CardInfo from "./Pages/CardInfo/CardInfo";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalTheme />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/:id" component={CardInfo} />
        </Switch>
      </BrowserRouter>
      <ThemeButton
        className="im im-light-bulb"
        onClick={toggleTheme}
      ></ThemeButton>
    </ThemeProvider>
  );
}
