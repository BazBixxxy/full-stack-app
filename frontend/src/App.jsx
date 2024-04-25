import { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utilities/constant";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/post`, { task: input }).then((res) => {
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/put/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    });
  };

  return (
    <section>
      <h2>crud operation with the mern stack</h2>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={updateId ? updateTask : addTask}
          className="save-button"
        >
          {updateId ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <List
            key={task._id}
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </section>
  );
}

export default App;
