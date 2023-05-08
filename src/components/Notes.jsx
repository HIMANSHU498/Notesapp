import React, { useState } from "react";
import "./Notes.css";
import NoteImg from "./../assets/notepad.png";
import Send from "./../assets/send.png";

const Notes = () => {
  const [userNotes, setUserNotes] = useState([]);
  const [message, setMessage] = useState("");

  const textChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    setUserNotes((prevNotes) => [...prevNotes, message]);
    setMessage("");
  };

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
        {userNotes.map((note, index) => (
          <div key={index} className="notes-box">
            <div className="timestamp">
              {" "}
              10:30 Am <br />
              <br />
              <span>9 March 2023</span>
            </div>
            <div className="notes-item">{note}</div>
          </div>
        ))}
      </div>
      <div className="typing-footer">
        <textarea
          type="text"
          className="user-notes"
          placeholder="Enter your text here..........."
          onChange={textChange}
          value={message}
          name="userNotes"
        />
        <img src={Send} alt="send-icon" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default Notes;
