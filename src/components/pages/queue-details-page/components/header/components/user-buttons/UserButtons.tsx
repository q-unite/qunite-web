import { Button } from "@/components/common/ui";
import useQueue from "@/hooks/use-queue";
import QueueApi from "@/lib/api/queue/QueueApi";

const UserButtons = (): JSX.Element => {
  const { id, isInQueue, updateMembers } = useQueue();

  if (!isInQueue) {
    return (
      <Button
        appearance="success"
        icon="plus"
        onClick={() =>
          QueueApi.enrollMemberToQueue(id).then(() => updateMembers())
        }
      >
        Enroll me
      </Button>
    );
  }

  return (
    <Button
      appearance="danger"
      icon="logout"
      onClick={() =>
        QueueApi.leaveMemberFromQueue(id).then(() => updateMembers())
      }
    >
      Leave
    </Button>
  );
};

export default UserButtons;
