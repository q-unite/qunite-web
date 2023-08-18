import { useState } from "react";
import { Button, Htag, Input, Li, Modal } from "../components/UI";

const HomePage = (): JSX.Element => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Button appearance="danger" icon="menu" />
      <Button appearance="danger" icon="plus">
        Create queue
      </Button>
      <Htag tag="h1">Some black h1</Htag>
      <Htag tag="h2" color="gray">
        Some gray h2
      </Htag>
      <Htag tag="h2" color="primary">
        Some primary h2
      </Htag>
      <Li icon="queues">Queues</Li>
      <Li icon="queues" color="primary">
        Queues
      </Li>

      <Button appearance="success" onClick={() => setIsShown(true)}>
        Open modal
      </Button>

      <Modal
        isShown={isShown}
        title="Create queue"
        successButtonText="Create"
        dangerButtonText="Cancel"
        setIsShown={setIsShown}
      >
        <Input placeholder="Type name of the queue" />
      </Modal>
    </>
  );
};

export default HomePage;
