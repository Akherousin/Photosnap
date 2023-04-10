import Button from '../Button';

import './Hero.scss';

function Hero({ image, hasButton, children }) {
  return (
    <section
      className="hero"
      style={{
        '--max-hero-height': hasButton ? 'calc(650rem/16)' : 'calc(610rem/16)',
      }}
    >
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
