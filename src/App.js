import "./App.css";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
import { useState } from "react";

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
  const CreateGroup = () => {
    setPopup(true);
  };

  const cancelPopup = (userinputs) => {
    setPopup(false);
    setGroupValues([...groupValues, userinputs]);
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
  console.log(name);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        groupValues={groupValues}
        CreateGroup={CreateGroup}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />
      <Notes selectedGroup={selectedGroup} />
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
  );
}

export default App;
