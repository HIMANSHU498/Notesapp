import React, { useState } from "react";
import "./Sidebar.css";
import Popup from "./Popup";
const Sidebar = () => {
  const [popup, setPopup] = useState(false);
  const [groupValues, setGroupValues] = useState([]);
  const CreateBtn = () => {
    setPopup(true);
  };

  const cancelPopup = (userinputs) => {
    setPopup(false);
    setGroupValues([...groupValues, userinputs]);
  };

  return (
    <>
      <div className="sidebar-container">
        <h1 className="page-title">Pocket Notes</h1>
        <button className="create-btn" onClick={CreateBtn}>
          + &nbsp; Create Notes group
        </button>
        <div className="group-box">
          {groupValues.map((item) => {
            return (
              <div className="title-container">
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
      {popup && <Popup cancelPopup={cancelPopup} />}
    </>
  );
};

export default Sidebar;
