import { useRouter } from "next/router";
import { useState } from "react";
import services from "../../services";
import storageLocal from "@/src/shared/helper/storge-local";
import IUserLogin from "../../models/IUserLogin";

const useLogin = () => {
  const [isLoading, setLoading] = useState("empty");
//   const router = useRouter();
//   const afterLogin = async () => {
//     const backUrl = router.query?.[LINKS_QUERY_KEY.BACK_TO] as string | null;

//     if (backUrl) {
//       await router.replace(backUrl);
//     } else {
//       await router.replace(LINKS.PANEL_DEFAULT);
//     }
//   };
  const login = (user: IUserLogin) => {
    setLoading("loading");
    services
      .login(user)
      .then(async (res) => {
        if (res.data.results) {
          storageLocal.set("token", res.data.user.token);
        //   afterLogin();
        } else {
            console.log(res.data.message)
        //   toast.warning(res.data.message);
        }
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
