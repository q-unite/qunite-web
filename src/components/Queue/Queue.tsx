import cn from "classnames";
import { QueueProps } from "./QueueProps.props";
import { Htag } from "../UI";
import styles from "./Queue.module.css";

export const Queue = ({
  className,
  name,
  ...props
}: QueueProps): JSX.Element => {
  return (
    <section className={cn(className, styles.queue)} {...props}>
      <Htag tag="h2">{name}</Htag>
    </section>
  );
};
