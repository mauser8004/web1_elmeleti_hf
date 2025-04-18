import { useState } from "react";

type Todo = {
  text: string;
  done: boolean;
};

export default function App1() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, done: false }]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleDone = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 To-do lista</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Írj be egy feladatot"
      />
      <button onClick={addTask} style={{ marginLeft: "8px" }}>
        Hozzáad
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} style={{ marginBottom: "5px" }}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => toggleDone(i)}
              style={{ marginLeft: "8px", color: "green" }}
              title="Kész/meg nem csinált"
            >
              ✅
            </button>
            <button
              onClick={() => deleteTask(i)}
              style={{ marginLeft: "4px", color: "red" }}
              title="Törlés"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


// 3. részállapot teszt
