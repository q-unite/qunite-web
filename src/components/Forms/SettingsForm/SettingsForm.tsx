import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { handleModalOpen } from "../../../handlers/handleModalOpen";
import { useGetMe } from "../../../hooks";
import UserApi from "../../../lib/api/users/UserApi";
import { UpdateUserBody } from "../../../lib/api/users/types/UpdateUserBody";
import getErrorMessage from "../../../lib/utils/getErrorMessage";
import { DeleteUserModal } from "../../Modals";
import { Button, P } from "../../common/ui";
import InputBox from "../InputBox";
import styles from "./SettingsForm.module.css";
import { FormData, schema } from "./schema";

export const SettingsForm = (): JSX.Element => {
  const { data, refetch } = useGetMe();
  const [isShown, setIsShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data: UpdateUserBody) => {
    UserApi.updateUserAccount(data)
      .catch((error) => setError("root", { message: getErrorMessage(error) }))
      .then(() => refetch());
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputBox
          id="login"
          placeholder="Type your login"
          type="text"
          error={errors.email?.message}
          {...register("email")}
          defaultValue={data?.email}
        />
        <InputBox
          id="username"
          placeholder="Type some username"
          {...register("username")}
          type="text"
          error={errors.username?.message}
          defaultValue={data?.username}
        />
        {errors.root && <P color="primary">{errors.root.message}</P>}
        <Button type="submit" appearance="success">
          Save
        </Button>
      </form>

      <Button onClick={(e) => handleModalOpen(e, setIsShown)} appearance="red">
        Delete
      </Button>

      <DeleteUserModal isShown={isShown} setIsShown={setIsShown} />
    </div>
  );
};
