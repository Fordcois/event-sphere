import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";

interface Task {
  id: string;
  task: string;
}

const App: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [tasks, setTasks] = useState<Task[] | null>(null);

  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;

  const getData = async () => {
    const userEmail = cookies.Email;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  return (
    <div className="app">
      {!authToken && <Auth />}

      {authToken && (
        <>
          {" "}
          <ListHeader ListName={"Holiday tick List"} getData={getData} />
          <p>Welcome back {userEmail}</p>
          {tasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
      <p></p>
    </div>
  );
};

export default App;
