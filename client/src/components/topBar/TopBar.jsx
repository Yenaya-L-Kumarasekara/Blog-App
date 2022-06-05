import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListtitle">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListtitle">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListtitle">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListtitle">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListtitle">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListtitle">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListtitle">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
