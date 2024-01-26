import { Tokens } from "../../../types/tokens";
import client from "../instance";
import { RefreshBody } from "./types/RefreshBody";
import { SignInBody } from "./types/SignInBody";
import { SignUpBody } from "./types/SignUpBody";

class AuthApi {
  async signUp(body: SignUpBody): Promise<void> {
    const { data } = await client.post<void>("/auth/sign-up", body);
    return data;
  }

  async signIn(body: SignInBody): Promise<Tokens> {
    const { data } = await client.post<Tokens>("/auth/sign-in", body);
    return data;
  }

  async refresh(body: RefreshBody): Promise<Tokens> {
    const { data } = await client.post<Tokens>("/auth/sign-in/refresh", body);
    return data;
  }
}

export default new AuthApi();
