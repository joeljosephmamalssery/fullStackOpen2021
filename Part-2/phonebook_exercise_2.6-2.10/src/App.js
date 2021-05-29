import './App.css';
import { useState, useEffect } from 'react';
import Person from './Components/person';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(false);
  function handleId() {
    const myRnId = () => parseInt(Date.now() * Math.random());
    return myRnId();
  }
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      const idGen = handleId();
      const newContact = persons.concat({
        name: newName,
        number: newNumber,
        id: idGen,
      });
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
        resultNumber = persons[i].number;
      }
    }

    if (resultNumber !== 0) {
      const idGen = handleId();
      const newContact = [
        { name: resultName, number: resultNumber, id: idGen },
      ];
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
        Filter shown with
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
        {persons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </div>
    </div>
  );
};

export default App;
