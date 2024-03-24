import { zodResolver } from "@hookform/resolvers/zod";
import { lazy, Suspense, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, P, InputBox } from "@/components/common/ui";

import styles from "./SettingsForm.module.css";

import useAuth from "@/hooks/use-auth";
import { handleModalOpen } from "@/handlers/handleModalOpen";
import UserApi from "@/lib/api/users/UserApi";
import getErrorMessage from "@/lib/utils/getErrorMessage";

import { UpdateFormFields } from "./types";
import { validationSchema } from "./validation";

const DeleteUserModal = lazy(
  () => import("@/components/common/shared/modals/DeleteUserModal")
);

const SettingsForm = (): JSX.Element => {
  const { user, update } = useAuth();
  const [isShown, setIsShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UpdateFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      data.username = data.username.toLowerCase();
      await UserApi.updateUserAccount(data);
      await update();
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
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

      <Suspense fallback={null}>
        <DeleteUserModal isShown={isShown} setIsShown={setIsShown} />
      </Suspense>
    </div>
  );
};

export default SettingsForm;
