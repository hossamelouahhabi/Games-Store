import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

export default function Navbar() {
  const { cartItems } = useContext(StoreContext);
  return (
    <>
      <nav className="navbar bg-dark border-5 border-bottom border-success p-2">
        <div className="container-fluid my-1">
          <Link style={{ textDecoration: "none" }} to="/">
            <span
              style={{ marginLeft: "15px" }}
              className="navbar-brand text-white fs-4 "
            >
              Games Store
            </span>
          </Link>

          <Link to="/cart">
            <IconButton sx={{ mr: 2 }}>
              <ShoppingCartIcon
                sx={{
                  color: "white",
                  mt: "10px",
                  ml: "2px",
                  fontSize: "27px",
                }}
              />
              <span
                style={{
                  color: "white",
                  fontSize: "12px",
                  width: "1.2rem",
                  borderRadius: "50%",
                  position: "absolute",
                  marginBottom: "17px",
                  marginRight: "-33px",
                  backgroundColor: "#198754",
                }}
              >
                {cartItems.length}
              </span>
            </IconButton>
          </Link>
        </div>
      </nav>
    </>
  );
}
