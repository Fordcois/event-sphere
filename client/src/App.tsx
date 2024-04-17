import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

interface Task {
  id: string;
  task: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  const getData = async () => {
    const userEmail = "e.howe@nufc.sa";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <ListHeader ListName={"Holiday tick List"} getData={getData} />
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default App;
