import { SolutionItem } from "../../data/types";

type SolutionProps = {
  solution: SolutionItem;
};

const Solution = ({ solution }: SolutionProps) => {
  const { title, info } = solution;

  return (
    <div className="solution">
      <div className="solution__title">
        <h3>{title}</h3>
      </div>
      <div className="solution__text">{info}</div>
    </div>
  );
};

export default Solution;
