import React from "react";
import { useState } from "react";

function Form({ onAddPerson }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");

  function handleSubmit(e) {
    e.preventDefault();

    const personData = {
      name: name,
      gender: gender,
    };

    fetch("http://localhost:3000/persons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personData),
    })
      .then((response) => response.json())
      .then((newPerson) => onAddPerson(newPerson));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <select
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            value={gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Form;
