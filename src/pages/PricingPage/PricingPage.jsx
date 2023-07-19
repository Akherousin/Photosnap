import Section from '../../components/Section';
import Image from '../../components/Image';
import Advertisement from '../../components/Advertisement';
import { useEffect } from 'react';
import PriceSection from '../../components/PriceSection';

function PricingPage() {
  useEffect(() => {
    document.title = 'Pricing - Photosnap';
  }, []);

  return (
    <>
      <Section
        hasDecoration
        image={
          <Image
            pageName="pricing"
            imageName="hero"
            alt="A woman's silhouette contrasts with the crimson sky, as she gazes into the camera."
          />
        }
      >
        <h1 className="heading-large">Pricing</h1>
        <p className="main-text">
          Create your stories, Photosnap is a platform for photographers and
          visual storytellers. It`&apos;`s the simple way to create and share
          your photos.
        </p>
      </Section>
      <PriceSection />
      <Advertisement />
    </>
  );
}

export default PricingPage;
