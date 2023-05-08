import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ name, color, colors, createBtn, handleChange, setColor }) => {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-title">Create New Notes group</div>
        <label>
          Group Name
          <input
            type="text"
            placeholder="Enter your group name..."
            name="name"
            onChange={handleChange}
            value={name}
          />
        </label>

        <div className="icon-colors">Choose color</div>
        <div className="color-box">
          {colors.map((item, i) => (
            <div
              key={i}
              className="colors"
              style={{
                backgroundColor: item,
                border: `${color.includes(item) ? "3px solid red" : "none"}`,
              }}
              onClick={() => setColor(item)}
            ></div>
          ))}
        </div>

        <button className="create-group" onClick={createBtn}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;
