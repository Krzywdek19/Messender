import "./PeopleCard.scss";

export const PeopleCard = (props) => {
  return (
    <div className="people-card">
      <h3>{`${props.name} ${props.lastName}`}</h3>
      <button className="people-card__btn">+</button>
    </div>
  );
};
