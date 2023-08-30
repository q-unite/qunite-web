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

const QueueDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetQueue(id!);
  const { data: me } = useGetMe();
  const { data: creator } = useGetCreator(parseInt(id!));
  const { data: members } = useGetQueueMembers(parseInt(id!));

  const isMyQueue = me?.username === creator?.username;
  const isInQueue = !!members?.find((m) => m.memberId === me?.id);

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
