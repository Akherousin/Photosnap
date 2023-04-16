import classNames from 'classnames';

import './Section.scss';
const possibleVariants = ['dark', 'light'];

function Section({
  image,
  button,
  variant = 'dark',
  isReversed,
  hasDecoration,
  children,
}) {
  if (typeof variant !== 'string' || !possibleVariants.includes(variant)) {
    throw new Error(
      'Invalid prop: variant must be a string of either "dark" or "light"'
    );
  }

  const sectionClasses = classNames('section', `section--${variant}`, {
    'section--reversed': isReversed,
  });

  return (
    <section className={sectionClasses}>
      <div className="section__content">
        <div className="decoration__wrapper">
          {hasDecoration && <div className="decoration" aria-hidden={true} />}
          {children}
          {button}
        </div>
      </div>
      {image}
    </section>
  );
}

export default Section;
