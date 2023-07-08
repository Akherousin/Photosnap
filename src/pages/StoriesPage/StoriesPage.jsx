import FeaturedStory from '../../components/FeaturedStory';
import Stories from '../../components/Stories';
import Image from '../../components/Image';

function StoriesPage() {
  return (
    <>
      <FeaturedStory />

      <Stories>
        <Stories.Article
          image={
            <Image pageName="stories" imageName="mountains" noTabletSizes />
          }
        >
          <time>April 16th 2020</time>
          <h2>The Mountains</h2>
          <p>by John Appleseed</p>
        </Stories.Article>
        <Stories.Article
          image={
            <Image pageName="stories" imageName="cityscapes" noTabletSizes />
          }
        >
          <time>April 14th 2020</time>
          <h2>Sunset Cityscapes</h2>
          <p>by Benjamin Cruz</p>
        </Stories.Article>
        <Stories.Article
          image={
            <Image
              pageName="stories"
              imageName="18-days-voyage"
              noTabletSizes
            />
          }
        >
          <time>April 11th 2020</time>
          <h2>18 Days Voyage</h2>
          <p>by Alexei Borodin</p>
        </Stories.Article>
        <Stories.Article
          image={
            <Image
              pageName="stories"
              imageName="architecturals"
              noTabletSizes
            />
          }
        >
          <time>April 9th 2020</time>
          <h2>Architecturals</h2>
          <p>by Samantha Brooke</p>
        </Stories.Article>
      </Stories>
    </>
  );
}

export default StoriesPage;
