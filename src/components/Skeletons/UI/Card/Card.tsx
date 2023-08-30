import cn from "classnames";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

export const Card = ({ className, ...props }: CardProps): JSX.Element => {
  return <div className={cn(styles.card, className)} {...props} />;
};
