import { Flex, Htag } from "../../../UI";
import { Member } from "../Member/Member";
import { MemberListProps } from "./MemberList.props";

export const MembersList = ({ members }: MemberListProps): JSX.Element => {
  if (members.length === 0) {
    return (
      <Htag tag="h2" color="gray">
        Queue is empty
      </Htag>
    );
  }

  return (
    <Flex>
      {members.map((item) => (
        <Member memerId={item.memberId} />
      ))}
    </Flex>
  );
};
