import { Button } from "../../../../UI";
import {
  enrolleMeHandller,
  leaveMeFromTheQueueHandler,
} from "../../../handlers";

interface Props {
  id: number;
  isInQueue: boolean;
}

export const UserButtons = ({ id, isInQueue }: Props): JSX.Element => {
  return !isInQueue ? (
    <Button
      appearance="success"
      icon="plus"
      onClick={() => enrolleMeHandller(id)}
    >
      Enroll me
    </Button>
  ) : (
    <Button
      appearance="danger"
      icon="logout"
      onClick={() => leaveMeFromTheQueueHandler(id)}
    >
      Leave
    </Button>
  );
};
