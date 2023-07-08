import FeaturedStory from '../../components/FeaturedStory';
import Stories from '../../components/Stories';
import Image from '../../components/Image';
import StyledLink from '../../components/StyledLink';
import { useEffect } from 'react';

const storiesList = [
  {
    title: 'The Mountains',
    author: 'John Appleseed',
    date: 'April 16th 2020',
    image: 'mountains',
  },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    date: 'April 14th 2020',
    image: 'cityscapes',
  },
  {
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    date: 'April 11th 2020',
    image: '18-days-voyage',
  },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    date: 'April 9th 2020',
    image: 'architecturals',
  },
  {
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
    date: ' April 7th 2020',
    image: 'world-tour',
  },
  {
    title: 'Unforeseen Corners',
    author: 'William Malcolm',
    date: ' April 3rd 2020',
    image: 'unforeseen-corners',
  },
  {
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
    date: 'March 29th 2020',
    image: 'king-on-africa',
  },
  {
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
    date: 'March 21st 2020',
    image: 'trip-to-nowhere',
  },
  {
    title: 'Rage of The Sea',
    author: 'Mohammed Abdul',
    date: 'March 19th 2020',
    image: 'rage-of-the-sea',
  },
  {
    title: 'Running Free',
    author: 'Michelle',
    date: 'March 16th 2020',
    image: 'running-free',
  },
  {
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
    date: 'March11th2020',
    image: 'behind-the-waves',
  },
  {
    title: 'Calm Waters',
    author: 'Samantha Brooke',
    date: 'March9th2020',
    image: 'calm-waters',
  },
  {
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
    date: 'March5th2020',
    image: 'milky-way',
  },
  {
    title: 'Night at The Dark Forest',
    author: 'Mohammed Abdul',
    date: 'March4th2020',
    image: 'dark-forest',
  },
  {
    title: 'Somwarpet’s Beauty',
    author: 'Michelle',
    date: 'March1st2020',
    image: 'somwarpet',
  },
  {
    title: 'Land of Dreams',
    author: 'William Malcolm',
    date: 'February25th2020',
    image: 'land-of-dreams',
  },
];

function StoriesPage() {
  useEffect(() => {
    document.title = 'Stories - Photosnap';
  });

  return (
    <>
      <FeaturedStory />

      <Stories>
        {' '}
        {storiesList.map(({ title, image, author, date }) => (
          <Stories.Article
            key={title}
            image={<Image pageName="stories" imageName={image} noTabletSizes />}
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
    </>
  );
}

export default StoriesPage;
