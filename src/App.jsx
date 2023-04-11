import { BrowserRouter } from 'react-router-dom';
import SuperHeader from './components/SuperHeader';
import Section from './components/Section';
import Image from './components/Image';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SuperHeader />
        <Section
          hasDecoration
          image={
            <Image
              pageName="home"
              imageName="create-and-share"
              alt="A photographer standing on a bridge looking at a lake with mountains in the background"
            />
          }
          button={
            <Button variant="light" hasIcon>
              Get an invite
            </Button>
          }
        >
          <h1 className="heading-large">
            Create and share your photo stories.
          </h1>
          <p className="main-text">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
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
          button={
            <Button variant="dark" hasIcon>
              View the stories
            </Button>
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
          button={
            <Button variant="dark" hasIcon>
              View the stories
            </Button>
          }
        >
          <h2 className="heading-large">Designed for everyone</h2>
          <p className="main-text">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is desigbed for photographers of all levels,
            brands, businesses you name it.
          </p>
        </Section>
      </BrowserRouter>
    </div>
  );
}

export default App;
