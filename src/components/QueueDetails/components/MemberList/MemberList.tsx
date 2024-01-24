import { useContext } from "react";
import { Flex, Htag } from "../../../common/ui";
import { Member } from "../Member/Member";
import styles from "./MemberList.module.css";
import { QueueDetailsContext } from "../../../../context/QueueDetailsContext";

export const MembersList = (): JSX.Element => {
  const { members } = useContext(QueueDetailsContext);

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
