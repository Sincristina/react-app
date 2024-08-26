import "../components/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <p className="p-nav">
          {
            "Ai probleme cu achiziția de clienți? Creşte bussines-ul alǎturi de noi, de 10x"
          }
        </p>
        <Link to="/blog">
          <button className="btn">începe aici</button>
        </Link>
      </div>

      <div className="nav-menu">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img
            className="logo"
            src="https://www.baboon.ro/wp-content/uploads/graphics/logo.svg"
            alt="logo"
          />
        </Link>
        <div className="menu">
          <p className="menu-item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </p>
          <p className="menu-item">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </p>
          <p className="menu-item">
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Blog
            </Link>
          </p>
        </div>
      </div>

      {/* <div className="header">
        <h1 className="blog">BLOG</h1>
        <p className="paragraph-detail">
          Noutăți, tutoriale și articole creative de Bussines.
        </p>
      </div> */}
    </div>
  );
}
