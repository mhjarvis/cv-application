import "./App.css";
import ResumeInput from "./components/ResumeInput";
import ResumeOutput from "./components/ResumeOutput";
import SideBar from "./components/SideBar";

function App() {
    return (
        <div className="container">
            <SideBar className="sidebar" />
            <ResumeInput className="input-container" />
            <ResumeOutput className="output-container" />
        </div>
    );
}

export default App;
