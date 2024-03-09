'use client'

import ActiveTab from "@/src/shared/components/common/active-tab";
import Layout from "./components/layout";
import useStoreViewController from "./hooks/view-controller";
import dynamic from "next/dynamic";
import styles from './style.module.css'


const Setting=()=>{
    const viewController = useStoreViewController();
    const tabsInfo={
        General:"عمومی",
    }

    const tabs=[
        {
            id:"General",
            component: dynamic(() => import("../setting/components/general"))
        },
 
    ];

    return(
        <>
        <Layout>
            <div className={styles.elementBox}>
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
export default Setting;