import "./App.css";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

const colors = [
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
  "#B38BFA",
  "#17C6AF",
];

function App() {
  //sidebar
  const [popup, setPopup] = useState(false);
  const [groupValues, setGroupValues] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const savedGroupValues = JSON.parse(localStorage.getItem("groupValues"));
    if (savedGroupValues) {
      setGroupValues(savedGroupValues);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CreateGroup = () => {
    setPopup(true);
  };

  const cancelPopup = (userinputs) => {
    setPopup(false);
    setGroupValues([...groupValues, userinputs]);
    localStorage.setItem(
      "groupValues",
      JSON.stringify([...groupValues, userinputs])
    );
  };

  //popup
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const createBtn = () => {
    cancelPopup({ name, color });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {isMobileView ? (
          <Routes>
            <Route
              path="/"
              element={
                <Sidebar
                  groupValues={groupValues}
                  CreateGroup={CreateGroup}
                  setSelectedGroup={setSelectedGroup}
                  selectedGroup={selectedGroup}
                />
              }
            />
            <Route
              path="/notes"
              element={<Notes selectedGroup={selectedGroup} />}
            />
          </Routes>
        ) : (
          <>
            <Sidebar
              groupValues={groupValues}
              CreateGroup={CreateGroup}
              setSelectedGroup={setSelectedGroup}
              selectedGroup={selectedGroup}
            />
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route
                path="/notes"
                element={<Notes selectedGroup={selectedGroup} />}
              />
            </Routes>
          </>
        )}
        {popup && (
          <Popup
            handleChange={handleChange}
            createBtn={createBtn}
            name={name}
            color={color}
            colors={colors}
            setColor={handleColorChange}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
