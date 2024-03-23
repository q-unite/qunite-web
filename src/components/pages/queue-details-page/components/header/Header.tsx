import { Flex, Htag } from "@/components/common/ui";
import AdminButtons from "./components/admin-buttons";
import UserButtons from "./components/user-buttons";

import useQueue from "@/hooks/use-queue";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const { queue, isMyQueue, isManager } = useQueue();

  return (
    <Flex direction="row" className={styles.header}>
      <Htag tag="h1" className={styles.name}>
        {queue.name}
      </Htag>

      {isMyQueue ? <AdminButtons /> : !isManager && <UserButtons />}
    </Flex>
  );
};

export default Header;
