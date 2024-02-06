
import { useState } from "react";
import services from "../../services";
import storageLocal from "@/src/shared/helper/storge-local";
import IUserLogin from "../../models/IUserLogin";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const [isLoading, setLoading] = useState("empty");
  const router = useRouter();
  const afterLogin = async () => {



      await router.replace("/mybots");
    
  };
  const login = (user: IUserLogin) => {
    setLoading("loading");
    services
      .login(user)
      .then(async (res) => {
          storageLocal.set("token", res.data.access_token);
          afterLogin();
     
      })
      .catch((reason) => console.log(reason))
      .finally(() => setLoading("empty"));
  };

  return {
    login,
    isLoading,
  };
};
export default useLogin;
