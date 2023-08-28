import { useState } from "react";
import styles from "./Header.module.css";
import { Button, Flex, Htag } from "../../UI";
import { enrolleMeHandller } from "../handlers";
import { HeaderProps } from "./Header.props";
import { DeleteQueueModal } from "../../DeleteQueueModal";
import { handleModalOpen } from "../../../handlers/handleModalOpen";

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
          <div className={styles.buttons}>
            <Button appearance="danger" icon="pencil">
              Managers
            </Button>
            <Button
              appearance="red"
              icon="trash"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handleModalOpen(event, setIsShown)
              }
            />
          </div>
        ) : (
          !isInQueue && (
            <Button
              appearance="success"
              icon="plus"
              onClick={() => enrolleMeHandller(id)}
            >
              Enroll me
            </Button>
          )
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
