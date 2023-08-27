import styles from "./Header.module.css";
import { Button, Flex, Htag } from "../../UI";
import { enrolleMeHandller } from "../handlers";
import { HeaderProps } from "./Header.props";

export const Header = ({
  name,
  isMyQueue,
  id,
  isInQueue,
}: HeaderProps): JSX.Element => {
  return (
    <Flex direction="row" className={styles.header}>
      <Htag tag="h1" className={styles.name}>
        {name}
      </Htag>

      {isMyQueue ? (
        <div className={styles.buttons}>
          <Button appearance="danger" icon="pencil">
            Managers
          </Button>
          <Button appearance="red" icon="trash" />
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
  );
};
