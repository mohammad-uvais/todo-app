import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';

function App() {

  let data = [
    {
      text: "First Task",
      done: false
    },
    {
      text: "Second Task",
      done: false
    },
    {
      text: "Third Task",
      done: false
    }
  ];

  const [todos, setTodos] = useState(data);
  const [text, setText] = useState("");

  // const [todos, setTodos] = useState(() => {
  //   const getTodos = localStorage.getItem("tasks");
  //   const tasks = JSON.parse(getTodos);
  //   return tasks || data;
  // });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  useState(() => {
    const getTodos = localStorage.getItem("tasks");
    const tasks = JSON.parse(getTodos);
    setTodos(tasks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    createTodo(text);
    setText("");
  }

  const createTodo = (text) => {
    const newTask = {
      text: text,
      done: false,
    }
    let newTodos = [...todos];
    newTodos.unshift(newTask);
    setTodos(newTodos);
  }

  const doneTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = !newTodos[i].done;
    setTodos(newTodos);
  }

  const deleteTodo = (i) => {
    const removeTodo = [...todos]
    removeTodo.splice(i, 1);
    setTodos(removeTodo)
  }

  const resetApp = () => {
    localStorage.clear();
    setTodos(data);
  }

  return (
    <div className="App">

      <Header />

      <div className="main card" >

        <form onSubmit={handleSubmit} className="input-group input">
          <input type="text" className="form-control" placeholder="Add Task" value={text}
            onChange={e => setText(e.target.value)}></input>
          <div className="input-group-append">
            <button id="add" className="btn btn-outline-success" type="button"
            onClick={handleSubmit}>Add</button>
          </div>
        </form>

        <ul className="list-group list-group-flush">
          {todos.map((task, i) => {
            return (
              <li key={i} className={task.done ? "list-group-item strike" : "list-group-item"}>
                {task.text}
                <button id="delete" className="btn btn-outline-danger button"
                onClick={() => deleteTodo(i)}>
                  Delete
                </button>
                <button id="done" className="btn btn-outline-success button" onClick={() => doneTodo(i)}>
                  {task.done ? "Not Done" : "Done"}
                </button>                
              </li>
            )
          })}
        </ul>

        

      </div>

      <button id="reset" className="btn btn-outline-warning reset" type="button" onClick={resetApp}>Reset</button>

    </div>
  );
}

export default App;