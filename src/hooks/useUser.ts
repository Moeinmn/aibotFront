import { useState } from "react";
import services from "../shared/services/services";
import useUserStore from "./useUserStore";

const useUser=()=>{
  const user=useUserStore()
    const refresh = async () => {
        return new Promise(async (resolve, reject) => {
          const token = localStorage.getItem("token");
          if (token) {
            await services.checkToken()
              .then(async (res) => {
                if (res.data?.isAuthenticated) {
                  user.setUser(res.data);
                  resolve(res.data);
                } else {
                  reject();
                }
              })
              .catch(() => reject());
          } else {
            reject();
          }
        });
      };
    const isLogin = () =>{
        return user.user != null;
    } 

      return{
        isLogin
        ,refresh
      }


};
export default useUser;