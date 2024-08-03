import { useEffect, useState } from "react";
import { AuthPage } from "../authpage/AuthPage";
import { Content } from "../content/Content";
import "./Main.scss";
import { getAuthToken } from "../../helpers/AxiosHelper";

export const Main = (props) => {
  useEffect(() => {
    if (getAuthToken() != null) {
      props.setAuth(true);
      console.log(props.auth);
    }
  });

  return (
    <main className="main">
      {props.auth ? (
        <Content />
      ) : (
        <AuthPage setAuth={props.setAuth} auth={props.auth} />
      )}
    </main>
  );
};
