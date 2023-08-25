import { useParams } from "react-router-dom";
import { Header } from "../components/QueueDetails";
import { Flex, Htag } from "../components/UI";
import { useGetQueue } from "../hooks";
import useMyQueuesStore from "../stores/my-queues-store";

const QueueDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetQueue(id!);

  const isMyQueue = !!useMyQueuesStore((q) => q.myQueues).find(
    (r) => r.id === parseInt(id!)
  );

  if (!data) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <Flex>
      <Header name={data.name} isMyQueue={isMyQueue} />
    </Flex>
  );
};

export default QueueDetailsPage;
