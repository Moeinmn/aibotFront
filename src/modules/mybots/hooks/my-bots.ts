import IBots from "@/src/infrastructure/models/bot";
import { useEffect, useState } from "react";
import services from "../services";


const useMyBots=()=>{
    const [page, setPage] = useState(1);
    // const [status, setStatus] = useStatus("loading");
    const [totalPages, setTotalPages] = useState(1);
    const [bots, setBots] = useState<IBots[]>([]);
    // const [removeProjectStatus, setRemoveProjectStatus] = useStatus("done");

    const getBots = (
        _page: number,
      ) => {
        services
          .getProjects(_page, 10)
          .then((res) => {
            setBots(res.bots);
            setPage(_page);
            setTotalPages(res.totalPages);
          })
          .catch((_err) => {})
          .finally(() => {
            // setStatus("done");
          });
      };
      useEffect(() => {
        getBots(page);
      }, []);

     return{
        page,
        bots,
        totalPages,
        getBots,

      }


};


export default useMyBots;