import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <div className="footer__title">
          <h2 className="text--gradient">
            Do you want to step in to the future before others
          </h2>
        </div>
        <div className="footer__cta">
          <div className="cta__link text--white">
            <a href="#">Request Early Access</a>
          </div>
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <div className="text--sub text--white">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </div>
        </div>
        <div className="footer__nav">
          <div className="nav__list text--white">
            <div className="list__title">Links</div>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright text--white">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
