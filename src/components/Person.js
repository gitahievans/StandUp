import React from "react";

function Person({ person, onDeletePerson, onUpdatePerson }) {
  //DELETE
  function handleDeleteClick() {
    fetch(`http://localhost:3000/persons${person.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeletePerson(person));
  }

  /*UPDATE(change part of our component((gender of our persons)) 
  Basic steps
  1.What event? = click
  2.Make request to patch 
  3.Update state*/

  function handleUpdatePerson(e) {
    fetch(`http://localhost:3000/persons/${person.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender: e.target.value,
      }),
    })
      .then((response) => response.json())
      .then((updatedPerson) => onUpdatePerson(updatedPerson));
  }

  return (
    <div className="container">
      <ul>
        <h3>Name: {person.name}</h3>
        <p>
          Gender: {person.gender}
          <select className="select" onChange={handleUpdatePerson}>
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </p>
        <button className="remove" onClick={handleDeleteClick}>
          DELETE
        </button>
      </ul>
    </div>
  );
}
export default Person;
