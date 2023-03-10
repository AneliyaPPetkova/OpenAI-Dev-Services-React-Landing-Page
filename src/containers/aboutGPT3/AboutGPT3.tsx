import { Solution } from "../../components";
import solutions from "../../data/solutions";
import { SolutionItem } from "../../data/types";

const whatIsGPT3: SolutionItem = {
  id: 1,
  title: `What is GPT-3`,
  info: `We so opinion friends me message as delight. Whole front do of plate
    heard oh ought. His defective nor convinced residence own. Connection
    has put impossible own apartments boisterous. At jointure ladyship an
    insisted so humanity he. Friendly bachelor entrance to on by.`,
};

const AboutGPT3 = () => {
  return (
    <div
      id="wgpt3"
      className="about-gpt3 bg__gradient--secondary section__margin section__padding"
    >
      <div className="about-gpt3__info">
        <Solution solution={whatIsGPT3} />;
      </div>
      <div className="about-gpt3__title-container">
        <div className="about-gpt3__title">
          <h2 className="text--gradient">
            The possibilities are beyond your imagination
          </h2>
        </div>
        <div className="about-gpt3__link text--orange">Explore The Library</div>
      </div>
      <div id="possibility" className="about-gpt3__solutions-container">
        {solutions.map((solution: SolutionItem) => {
          return <Solution key={solution.id} solution={solution} />;
        })}
      </div>
    </div>
  );
};

export default AboutGPT3;
