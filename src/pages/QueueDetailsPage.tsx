import { useParams } from "react-router-dom";
import { Header, Main } from "../components/QueueDetails";
import { Flex, Htag } from "../components/UI";
import {
  useGetCreator,
  useGetMe,
  useGetQueue,
  useGetQueueMembers,
} from "../hooks";
import { QueueDetailsContext } from "../context/QueueDetailsContext";
import QueueDetailsPageSkeleton from "../components/Skeletons/SkeletonPages/QueueDetailsPageSkeleton/QueueDetailsPageSkeleton";

const QueueDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetQueue(id!);
  const { data: me, isLoading: isLoadingMe } = useGetMe();
  const { data: creator, isLoading: isLoadingCreator } = useGetCreator(
    parseInt(id!)
  );
  const { data: members, isLoading: isLoadingMembers } = useGetQueueMembers(
    parseInt(id!)
  );

  const isMyQueue = me?.username === creator?.username;
  const isInQueue = !!members?.find((m) => m.memberId === me?.id);

  if (isLoading || isLoadingMembers || isLoadingCreator || isLoadingMe) {
    return <QueueDetailsPageSkeleton />;
  }

  if (!data || !members) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <QueueDetailsContext.Provider
      value={{ me, members, isMyQueue, id: parseInt(id!), isInQueue }}
    >
      <Flex style={{ gap: "20px" }}>
        <Header name={data.name} />
        <Main />
      </Flex>
    </QueueDetailsContext.Provider>
  );
};

export default QueueDetailsPage;
