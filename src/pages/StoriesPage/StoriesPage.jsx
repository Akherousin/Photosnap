import FeaturedStory from '../../components/FeaturedStory';
import { storiesList } from '../../DATA';
import Stories from '../../components/Stories';
import Image from '../../components/Image';
import StyledLink from '../../components/StyledLink';
import { useEffect } from 'react';

function StoriesPage() {
  useEffect(() => {
    document.title = 'Stories - Photosnap';
  });

  return (
    <>
      <FeaturedStory />

      <Stories>
        {storiesList.map(({ title, image, author, date }) => (
          <Stories.Article
            key={title}
            image={
              <Image
                pageName="stories"
                imageName={image}
                noTabletSizes
                alt=""
              />
            }
            link={
              <StyledLink variant="light" href="#">
                Read Story{' '}
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
    </>
  );
}

export default StoriesPage;
