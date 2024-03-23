import { useContext } from "react";
import styles from "./Header.module.css";
import { Flex, Htag } from "../../UI";
import { HeaderProps } from "./Header.props";
import { AddminButtons, UserButtons } from "../components";
import { QueueDetailsContext } from "../../../context/QueueDetailsContext";

export const Header = ({ name }: HeaderProps): JSX.Element => {
  const data = useContext(QueueDetailsContext);

  return (
    <Flex direction="row" className={styles.header}>
      <Htag tag="h1" className={styles.name}>
        {name}
      </Htag>

      {data?.isMyQueue ? (
        <AddminButtons id={data!.id} />
      ) : (
        <UserButtons id={data!.id} isInQueue={data!.isInQueue} />
      )}
    </Flex>
  );
};
