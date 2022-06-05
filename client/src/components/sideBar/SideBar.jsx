import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCate = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCate();
  }, []);

  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/4621787/pexels-photo-4621787.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="sideBarImg"
        />
        <p>
          The next generation of the web’s favorite icon library + toolkit is
          now available as a Beta release toolkit is now available as a Beta
          release
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
