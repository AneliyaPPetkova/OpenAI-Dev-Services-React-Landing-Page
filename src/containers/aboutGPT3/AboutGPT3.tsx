import { Solution } from "../../components";
import solutions from "../../data/solutions";
import { SolutionItem } from "../../data/types";

const whatIsGPT3: SolutionItem = {
  id: 1,
  title: `What is GPT-3`,
  info: `GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI. It uses advanced algorithms to generate human-like text and can perform various natural language processing tasks such as language translation, question-answering, and content creation. It is considered to be one of the largest and most advanced language models available and has the potential to revolutionize the field of artificial intelligence.`,
};

const AboutGPT3 = () => {
  const renderedSolutions = solutions.map((solution: SolutionItem) => (
    <Solution key={solution.id} solution={solution} />
  ));

  return (
    <div
      id="wgpt3"
      className="about-gpt3 bg__gradient--secondary"
    >
      <div className="about-gpt3__info">
        <Solution solution={whatIsGPT3} />
      </div>

      <div className="about-gpt3__title-container">
        <div className="about-gpt3__title">
          <h2 className="text--gradient text--subtitle text--bolder">
            The possibilities are beyond your imagination
          </h2>
        </div>
        <div className="about-gpt3__link text--normal text--orange">
          Explore The Library
        </div>
      </div>

      <div className="about-gpt3__solutions-container">{renderedSolutions}</div>
    </div>
  );
};

export default AboutGPT3;
