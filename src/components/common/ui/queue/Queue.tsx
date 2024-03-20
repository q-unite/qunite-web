import cn from "classnames";
import { QueueProps } from "./QueueProps.props";
import { Htag, P } from "..";
import styles from "./Queue.module.css";
import { useGetMembersAmountOfQueue } from "../../../../hooks";

const Queue = ({ className, name, id, ...props }: QueueProps): JSX.Element => {
  const { data } = useGetMembersAmountOfQueue(id!);

  return (
    <section className={cn(className, styles.queue)} {...props}>
      <Htag tag="h2">{name}</Htag>
      <P>Members: {data}</P>
    </section>
  );
};

export default Queue;
