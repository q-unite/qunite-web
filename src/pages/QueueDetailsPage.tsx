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
import { useGetMemberPositionInQueue } from "../hooks/useGetMemberPositionInQueue";

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
  const { data: placeInQueue, isLoading: isLoadingPosition } =
    useGetMemberPositionInQueue(parseInt(id!), me!.id);

  const isMyQueue = me?.username === creator?.username;

  if (
    isLoading ||
    isLoadingMembers ||
    isLoadingCreator ||
    isLoadingMe ||
    isLoadingPosition
  ) {
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
      value={{
        me,
        members,
        isMyQueue,
        id: parseInt(id!),
        isInQueue: Boolean(placeInQueue),
      }}
    >
      <Flex style={{ gap: "20px" }}>
        <Header name={data.name} />
        <Main />
      </Flex>
    </QueueDetailsContext.Provider>
  );
};

export default QueueDetailsPage;
