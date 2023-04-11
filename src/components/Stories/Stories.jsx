import './Stories.scss';
import Article from '../Article';

function Stories({ children }) {
  return (
    <section>
      <h1 className="visually-hidden">Our stories</h1>
      <ul className="stories">{children}</ul>
    </section>
  );
}

function StoriesArticle({ children, ...rest }) {
  return (
    <li className='stories__item'>
      <Article {...rest}>{children}</Article>
    </li>
  );
}

Stories.Article = StoriesArticle;

export default Stories;
