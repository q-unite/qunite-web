import cn from "classnames";
import { StatusProps } from "./Status.props";
import styles from "./Status.module.css";
import { Htag } from "../../../UI";
import { useGetMemberPositionInQueue } from "../../../../hooks";
import { useContext } from "react";
import { QueueDetailsContext } from "../../../../context/QueueDetailsContext";

export const Status = ({ className, ...props }: StatusProps): JSX.Element => {
  const context = useContext(QueueDetailsContext);
  const { data } = useGetMemberPositionInQueue(context.id, context.me!.id);

  return (
    <section
      className={cn(className, styles.status, {
        [styles.current]: data === 1,
      })}
      {...props}
    >
      {data ? (
        <>
          <Htag tag="h1">Your place in queue:</Htag>
          <Htag tag="h1" className={styles.number}>
            {data}
          </Htag>
        </>
      ) : (
        <Htag tag="h1" color="primary">
          You are not in the queue
        </Htag>
      )}
    </section>
  );
};
