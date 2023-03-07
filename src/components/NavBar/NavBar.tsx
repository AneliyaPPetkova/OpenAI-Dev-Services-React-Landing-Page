import { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Sign = () => {
    return (
        <div className="nav-bar__sign">
          <button className="nav-bar__sign--in">Sign in</button>
          <button className="nav-bar__sign--up">Sign up</button>
        </div>
    )
}

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = (shouldOpen: boolean) => {
    setToggleMenu(shouldOpen);
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar__links">
        <div className="nav-bar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar__links-container">
          <Menu />
        </div>
        <Sign />
        <div className="nav-bar__menu">
          {toggleMenu ? (
            <RiCloseLine onClick={() => openMenu(false)} />
          ) : (
            <RiMenu3Line onClick={() => openMenu(true)} />
          )}
          {toggleMenu && (
            <div className="nav-bar__menu-container scale-up-center">
              <div className="nav-bar__menu-links">
                <Menu />
              </div>
              <Sign />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
