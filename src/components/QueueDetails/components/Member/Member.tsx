import { useGetUser } from "../../../../hooks";
import { Flex, Htag } from "../../../UI";
import styles from "./Member.module.css";

interface Props {
  memerId: number;
  index: number;
}

export const Member = ({ memerId, index }: Props): JSX.Element => {
  const { data } = useGetUser(memerId);

  return (
    <Flex direction="row" className={styles.member}>
      <Flex direction="row" className={styles.row}>
        <Htag tag="h1">{index}</Htag>
        <Htag tag="h2">{data?.username}</Htag>
      </Flex>
    </Flex>
  );
};
