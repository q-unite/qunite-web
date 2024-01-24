import cn from "classnames";
import { useGetUser } from "../../../../hooks";
import { Flex, Htag } from "../../../common/ui";
import styles from "./Member.module.css";
import useAuth from "../../../../hooks/use-auth";

interface Props {
  memberId: number;
  entryIndex: number;
}

export const Member = ({ memberId, entryIndex }: Props): JSX.Element => {
  const { data } = useGetUser(memberId);
  const { user } = useAuth();

  return (
    <Flex
      direction="row"
      className={cn(styles.member, {
        [styles.current]: memberId.toString() === user?.id,
      })}
    >
      <Flex direction="row" className={styles.row}>
        <Htag tag="h1">{entryIndex + 1}</Htag>
        <Htag tag="h2">{data?.username}</Htag>
      </Flex>
    </Flex>
  );
};
