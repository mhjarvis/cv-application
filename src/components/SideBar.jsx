import "../styles/SideBar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <button className="btn content-btn">Content</button>
            <button className="btn customize-btn">Customize</button>
            <button className="btn download-btn">Download</button>
        </div>
    );
}
