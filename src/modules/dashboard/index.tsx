'use client'
import { Stack } from '@mui/material';
import ChatInfo from './componenst/chatinfo';
import PieChart from './componenst/piechart';
import styles from './styles.module.css'
import TotalRevenue from './componenst/totalRevenue';
import PropertyReferrals from './componenst/propertyRef';

const Dashboard=()=>{

    return(
        <>
        <div className={styles.root}>
        <ChatInfo/>
        <div className={styles.piChartWrapper}>
        <PieChart
                    title="تعداد کل پاسخ ها موفق"
                    value={684}
                    series={[75, 25]}
                    colors={["#2ED480", "#c4e8ef"]}
                />
                <PieChart
                    title="تعداد اشتباهات"
                    value={550}
                    series={[60, 40]}
                    colors={["#F45252", "#c4e8ef"]}
                />
                <PieChart
                    title="تعداد کال شدن api"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="تعداد درخواست پشتیبان"
                    value={555}
                    series={[75, 25]}
                    colors={["#FD8539", "#c4e8ef"]}
                />

        </div>

        <Stack
                mt="25px"
                width="90%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

        </div>
        </>
    )


};

export default Dashboard;