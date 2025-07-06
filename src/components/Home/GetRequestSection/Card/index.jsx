import { useRef } from "react";
import styles from "./Card.module.scss";
import Tooltip from "~/components/common/Tooltip";
import placeHolderImage from "~/assets/photo-cover.svg?w=70&h=70";

function Card({ image, name, position, email, phone }) {
  const imgRef = useRef(null);
  const displayPhone = (text) => {
    let first, remaining;
    if (text.startsWith("+")) {
      first = text.slice(0, 3);
      remaining = text.slice(3, text.length);
    } else {
      first = "+" + text.slice(0, 2);
      remaining = text.slice(2, text.length);
    }
    let second = remaining.slice(0, 3);
    let third = text.slice(3, 6);
    let fourth = text.slice(6, 8);
    let fifth = text.slice(8, 10);

    return `${first} (${second}) ${third} ${fourth} ${fifth}`;
  };

  const handleError = () => {
    imgRef.current.src = placeHolderImage;
  };
  return (
    <div className={styles.container}>
      <img
        ref={imgRef}
        loading="lazy"
        src={image}
        className={styles.cardImage}
        alt={`${name}'s image`}
        onError={handleError}
      />
      <Tooltip content={name}>
        <p className={styles.cardText}>{name}</p>
      </Tooltip>
      <div style={{ width: "100%" }}>
        <Tooltip content={position.name}>
          <p className={styles.cardText}>{position.name}</p>
        </Tooltip>
        <Tooltip content={email}>
          <p className={styles.cardText}>{email}</p>
        </Tooltip>

        {/* Tooltip not required as phone will always be same width */}
        <p>{displayPhone(phone)}</p>
      </div>
    </div>
  );
}

export default Card;
