import React, { useState } from "react";
import "./Sidebar.css";
import Popup from "./Popup";
const Sidebar = () => {
  const [popup, setPopup] = useState(false);
  const CreateBtn = () => {
    setPopup(true);
  };
  return (
    <>
      <div className="sidebar-container">
        <h1 className="page-title">Pocket Notes</h1>
        <button className="create-btn" onClick={CreateBtn}>
          + &nbsp; Create Notes group
        </button>
        <div className="title-container">
          <div className="notes-icon">du</div>
          <div className="notes-title">Cuvette Notes</div>
        </div>
      </div>
      {popup && <Popup />}
    </>
  );
};

export default Sidebar;
