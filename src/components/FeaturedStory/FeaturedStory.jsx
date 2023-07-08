import StyledLink from '../StyledLink';
import Image from '../Image';
import styles from './FeaturedStory.module.scss';

function FeaturedStory() {
  return (
    <section aria-labelledby="featured-story" className={styles.story}>
      <Image
        pageName="stories"
        imageName="moon-of-appalacia"
        alt="Appalacia mountains"
      />
      <div className={styles.story__content}>
        <h1 id="featured-story" className="heading-xsmall">
          Last Month&apos;s Featured Story
        </h1>
        <h2 className="heading-large">Hazy full moon of Appalachia</h2>
        <span>
          <time>March 2nd 2020</time>
          <p className={styles.story__author}>by John Appleseed</p>
        </span>
        <p className={`${styles.story__description} main-text`}>
          The dissected plateu area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </p>
        <StyledLink variant="light" href="#">
          Read the story{' '}
          <span className="visually-hidden">Hazy full moon of Appalachia.</span>
        </StyledLink>
      </div>
    </section>
  );
}

export default FeaturedStory;
