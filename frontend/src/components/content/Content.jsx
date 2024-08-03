import { useEffect, useState } from "react";
import { request } from "../../helpers/AxiosHelper";
import { PeopleSection } from "../peoplesection/PeopleSection";
import "./Content.scss";

export const Content = (props) => {
  const [name, setName] = useState("");
  const [nofriends, setNofriends] = useState([]);
  const [isFriendsShowed, setIsFriendsShowed] = useState(false);

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
        <h2 className="content__heading">Hi, {name}</h2>
        <div className="people-wrapper">
          <div className="content__btn-wrapper">
            <button
              onClick={() => setIsFriendsShowed(true)}
              className="content__btn content__btn--left"
            >
              <h2 className={`btn__text ${isFriendsShowed ? "active" : ""}`}>
                Type your friends
              </h2>
            </button>
            <button
              onClick={() => setIsFriendsShowed(false)}
              className="content__btn content__btn--right"
            >
              <h2 className={`btn__text ${!isFriendsShowed ? "active" : ""}`}>
                Meet people
              </h2>
            </button>
          </div>
          <div className="people-section-wrapper">
            {isFriendsShowed ? (
              <PeopleSection people={[]} />
            ) : (
              <PeopleSection people={nofriends} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
