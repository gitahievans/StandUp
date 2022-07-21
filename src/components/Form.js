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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Enter name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>Submit</button>
        </div>
        <label className="label">Gender</label>
        <div>
          <select
            className="input"
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            value={gender}
          >
            <option value="Select">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
