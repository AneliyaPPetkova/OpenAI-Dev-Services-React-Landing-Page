import logo from "../../assets/logo.svg";
import footerNav from "../../data/footerNav";
import { NavList, NavListItem } from "../../data/types";

const Footer = () => {
  return (
    <>
      <section className="footer__heading">
        <div className="footer__title">
          <h2 className="text--title text--gradient text--bolder text--center">
            Do you want to step in to the future before others
          </h2>
        </div>
        <div className="footer__cta">
          <div className="cta__link text--white">
            <a href="#">Request Early Access</a>
          </div>
        </div>
      </section>
      <section className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <div className="text--smallest text--white">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </div>
        </div>
        <div className="footer__nav">
          {footerNav.map((navList: NavList) => {
            const { id, title, items } = navList;
            return (
              <div key={id} className="nav__list text--white">
                <div className="list__title text--small">{title}</div>
                <ul className="text--smallest">
                  {items.map((item: NavListItem) => {
                    const { id, title, link } = item;
                    return (
                      <li key={id}>
                        <a href={link}>{title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <section className="footer__copyright text--white text--center text--smallest">
        © 2021 GPT-3. All rights reserved.
      </section>
    </>
  );
};

export default Footer;
