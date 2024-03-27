import "./App.css";
import ResumeInput from "./components/ResumeInput";
import ResumeOutput from "./components/ResumeOutput/ResumeOutput";
import SideBar from "./components/Sidebar/SideBar";

function App() {
    return (
        <div className="container">
            <div className="left-section">
                <SideBar />
                <ResumeInput />
            </div>
            <ResumeOutput />
        </div>
    );
}

export default App;
