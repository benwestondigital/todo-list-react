import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  todo: string;
};

export const App = () => {
  const [input, setInput] = useState<HTMLInputElement['value']>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!input) return;
    setTodos((existingTodos) => [
      ...existingTodos,
      { todo: input ?? '', id: todos.length },
    ]);
    setInput('');
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
        <ol>
          {todos.map(({ todo, id }) => (
            <div className="todo">
              <li key={id}>{todo}</li>
              <div>
                <label htmlFor="done">Done?</label>
                <input
                  type="checkbox"
                  name="done"
                  onChange={(e) =>
                    setTodos((prevTodos) =>
                      prevTodos.filter(
                        (todo) => todo.id !== Number(e.target.value)
                      )
                    )
                  }
                  value={id}
                />
              </div>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};
