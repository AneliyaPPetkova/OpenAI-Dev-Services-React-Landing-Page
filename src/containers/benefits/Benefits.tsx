import { Solution } from "../../components";
import benefits from "../../data/benefits";
import { SolutionItem } from "../../data/types";

const Benefits = () => {
  const renderBenefits = () => {
    return benefits.map((benefit: SolutionItem) => (
      <Solution key={benefit.id} solution={benefit} />
    ));
  };

  return (
    <section id="benefits" className="benefits">
      <div className="benefits__title-container">
        <div className="benefits__title">
          <h2 className="text--subtitle text--bolder text--gradient">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
        </div>
        <div className="benefits__link text--normal text--orange">
          Request Early Access to Get Started
        </div>
      </div>
      <div className="benefits__items-container">{renderBenefits()}</div>
    </section>
  );
};

export default Benefits;
