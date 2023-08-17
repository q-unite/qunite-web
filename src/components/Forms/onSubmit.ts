import React from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import { AxiosError } from "axios";

import APIClient from "../../services/api-client";
import authStore from "../../stores/auth-store";
import { AuthResponse } from "../../interfaces/AuthResponse";

interface ErrorResponse {
  message: string;
  timeStamp: string;
}

interface Props {
  data: FieldValues;
  navigate?: NavigateFunction;
  endpoint: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const onSubmit = async ({
  data,
  navigate,
  endpoint,
  setError,
}: Props): Promise<void> => {
  const apiClient = new APIClient<AuthResponse>(endpoint);

  await apiClient
    .auth({ ...data })
    .then((res) => {
      if (navigate) {
        navigate("/login");
      } else {
        authStore.getState().setToken(res.token);
      }
    })
    .catch((error: AxiosError) => {
      const errorResponse = error.response?.data as ErrorResponse;
      setError(errorResponse.message);
    });
};
