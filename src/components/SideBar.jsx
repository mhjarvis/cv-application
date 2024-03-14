import "../styles/SideBar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <button className="sidebar-btn content-btn">Content</button>
            <button className="sidebar-btn customize-btn">Customize</button>
            <button className="sidebar-btn download-btn">Download</button>
        </div>
    );
}
