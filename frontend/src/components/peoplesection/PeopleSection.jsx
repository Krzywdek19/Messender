import { PeopleCard } from "./PeopleCard";
import "./PeopleSection.scss";

export const PeopleSection = (props) => {
  return (
    <section className="people-section">
      {props.people.map((person) => {
        return <PeopleCard name={person.name} lastName={person.lastName} />;
      })}
    </section>
  );
};
