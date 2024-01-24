import { useState } from "react";
import { Modal, P } from "../common/ui";
import { Form } from "./components/Form";
import { AxiosError } from "axios";
import QueueApi from "../../lib/api/queue/QueueApi";

interface ErrorResponse {
  message: string;
}

interface Props {
  queueId?: number;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ManagersQueueModal = ({
  queueId,
  isShown,
  setIsShown,
}: Props): JSX.Element => {
  const [managerId, setManagerId] = useState("");
  const [error, setError] = useState<AxiosError<ErrorResponse> | null | string>(
    null
  );

  const onSubmitHandler = (): void => {
    if (managerId.length > 0) {
      QueueApi.addManagerToQueue(queueId!.toString(), managerId)
        .then(() => setIsShown(false))
        .catch((err) => {
          setError(err);
        })
        .finally(() => setManagerId(""));
    } else {
      setError && setError("Please specify manager id");
    }
  };

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Managers"
      successButtonText="Save"
      successButtonClick={onSubmitHandler}
      dangerButtonText="Cancel"
      dangerButtonClick={() => {
        setManagerId("");
        setError(null);
        setIsShown(false);
      }}
    >
      <Form
        onSubmitHandler={onSubmitHandler}
        placeholder="Search for a manager"
        setText={setManagerId}
        text={managerId}
      />
      {error && (
        <P color="primary" style={{ marginTop: "15px" }}>
          {typeof error === "string" ? error : error.response?.data.message}
        </P>
      )}
    </Modal>
  );
};
