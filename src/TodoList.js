import React from "react";
import { observer } from "mobx-react";
import todoCardDesc from "./Todo";
import { action } from "mobx";

@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Inside TodoList");
    return (
      <div className="todoList">
        {this.props.todos.map(todo => {
          return (
            <div style={{ marginTop: "10px" }}>
              <TodoCard todo={todo} />
            </div>
          );
        })}
      </div>
    );
  }
}

const TodoCard = props => {
  console.log("Inside TodoCard");
  return (
    <div style={{ borderRadius: "10px", backgroundColor: "#FF6366" }}>
      <span style={{ fontSize: "20px", color: "white", paddingTop: "20px", paddingLeft: "10px", fontFamily: "Raleway" }}>
        {props.todo.title}
      </span>
      <br />
      <span style={{ fontSize: "15px", color: "white", padding: "10px", fontFamily: "Raleway" }}>
        {props.todo.description}
      </span>
      <div style={{ display: "flex" }}>
        <span style={{ fontSize: "13px", color: "white", padding: "10px", fontFamily: "Raleway" }}>
          {props.todo.createTime}
        </span>
        <span style={{ fontSize: "13px", color: "white", padding: "10px", fontFamily: "Raleway" }}>
          {props.todo.deadline}
        </span>
      </div>
    </div>
  );
};

export default TodoList;
