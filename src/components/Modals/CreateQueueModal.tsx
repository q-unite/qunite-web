import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { Modal, P } from "../common/ui";
import useQueuesStore from "../../stores/queues-store";
import useMyQueuesStore from "../../stores/my-queues-store";
import { Form } from "./components/Form";
import QueueApi from "../../lib/api/queue/QueueApi";

interface ErrorResponse {
  name: string;
}

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateQueueModal = ({
  isShown,
  setIsShown,
}: Props): JSX.Element => {
  const [text, setText] = useState("");
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);
  const addToQueues = useQueuesStore((q) => q.addToQueues);
  const addToMyQueues = useMyQueuesStore((q) => q.addToMyQueues);
  const navigate = useNavigate();

  const onSubmitHandler = (): void => {
    QueueApi.createQueue({ name: text })
      .then((res) => {
        setError(null);
        setIsShown(false);
        addToQueues(res);
        addToMyQueues(res);
        navigate(`/queues/${res.id}`);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setText(""));
  };

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Create queue"
      successButtonText="Create"
      successButtonClick={onSubmitHandler}
      dangerButtonText="Cancel"
      dangerButtonClick={() => {
        setText("");
        setError(null);
        setIsShown(false);
      }}
    >
      <Form
        onSubmitHandler={onSubmitHandler}
        placeholder="Type queue name"
        setText={setText}
        text={text}
      />
      {error && (
        <P color="primary" style={{ marginTop: "15px" }}>
          {error.response?.data.name}
        </P>
      )}
    </Modal>
  );
};
