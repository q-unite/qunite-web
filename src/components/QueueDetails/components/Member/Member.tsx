import { Flex } from "../../../UI";
import styles from "./Member.module.css";

interface Props {
  memerId: number;
}

export const Member = ({ memerId }: Props): JSX.Element => {
  return (
    <Flex direction="row" className={styles.member}>
      {memerId}
    </Flex>
  );
};
