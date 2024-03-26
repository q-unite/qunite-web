import cn from "classnames";
import styles from "./Text.module.css";
import { TextProps } from "./Text.props";

const Text = ({ size = "m", className, ...props }: TextProps): JSX.Element => {
  return (
    <div className={cn(styles.text, className, styles[size])} {...props} />
  );
};

export default Text;
