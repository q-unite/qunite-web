import { Flex, Htag } from "../../../UI";
import { Member } from "../Member/Member";
import { MemberListProps } from "./MemberList.props";
import styles from "./MemberList.module.css";

export const MembersList = ({ members }: MemberListProps): JSX.Element => {
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
          memerId={item.memberId}
          entryIndex={item.entryIndex}
          key={item.entryIndex}
        />
      ))}
    </Flex>
  );
};
