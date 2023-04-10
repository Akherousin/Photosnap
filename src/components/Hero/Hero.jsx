import Button from '../Button';

import './Hero.scss';

function Hero({ image, hasButton, children }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="wrapper--decoration">
          {children}
          {hasButton && (
            <Button variant="light" hasIcon>
              Get an invite
            </Button>
          )}
        </div>
      </div>
      {image}
    </section>
  );
}

export default Hero;
