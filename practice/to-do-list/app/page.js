"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && desc) {
      setMainTask([...mainTask, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/4">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={() => deleteHandler(i)} className="bg-black text-white px-4 py-2 rounded font-bold">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        My Todo-list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task here"
          className="m-10 border-4 border-solid border-zinc-800 rounded p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description here"
          className="m-10 border-4 border-solid border-zinc-800 rounded p-3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-blue-500 p-2 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-6 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Chandermani Todo-list. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Page;
