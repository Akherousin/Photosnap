import Button from '../Button';
import styles from './PriceCard.module.scss';
import classNames from 'classnames';

function PriceCard({ title, desc, price, recommended }) {
  const classes = classNames(styles.card, {
    [styles.recommended]: recommended,
  });

  return (
    <article className={classes}>
      <header>
        <h2 className="heading-medium">{title}</h2>
        <p className="main-text">{desc}</p>
      </header>
      <p>
        <span className="heading-large">${price}</span>
        <span className="main-text">per month</span>
      </p>
      <Button variant={recommended ? 'light' : 'dark'}>
        Pick Plan <span className="visually-hidden">{title}</span>
      </Button>
    </article>
  );
}

export default PriceCard;
