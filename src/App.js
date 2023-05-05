import "./App.css";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Notes />
    </div>
  );
}

export default App;
