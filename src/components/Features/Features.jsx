import './Features.scss';
import Card from '../Card';

function Features({ children }) {
  return (
    <section className="features">
      <h2 className="visually-hidden" id="our-features">
        Our features
      </h2>
      <ul aria-labelledby="our-features">{children}</ul>
    </section>
  );
}

function FeaturesCard({ icon, children }) {
  return (
    <li>
      <Card icon={icon}>{children}</Card>
    </li>
  );
}

Features.Card = FeaturesCard;

export default Features;
