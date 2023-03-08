import { NavBar } from "../../components";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <>
      <NavBar />
      <div id="home" className="header section-padding">
        <div className="header__content">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="header__input">
            <input type="email" placeholder="Your email address" />
            <button type="button">Get Started</button>
          </div>
          <div className="header__people">
            <img src={people} alt="Logged in users in the last 24 hours" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header__image">
          <img src={ai} alt="Header image showing a representation of AI" />
        </div>
      </div>
    </>
  );
};

export default Header;
