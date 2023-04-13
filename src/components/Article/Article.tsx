import { Article as ArticleType } from "../../data/types";

type ArticleProps = {
  articleItem: ArticleType;
};

const Article = ({ articleItem }: ArticleProps) => {
  const { title, imageUrl, publishedAt } = articleItem;

  return (
    <div className="article">
      <div className="article__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="article__content text--white">
        <div className="article__title">
          <div className="article__date text--normal text--smallest">{publishedAt}</div>
          <h3 className="text--biggest text--bolder">{title}</h3>
        </div>
        <div className="article__link text--normal text--smallest">Read Full Article</div>
      </div>
    </div>
  );
};

export default Article;
