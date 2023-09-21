import { useContext } from "react";
import { Flex, Htag } from "../../../UI";
import { Member } from "../Member/Member";
import styles from "./MemberList.module.css";
import { QueueDetailsContext } from "../../../../context/QueueDetailsContext";

export const MembersList = (): JSX.Element => {
  const data = useContext(QueueDetailsContext);

  if (data.members.length === 0) {
    return (
      <Htag tag="h2" color="gray">
        Queue is empty
      </Htag>
    );
  }

  return (
    <Flex className={styles.memberList}>
      {data.members.map((item) => (
        <Member
          memberId={item.memberId}
          entryIndex={item.entryIndex}
          key={item.entryIndex}
        />
      ))}
    </Flex>
  );
};
