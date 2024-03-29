import AuthApi from "../../api/auth/AuthApi";
import { SignInBody } from "../../api/auth/types/SignInBody";
import { SignUpBody } from "../../api/auth/types/SignUpBody";
import StorageUtil from "../../utils/StorageUtil";

class AuthService {
  static async signUp(body: SignUpBody): Promise<void> {
    await AuthApi.signUp(body);
  }

  static async signIn(body: SignInBody): Promise<void> {
    const token = await AuthApi.signIn(body);
    StorageUtil.setTokens(token.accessToken, token.refreshToken);
  }

  static async logout(): Promise<void> {
    StorageUtil.removeTokens();
  }
}

export default AuthService;
