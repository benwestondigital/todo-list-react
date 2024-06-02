import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  todo: string;
};

export const App = () => {
  const [input, setInput] = useState<HTMLInputElement['value']>();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTodos((existingTodos) => [
      ...existingTodos,
      { todo: input ?? '', id: count },
    ]);
    setInput('');
    setCount((existingCount) => existingCount + 1);
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <label>
        enter todo:
        <input
          type="text"
          name="todo"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </label>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>

      <div>
        <h2>todo list</h2>
        <ul>
          {todos.map(({ todo, id }) => (
            <li key={id}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
