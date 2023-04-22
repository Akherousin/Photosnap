import './Stories.scss';
import Article from '../Article';

function Stories({ children }) {
  return (
    <section>
      <h2 className="visually-hidden" id="our-stories">
        Our stories
      </h2>
      <ul className="stories" aria-labelledby="our-stories">
        {children}
      </ul>
    </section>
  );
}

function StoriesArticle({ children, ...rest }) {
  return (
    <li className="stories__item">
      <Article {...rest}>{children}</Article>
    </li>
  );
}

Stories.Article = StoriesArticle;

export default Stories;
