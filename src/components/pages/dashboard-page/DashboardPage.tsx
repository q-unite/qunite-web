import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { Flex } from "../../common/ui";
import MyQueues from "./components/my-queues";

import useAuth from "../../../hooks/use-auth";
import UserApi from "../../../lib/api/users/UserApi";
import useMyQueuesStore from "../../../stores/my-queues-store";

import { Queue } from "../../../types/queue";

const DashboardPage = (): JSX.Element => {
  const { user } = useAuth();

  const setMyQueues = useMyQueuesStore((q) => q.setMyQueues);
  const queues = useMyQueuesStore((q) => q.myQueues);

  const { data, isLoading, refetch, isFetching } = useQuery<Queue[]>({
    queryKey: ["my-queues", user.id],
    queryFn: () => {
      const queues = UserApi.getCreatedByUserQueues(user.id);
      queues.then((res) => setMyQueues(res));
      return queues;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    void refetch();
  }, [queues, refetch, data]);

  return (
    <Flex>
      <MyQueues myQueues={queues} />
    </Flex>
  );
};

export default DashboardPage;
