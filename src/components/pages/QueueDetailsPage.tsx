import { useParams } from "react-router-dom";
import { Header, Main } from "../QueueDetails";
import { Flex, Htag } from "../common/ui";
import {
  useGetCreator,
  useGetQueue,
  useGetQueueManagers,
  useGetQueueMembers,
} from "../../hooks";
import { QueueDetailsContext } from "../../context/QueueDetailsContext";
import QueueDetailsPageSkeleton from "../Skeletons/SkeletonPages/QueueDetailsPageSkeleton/QueueDetailsPageSkeleton";
import useAuth from "../../hooks/use-auth";

const QueueDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetQueue(id!);
  const { user } = useAuth();
  const { data: creator, isLoading: isLoadingCreator } = useGetCreator(id!);
  const { data: members, isLoading: isLoadingMembers } = useGetQueueMembers(
    id!
  );
  const { data: managers, isLoading: isLoadingManagers } = useGetQueueManagers(
    id!
  );

  const isMyQueue = user.username === creator?.username;
  const isInQueue = !!members?.find((m) => m.memberId.toString() === user.id);
  const isManager = !!managers?.find((m) => m.id === user.id);

  if (isLoading || isLoadingMembers || isLoadingCreator || isLoadingManagers) {
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
        members,
        isMyQueue,
        id: id!,
        isInQueue,
        isManager,
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
