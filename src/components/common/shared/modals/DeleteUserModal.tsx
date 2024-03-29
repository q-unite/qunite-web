import UserApi from "../../../../lib/api/users/UserApi";
import { Modal, Htag } from "../../ui";

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteUserModal = ({ isShown, setIsShown }: Props): JSX.Element => {
  const onDeleteHandler = (): void => {
    UserApi.deleteMe().then(() => {
      window.location.reload();
    });
  };

  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title="Delete"
      successButtonText="Cancel"
      successButtonClick={() => setIsShown(false)}
      dangerButtonText="Delete"
      dangerButtonClick={onDeleteHandler}
    >
      <Htag tag="h2" color="primary">
        Are you shure want to delete your account?
      </Htag>
    </Modal>
  );
};

export default DeleteUserModal;
