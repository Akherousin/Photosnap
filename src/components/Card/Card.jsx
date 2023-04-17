import styles from './Card.module.scss';

function Card({ icon, children }) {
  return (
    <article className={styles.article}>
      {icon}
      {children}
    </article>
  );
}

export default Card;
