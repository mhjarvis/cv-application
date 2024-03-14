import "./App.css";
import ResumeInput from "./components/ResumeInput";
import ResumeOutput from "./components/ResumeOutput";
import SideBar from "./components/SideBar";

function App() {
    return (
        <div className="container">
            <SideBar />
            <ResumeInput />
            <ResumeOutput />
        </div>
    );
}

export default App;
