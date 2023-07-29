import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './StyledLink.module.scss';

const possibleVariants = ['dark', 'light'];

const StyledLink = forwardRef(function StyledLink(
  { variant = 'dark', children, href, className, noClickHelper, ...rest },
  ref
) {
  if (typeof variant !== 'string' || !possibleVariants.includes(variant)) {
    throw new Error(
      'Invalid prop: variant must be a string of either "dark" or "light"'
    );
  }

  const classes = classNames(
    className,
    styles.link,
    styles[`link--${variant}`],
    { 'click-target-helper': !noClickHelper }
  );

  return (
    <a className={classes} href={href} {...rest} ref={ref}>
      {children}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
        aria-hidden="true"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </a>
  );
});

export default StyledLink;
