import { Queue } from "../../../interfaces/Queue";
import client from "../instance";

class QueueApi {
  async getAllQueues(): Promise<Queue[]> {
    const { data } = await client.get<Queue[]>("/queues");
    return data;
  }

  async getQueueById(id: string): Promise<Queue> {
    const { data } = await client.get<Queue>(`/queues/${id}`);
    return data;
  }
}

export default new QueueApi();
