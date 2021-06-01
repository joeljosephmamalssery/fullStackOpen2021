import './App.css';
import { useState, useEffect } from 'react';
import Person from './Components/person';
import contactFunctions from './Components/contactFunctions';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [result, setResult] = useState(false);
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

    const found = persons.find(
      (person) => person.name.toString().toLowerCase() === newName.toLowerCase()
    );

    if (found) {
      if (
        window.confirm(
          `${newName} is already on the contacts list.Do you want to overwrite?`
        )
      ) {
        found.number = newNumber;
        contactFunctions.updateContact(found);
      }
    } else {
      const idGen = contactFunctions.handleId();
      const newContact = {
        name: newName,
        number: newNumber,
        id: idGen,
      };

      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: idGen,
        })
      );
      contactFunctions.saveContact({ newContact });
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
      const idGen = contactFunctions.handleId();
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
        <Person persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
};

export default App;
