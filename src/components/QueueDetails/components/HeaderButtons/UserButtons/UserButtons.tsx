import QueueApi from "../../../../../lib/api/queue/QueueApi";
import { Button } from "../../../../common/ui";

interface Props {
  id: string;
  isInQueue: boolean;
}

export const UserButtons = ({ id, isInQueue }: Props): JSX.Element => {
  return !isInQueue ? (
    <Button
      appearance="success"
      icon="plus"
      onClick={() => QueueApi.enrollMemberToQueue(id)}
    >
      Enroll me
    </Button>
  ) : (
    <Button
      appearance="danger"
      icon="logout"
      onClick={() => QueueApi.leaveMemberFromQueue(id)}
    >
      Leave
    </Button>
  );
};
