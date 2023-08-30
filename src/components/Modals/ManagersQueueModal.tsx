import { Htag, Modal } from "../UI";

interface Props {
  queueId?: number;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ManagersQueueModal = ({
  isShown,
  setIsShown,
}: Props): JSX.Element => {
  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Managers"
      successButtonText="Save"
      successButtonClick={() => {}}
      dangerButtonText="Cancel"
      dangerButtonClick={() => {}}
    >
      <Htag tag="h2" color="primary">
        No functionality for now
      </Htag>
    </Modal>
  );
};
