import Section from '../../components/Section';
import { storiesList } from '../../DATA';
import Stories from '../../components/Stories';
import Image from '../../components/Image';
import { featuresList } from '../../DATA';
import Features from '../../components/Features';

import StyledLink from '../../components/StyledLink';
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    document.title = 'Homepage - Photosnap';
  });

  return (
    <>
      <Section
        hasDecoration
        image={
          <Image
            pageName="home"
            imageName="create-and-share"
            alt="A photographer standing on a bridge looking at a lake with mountains in the background"
          />
        }
        link={
          <StyledLink variant="light" href="#">
            Get an invite
          </StyledLink>
        }
      >
        <h1 className="heading-large">Create and share your photo stories.</h1>
        <p className="main-text">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
      </Section>

      <Section
        variant="light"
        isReversed
        image={
          <Image
            pageName="home"
            imageName="beautiful-stories"
            alt="A photographer standing on a bridge looking at a lake with mountains in the background"
          />
        }
        link={
          <StyledLink variant="dark" href="#">
            View the stories
          </StyledLink>
        }
      >
        <h2 className="heading-large">Beautiful stories every&nbsp;time</h2>
        <p className="main-text">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
      </Section>

      <Section
        variant="light"
        image={
          <Image
            pageName="home"
            imageName="designed-for-everyone"
            alt="A photographer standing on a bridge looking at a lake with mountains in the background"
          />
        }
        link={
          <StyledLink variant="dark" href="#">
            View the stories
          </StyledLink>
        }
      >
        <h2 className="heading-large">Designed for everyone</h2>
        <p className="main-text">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is desigbed for photographers of all levels,
          brands, businesses you name it.
        </p>
      </Section>

      <Stories>
        {storiesList.slice(0, 4).map(({ title, image, author, date }) => (
          <Stories.Article
            key={title}
            image={
              <Image
                pageName="stories"
                imageName={image}
                alt=""
                noTabletSizes
              />
            }
            link={
              <StyledLink variant="light" href="#">
                Read More{' '}
                <span className="visually-hidden">about {title}.</span>
              </StyledLink>
            }
          >
            <time>{date}</time>
            <h3>{title}</h3>
            <p>by {author}</p>
          </Stories.Article>
        ))}
      </Stories>

      <Features>
        {featuresList.slice(0, 3).map(({ icon, title, desc }) => (
          <Features.Card key={title} icon={icon}>
            <h3 className="heading-small">{title}</h3>
            <p className="main-text">{desc}</p>
          </Features.Card>
        ))}
      </Features>
    </>
  );
}

export default HomePage;
