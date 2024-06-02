import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export const App = () => {
  const [input, setInput] = useState<HTMLInputElement['value']>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const completeTodo = (e) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === Number(e.target.value)) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!input) return;
    setTodos((existingTodos) => [
      ...existingTodos,
      { todo: input ?? '', id: todos.length, completed: false },
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
          {todos.map(({ todo, id, completed: done }) => {
            if (done) {
              return false;
            }

            return (
              <div className="todo">
                <li key={id}>{todo}</li>
                <div>
                  <label htmlFor="done">Done?</label>
                  <input
                    type="checkbox"
                    name="done"
                    onChange={(e) => completeTodo(e)}
                    value={id}
                  />
                </div>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
