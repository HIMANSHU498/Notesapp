import React, { useState } from "react";
import "./Popup.css";

const colors = [
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
  "#B38BFA",
  "#17C6AF",
];
const Popup = (props) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const createBtn = () => {
    props.cancelPopup({ name, color });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  console.log(name);
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
