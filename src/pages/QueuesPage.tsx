import { useState } from "react";
import { Button, Htag, Input, Modal } from "../components/UI";

const QueuesPage = (): JSX.Element => {
  const [isShown, setIsShown] = useState(false);

  const handleOpenModalClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    setIsShown(true);
  };

  return (
    <>
      <Htag tag="h1">Queues Page</Htag>

      <Button appearance="success" onClick={handleOpenModalClick}>
        Open modal
      </Button>

      <Modal
        isShown={isShown}
        setIsShown={setIsShown}
        title="Create queue"
        successButtonText="Create"
        dangerButtonText="Cancel"
        successButtonClick={() => console.log("create")}
        dangerButtonClick={() => console.log("cancel")}
      >
        <Input placeholder="Type name of the queue" />
      </Modal>
    </>
  );
};

export default QueuesPage;
