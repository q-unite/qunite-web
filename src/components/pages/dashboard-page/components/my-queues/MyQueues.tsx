import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Flex, Htag } from "@/components/common/ui";
import Header from "./components/header";
import Subheader from "../subheader";
import MyQueuesSkeleton from "./components/skeleton";
import QueuesList from "./components/queues-list";

import useAuth from "@/hooks/use-auth";
import UserApi from "@/lib/api/users/UserApi";
import useMyQueuesStore from "@/stores/my-queues-store";
import { Queue } from "@/types/queue";

import styles from "./MyQueues.module.css";

const MyQueues = (): JSX.Element => {
  const { user } = useAuth();

  const setMyQueues = useMyQueuesStore((q) => q.setMyQueues);
  const queues = useMyQueuesStore((q) => q.myQueues);

  const { data, isLoading, refetch, isFetching } = useQuery<Queue[]>({
    queryKey: ["my-queues", user.id],
    queryFn: () => UserApi.getCreatedByUserQueues(user.id),
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    void refetch();
    if (data) setMyQueues(data);
  }, [refetch, data, setMyQueues]);

  const [isVisible, setIsVisible] = useState(true);

  if (!queues) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <Flex className={styles.myQueues}>
      <Header />
      <Subheader
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        amount={queues.length}
      />
      {isLoading || isFetching ? (
        <MyQueuesSkeleton />
      ) : (
        <QueuesList isVisible={isVisible} myQueues={queues} />
      )}
    </Flex>
  );
};

export default MyQueues;
