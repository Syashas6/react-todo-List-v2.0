import React, { useState } from "react";

function TodoItem(props) {
  const [marked, setMark] = useState(false);
  function handleClick() {
    setMark((prev) => {
      return !prev;
    });
  }
  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: marked ? "line-through" : null }}
      >
        {props.todoItem}
      </li>
    </div>
  );
}

export default TodoItem;
