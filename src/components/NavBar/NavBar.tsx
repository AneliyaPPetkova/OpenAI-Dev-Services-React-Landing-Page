import { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Menu } from "./Menu";
import { Sign } from "./Sign";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => setToggleMenu(!toggleMenu);

  return (
    <div className="nav-bar">
      <div className="nav-bar__links">
        <div className="nav-bar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar__links-container text--normal text--white text--big">
          <Menu />
        </div>
      </div>
      <Sign />
      <div className="nav-bar__menu">
        {toggleMenu ? (
          <RiCloseLine onClick={toggle} />
        ) : (
          <RiMenu3Line onClick={toggle} />
        )}
        {toggleMenu && (
          <div className="nav-bar__menu-container scale-up-center">
            <div className="nav-bar__menu-links text--normal">
              <Menu />
            </div>
            <Sign />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
