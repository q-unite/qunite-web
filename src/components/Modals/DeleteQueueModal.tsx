import { useState } from "react";
import { AxiosError } from "axios";
import { Htag, Modal, P } from "../common/ui";
import useMyQueuesStore from "../../stores/my-queues-store";
import { useNavigate } from "react-router-dom";
import QueueApi from "../../lib/api/queue/QueueApi";

interface ErrorResponse {
  message: string;
}

interface Props {
  queueId: string;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteQueueModal = ({
  isShown,
  setIsShown,
  queueId,
}: Props): JSX.Element => {
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const removeFromMyQueues = useMyQueuesStore((q) => q.removeFromMyQueues);
  const navigate = useNavigate();

  const onDeleteHandler = (): void => {
    QueueApi.deleteQueueById(queueId)
      .then(() => {
        setError(null);
        setIsShown(false);
        removeFromMyQueues(queueId);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Delete"
      successButtonText="Cancel"
      successButtonClick={() => {
        setError(null);
        setIsShown(false);
      }}
      dangerButtonText="Delete"
      dangerButtonClick={onDeleteHandler}
    >
      <Htag tag="h2" color="primary">
        Are you shure want to delete this queue?
      </Htag>
      {error && (
        <P color="primary" style={{ marginTop: "15px" }}>
          {error.response?.data.message}
        </P>
      )}
    </Modal>
  );
};
