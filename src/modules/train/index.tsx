'use client'
import dynamic from "next/dynamic";
import Layout from "./componenst/layout";
import ActiveTab from "@/src/shared/components/common/active-tab";
import useStoreViewController from "./hooks/view-controller";
import "./style.css";


const Train=()=>{
    const viewController = useStoreViewController();
    const tabsInfo={
        File:"فایل ها",
        Text:"متن ",
        Website:"لینک ها"
    }

    const tabs=[
        {
            id:"File",
            component: dynamic(() => import("../train/componenst/upload"))
        },
        {
            id:"Text",
            component: dynamic(() => import("../train/componenst/text"))
        },
        {
            id:"Website",
            component: dynamic(() => import("../train/componenst/websiteLink"))
        }
    ];

    return(
        <>
        <Layout>
            <div className="elementBox">
                <span style={{textAlign:"center",fontSize:"26px",padding:"12px"}}>{tabsInfo[viewController.activeTab] }</span>
                <hr style={{marginTop:"15px"}}></hr>

          <ActiveTab
            tabs={tabs}
            activeTabId={viewController.activeTab}
          />
            </div>
        </Layout>
        </>
    )


};

export default Train;