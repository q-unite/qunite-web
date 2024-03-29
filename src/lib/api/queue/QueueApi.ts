import { Member } from "../../../types/member";
import { Queue } from "../../../types/queue";
import { User } from "../../../types/user";
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

  async updateQueueById(id: string, queue: CreateQueueBody): Promise<Queue> {
    const { data } = await client.patch<Queue>(
      `/queues/${id}`,
      queue,
      getAuthorizationHeader()
    );
    return data;
  }

  async deleteQueueById(id: string): Promise<void> {
    const { data } = await client.delete<void>(
      `/queues/${id}`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getMembersOfQueue(id: string): Promise<Member[]> {
    const { data } = await client.get<Member[]>(
      `/queues/${id}/members`,
      getAuthorizationHeader()
    );
    return data;
  }

  async enrollMemberToQueue(id: string): Promise<void> {
    const { data } = await client.put<void>(
      `/queues/${id}/members`,
      null,
      getAuthorizationHeader()
    );
    return data;
  }

  async leaveMemberFromQueue(id: string): Promise<void> {
    const { data } = await client.delete<void>(
      `/queues/${id}/members`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getMemberPositionInQueue(
    id: string,
    username: string
  ): Promise<number> {
    const { data } = await client.get<number>(
      `/queues/${id}/members/${username}`,
      getAuthorizationHeader()
    );
    return data;
  }

  async deleteMemberFromQueue(id: string, memberId: string): Promise<void> {
    const { data } = await client.delete<void>(
      `/queues/${id}/members/${memberId}`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getCreatorOfQueue(id: string): Promise<User> {
    const { data } = await client.get<User>(
      `/queues/${id}/creator`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getManagersOfQueue(id: string): Promise<User[]> {
    const { data } = await client.get<User[]>(
      `/queues/${id}/managers`,
      getAuthorizationHeader()
    );
    return data;
  }

  async addManagerToQueue(id: string, userId: string): Promise<void> {
    const { data } = await client.post<void>(
      `/queues/${id}/managers/${userId}`,
      getAuthorizationHeader()
    );
    return data;
  }

  async removeManagerFromQueue(id: string, userId: string): Promise<void> {
    const { data } = await client.delete<void>(
      `/queues/${id}/managers/${userId}`,
      getAuthorizationHeader()
    );
    return data;
  }
}

export default new QueueApi();
