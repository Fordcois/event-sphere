import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

interface Task {
  // Define your task interface here
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  const getData = async () => {
    const userEmail = "e.howe@nufc.sa";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
      console.log(tasks);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <ListHeader ListName={"Holiday tick List"} />
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
