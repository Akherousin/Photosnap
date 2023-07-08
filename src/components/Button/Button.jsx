import styles from './Button.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

const possibleVariants = ['dark', 'light'];

const Button = forwardRef(function Button(
  { variant = 'dark', children, href, className, ...rest },
  ref
) {
  if (typeof variant !== 'string' || !possibleVariants.includes(variant)) {
    throw new Error(
      'Invalid prop: variant must be a string of either "dark" or "light"'
    );
  }

  const classes = classNames(
    className,
    styles.button,
    styles[`button--${variant}`]
  );

  return (
    <button className={classes} href={href} {...rest} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
