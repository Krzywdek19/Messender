import { useEffect, useState } from "react";
import { getAuthToken, removeToken, request } from "../../helpers/AxiosHelper";
import { PeopleSection } from "../peoplesection/PeopleSection";

export const Content = (props) => {
  const [name, setName] = useState("");
  const [nofriends, setNofriends] = useState([]);
  const logout = () => {
    props.setAuth(false);
    removeToken();
  };

  useEffect(() => {
    request("GET", "/user/me", {}).then((user) => {
      setName(user.data.name + " " + user.data.lastName);
    });
    request("GET", "/user/nofriends", {}).then((users) => {
      setNofriends(users.data);
    });
  }, []);

  return (
    <>
      <div className="content">
        <h2>Hi, {name}</h2>
        <button onClick={logout}>logout</button>
        <PeopleSection people={nofriends} />
      </div>
    </>
  );
};
