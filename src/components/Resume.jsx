import "./Resume.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel";

export default function Resume() {
    return (
        <div className="main">
            <div className="input">
                <ButtonPanel />
                BUTTON SECTION PERSONAL DETAILS EDUCATION DETAILS EXPERIENCE
                DETAILS SKILLS CERTIFICATES
            </div>
            <div className="output">Output</div>
        </div>
    );
}
