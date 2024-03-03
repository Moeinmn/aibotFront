import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width="100%">
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography fontSize={16} fontWeight={500} color="#11142d">
                {title}
            </Typography>
            <Typography fontSize={16} fontWeight={500} color="#11142d">
                {percentage}%
            </Typography>
        </Stack>
        <Box
            mt={2}
            position="relative"
            width="100%"
            height="8px"
            borderRadius={1}
            bgcolor="#e4e8ef"
        >
            <Box
                width={`${percentage}%`}
                bgcolor={color}
                position="absolute"
                height="100%"
                borderRadius={1}
            />
        </Box>
    </Box>
);

const PropertyReferrals = () => {
    const propertyReferralsInfo = [
        {
            title: "سوشیال مدیا",
            percentage: 64,
            color: "#6C5DD3",
        },
        {
            title: "امبدینگ",
            percentage: 40,
            color: "#7FBA7A",
        },
        {
            title: "وبسایت",
            percentage: 50,
            color: "#FFCE73",
        },
        {
            title: "اینستاگرام",
            percentage: 80,
            color: "#FFA2C0",
        },
        {
            title: "غیره",
            percentage: 15,
            color: "#F45252",
        },
    ];
    return (
        <Box
            p={4}
            // bgcolor="#fcfcfc"
            id="chart"
            minWidth={490}
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                استفاده در محیط های مختلف
            </Typography>

            <Stack my="20px" direction="column" gap={4}>
                {propertyReferralsInfo.map((bar) => (
                    <ProgressBar key={bar.title} {...bar} />
                ))}
            </Stack>
        </Box>
    );
};

export default PropertyReferrals;