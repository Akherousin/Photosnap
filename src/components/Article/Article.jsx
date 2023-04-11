import Button from '../Button';
import './Article.scss';

function Article({ image, children }) {
  return (
    <article className="article">
      {image}
      <div className="article__content">
        {children}
        <Button variant="light" hasIcon>
          Read Story
        </Button>
      </div>
    </article>
  );
}

export default Article;
