import { NavLink } from "react-router-dom";
import LogoHeader from "./LogoHeader";

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-secondary  d-flex justify-content-between w-100 m-0 p-0">
        <LogoHeader url="../1200px-Pokémon_GO_Plus.svg.png" />
        <div className="navbar-brand menu d-flex align-items-center">
          <NavLink
            to="/"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              (isActive && "active-class text-decoration-none text-danger") ||
              "text-decoration-none text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemones"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              (isActive &&
                "active-class text-decoration-none text-danger p-3 ") ||
              "text-decoration-none text-white p-3"
            }
          >
            Pokemones
          </NavLink>
        </div>
      </div>
    </>
  );
}