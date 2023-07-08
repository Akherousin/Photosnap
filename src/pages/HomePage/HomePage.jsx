import Section from '../../components/Section';

import Stories from '../../components/Stories';
import Image from '../../components/Image';
import Features from '../../components/Features';

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
];

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

      <Features>
        <Features.Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
              <path d="M31.195 32.674c0-.654-.529-1.183-1.183-1.183H4.88c-.653 0-1.183.53-1.183 1.183v31.195c0 .653.53 1.182 1.183 1.182h25.133c.654 0 1.183-.53 1.183-1.182V32.674zM28.83 62.686H6.062v-28.83H28.83v28.83zm-10.194 3.4h-2.37a1.182 1.182 0 100 2.366h2.37a1.183 1.183 0 000-2.366z" />
              <path d="M68.33 0H52.298C50.32 0 48.64 1.545 48.64 3.523v6.235H12.292a6.694 6.694 0 00-6.674 6.696v11.34h-.724C2.168 27.795 0 30.063 0 32.792v34.168a4.864 4.864 0 004.897 4.893h26.086a3.91 3.91 0 002.835-1.183c.743-.765 1.221-1.737 1.073-2.798v-5.777h27.576a6.736 6.736 0 006.724-6.696V51.17a1.23 1.23 0 00-1.223-1.198h-1.734V38.44h2.095c1.978 0 3.523-1.678 3.523-3.656V3.523A3.483 3.483 0 0068.33 0zM51.005 7.688h18.48V28.83h-18.48V7.688zM52.3 2.366h16.03a1.12 1.12 0 011.158 1.157v1.8h-18.48v-1.8c0-.673.618-1.157 1.292-1.157zM7.984 16.454a4.326 4.326 0 014.308-4.33h36.349v3.4H12.22c-.654 0-1.132.594-1.132 1.247v11.024H7.984V16.454zm24.172 52.57c-.31.309-.735.477-1.173.463H4.9a2.5 2.5 0 01-2.536-2.532v-34.16c0-1.43 1.106-2.635 2.532-2.635h25.101c1.43 0 2.529 1.205 2.529 2.63v35.1c0 .011.036.007.036.02.026.411-.122.815-.407 1.113zm-2.154-41.23H13.454V17.89H48.64v16.894a3.712 3.712 0 003.658 3.656h6.1v11.532H43.995c-.33.003-.646.144-.87.389l-1.116 1.194a4.312 4.312 0 01-3.175 1.374h-3.944v-20.14c0-2.726-2.16-4.993-4.89-4.993zm36.823 27.604a4.368 4.368 0 01-4.358 4.331H34.891v-4.435h3.944a6.689 6.689 0 004.915-2.14l.765-.817h22.31v3.061zm-2.956-5.427h-3.105V38.44h3.105v11.532zm4.46-13.897H52.3a1.347 1.347 0 01-1.293-1.291v-3.588h18.48v3.588c0 .674-.483 1.29-1.157 1.29z" />
              <path d="M61.947 32.23h-3.105a1.183 1.183 0 000 2.365h3.105a1.182 1.182 0 100-2.365z" />
            </svg>
          }
        >
          <h3 className="heading-small">100% responsive</h3>
          <p className="main-text">
            No matter chich the device you&apos;re on, our site is fully
            responsive and storeis look beautiful on any screen.
          </p>
        </Features.Card>

        <Features.Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="36">
              <path d="M71.087 19.105a1.056 1.056 0 00-1.19.904 15.715 15.715 0 01-5.2 9.667 15.714 15.714 0 01-10.384 3.914c-2.082 0-4.104-.4-6.01-1.189a1.15 1.15 0 00-.102-.036c-.022-.006-2.272-.71-5.621-3.368a1.056 1.056 0 00-1.313 1.654c3.436 2.728 5.85 3.584 6.271 3.72 2.15.883 4.43 1.331 6.775 1.331 4.34 0 8.523-1.577 11.779-4.44a17.827 17.827 0 005.898-10.967 1.056 1.056 0 00-.903-1.19z" />
              <path d="M45.67 25.17c2.242 1.997 5.03 4.04 8.713 4.04h.004c6.256-.003 11.346-5.095 11.346-11.35 0-6.259-5.092-11.35-11.35-11.35-4.315 0-7.257 2.505-9.337 4.688-3.044 3.194-9.947 11.385-10.198 11.702-6.619 8.377-10.55 9.385-10.765 9.435a.8.8 0 00-.23.066 15.63 15.63 0 01-5.351 1.175l-.67.014A15.622 15.622 0 016.679 28.94a15.624 15.624 0 01-4.566-11.2c.03-4.189 1.705-8.126 4.715-11.085 2.975-2.923 6.88-4.527 11.015-4.527h.16a15.65 15.65 0 015.664 1.113c.112.044.223.088.335.13.55.206 5.395 2.163 10.85 9.087 0 0-2.344 2.862-2.886 3.505a79.573 79.573 0 00-5.482-5.414c-2.24-1.998-5.028-4.04-8.712-4.04h-.004c-.376 0-.757.018-1.13.055a1.056 1.056 0 00.209 2.102c.304-.03.614-.046.922-.046h.004c1.67 0 3.843.418 7.306 3.505a78.432 78.432 0 015.503 5.456 161.824 161.824 0 01-5.001 5.481c-2.659 2.79-5.067 4.034-7.809 4.034-5.093 0-9.237-4.144-9.237-9.238a9.23 9.23 0 014.12-7.693 1.056 1.056 0 10-1.172-1.757 11.339 11.339 0 00-5.06 9.45c0 6.259 5.091 11.35 11.35 11.35 4.315 0 7.256-2.505 9.336-4.688 3.044-3.194 10.386-11.94 10.386-11.94.005-.005.01-.01.013-.016 6.498-8.144 10.351-9.132 10.564-9.181a.796.796 0 00.23-.066c1.7-.704 3.501-1.1 5.352-1.176l.669-.013a15.73 15.73 0 0115.53 13.274 1.056 1.056 0 002.086-.327A17.846 17.846 0 0054.313.016h-.022L53.6.032h-.022a17.74 17.74 0 00-5.987 1.296c-.883.196-4.895 1.49-11.366 9.465-5.567-6.93-10.51-9.034-11.483-9.398a14.312 14.312 0 01-.293-.113A17.752 17.752 0 0018.023.018c-4.761-.05-9.26 1.775-12.675 5.132C1.934 8.506.035 12.972 0 17.726A17.725 17.725 0 005.18 30.43a17.72 17.72 0 0012.662 5.272h.022l.691-.014h.022a17.739 17.739 0 005.987-1.296c.872-.194 4.788-1.456 11.104-9.144.603.69 1.216 1.354 1.828 1.98a1.056 1.056 0 001.511-1.475 47.766 47.766 0 01-1.984-2.164c.554-.67 2.624-3.191 3.166-3.835a79.567 79.567 0 005.482 5.415zm.905-12.515c2.658-2.79 5.066-4.033 7.808-4.033 5.093 0 9.238 4.144 9.238 9.238 0 5.091-4.143 9.235-9.235 9.237h-.003c-1.67 0-3.844-.417-7.307-3.504a78.35 78.35 0 01-5.503-5.457 162.117 162.117 0 015.002-5.48z" />
            </svg>
          }
        >
          <h3 className="heading-small">no photo upload limit</h3>
          <p className="main-text">
            Our tool has no limits on uploads or bandwith. Freely upload in bulk
            and share all of your stories in one go.
          </p>
        </Features.Card>

        <Features.Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="72">
              <path d="M31.195 32.674c0-.654-.529-1.183-1.183-1.183H4.88c-.653 0-1.183.53-1.183 1.183v31.195c0 .653.53 1.182 1.183 1.182h25.133c.654 0 1.183-.53 1.183-1.182V32.674zM28.83 62.686H6.062v-28.83H28.83v28.83zm-10.194 3.4h-2.37a1.182 1.182 0 100 2.366h2.37a1.183 1.183 0 000-2.366z" />
              <path d="M68.33 0H52.298C50.32 0 48.64 1.545 48.64 3.523v6.235H12.292a6.694 6.694 0 00-6.674 6.696v11.34h-.724C2.168 27.795 0 30.063 0 32.792v34.168a4.864 4.864 0 004.897 4.893h26.086a3.91 3.91 0 002.835-1.183c.743-.765 1.221-1.737 1.073-2.798v-5.777h27.576a6.736 6.736 0 006.724-6.696V51.17a1.23 1.23 0 00-1.223-1.198h-1.734V38.44h2.095c1.978 0 3.523-1.678 3.523-3.656V3.523A3.483 3.483 0 0068.33 0zM51.005 7.688h18.48V28.83h-18.48V7.688zM52.3 2.366h16.03a1.12 1.12 0 011.158 1.157v1.8h-18.48v-1.8c0-.673.618-1.157 1.292-1.157zM7.984 16.454a4.326 4.326 0 014.308-4.33h36.349v3.4H12.22c-.654 0-1.132.594-1.132 1.247v11.024H7.984V16.454zm24.172 52.57c-.31.309-.735.477-1.173.463H4.9a2.5 2.5 0 01-2.536-2.532v-34.16c0-1.43 1.106-2.635 2.532-2.635h25.101c1.43 0 2.529 1.205 2.529 2.63v35.1c0 .011.036.007.036.02.026.411-.122.815-.407 1.113zm-2.154-41.23H13.454V17.89H48.64v16.894a3.712 3.712 0 003.658 3.656h6.1v11.532H43.995c-.33.003-.646.144-.87.389l-1.116 1.194a4.312 4.312 0 01-3.175 1.374h-3.944v-20.14c0-2.726-2.16-4.993-4.89-4.993zm36.823 27.604a4.368 4.368 0 01-4.358 4.331H34.891v-4.435h3.944a6.689 6.689 0 004.915-2.14l.765-.817h22.31v3.061zm-2.956-5.427h-3.105V38.44h3.105v11.532zm4.46-13.897H52.3a1.347 1.347 0 01-1.293-1.291v-3.588h18.48v3.588c0 .674-.483 1.29-1.157 1.29z" />
              <path d="M61.947 32.23h-3.105a1.183 1.183 0 000 2.365h3.105a1.182 1.182 0 100-2.365z" />
            </svg>
          }
        >
          <h3 className="heading-small">Available to embed</h3>
          <p className="main-text">
            Embed tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </Features.Card>
      </Features>
    </>
  );
}

export default HomePage;
