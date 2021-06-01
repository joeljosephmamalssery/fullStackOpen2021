import contactFunctions from '../Components/contactFunctions';
const Person = ({ persons, setPersons }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      contactFunctions.deleteContact(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {' '}
          {person.name}- {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};
export default Person;
