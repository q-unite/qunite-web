import { Flex } from "../../common/ui";
import MyQueues from "./components/my-queues";

const DashboardPage = (): JSX.Element => {
  return (
    <Flex>
      <MyQueues />
    </Flex>
  );
};

export default DashboardPage;
