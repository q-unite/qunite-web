import APIClient from "../../../services/api-client";

const apiClient = new APIClient("/queues");

export const enrolleMeHandller = (queueId: number): void => {
  apiClient.post({ additional: `/${queueId}/members` });
};
