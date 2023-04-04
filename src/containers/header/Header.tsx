import { NavBar } from "../../components";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <>
      <NavBar />
      <div id="home" className="header section-padding">
        <div className="header__content">
          <h1 className="text--gradient">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="text--blue">
            Welcome to the future of artificial intelligence. With GPT-3 from
            OpenAI, the possibilities are endless. Let's build something amazing
            together.
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
          <div className="image__container">
            <img src={ai} alt="Header image showing a representation of AI" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
