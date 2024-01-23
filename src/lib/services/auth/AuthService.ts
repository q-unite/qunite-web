import AuthApi from "../../api/auth/AuthApi";
import { SignUpBody } from "../../api/auth/types/SignUpBody";

class AuthService {
  static async signUp(body: SignUpBody): Promise<void> {
    await AuthApi.signUp(body);
  }
}

export default AuthService;
