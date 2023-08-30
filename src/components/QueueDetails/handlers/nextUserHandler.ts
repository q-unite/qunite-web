import APIClient from "../../../services/api-client";

const apiClient = new APIClient("/queues");

export const nextUserHandler = (queueId: string, memberId: number): void => {
  apiClient.delete(`/${queueId}/members/${memberId}`);
};
