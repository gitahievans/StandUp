import React from "react";
import Form from "./Form";
import { useState, useEffect } from "react";
import Person from "./Person";

function PersonsList() {
  const [persons, setPersons] = useState([]);
  // const [gender, setGender] = useState("Male");

  //READ(GET)
  useEffect(() => {
    fetch("http://localhost:3000/persons");
    console.log(
      fetch("http://localhost:3000/persons")
        .then((response) => response.json())
        .then((personData) => setPersons(personData))
    );
  }, []);

  //DELETE
  function handleDeletePerson(deletedPerson) {
    const updatePersons = persons.filter(
      (person) => person.id !== deletedPerson.id
    );
    setPersons(updatePersons);
  }

  function handleAddPerson(newPerson) {
    setPersons([...persons, newPerson]);
  }

  function handleUpdatePerson(updatedPerson) {
    setPersons(
      persons.map((person) => {
        if (updatedPerson.id === person.id) {
          return updatedPerson;
        } else {
          return person;
        }
      })
    );
  }

  return (
    <div>
      <Form onAddPerson={handleAddPerson} />
      <ul>
        {persons.map((person) => (
          <Person
            key={person.id}
            person={person}
            onDeletePerson={handleDeletePerson}
            onUpdatePerson={handleUpdatePerson}
          />
        ))}
      </ul>
    </div>
  );
}

export default PersonsList;
