import { useParams } from "react-router-dom";
import cn from "classnames";
import { StatusProps } from "./Status.props";
import styles from "./Status.module.css";
import { Htag } from "../../../UI";
import { useGetMemberPositionInQueue } from "../../../../hooks/useGetMemberPositionInQueue";

export const Status = ({
  me,
  className,
  ...props
}: StatusProps): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetMemberPositionInQueue(parseInt(id!), me.id);

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
