import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

const HTag = ({ children, tag, color = "black" }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={`${styles.h1} ${styles[color]}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${styles.h2} ${styles[color]}`}>{children}</h2>;
    default:
      return <></>;
  }
};

export default HTag;
