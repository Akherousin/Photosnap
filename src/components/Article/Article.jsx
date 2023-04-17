import Button from '../Button';
import styles from './Article.module.scss';

function Article({ image, children }) {
  return (
    <article className={styles.article}>
      {image}
      <div className={styles.article__content}>
        {children}
        <Button variant="light" hasIcon>
          Read Story
        </Button>
      </div>
    </article>
  );
}

export default Article;
