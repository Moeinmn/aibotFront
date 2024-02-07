import mainApi from "@/src/infrastructure/https-client-main";
import { API } from "../constant/api";

class Services{
    checkToken = () =>
    mainApi.get(API.CHECK_TOKEN);
};

export default new Services();
