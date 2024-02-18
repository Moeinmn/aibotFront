'use client'
import dynamic from "next/dynamic";
import Layout from "./componenst/layout";
import ActiveTab from "@/src/shared/components/common/active-tab";
import useStoreViewController from "./hooks/view-controller";

const Train=()=>{
    const viewController = useStoreViewController();

    const tabs=[
        {
            id:"File",
            component: dynamic(() => import("../train/componenst/upload"))
        },
        {
            id:"Text",
            component: dynamic(() => import("../train/componenst/text"))
        }
    ];

    return(
        <>
        <Layout>
          <ActiveTab
            tabs={tabs}
            activeTabId={viewController.activeTab}
          />
        </Layout>
        </>
    )


};

export default Train;