import './App.css';
import { useState } from 'react';
import Person from './Components/person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', contact: '040-123456' },
    { name: 'Ada Lovelace', contact: '39-44-5323523' },
    { name: 'Dan Abramov', contact: '12-43-234345' },
    { name: 'Mary Poppendieck', contact: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(false);

  const handleContactAddition = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchFunction = (event) => {
    setSearchName(event.target.value);
  };
  const addContact = (event) => {
    event.preventDefault();
    const found = persons.filter(
      (person) => person.name.toString().toLowerCase() === newName.toLowerCase()
    );

    if (found.length > 0) {
      alert(`${newName} is already on the contacts list`);
    } else {
      const newContact = persons.concat({ name: newName, contact: newNumber });
      console.log(newContact, typeof newContact);
      setPersons(newContact);
    }
  };
  const searchContact = (event) => {
    event.preventDefault();
    let resultName = '';
    let resultNumber = 0;
    for (let i = 0; i < persons.length; i++) {
      if (
        persons[i].name.toString().toLowerCase() === searchName.toLowerCase()
      ) {
        resultName = persons[i].name;
        resultNumber = persons[i].contact;
      }
    }

    if (resultNumber !== 0) {
      const newContact = [{ name: resultName, contact: resultNumber }];
      setPersons(newContact);
      setResult(true);
    } else {
      alert(`${searchName} is not on the contacts list`);
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={searchContact}>
        filter shown with
        <input value={searchName} onChange={handleSearchFunction} />
        <div>
          <button>Search</button>
        </div>
      </form>
      <form onSubmit={addContact}>
        <div>
          <p>
            Name: <input value={newName} onChange={handleContactAddition} />
          </p>
          Phone: <input value={newNumber} onChange={handleNumberAddition} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>{result ? 'Search Results' : 'Numbers'}</h2>
      ...
      <div>
        {persons.map((person, index) => (
          <Person key={index} name={person.name} contact={person.contact} />
        ))}
      </div>
    </div>
  );
};

export default App;
