import mainApi from "@/src/infrastructure/https-client-main";
import IUserData from "./models/IUserData";
import IUserLogin from "./models/IUserLogin";
import { LOGIN_REGISTER_API } from "./component/constant";

class AuthService {
    register = (user: IUserData) =>
    
      mainApi.post(LOGIN_REGISTER_API.REGISTER, user);

    login = (user: IUserLogin) =>
      mainApi.post( LOGIN_REGISTER_API.LOGIN, user, );
  }

  export default new AuthService();

  