import React from "react";

const Names = () => {
  const names = ["John", "Jill", "Jack"];

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Names"),
    React.createElement(
      "ul",
      { className: "names" },
      names.map(name => {
        return React.createElement("li", { className: "name" }, name);
      })
    )
  );
};

const Names = () => {
  const names = ["John", "Jill", "Jack"];

  return (
    <div>
      <h2>Names</h2>
      <ul className="names">
        {names.map(name => (
          <li className="name">{name}</li>
        ))}
      </ul>
    </div>
  );
};
