import { useState } from "react";
import { AxiosError } from "axios";
import { Htag, Modal, P } from "../UI";
import APIClient from "../../services/api-client";
import useMyQueuesStore from "../../stores/my-queues-store";
import { useNavigate } from "react-router-dom";

interface ErrorResponse {
  message: string;
}

interface Props {
  queueId?: number;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const apiClient = new APIClient("/queues");

export const DeleteQueueModal = ({
  isShown,
  setIsShown,
  queueId,
}: Props): JSX.Element => {
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const removeFromMyQueues = useMyQueuesStore((q) => q.removeFromMyQueues);
  const navigate = useNavigate();

  const onDeleteHandler = (): void => {
    apiClient
      .delete(`/${queueId}`)
      .then(() => {
        setError(null);
        setIsShown(false);
        queueId && removeFromMyQueues(queueId);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
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
