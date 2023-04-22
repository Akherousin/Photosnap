import styles from './Button.module.scss';
import classNames from 'classnames';

const possibleVariants = ['dark', 'light'];

function Button({
  variant = 'dark',
  hasIcon = false,
  children,
  href,
  className,
  ...rest
}) {
  if (typeof variant !== 'string' || !possibleVariants.includes(variant)) {
    throw new Error(
      'Invalid prop: variant must be a string of either "dark" or "light"'
    );
  }

  if (typeof hasIcon !== 'boolean') {
    throw new Error('Invalid prop: hasIcon must be a boolean');
  }

  const Tag = href ? 'a' : 'button';

  const classes = classNames(
    className,
    styles.button,
    styles[`button--${variant}`],
    {
      [styles['button--icon']]: hasIcon || href,
    }
  );

  return (
    <Tag className={classes} href={href} {...rest}>
      <>
        {children}

        {hasIcon || href ? (
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
        ) : null}
      </>
    </Tag>
  );
}

export default Button;
