import React from "react";
import "./Notes.css";
import NoteImg from "./../assets/notepad.png";
import Send from "./../assets/send.png";
const Notes = () => {
  return (
    <div className="notes-container">
      {/* <img src={NoteImg} alt="notes-img" className="notes-img" />
      <div className="pocket-notes">Pocket Notes</div>
      <div className="app-features">
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </div>
      <div className="secure">&#128274; end-to-end encrypted</div> */}
      <div className="navbar">
        <div className="notes-icon2">du</div>
        <div className="notes-title2">Cuvette notes</div>
      </div>
      <div className="notes-header">
        <div className="notes-box">
          <div className="timestamp">
            {" "}
            10:30 Am <br />
            <br />
            <span>9 March 2023</span>
          </div>
          <div className="notes-item">
            It's not only writers who can benefit from this free online tool. If
            you're a programmer who's working on a project where blocks of text
            are needed, this tool can be a great way to get that. It's a good
            way to test your programming and that the tool being created is
            working well.
          </div>
        </div>
      </div>
      <div className="typing-footer">
        <textarea
          type="text"
          className="user-notes"
          placeholder="Enter your text here..........."
        />
        <img src={Send} alt="send-icon" />
      </div>
    </div>
  );
};

export default Notes;
