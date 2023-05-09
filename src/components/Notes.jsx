import React, { useState, useEffect } from "react";
import "./Notes.css";

import Send from "./../assets/send.png";

const Notes = ({ selectedGroup }) => {
  const [userNotes, setUserNotes] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const notes = localStorage.getItem(selectedGroup?.name);
    setUserNotes(notes ? JSON.parse(notes) : []);
  }, [selectedGroup]);

  const textChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const newNote = {
      timestamp: new Date().toLocaleString(),
      message: message,
    };

    setUserNotes((prevNotes) => [...prevNotes, newNote]);
    setMessage("");
  };

  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem(selectedGroup.name, JSON.stringify(userNotes));
    }
  }, [selectedGroup, userNotes]);

  return (
    <div className="notes-container">
      <div className="navbar">
        <div
          className="notes-icon2"
          style={{
            backgroundColor: !selectedGroup ? "none" : selectedGroup.color,
          }}
        >
          {!selectedGroup
            ? ""
            : selectedGroup.name
                .split(" ")
                .slice(0, 2)
                .map((word) => word.charAt(0))
                .join("")}
        </div>

        <div className="notes-title2">
          {!selectedGroup ? "" : selectedGroup.name}
        </div>
      </div>
      <div className="notes-header">
        {userNotes.map((note, index) => (
          <div key={index} className="notes-box">
            <div className="timestamp">{note.timestamp}</div>
            <div className="notes-item">{note.message}</div>
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
