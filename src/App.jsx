import { BrowserRouter } from 'react-router-dom';
import SuperHeader from './components/SuperHeader';
import Hero from './components/Hero';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SuperHeader />
        <Hero
          image={
            <Image
              pageName="home"
              imageName="create-and-share"
              alt="A photographer standing on a bridge looking at a lake with mountains in the background"
            />
          }
          hasButton
        >
          <h1 className="heading-large">
            Create and share your photo stories.
          </h1>
          <p className="main-text">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
        </Hero>
      </BrowserRouter>
    </div>
  );
}

export default App;
