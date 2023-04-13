import { useState } from "react";
import peopleImg from "../../assets/people.png";
import aiImg from "../../assets/ai.png";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <section id="home" className="header section-padding">
      <div className="header__content">
        <h1 className="text--title text--gradient">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text--bigger text--blue">
          Welcome to the future of artificial intelligence. With GPT-3 from
          OpenAI, the possibilities are endless. Let's build something amazing
          together.
        </p>
        <form onSubmit={handleFormSubmit} className="header__input">
          <input
            type="email"
            placeholder="Your email address"
            className="text--bold text--bigger text--white"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="text--bold text--bigger text--white">
            Get Started
          </button>
        </form>
        <div className="header__people">
          <img src={peopleImg} alt="Logged in users in the last 24 hours" />
          <p className="text--white text--normal text--smallest">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="header__image">
        <div className="image__container">
          <img src={aiImg} alt="Header image showing a representation of AI" />
        </div>
      </div>
    </section>
  );
};

export default Header;
