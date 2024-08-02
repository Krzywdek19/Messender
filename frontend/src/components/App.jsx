import { useState } from "react";
import { Header } from "./header/Header";
import "./App.scss";
import { Main } from "./main/Main";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <div className={`container${darkTheme ? " dark" : ""}`}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Main setAuth={setAuth} auth={auth} />
    </div>
  );
};
