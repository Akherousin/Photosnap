// const QUERIES = {
//   MOBILEANDDOWN: '(max-width: 40.465rem)',
//   TABLETANDUP: '(max-width: 89.9999rem)',
//   DESKTOPANDUP: '(min-width: 90rem)',
// };

const QUERIES = {
  MOBILEANDDOWN: '(max-width: 28.75rem)',
  TABLETANDUP: '(max-width: 47.9999rem)',
  DESKTOPANDUP: '(min-width: 48rem)',
};

function Image({
  pageName,
  imageName,
  noTabletSizes,
  alt,
  pictureClassName,
  ...rest
}) {
  return (
    <picture className={pictureClassName}>
      <source
        media={QUERIES.MOBILEANDDOWN}
        type="image/avif"
        srcSet={`/assets/${pageName}/mobile/${imageName}.avif 1x, 
        /assets/${pageName}/mobile/${imageName}-2x.avif 2x`}
      />
      <source
        media={QUERIES.TABLETANDUP}
        type="image/avif"
        srcSet={`/assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}.avif 1x, 
        /assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}-2x.avif 2x
        `}
      />
      <source
        media={QUERIES.DESKTOPANDUP}
        type="image/avif"
        srcSet={`/assets/${pageName}/desktop/${imageName}.avif 1x,
        /assets/${pageName}/desktop/${imageName}-2x.avif 2x`}
      />

      <source
        media={QUERIES.MOBILEANDDOWN}
        type="image/webp"
        srcSet={`/assets/${pageName}/mobile/${imageName}.webp 1x, 
        /assets/${pageName}/mobile/${imageName}-2x.webp 2x `}
      />
      <source
        media={QUERIES.TABLETANDUP}
        type="image/webp"
        srcSet={`/assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}.webp 1x,
        /assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}-2x.webp 2x
        `}
      />
      <source
        media={QUERIES.DESKTOPANDUP}
        type="image/webp"
        srcSet={`/assets/${pageName}/desktop/${imageName}.webp 1x,
        /assets/${pageName}/desktop/${imageName}-2x.webp 2x`}
      />

      <source
        media={QUERIES.MOBILEANDDOWN}
        type="image/jpg"
        srcSet={`/assets/${pageName}/mobile/${imageName}.jpg 1x,
        /assets/${pageName}/mobile/${imageName}-2x.jpg 2x`}
      />
      <source
        media={QUERIES.TABLETANDUP}
        type="image/jpg"
        srcSet={`/assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}.jpg 1x,
        /assets/${pageName}/${
          noTabletSizes ? 'desktop' : 'tablet'
        }/${imageName}-2x.jpg 2x
        `}
      />
      <source
        media={QUERIES.DESKTOPANDUP}
        type="image/jpg"
        srcSet={`/assets/${pageName}/desktop/${imageName}.jpg 1x, 
        /assets/${pageName}/desktop/${imageName}-2x.jpg 2x`}
      />

      <img
        src={`/assets/${pageName}/desktop/${imageName}.jpg`}
        alt={alt}
        {...rest}
      />
    </picture>
  );
}

export default Image;
