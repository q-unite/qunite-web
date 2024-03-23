import cn from "classnames";
import { useQuery } from "@tanstack/react-query";

import { Htag } from "@/components/common/ui";

import useAuth from "@/hooks/use-auth";
import useQueue from "@/hooks/use-queue";
import QueueApi from "@/lib/api/queue/QueueApi";

import { StatusProps } from "./Status.props";
import styles from "./Status.module.css";

const Status = ({ className, ...props }: StatusProps): JSX.Element => {
  const { user } = useAuth();
  const { id } = useQueue();

  const { data } = useQuery({
    queryKey: ["position", id, user.id],
    queryFn: () => QueueApi.getMemberPositionInQueue(id, user.username),
    refetchInterval: 500,
    refetchOnWindowFocus: false,
    retry: false,
  });

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

export default Status;
