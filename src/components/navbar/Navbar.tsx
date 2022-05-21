import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="wrapper">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/messages">Messages</Link>
      </nav>
    </div>
  );
};
