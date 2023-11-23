import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div>
        <label htmlFor="item">New Item </label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)} //Updating newItem on Change
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
