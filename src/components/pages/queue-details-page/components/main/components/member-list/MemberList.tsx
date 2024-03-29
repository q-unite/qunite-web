import { Flex, Htag } from "@/components/common/ui";
import Member from "./components/member";
import useQueue from "@/hooks/use-queue";
import styles from "./MemberList.module.css";

const MembersList = (): JSX.Element => {
  const { members } = useQueue();

  if (members.length === 0) {
    return (
      <Htag tag="h2" color="gray">
        Queue is empty
      </Htag>
    );
  }

  return (
    <Flex className={styles.memberList}>
      {members.map((item) => (
        <Member
          memberId={item.memberId}
          entryIndex={item.entryIndex}
          key={item.entryIndex}
        />
      ))}
    </Flex>
  );
};

export default MembersList;
