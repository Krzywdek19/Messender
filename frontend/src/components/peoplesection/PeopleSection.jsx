import { PeopleCard } from "./PeopleCard";

export const PeopleSection = (props) => {
  return (
    <section>
      {props.people.map((person) => {
        return <PeopleCard name={person.name} lastName={person.lastName} />;
      })}
    </section>
  );
};
