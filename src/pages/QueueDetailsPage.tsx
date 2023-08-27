import { useParams } from "react-router-dom";
import { Header, Main } from "../components/QueueDetails";
import { Flex, Htag } from "../components/UI";
import { useGetCreator, useGetMe, useGetQueue } from "../hooks";

const QueueDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetQueue(id!);
  const { data: me } = useGetMe();
  const { data: creator } = useGetCreator(parseInt(id!));

  const isMyQueue = me?.username === creator?.username;

  if (!data) {
    return (
      <Htag tag="h1" color="primary">
        Some error on server
      </Htag>
    );
  }

  return (
    <Flex style={{ gap: "20px" }}>
      <Header name={data.name} isMyQueue={isMyQueue} />
      <Main id={parseInt(id!)} />
    </Flex>
  );
};

export default QueueDetailsPage;
