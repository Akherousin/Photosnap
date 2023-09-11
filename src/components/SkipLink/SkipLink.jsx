import StyledLink from '../StyledLink';
import styles from './SkipLink.module.scss';

function SkipLink({ children, ...rest }) {
  return (
    <StyledLink className={styles.skipLink} noClickHelper {...rest}>
      {children}
    </StyledLink>
  );
}

export default SkipLink;
