import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBox from "../InputBox";
import { schema, FormData } from "./schema";
import styles from "./SettingsForm.module.css";
import { Button, P } from "../../UI";
import { useGetMe } from "../../../hooks";
import { onSubmit } from "./onSubmit";
import { DeleteUserModal } from "../../Modals";
import { handleModalOpen } from "../../../handlers/handleModalOpen";

export const SettingsForm = (): JSX.Element => {
  const { data, refetch } = useGetMe();
  const [error, setError] = useState("");
  const [isShown, setIsShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data: FieldValues) => {
          onSubmit({ data, endpoint: "/users/self", setError }).then(() =>
            refetch()
          );
        })}
      >
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
        {error && <P color="primary">{error}</P>}
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
