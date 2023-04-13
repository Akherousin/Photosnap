import classNames from 'classnames';

import './Section.scss';
const possibleVariants = ['dark', 'light'];

function Section({
  image,
  button,
  variant = 'dark',
  isHero,
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
    <section
      className={sectionClasses}
      style={{
        '--max-section-height': isHero ? 'calc(650rem/16)' : 'calc(600rem/16)',
      }}
    >
      <div className="section__content">
        {hasDecoration && <div className="decoration" aria-hidden={true} />}
        <div className="wrapper">
          {children}
          {button}
          {hasDecoration && (
            <div className="decoration--top" aria-hidden={true} />
          )}
        </div>
      </div>
      {image}
    </section>
  );
}

export default Section;
