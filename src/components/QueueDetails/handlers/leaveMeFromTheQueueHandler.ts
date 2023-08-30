import APIClient from "../../../services/api-client";

const apiClient = new APIClient("/queues");

export const leaveMeFromTheQueueHandler = (queueId: number): void => {
  apiClient.delete(`/${queueId}/members`);
};
