import styles from './Article.module.scss';

function Article({ image, children, link }) {
  return (
    <article className={styles.article}>
      {image}
      <div className={styles.article__content}>
        {children}
        {link}
      </div>
    </article>
  );
}

export default Article;
