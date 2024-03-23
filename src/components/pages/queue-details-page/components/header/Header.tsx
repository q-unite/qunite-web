import { Flex, Htag } from "@/components/common/ui";
import { AdminButtons, UserButtons } from "../components";

import useQueue from "@/hooks/use-queue";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const { id, queue, isMyQueue, isManager, isInQueue } = useQueue();

  return (
    <Flex direction="row" className={styles.header}>
      <Htag tag="h1" className={styles.name}>
        {queue.name}
      </Htag>

      {isMyQueue ? (
        <AdminButtons id={id} />
      ) : (
        !isManager && <UserButtons id={id} isInQueue={isInQueue} />
      )}
    </Flex>
  );
};

export default Header;
