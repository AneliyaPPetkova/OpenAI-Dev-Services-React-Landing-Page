import { Article } from "../../components";
import blog from "../../data/blog";
import { Article as ArticleType } from "../../data/types";

const Blog = () => {
  const featuredArticles = () => {
    return blog.filter((item: ArticleType) => item.isFeatured);
  };

  const articles = () => {
    return blog.filter((item: ArticleType) => !item.isFeatured);
  };

  return (
    <section id="blog" className="blog section__margin">
      <div className="blog__title">
        <h2 className="text--gradient text--title">
          A lot is happening, <br />
          We are blogging about it.
        </h2>
      </div>
      <div className="blog__articles">
        <div className="articles__featured">
          {featuredArticles().map((item: ArticleType) => {
            return <Article articleItem={item} />;
          })}
        </div>
        <div className="articles__list">
          {articles().map((item: ArticleType) => {
            return <Article articleItem={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
