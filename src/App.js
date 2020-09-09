import React, { useState } from "react";
import { observable, computed, action, reaction } from "mobx";
import { observer } from "mobx-react";
import TodoList from "./TodoList";
import Todo from "./Todo";

var todos = observable([]);

const addTodo = action(todo => {
  todos.push(todo);
});

const disposer = reaction(
  () => todos.length,
  (todosLength) => alert("State changed")
);

export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");

  const submitForm = () => {
    var today = new Date();
    var todo = new Todo(
      todoTitle,
      todoDesc,
      today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear(),
      todoDeadline
    );
    addTodo(todo);
  };

  return (
    <div>
      Title:{" "}
      <input
        type="text"
        onChange={e => setTodoTitle(e.target.value)}
        required
      />
      <br />
      <br />
      Description:{" "}
      <input type="text" onChange={e => setTodoDesc(e.target.value)} required />
      <br />
      <br />
      Deadline:{" "}
      <input
        type="text"
        onChange={e => setTodoDeadline(e.target.value)}
        required
      />
      <br />
      <br />
      <button onClick={submitForm}>Submit</button>
      <div style={{ marginTop: "20px" }}>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
