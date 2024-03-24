import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import QueuesPage, {
  QueuesPageSkeleton,
} from "../components/pages/queues-page";

import useQueuesStore from "../stores/queues-store";
import QueueApi from "../lib/api/queue/QueueApi";

const Queues = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ["queues"],
    queryFn: () => QueueApi.getAllQueues(),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const setQueues = useQueuesStore((q) => q.setQueues);
  const queues = useQueuesStore((q) => q.queues);

  useEffect(() => {
    if (data) {
      setQueues(data);
    }
  }, [data]);

  if (isLoading) {
    return <QueuesPageSkeleton />;
  }

  return <QueuesPage queues={queues} />;
};

export default Queues;
