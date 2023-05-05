import React from "react";
import "./Popup.css";
const Popup = () => {
  return (
    <>
      <div className="popup-container">
        <div className="popup-box">
          <div className="popup-title">Create New Notes group</div>
          <label>
            Group Name
            <input type="text" placeholder="Enter your group name..." />
          </label>
          <div className="icon-colors"> Choose colour</div>
          <div className="colors"></div>
          <button className="create-group">Create</button>
        </div>
      </div>
    </>
  );
};

export default Popup;
