import styles from "./Header.module.css";
import { Button, Flex, Htag } from "../../UI";

interface Props {
  name: string;
  isMyQueue: boolean;
}

export const Header = ({ name, isMyQueue }: Props): JSX.Element => {
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
        <Button appearance="success" icon="plus">
          Enroll me
        </Button>
      )}
    </Flex>
  );
};
