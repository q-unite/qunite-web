import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, P } from "../../common/ui";
import { DeleteUserModal } from "../../common/shared/modals/DeleteUserModal";
import InputBox from "../InputBox";

import styles from "./SettingsForm.module.css";

import useAuth from "../../../hooks/use-auth";
import { handleModalOpen } from "../../../handlers/handleModalOpen";
import UserApi from "../../../lib/api/users/UserApi";
import getErrorMessage from "../../../lib/utils/getErrorMessage";

import { UpdateUserBody } from "../../../lib/api/users/types/UpdateUserBody";
import { FormData, schema } from "./schema";

export const SettingsForm = (): JSX.Element => {
  const { user, update } = useAuth();
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
      .then(() => update());
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
          defaultValue={user.email}
        />
        <InputBox
          id="username"
          placeholder="Type some username"
          {...register("username")}
          type="text"
          error={errors.username?.message}
          defaultValue={user.username}
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
