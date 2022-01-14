import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import './App.css';

export default function App() {

  let initial_data = [
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

  const intitialState = () => {
    let getToDos = localStorage.getItem("tasks");
    let tasks = JSON.parse(getToDos);
    return tasks || initial_data;
  }
  
  const [toDos, setToDos] = useState(intitialState());

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(toDos));
  }, [toDos]);

  const createToDo = (val) => {
    let new_task = {
      text: val,
      done: false,
    }
    let newToDos = [...toDos];
    newToDos.unshift(new_task);
    setToDos(newToDos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    createToDo(text);
    setText("");
  }

  const doneToDo = (id) => {
    let doneToDos = [...toDos];
    doneToDos[id].done = !doneToDos[id].done;
    setToDos(doneToDos);
  }

  const deleteToDo = (id) => {
    let removeToDo = [...toDos]
    removeToDo.splice(id, 1);
    setToDos(removeToDo)
  }

  const resetApp = () => {
    localStorage.clear();
    setToDos(initial_data);
  }

  return (
    <div className="App">
      <Header />
      <div className="main card" >
        <form onSubmit={(e) => handleSubmit(e)} className="input-group input">
          <input type="text" className="form-control" placeholder="Add Task" value={text}
            onChange={(e) => setText(e.target.value)}></input>
          <div className="input-group-append">
            <button id="add" className="btn btn-outline-success" type="button"
              onClick={(e) => handleSubmit(e)}>Add</button>
          </div>
        </form>
        <ul className="list-group list-group-flush">
          {toDos.map((task, i) => {
            return (
              <li key={i} className={task.done ? "list-group-item strike" : "list-group-item"}>
                {task.text}
                <button id="delete" className="btn btn-outline-danger button"
                  onClick={() => deleteToDo(i)}>
                  Delete
                </button>
                <button id="done" className="btn btn-outline-success button" onClick={() => doneToDo(i)}>
                  {task.done ? "Not Done" : "Done"}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <button id="reset" className="btn btn-outline-warning reset" type="button" onClick={() => resetApp()}>Reset</button>
    </div>
  );
}