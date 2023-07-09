import classNames from 'classnames';
import styles from './Section.module.scss';

const possibleVariants = ['dark', 'light'];

function Section({
  image,
  link,
  variant = 'dark',
  isReversed,
  hasDecoration,
  children,
  ...rest
}) {
  if (typeof variant !== 'string' || !possibleVariants.includes(variant)) {
    throw new Error(
      'Invalid prop: variant must be a string of either "dark" or "light"'
    );
  }

  const sectionClasses = classNames(
    styles.section,
    styles[`section--${variant}`],
    {
      [styles['section--reversed']]: isReversed,
    }
  );

  return (
    <section className={sectionClasses} {...rest}>
      <div className={styles.section__content}>
        <div className={styles.decoration__wrapper}>
          {hasDecoration && <div className={styles.decoration} />}
          {children}
          {link}
        </div>
      </div>
      {image}
    </section>
  );
}

export default Section;
