import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom shadow-sm mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold fs-4" to="/">✍️ Jay's Medium </Link>
        
        <div>
          <Link className="nav-link d-inline px-3" to="/">Home</Link>
          <Link className="nav-link d-inline px-3" to="/editor">Write</Link>
          <Link className="nav-link d-inline px-3" to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
