import cn from "classnames";
import { useGetMe, useGetUser } from "../../../../hooks";
import { Flex, Htag } from "../../../UI";
import styles from "./Member.module.css";

interface Props {
  memerId: number;
  entryIndex: number;
}

export const Member = ({ memerId, entryIndex }: Props): JSX.Element => {
  const { data } = useGetUser(memerId);
  const { data: me } = useGetMe();

  return (
    <Flex
      direction="row"
      className={cn(styles.member, {
        [styles.current]: memerId === me?.id,
      })}
    >
      <Flex direction="row" className={styles.row}>
        <Htag tag="h1">{entryIndex + 1}</Htag>
        <Htag tag="h2">{data?.username}</Htag>
      </Flex>
    </Flex>
  );
};
