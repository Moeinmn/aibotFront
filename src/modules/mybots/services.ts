import mainApi from "@/src/infrastructure/https-client-main";
import IBots from "@/src/infrastructure/models/bot";
import { MY_BOTS_API } from "./constant";

class MyBotstService {
    getProjects = (
      page: number,
      itemsPerPage: number,
      type?: number | null | undefined
    ): Promise<{
      bots: IBots[];
      totalPages: number;
      itemsPerPage: number;
      totalItems: number;
    }> => {
      return new Promise((resolve, reject) => {
        mainApi
          .get(MY_BOTS_API.GET_PROJECTS, {
            params: {
              page,
              itemsPerPage,
              type,
            },
          })
          .then((res) => {
            resolve({
              bots:res.data.bots,
              totalPages: res.data.totalPages,
              itemsPerPage: res.data.itemsPerPage,
              totalItems: res.data.totalItems,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
  }
  
  export default new MyBotstService();
  