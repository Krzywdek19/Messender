import { useEffect, useState } from "react";
import "./AuthPage.scss";

export const AuthPage = () => {
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

  useEffect(() => {
    console.log(email, password, confirmPassword, name, lastName, birthDate);
  }, [email, password, confirmPassword, name, lastName, birthDate]);

  return (
    <section className="form-wrapper">
      <form action="" className={`form ${loginIsActive ? "" : "hidden"}`}>
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

      <form action="" className={`form ${loginIsActive ? "hidden" : ""}`}>
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
