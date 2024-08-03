import { removeToken } from "../../helpers/AxiosHelper";
import "./Foooter.scss";

export const Footer = (props) => {
  const logout = () => {
    props.setAuth(false);
    removeToken();
  };
  return (
    <footer className="footer">
      {props.auth ? (
        <button className="footer__btn" onClick={logout}>
          Logout
        </button>
      ) : (
        <></>
      )}
    </footer>
  );
};
