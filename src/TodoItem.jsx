export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
