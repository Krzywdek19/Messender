import { AuthPage } from "../authpage/AuthPage";
import { Content } from "../content/Content";
import "./Main.scss";

export const Main = (props) => {
  return (
    <main className="main">{props.auth ? <Content /> : <AuthPage />}</main>
  );
};
