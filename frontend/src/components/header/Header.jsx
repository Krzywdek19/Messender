import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export const Header = (props) => {
  const toggleTheme = () => {
    props.setDarkTheme(!props.darkTheme);
  };

  return (
    <header className="header">
      <button className="header__button light-font" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </header>
  );
};
