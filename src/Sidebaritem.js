import React from "react";
import "./Sidebaritem.css";

function Sidebaritem({ Icon, title, selected, setTitle }) {
  const getTitle = () => {
    setTitle(title);
  };

  return (
    <div
      className={`item ${selected == title && `selected`}`}
      onClick={getTitle}
    >
      <Icon className="item__icon" />
      <p className="item__text">{title}</p>
    </div>
  );
}

export default Sidebaritem;
