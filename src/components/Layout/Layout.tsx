import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import "./index.scss";

function Layout() {
  return (
    <>
      <div className="App">
        <SideBar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
