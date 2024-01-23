import React from "react";
import { FieldValues } from "react-hook-form";
import { AxiosError } from "axios";
import APIClient from "../../../services/api-client";
import { User } from "../../../types/user";

interface ErrorResponse {
  message: string;
  timeStamp: string;
}

interface Props {
  data: FieldValues;
  endpoint: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const onSubmit = async ({
  data,
  endpoint,
  setError,
}: Props): Promise<void> => {
  const apiClient = new APIClient<User>(endpoint);

  await apiClient.patch({ ...data }).catch((error: AxiosError) => {
    const errorResponse = error.response?.data as ErrorResponse;
    setError(errorResponse.message);
  });
};
