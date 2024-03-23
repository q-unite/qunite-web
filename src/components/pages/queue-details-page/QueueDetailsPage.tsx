import { Flex } from "@/components/common/ui";
import Header from "./components/header";
import Main from "./components/main";

import QueueProvider from "@/hooks/use-queue/use-queue-context";

const QueueDetailsPage = (): JSX.Element => {
  return (
    <QueueProvider>
      <Flex style={{ gap: "20px" }}>
        <Header />
        <Main />
      </Flex>
    </QueueProvider>
  );
};

export default QueueDetailsPage;
