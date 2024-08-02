import { useEffect, useState } from "react";
import "./AuthPage.scss";
import { request, setAuthToken } from "../../helpers/AxiosHelper";

export const AuthPage = (props) => {
  const [loginIsActive, setLoginIsActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const toggleFormHandler = (newValue) => {
    setLoginIsActive(newValue);
    setPassword("");
    setBirthDate("");
    setBirthDate(new Date());
    setName("");
    setLastName("");
  };

  const onLogin = (ev, email, password) => {
    ev.preventDefault();
    request("POST", "/login", { email: email, password: password }).then(
      (response) => {
        setAuthToken(response.data.token);
        console.log("sadas");
        props.setAuth(true);
      }
    );
  };

  const onRegister = (
    ev,
    email,
    password,
    confirmPassword,
    name,
    lastName,
    birthDate
  ) => {
    ev.preventDefault();
    request("POST", "/register", {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: name,
      lastName: lastName,
      birthDate: birthDate,
    }).then((response) => {
      setAuthToken(response.data.token);
      props.setAuth(true);
    });
  };

  useEffect(() => {
    console.log(email, password, confirmPassword, name, lastName, birthDate);
  }, [email, password, confirmPassword, name, lastName, birthDate]);

  return (
    <section className="form-wrapper">
      <form
        onSubmit={(ev) => onLogin(ev, email, password)}
        className={`form ${loginIsActive ? "" : "hidden"}`}
      >
        <input
          placeholder="email"
          name="email"
          type="text"
          className="form__control"
          onChange={(ev) => setEmail(ev.target.value)}
          value={email}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          className="form__control"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="submit" value="Login" className="form__submit" />
      </form>

      <form
        onSubmit={(ev) =>
          onRegister(
            ev,
            email,
            password,
            confirmPassword,
            name,
            lastName,
            birthDate
          )
        }
        className={`form ${loginIsActive ? "hidden" : ""}`}
      >
        <input
          placeholder="email"
          value={email}
          name="email"
          type="text"
          className="form__control"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          className="form__control"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input
          placeholder="confirm password"
          name="confirm-password"
          type="password"
          className="form__control"
          onChange={(ev) => setConfirmPassword(ev.target.value)}
        />
        <input
          placeholder="name"
          name="name"
          type="text"
          className="form__control"
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          placeholder="last name"
          name="lastName"
          type="text"
          className="form__control"
          onChange={(ev) => setLastName(ev.target.value)}
        />
        <input
          name="birthDate"
          type="date"
          className="form__control"
          onChange={(ev) => setBirthDate(ev.target.value)}
        />
        <input type="submit" value="Register" className="form__submit" />
      </form>

      <div className="form__btn-wrapper">
        <button
          onClick={() => toggleFormHandler(true)}
          className={`form__btn ${loginIsActive ? "active" : ""}`}
        >
          Login
        </button>
        <button
          onClick={() => toggleFormHandler(false)}
          className={`form__btn ${loginIsActive ? "" : "active"}`}
        >
          Registration
        </button>
      </div>
    </section>
  );
};
