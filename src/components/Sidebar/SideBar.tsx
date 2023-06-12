import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo_m.png";
import { GiErlenmeyer, GiSkills } from "react-icons/gi";
import {
  FaEnvelope,
  FaGithubAlt,
  FaHome,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
function SideBar() {
  return (
    <div className="nav-bar" data-cursor-size="1px">
      <Link className="logo" to={"/"}>
        <img src={LogoS} alt="logo" className="" />
      </Link>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
          <FaHome className="svg-class" />
        </NavLink>

        <NavLink
          to={"/skills"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
          <GiSkills className="svg-class" />
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
          <FaUser className="svg-class" />
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
          <GiErlenmeyer className="svg-class" />
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "active" : ""
          }
        >
          <FaEnvelope className="svg-class" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="svg-class" />
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt className="svg-class" />
          </a>
        </li>
        {/* <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">

          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default SideBar;
