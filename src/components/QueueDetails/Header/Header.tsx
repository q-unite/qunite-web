import { useContext } from "react";
import styles from "./Header.module.css";
import { Flex, Htag } from "../../common/ui";
import { HeaderProps } from "./Header.props";
import { AdminButtons, UserButtons } from "../components";
import { QueueDetailsContext } from "../../../context/QueueDetailsContext";

export const Header = ({ name }: HeaderProps): JSX.Element => {
  const { id, isManager, isInQueue, isMyQueue } =
    useContext(QueueDetailsContext);

  return (
    <Flex direction="row" className={styles.header}>
      <Htag tag="h1" className={styles.name}>
        {name}
      </Htag>

      {isMyQueue ? (
        <AdminButtons id={id} />
      ) : (
        !isManager && <UserButtons id={id} isInQueue={isInQueue} />
      )}
    </Flex>
  );
};
