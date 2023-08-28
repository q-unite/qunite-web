import { useState } from "react";
import styles from "./Header.module.css";
import { Flex, Htag } from "../../UI";
import { HeaderProps } from "./Header.props";
import { DeleteQueueModal } from "../../DeleteQueueModal";
import { AddminButtons, UserButtons } from "../components";

export const Header = ({
  name,
  isMyQueue,
  id,
  isInQueue,
}: HeaderProps): JSX.Element => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Flex direction="row" className={styles.header}>
        <Htag tag="h1" className={styles.name}>
          {name}
        </Htag>

        {isMyQueue ? (
          <AddminButtons setIsShown={setIsShown} />
        ) : (
          <UserButtons id={id} isInQueue={isInQueue} />
        )}
      </Flex>

      <DeleteQueueModal
        isShown={isShown}
        setIsShown={setIsShown}
        queueId={id}
      />
    </>
  );
};
