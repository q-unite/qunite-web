import { useState, useRef } from "react";
import { AxiosError } from "axios";
import { Input, Modal, P } from "./UI";
import APIClient from "../services/api-client";
import { Queue } from "../interfaces/Queue";

interface ErrorResponse {
  name: string;
}

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const apiClient = new APIClient<Queue>("/queues");

export const CreateQueueModal = ({
  isShown,
  setIsShown,
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("");
  const [error, setError] = useState<AxiosError<ErrorResponse> | null>(null);

  const onSubmitHandler = (): void => {
    apiClient
      .createQueue({ name: text })
      .then(() => setError(null))
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
      <Input
        placeholder="Type queue name"
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && (
        <P color="primary" style={{ marginTop: "15px" }}>
          {error.response?.data.name}
        </P>
      )}
    </Modal>
  );
};
