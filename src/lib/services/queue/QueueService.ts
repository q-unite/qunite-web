import QueueApi from "../../api/queue/QueueApi";

class QueueService {
  static async getAllQueues(): Promise<void> {
    await QueueApi.getAllQueues();
  }
}

export default QueueService;
