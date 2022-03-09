import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
}
