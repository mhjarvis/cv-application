import "./SideBar.css";
// import clip art images directly
import noteImage from "../../images/note-edit-outline.svg";
import pencilImage from "../../images/pencil-ruler-outline.svg";
import downloadImage from "../../images/download-circle-outline.svg";
import logo from "../../images/logo.png";

export default function SideBar() {
    return (
        <div className="sidebar">
            <img src={logo} className="logo" alt="logo" />
            <button className="sidebar-btn content-btn">
                <img src={noteImage} className="icon" alt="paper-clip-art" />
                <p className="content-btn-p">Content</p>
            </button>
            <button className="sidebar-btn customize-btn">
                <img src={pencilImage} className="icon" alt="pencil-clip-art" />
                <p className="content-btn-p">Download</p>
            </button>
            <button className="sidebar-btn download-btn">
                <img
                    src={downloadImage}
                    className="icon"
                    alt="download-clip-art"
                />
                <p className="content-btn-p">Download</p>
            </button>
        </div>
    );
}
