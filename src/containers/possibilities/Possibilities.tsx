import possibilities from "../../assets/possibilities.png";

const Possibilities = () => {
  return (
    <div id="possibilities" className="possibilities section__margin">
      <div className="possibilities__image">
        <img
          src={possibilities}
          alt="The possibilities are beyond your imagination"
        />
      </div>
      <div className="possibilities__content">
        <div className="possibilities__strapline text--light-blue">Join the waiting list</div>
        <div className="possibilities__title text--gradient">
          <h2>The possibilities are beyond your imagination</h2>
        </div>
        <div className="possibilities__text text--blue">
          Welcome to a world of infinite possibilities. With GPT-3 from OpenAI,
          there's no limit to what you can achieve. From writing to design,
          automation to education, GPT-3 is transforming the way we live, work,
          and create. Its advanced language generation capabilities are pushing
          the boundaries of what's possible in the field of artificial
          intelligence. Whether you're looking to automate repetitive tasks,
          create compelling content, or solve complex problems, GPT-3 can help
          you achieve your goals. Are you ready to explore the endless potential of GPT-3?
        </div>
        <div className="possibilities__link text--orange">
          Request Early Access to Get Started
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
