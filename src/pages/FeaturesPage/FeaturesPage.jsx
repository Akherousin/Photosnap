import Section from '../../components/Section';
import Image from '../../components/Image';
import Features from '../../components/Features/Features';
import { featuresList } from '../../DATA';
import { useEffect } from 'react';
import Advertisement from '../../components/Advertisement';

function FeaturesPage() {
  useEffect(() => {
    document.title = 'Features - Photosnap';
  }, []);

  return (
    <>
      <Section
        hasDecoration
        image={<Image pageName="features" imageName="hero" />}
      >
        <h1 className="heading-large">Features</h1>
        <p className="main-text">
          We make sure all of features are designed to be loved by every
          aspiring and even professional photographers who wanted to share their
          stories.
        </p>
      </Section>
      <Features>
        {featuresList.map(({ title, desc, icon }) => (
          <Features.Card key={title} icon={<img src={icon} alt="" />}>
            <h3 className="heading-small">{title}</h3>
            <p className="main-text">{desc}</p>
          </Features.Card>
        ))}
      </Features>
      <Advertisement />
    </>
  );
}

export default FeaturesPage;
