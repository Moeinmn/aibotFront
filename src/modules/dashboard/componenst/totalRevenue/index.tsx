import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";
import { ApexOptions } from "apexcharts";



const TotalRevenue = () => {
    const TotalRevenueSeries = [
        {
            name: "Last Month",
            data: [183, 124, 115, 85, 143, 143, 96],
        },
        {
            name: "Running Month",
            data: [95, 84, 72, 44, 108, 108, 47],
        },
    ];
    const TotalRevenueOptions: ApexOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#475BE8", "#CFC8FF"],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: "55%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        stroke: {
            colors: ["transparent"],
            width: 4,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
        },
        tooltip: {
            y: {
                formatter(val: number) {
                    return `$ ${val} thousands`;
                },
            },
        },
    };
    return (
        <Box
            p={4}
            flex={1}
            // bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                مجموع استفاده در ماه جاری
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142d">
                 2356 بار
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 25, color: "#475be8" }}
                    />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            بیشتر از ماه پیش
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
            />
        </Box>
    );
};

export default TotalRevenue;