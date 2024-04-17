import React, { useState } from "react";

const Modal = ({ mode, setShowModal, task, getdata }) => {
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "e.howe@nufc.sa",
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : "50",
    date: editMode ? "" : "Today",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const postData = async (submission) => {
    submission.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        console.log("It Worked");
        setShowModal(false);
        getdata();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h3>Let's {mode} a task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input
            className="edit"
            type="submit"
            onClick={editMode ? console.log("You are in edit mode") : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
