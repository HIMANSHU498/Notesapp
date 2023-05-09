import React from "react";
import NoteImg from "./../assets/notepad.png";
const Banner = () => {
  return (
    <div className="notes-container">
      <img src={NoteImg} alt="notes-img" className="notes-img" />
      <div className="pocket-notes">Pocket Notes</div>
      <div className="app-features">
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </div>
      <div className="secure">&#128274; end-to-end encrypted</div>
    </div>
  );
};

export default Banner;
