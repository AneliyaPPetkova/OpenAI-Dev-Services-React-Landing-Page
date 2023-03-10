import { Solution } from "../../components";
import benefits from "../../data/benefits";
import { SolutionItem } from "../../data/types";

const Benefits = () => {
  return (
    <div id="benefits" className="benefits section__margin">
      <div className="benefits__title-container">
        <div className="benefits__title">
          <h2 className="text--gradient">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
        </div>
        <div className="benefits__link text--orange">
          Request Early Access to Get Started
        </div>
      </div>
      <div className="benefits__items-container">
        {benefits.map((benefit: SolutionItem) => {
          return <Solution key={benefit.id} solution={benefit} />;
        })}
      </div>
    </div>
  );
};

export default Benefits;
