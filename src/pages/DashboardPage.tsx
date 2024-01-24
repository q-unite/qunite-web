import { useEffect } from "react";
import MyQueues from "../components/MyQueues/MyQueues";
import { Flex, Htag } from "../components/common/ui";
import { useGetMe, useGetMyQueues } from "../hooks";
import useMyQueuesStore from "../stores/my-queues-store";

const DashboardPage = (): JSX.Element => {
  const { data } = useGetMe();
  const { data: myQueues } = useGetMyQueues(data!.id.toString());

  const setMyQueues = useMyQueuesStore((q) => q.setMyQueues);
  const queues = useMyQueuesStore((q) => q.myQueues);

  useEffect(() => {
    if (myQueues) {
      setMyQueues(myQueues);
    }
  }, [setMyQueues, myQueues]);

  if (!data) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <Flex>
      <MyQueues myQueues={queues} />
    </Flex>
  );
};

export default DashboardPage;
