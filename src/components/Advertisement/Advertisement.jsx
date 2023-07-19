import StyledLink from '../StyledLink';
import styles from './Advertisement.module.scss';
import Image from '../Image/Image';

function Advertisement() {
  return (
    <div className={styles.advertisement}>
      <Image pageName="shared" imageName="bg-beta" alt="" />
      <div className={styles.advertisement__wrapper}>
        <h2 className="heading-large">
          We&apos;re in beta. Get your invite today!
        </h2>
        <StyledLink href="#" variant="light">
          Get an invite
        </StyledLink>
      </div>
    </div>
  );
}

export default Advertisement;
