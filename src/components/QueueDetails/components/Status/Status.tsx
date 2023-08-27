import cn from "classnames";
import { StatusProps } from "./Status.props";
import styles from "./Status.module.css";
import { Htag, P } from "../../../UI";

export const Status = ({ className, ...props }: StatusProps): JSX.Element => {
  return (
    <section className={cn(className, styles.status)} {...props}>
      <Htag tag="h1">Your place in queue:</Htag>
      <Htag tag="h1" className={styles.number}>
        0
      </Htag>
      <P color="gray">Waiting time: </P>
    </section>
  );
};
