import { useEffect } from "react";
import { useGetMyQueues } from "../../hooks";
import useAuth from "../../hooks/use-auth";
import useMyQueuesStore from "../../stores/my-queues-store";
import MyQueues from "../MyQueues/MyQueues";
import { Flex } from "../common/ui";

const DashboardPage = (): JSX.Element => {
  const { user } = useAuth();
  const { data: myQueues } = useGetMyQueues(user.id);

  const setMyQueues = useMyQueuesStore((q) => q.setMyQueues);
  const queues = useMyQueuesStore((q) => q.myQueues);

  useEffect(() => {
    if (myQueues) {
      setMyQueues(myQueues);
    }
  }, [setMyQueues, myQueues]);

  return (
    <Flex>
      <MyQueues myQueues={queues} />
    </Flex>
  );
};

export default DashboardPage;
