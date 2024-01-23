import { Queue } from "../../../types/queue";
import client from "../instance";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";
import { CreateQueueBody } from "./types/CreateQueueBody";

class QueueApi {
  async getAllQueues(): Promise<Queue[]> {
    const { data } = await client.get<Queue[]>(
      "/queues",
      getAuthorizationHeader()
    );
    return data;
  }

  async createQueue(queue: CreateQueueBody): Promise<Queue> {
    const { data } = await client.post<Queue>(
      "/queues",
      queue,
      getAuthorizationHeader()
    );
    return data;
  }

  async getQueueById(id: string): Promise<Queue> {
    const { data } = await client.get<Queue>(
      `/queues/${id}`,
      getAuthorizationHeader()
    );
    return data;
  }
}

export default new QueueApi();
