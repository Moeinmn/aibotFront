


import { useRouter } from "next/router";
import IUserData from "../../models/IUserData";
import services from "../../services";
import storageLocal from "@/src/shared/helper/storge-local";

import { useState } from "react";

const useRegister = () => {
  const [isLoading, setLoading] = useState("empty");
//   const router = useRouter();
  const register = (user: IUserData) => {
    setLoading("loading");
    services
      .register(user)
      .then(async (res) => {
        storageLocal.set("token", res.data.access_token);
          
       
      })
      // .catch((reason) => toast.error(reason.toString()))
      .finally(() => setLoading("empty"));
  };
//   const onAuthWithSocial = async () => {
//     const backUrl = router.query?.[LINKS_QUERY_KEY.BACK_TO] as string | null;

//     if (backUrl) {
//       await router.replace(backUrl);
//     } else {
//       await router.replace(LINKS.PANEL_NEW_PROJECT);
//     }
//   };
  return {
    register,
    isLoading,
    // onAuthWithSocial,
  };
};
export default useRegister;
