import { Queue } from "../../../types/queue";
import { User } from "../../../types/user";
import client from "../instance";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";
import { UpdateUserBody } from "./types/UpdateUserBody";

class UserApi {
  async getMe(): Promise<User> {
    const { data } = await client.get<User>(
      "/users/self",
      getAuthorizationHeader()
    );
    return data;
  }

  async updateUserAccount(body: UpdateUserBody): Promise<User> {
    const { data } = await client.patch<User>(
      "/users/self",
      body,
      getAuthorizationHeader()
    );
    return data;
  }

  async deleteMe(): Promise<void> {
    await client.delete<void>(`/users/self`, getAuthorizationHeader());
  }

  async getUserById(id: string): Promise<User> {
    const { data } = await client.get<User>(
      `/users/${id}`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getCreatedByUserQueues(id: string): Promise<Queue[]> {
    const { data } = await client.get<Queue[]>(
      `/users/${id}/created-queues`,
      getAuthorizationHeader()
    );
    return data;
  }
}

export default new UserApi();
