import cn from "classnames";
import { Flex, Htag } from "@/components/common/ui";
import styles from "./Member.module.css";
import useAuth from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import useQueue from "@/hooks/use-queue";
import UserApi from "@/lib/api/users/UserApi";

interface Props {
  memberId: string;
  entryIndex: number;
}

const Member = ({ memberId, entryIndex }: Props): JSX.Element => {
  const { user } = useAuth();
  const { id } = useQueue();

  const { data } = useQuery({
    queryKey: [
      ["queueId", "queue-memberId"],
      [id, memberId],
    ],
    queryFn: () => UserApi.getUserById(memberId),
    refetchOnWindowFocus: false,
    retry: false,
  });

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

export default Member;
