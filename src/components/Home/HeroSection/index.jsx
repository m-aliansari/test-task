import styles from "./HeroSection.module.scss";
import Button from "~/components/common/Button";
import hero500 from "~/assets/pexels-alexandr-podvalny-1227513.jpeg?w=500&format=webp"
import hero800 from "~/assets/pexels-alexandr-podvalny-1227513.jpeg?w=800&format=webp"
import hero1100 from "~/assets/pexels-alexandr-podvalny-1227513.jpeg?w=1100&format=webp"

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImageContainer}>
        <img
          fetchPriority="high"
          srcSet={`
            ${hero500} 360w,
            ${hero800} 500w, 
            ${hero1100} 900w 
          `}
          alt="Hero image"
        />
        <div className={styles.heroImageContentContainer}>
          <h1 className={styles.contentHeading}>
            Test assignment for front-end developer
          </h1>
          <p className={styles.contentBody}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button text="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
