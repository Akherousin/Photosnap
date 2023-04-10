function Image({ pageName, imageName, alt, pictureClassName, ...rest }) {
  return (
    <picture className={pictureClassName}>
      <source
        media="(max-width: 40.465rem)"
        type="image/avif"
        srcSet={`/src/assets/${pageName}/mobile/${imageName}.avif`}
      />
      <source
        media="(max-width: 48rem)"
        type="image/avif"
        srcSet={`/src/assets/${pageName}/tablet/${imageName}.avif`}
      />
      <source
        media="(max-width: 90rem)"
        type="image/avif"
        srcSet={`/src/assets/${pageName}/desktop/${imageName}.avif`}
      />

      <source
        media="(max-width: 40.465rem)"
        type="image/webp"
        srcSet={`/src/assets/${pageName}/mobile/${imageName}.webp`}
      />
      <source
        media="(max-width: 48rem)"
        type="image/webp"
        srcSet={`/src/assets/${pageName}/tablet/${imageName}.webp`}
      />
      <source
        media="(max-width: 90rem)"
        type="image/webp"
        srcSet={`/src/assets/${pageName}/desktop/${imageName}.webp`}
      />

      <source
        media="(max-width: 40.465rem)"
        type="image/jpg"
        srcSet={`/src/assets/${pageName}/mobile/${imageName}.jpg`}
      />
      <source
        media="(max-width: 48rem)"
        type="image/jpg"
        srcSet={`/src/assets/${pageName}/tablet/${imageName}.jpg`}
      />
      <source
        media="(max-width: 90rem)"
        type="image/jpg"
        srcSet={`/src/assets/${pageName}/desktop/${imageName}.jpg`}
      />

      <img
        src={`/src/assets/${pageName}/desktop/${imageName}.jpg`}
        alt={alt}
        {...rest}
      />
    </picture>
  );
}

export default Image;
