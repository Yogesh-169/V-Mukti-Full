import { Box, Button, Flex, Text, useBreakpointValue, Image } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import TripleImageSection from "../../components/TripleImageSection";
import AdvancedSurveillance from "../Home/AdvancedSurveillance";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const popAnimation1 = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (index) => ({
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.1, // Delay increases for each card
        },
    }),
};

const popAnimation = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};
const OurServings = () => {
    const buttonWidth = useBreakpointValue({
        base: "130px",
        md: "130px",
        lg: "146px",
    });
    const buttonHeight = useBreakpointValue({
        base: "40px",
        md: "45px",
        lg: "50px",
    });

    const heading = [
        { text: "Customizable", color: "#3F77A5" },//blue
        { text: "AI solutions tailored\nfor", color: "#000" },//use \n to make a new line
        { text: "every need", color: "#DB7B3A" },//orange
    ];
    const description = "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management. Enhance safety and efficiency with scalable, future-ready technology."
    const image = "Responsive_Screen_Mockup.png"
    return <>

        <PageContentWrapper>
            {/* <TripleImageSection mt heading={heading} description={description} images={images} /> */}
            <Box
                as="section"
                backgroundColor="#E7E7E7"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="5%"
                position="relative"
            >

                <Flex direction="column">
                    <Box position="relative" mb="20px" >
                        {/* Title Text (above the white rectangle) */}
                        <MotionText
                            fontSize={{ base: "24px", md: "48px" }}
                            fontWeight="600"
                            lineHeight="normal"
                            textAlign="left"
                            position="relative"
                            zIndex="1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {/* error may occur */}
                            {heading.map((part, index) => (
                                <MotionText
                                    as="span"
                                    color={part.color}
                                    display="inline"
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeOut",
                                        delay: index * 0.1,
                                    }}
                                >
                                    {index !== 0 && " "}
                                    {part.text}
                                </MotionText>
                            ))}

                            {/* Static blue dot with animation */}
                            <MotionText
                                as="span"
                                color="#3F77A5"
                                display="inline"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.9,
                                    ease: "easeOut",
                                    // error may occur
                                    delay: heading.length * 0.1,
                                }}
                            >
                                .
                            </MotionText>
                        </MotionText>
                    </Box>

                    {/* Arrow & Description - Flex Container */}
                    <Flex
                        flexDirection={{ base: "column", md: "row" }}
                        alignItems="start"
                        justifyContent="left"
                        mt="1%"
                    >
                        {/* Left Section: Arrow, Description, Button */}
                        <Box
                            flex="1"
                            maxWidth={{ base: "100%", md: "30%" }}
                            textAlign={{ base: "center", md: "left" }}
                            position="relative"
                        // bg="red"
                        >
                            {/* Arrow Animation */}
                            <MotionBox
                                mb="8px"
                                display="flex"
                                justifyContent="flex-start"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                                        fill="#3F77A5"
                                    />
                                </svg>
                            </MotionBox>

                            {/* Description Animation */}
                            <MotionText
                                color="#000"
                                fontWeight="500"
                                textAlign={{ base: "center", md: "left" }}
                                fontSize={{ base: "14px", md: "16px" }}
                                maxW="100%"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {/* error may occur */}
                                {description}
                            </MotionText>

                            {/* Button Animation */}
                            <MotionButton
                                marginTop="20px"
                                width={buttonWidth}
                                height={buttonHeight}
                                justifyContent="space-between"
                                alignItems="center"
                                bg="white"
                                color="#3F77A5"
                                borderRadius="20px"
                                _hover={{ bg: "#2c5a7a", color: "white" }}
                                px={{ base: "12px", md: "15px", lg: "20px" }}
                                display="flex"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                Book Demo
                                <Box
                                    as="span"
                                    display="flex"
                                    alignItems="center"
                                    marginLeft="8px"
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                                            fill="#3F77A5"
                                        />
                                    </svg>
                                </Box>
                            </MotionButton>
                        </Box>
                    </Flex>
                </Flex>
                
                <Flex
                    // justifyContent="space-between"
                    alignItems="flex-end" // Changed to align bottoms
                    direction={{ base: "column", md: "row" }}
                    mt={{ base: "5%", md: "-10%" }}
                    gap="3"
                    width="100%"
                    position="relative"
                    zIndex="1" // I added this code
                >
                    {/* Small image (35% width) - Fixed height */}
                    <Box
                        flex="0 0 30%"
                        display={{ base: "none", md: "flex" }}
                        backgroundColor="white"
                        height={{ base: "200px", md: "250px", lg: "336px" }}
                        width={{ base: "200px", md: "250px", lg: "336px" }}
                        aspectRatio={1}
                        borderRadius="24px"
                        flexShrink="0"
                    />
                    <Box
                        width="100%"
                        height="65%"
                        borderRadius="20px"
                    >

                        {/* Large image (60% width) - Will extend upward */}
                        <MotionImage
                            src={`${process.env.PUBLIC_URL}/assets/${image}`}
                            // error may occur
                            // set the alt text
                            alt="alt text"
                            // flex="0 0 68%"
                            width="100%"
                            height="65%"
                            backgroundColor="white"
                            borderRadius="24px"
                            flexShrink="1"
                            initial="hidden"
                            whileInView="visible"
                            variants={popAnimation}
                            viewport={{ once: false }} // Ensures animation runs every time the image enters the viewport
                        />
                    </Box>
                </Flex>
            </Box>
            <AdvancedSurveillance />
        </PageContentWrapper></>
}


export default OurServings;