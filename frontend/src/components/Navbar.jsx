import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <FaRobot />
        AI Resume Analyzer
      </Link>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link
          to="/home"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/history"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          History
        </Link>

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;