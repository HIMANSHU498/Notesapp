import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  CreateGroup,
  groupValues,
  setSelectedGroup,
  selectedGroup,
}) => {
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };
  return (
    <>
      <div className="sidebar-container">
        <h1 className="page-title">Pocket Notes</h1>
        <button className="create-btn" onClick={CreateGroup}>
          + &nbsp; Create Notes group
        </button>
        <div className="group-box">
          {groupValues.map((item, i) => {
            return (
              <div
                className="title-container"
                key={i}
                style={{
                  backgroundColor: `${
                    selectedGroup === item ? "#F7ECDC" : "white"
                  }`,
                }}
                onClick={() => handleGroupClick(item)}
              >
                <div className="notes-icon" style={{ background: item.color }}>
                  {item.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word.charAt(0))
                    .join("")}
                </div>
                <div className="notes-title">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
