import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

// Lisää uusi tehtävä listalle
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); // Tyhjentää syöttökentän
    }
  };

// Poistaa tehtävän listalta
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

// Merkitsee tehtävän valmiiksi 
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Tehtävälista</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Lisää uusi tehtävä"
        />
        <button onClick={addTask}>Lisää tehtävä</button>
      </div>

      <div className="task-list-container">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
              <input
                type="text"
                value={task.text}
                onChange={(e) => {
                  const updatedTasks = tasks.map((t, i) =>
                    i === index ? { ...t, text: e.target.value } : t
                  );
                  setTasks(updatedTasks);
                }}
              />
              <div className="task-buttons">
                <button className="toggle-btn" onClick={() => toggleCompletion(index)}>
                  {task.completed ? "Peruuta" : "Valmis"}
                </button>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Poista</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
