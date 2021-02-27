import React, { useState } from "react";

export function Modal() {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // code below
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="origin"
          value={origin}
          type="text"
          placeholder="Origin"
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          name="description"
          value={description}
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Mint now!</button>
      </form>
    </div>
  );
}
