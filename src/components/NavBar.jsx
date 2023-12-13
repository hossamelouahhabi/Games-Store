import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark border-5 border-bottom border-success p-2">
        <div className="container-fluid my-1">
          <Link style={{ textDecoration: "none" }} to="/">
            <a
              style={{ marginLeft: "15px" }}
              className="navbar-brand text-white fs-4 "
            >
              Games Store
            </a>
          </Link>

          <Link to="/cart">
            <IconButton>
              <ShoppingCartIcon sx={{ color: "white", mt: "5px", ml: "2px" }} />
            </IconButton>
          </Link>
        </div>
      </nav>
    </>
  );
}
