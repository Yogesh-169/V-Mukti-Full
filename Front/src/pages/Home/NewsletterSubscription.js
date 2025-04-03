import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  Icon,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon, Divider } from "@chakra-ui/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SubscriptionBanner from "../../components/SubscriptionBanner";

const PhoneIcon = ({ mr = "10px", w = "21px", h = "21px" }) => (
  <Box
    as="svg"
    width={w}
    height={h}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    mr={mr}
  >
    <path
      d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z"
      fill="#3F77A5"
    />
  </Box>
);

const whoWeAreLinks = [
  { text: "About Us", path: "/whoweare" },
  { text: "Event Spotlight", path: "/whoweare/eventspotlight" },
  { text: "Social Impact", path: "/whoweare/socialimpact" },
  { text: "Achievements", path: "/whoweare/achievements" },
  { text: "Blogs", path: "/whoweare/blogs" },
  { text: "Careers", path: "/whoweare/careers" },
  { text: "Help Desk", path: "/whoweare/helpdesk" },
];

const policyLinks = [
  { text: "Terms & Condition", path: "/whoweare/terms-and-condition" },
  { text: "Trademark Policy", path: "/whoweare/trademark-policy" },
  { text: "Warranty Service", path: "/whoweare/warranty-service" },
  { text: "Warranty Policy", path: "/whoweare/warranty-policy" },
  { text: "Privacy Policy", path: "/whoweare/privacy-policy" },
];

const ourServingsLinks = [
  { text: "Enterprise", path: "/serving/enterprise" },
  { text: "Government", path: "/serving/government" },
  { text: "General Consumers", path: "/serving/generalconsumers" },
];

const ourSolutionsLinks = [
  { text: "VMS", path: "/solutions/vms" },
  { text: "EMS", path: "/solutions/ems" },
  { text: "ICCC", path: "/solutions/iccc" },
  { text: "AI Optimized Cloud Services", path: "/solutions/ai-cloud-services" },
  {
    text: "Generative AI in Video Surveillance",
    path: "/solutions/generative-ai-surveillance",
  },
  {
    text: "AI-Powered Surveillance Cameras",
    path: "/solutions/ai-surveillance-cameras",
  },
  {
    text: "Flying Squad Vehicle (FSV)",
    path: "/solutions/flying-squad-vehicle",
  },
  { text: "Live Webcasting & Streaming", path: "/solutions/live-webcasting" },
];

const industriesWeServeLinks = [
  { text: "Healthcare Industry", path: "/industries/healthcareindustry" },
  { text: "Education Industry", path: "/industries/educationindustry" },
  {
    text: "Border Security Industry",
    path: "/industries/bordersecurityindustry",
  },
  { text: "Election Industry", path: "/industries/election" },
  { text: "Banking Industry", path: "/industries/bankingindustry" },
  {
    text: "Transportation Industry",
    path: "/industries/transportationindustry",
  },
  {
    text: "City Monitoring Industry",
    path: "/industries/citymonitoringindustry",
  },
  { text: "Retailer Industry", path: "/industries/retailindustry" },
  { text: "Manufacturing Industry", path: "/industries/manufacturingindustry" },
  { text: "Agriculture Industry", path: "/industries/agricultureindustry" },
  {
    text: "Warehousing & Logistic Industry",
    path: "/industries/warehousinglogisticindustry",
  },
  {
    text: "Sports & Entertainment Industry",
    path: "/industries/entertainmentindustry",
  },
  { text: "Hospitality Industry", path: "/industries/hospitalityindustry" },
];

const NewsletterSubscription = () => {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServingsOpen, setIsServingsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      console.log("Subscribed with email:", email);
    } else {
      alert("Please enter a valid email address.");
    }
  };
  const buttonWidth = useBreakpointValue({
    base: "120px",
    md: "130px",
    lg: "146px",
  });
  const buttonHeight = useBreakpointValue({
    base: "40px",
    md: "45px",
    lg: "50px",
  });

  return (
    <>
      <Box
        padding="4% 2% 1% 2%"
        // fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight={600}
        bg={"#E7E7E7"}
      >
        {/* Subscription Banner */}
        <SubscriptionBanner />

        {/* Information Section */}
        <Flex flexWrap="wrap" gap="20px" mb="30px" width={{ base: "100%" }} mt={{base:"5%", md:"0px"}}>
          {/* Who we are */}
          <Box
            position="relative"
            flex={{ base: "0 0 100%", md: "2" }}
            width={{ base: "100%" }}
          >
            {/* Main "Who we are" box */}
            <Box
              bg="white"
              borderRadius="24px"
              p="20px"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Flex justify="space-between" align="center">
                <Heading fontSize="16px" fontWeight={700}>
                  Who we are
                </Heading>
                <Box
                  display={{ base: "block", md: "none" }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  cursor="pointer"
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={isDropdownOpen ? "rotate(180)" : ""}
                  >
                    <path
                      d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Flex>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              {/* Desktop content - two columns with bullet points */}
              <Box display={{ base: "none", md: "block" }} mt="5%">
                <Flex direction="row">
                  <Box mr="30px">
                    <List spacing="10px">
                      {whoWeAreLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                          color="#696969"
                          fontSize="14px"
                          fontWeight="500"
                        >
                          •&nbsp;&nbsp;
                          <Link href={item.path}>{item.text}</Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box>
                    <List spacing="10px">
                      {policyLinks.map((item, index) => (
                        <ListItem
                          key={index}
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                          color="#696969"
                          fontSize="14px"
                          fontWeight="500"
                        >
                          •&nbsp;&nbsp;
                          <Link href={item.path}>{item.text}</Link>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Mobile dropdown content - single column without bullet points */}
            {isDropdownOpen && (
              <Box
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
                // onClick={(e) => e.stopPropagation()} // Prevent container click from bubbling
              >
                {[...whoWeAreLinks, ...policyLinks].map(
                  (item, index, array) => (
                    <Box key={index}>
                      <Link href={item.path}>
                        <Flex
                          align="center"
                          py="10px"
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        >
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="#696969"
                          >
                            {item.text} {/* Removed bullet point for mobile */}
                          </Text>
                        </Flex>
                      </Link>
                      {index !== array.length - 1 && (
                        <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%"/>
                      )}
                    </Box>
                  )
                )}
              </Box>
            )}
          </Box>

          {/* Contact Us & Our Servings */}
          <Flex
            flexDirection="column"
            flex={{ base: "0 0 100%", md: "1" }}
            minW="250px"
            gap={4}
          >
            {/* Our Servings Box with Dropdown */}
            <Box position="relative">
              {/* Main "Our Servings" box */}
              <Box
                bg="#BECEDC"
                borderRadius="15px"
                p="20px"
                width={{ base: "100%" }}
                onClick={() => setIsServingsOpen(!isServingsOpen)}
                cursor={{ base: "pointer", md: "default" }}
              >
                <Flex justify="space-between" align="center">
                  <Heading fontSize="16px" fontWeight={700}>
                    Our Servings
                  </Heading>
                  <Box
                    display={{ base: "block", md: "none" }}
                    onClick={() => setIsServingsOpen(!isServingsOpen)}
                    cursor="pointer"
                  >
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform={isServingsOpen ? "rotate(180)" : ""}
                    >
                      <path
                        d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                </Flex>
                <Box
                  width="17px"
                  height="2px"
                  borderRadius="2px"
                  mt="1%"
                  bg="#3F77A5"
                />

                {/* Desktop content - always visible */}
                <Box display={{ base: "none", md: "block" }} mt="5%">
                  <List spacing="10px">
                    {ourServingsLinks.map((item, index) => (
                      <ListItem
                        key={index}
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        fontSize="14px"
                        fontWeight="500"
                      >
                        •&nbsp;&nbsp;
                        <Link href={item.path}>{item.text}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>

              {/* Mobile dropdown content - appears outside main box */}
              {isServingsOpen && (
                <Box
                  position={{ base: "relative", md: "absolute" }}
                  width="100%"
                  bg="white"
                  borderRadius="10px"
                  mt="10px" // Adjust to overlap slightly with main box
                  p="15px"
                  boxShadow="sm"
                  zIndex="1"
                >
                  {ourServingsLinks.map((item, index) => (
                    <Box key={index}>
                      <Link href={item.path}>
                        <Flex
                          align="center"
                          py="10px"
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        >
                          <Text fontSize="14px" fontWeight="500">
                            {item.text} {/* Removed bullet point */}
                          </Text>
                        </Flex>
                      </Link>
                      {index !== ourServingsLinks.length - 1 && (
                        <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%"/>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* Contact Us Box with Dropdown */}
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              flex="1"
              minW="250px"
              order="4"
              display={{ base: "none", md: "block" }}
            >
              <Heading
                fontSize="16px"
                fontWeight={700}
                // fontFamily="'Wix Madefor Display', sans-serif"
                // mb="10px"
              >
                Contact Us
              </Heading>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              <Text fontSize="14px" fontWeight="500" lineHeight="1.6" mt="5%">
                7, Arista@Eight corporate House, Near Satyam House, Behind
                Rajpath Club, Bodakdev, Ahmedabad - 380054
              </Text>
              <Flex alignItems="center" mt="15px">
                <PhoneIcon mr="10px" w="20px" h="auto" />
                <Text fontSize="14px" fontWeight="500">
                  (91+) 968 777 0000
                </Text>
              </Flex>
              <Link href={"/contactus"}>
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  justifyContent="space-between"
                  alignItems="center"
                  bg="white"
                  color="#3F77A5"
                  borderRadius="20px"
                  flexShrink={0}
                  // ml={{ base: '5px', md: '10px', lg: '15px' }}
                  mt="20%"
                  fontWeight={700}
                  gap="2"
                  _hover={{
                    bg: "#E0F2FE", // Light blue background on hover
                    color: "#2C5E84",
                  }}
                >
                  Book Demo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Button>
              </Link>
            </Box>
          </Flex>

          {/* Technologies */}
          <Box position="relative" flex="1" minW="250px">
            {/* Main "Our Solutions" box */}
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Flex justify="space-between" align="center">
                <Heading fontSize="16px" fontWeight={700}>
                  Our Solutions
                </Heading>
                <Box
                  display={{ base: "block", md: "none" }}
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  cursor="pointer"
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={isSolutionsOpen ? "rotate(180)" : ""}
                  >
                    <path
                      d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Flex>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              {/* Desktop content - always visible */}
              <Box display={{ base: "none", md: "block" }} mt="5%">
                <List spacing="10px">
                  {ourSolutionsLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      fontSize="14px"
                      fontWeight="500"
                    >
                      •&nbsp;&nbsp;
                      <Link href={item.path}>{item.text}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Mobile dropdown content - appears outside main box */}
            {isSolutionsOpen && (
              <Box
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
              >
                {ourSolutionsLinks.map((item, index) => (
                  <Box key={index}>
                    <Link href={item.path}>
                      <Flex
                        align="center"
                        py="10px"
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      >
                        <Text fontSize="14px" fontWeight="500">
                          {item.text}
                        </Text>
                      </Flex>
                    </Link>
                    {index !== ourSolutionsLinks.length - 1 && (
                      <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%"/>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Industries we serve */}
          <Box position="relative" flex="1" minW="250px">
            {/* Main "Industries we serve" box */}
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Flex justify="space-between" align="center">
                <Heading fontSize="16px" fontWeight={700}>
                  Industries we serve
                </Heading>
                <Box
                  display={{ base: "block", md: "none" }}
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  cursor="pointer"
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={isIndustriesOpen ? "rotate(180)" : ""}
                  >
                    <path
                      d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Flex>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              {/* Desktop content - always visible */}
              <Box display={{ base: "none", md: "block" }} mt="5%">
                <List spacing="10px">
                  {industriesWeServeLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      fontSize="14px"
                      fontWeight="500"
                    >
                      •&nbsp;&nbsp;
                      <Link href={item.path}>{item.text}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Mobile dropdown content - appears outside main box */}
            {isIndustriesOpen && (
              <Box
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
              >
                {industriesWeServeLinks.map((item, index) => (
                  <Box key={index}>
                    <Link href={item.path}>
                      <Flex
                        align="center"
                        py="10px"
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      >
                        <Text fontSize="14px" fontWeight="500">
                          {item.text}
                        </Text>
                      </Flex>
                    </Link>
                    {index !== industriesWeServeLinks.length - 1 && (
                      <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%"/>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* hide in desktop view */}
          <Box
            bg="#BECEDC"
            display={{ base: "block", md: "none" }}
            borderRadius="15px"
            p="20px"
            flex="1"
            minW="250px"
            order="4"
          >
            <Heading
              fontSize="16px"
              fontWeight={700}
              // fontFamily="'Wix Madefor Display', sans-serif"
              // mb="10px"
            >
              Contact Us
            </Heading>
            <Box
              width="17px"
              height="2px"
              borderRadius="2px"
              mt="1%"
              bg="#3F77A5"
            />

            <Text fontSize="14px" fontWeight="500" lineHeight="1.6" mt="5%">
              7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath
              Club, Bodakdev, Ahmedabad - 380054
            </Text>
            <Flex alignItems="center" mt="15px">
              <PhoneIcon mr="10px" w="20px" h="auto" />
              <Text fontSize="14px" fontWeight="500">
                (91+) 968 777 0000
              </Text>
            </Flex>
            <Link href={"/contactus"}>
              <Button
                width={buttonWidth}
                height={buttonHeight}
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                color="#3F77A5"
                borderRadius="20px"
                flexShrink={0}
                // ml={{ base: '5px', md: '10px', lg: '15px' }}
                mt="20%"
                fontWeight={700}
                gap="2"
                _hover={{
                  bg: "#E0F2FE", // Light blue background on hover
                  color: "#2C5E84",
                }}
              >
                Book Demo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
            </Link>
          </Box>
        </Flex>

        {/* Footer */}
        <Box>
          {/* Logo and Social Media Icons */}
          <Grid
            templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
            alignItems="center" // Vertically center content
            padding="20px 0 0 0"
            gap={4}
          >
            <Box justifySelf="start">
              {/* Logo */}
              {/* <Image src="/assets/logo.svg" alt="VMukti" h="30px" /> */}

              <svg
                width="98"
                height="30"
                viewBox="0 0 98 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.06965 3.58479L12.479 21.6141L14.5487 25.3978L24.3879 8.35597L22.7459 5.31229L21.7486 3.58479L19.6789 0H15.5395L17.6093 3.58479L20.2486 8.15701L14.5487 18.0292L6.20904 3.58479H9.75994L16.3242 14.9539L18.3938 11.3697L13.8996 3.58479L11.8297 0H7.69029H4.13939H0L2.06965 3.58479Z"
                  fill="#3F77A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.8675 0H22.8937L23.8807 1.70961L25.1225 3.86052L26.1095 5.57039L27.0966 3.86052L29.3255 0H24.8675Z"
                  fill="#DB7B3A"
                />
                <path
                  d="M42.9423 7.55076L39.3612 15.8401L35.83 7.55076H32.9287L37.9355 19.1559H40.5881L45.6115 7.55076H42.9423ZM59.6509 19.1559L59.6177 7.55076H57.41L53.1354 14.7626L48.7946 7.55076H46.573V19.1559H49.093V12.342L52.4889 17.9291H53.6992L57.1116 12.1929L57.1282 19.1559H59.6509ZM68.6228 10.2365V14.6465C68.6228 16.2878 67.7607 17.0504 66.567 17.0504C65.4231 17.0504 64.7599 16.3873 64.7599 14.8952V10.2365H62.1737V15.2765C62.1737 18.0286 63.7486 19.2886 65.9867 19.2886C67.081 19.2886 68.0757 18.8741 68.7555 18.0949V19.1559H71.2091V10.2365H68.6228ZM80.2611 19.1559H83.3945L79.3493 14.0165L83.063 10.2365H79.9793L76.1993 13.8176V6.85449H73.6131V19.1559H76.1993V16.8847L77.4427 15.6578L80.2611 19.1559ZM89.6115 16.9012C89.3297 17.1167 88.9484 17.2327 88.5671 17.2327C87.8708 17.2327 87.4563 16.8183 87.4563 16.0557V12.425H89.6779V10.4355H87.4563V8.26364H84.87V10.4355H83.494V12.425H84.87V16.0888C84.87 18.2109 86.0969 19.2886 88.2024 19.2886C88.9981 19.2886 89.7774 19.1062 90.3079 18.7249L89.6115 16.9012ZM93.06 8.99312C94.0215 8.99312 94.6681 8.36312 94.6681 7.50102C94.6681 6.70528 94.0215 6.1084 93.06 6.1084C92.0984 6.1084 91.4518 6.7384 91.4518 7.55076C91.4518 8.36311 92.0984 8.99312 93.06 8.99312ZM91.7668 19.1559H94.353V10.2365H91.7668V19.1559Z"
                  fill="#3F77A5"
                />
                <path
                  d="M95.3696 6.53786H95.7073V5.35386H96.1742V5.07861H94.9027V5.35386H95.3696V6.53786ZM98 6.53786L97.9958 5.07861H97.7182L97.1808 5.98548L96.635 5.07861H96.3557V6.53786H96.6725V5.68113L97.0994 6.38363H97.2517L97.6807 5.6623L97.6828 6.53786H98Z"
                  fill="black"
                />
              </svg>
            </Box>

            {/* Copyright Text */}

            <Box
              justifySelf="center"
              gridColumn={{ base: "span 2", md: "span 1" }}
              order={{ base: 3, md: 2 }}
            >
              <Text fontSize="12px" color="gray.600">
                Copyright © 2025, VMukti Solutions
              </Text>
            </Box>
            {/* Social Media Icons */}
            <Flex
              gap={5} // 22px spacing
              justify="center"
              justifySelf="end"
              align="center" // Ensures vertical alignment
              order={{ base: 2, md: 3 }}
            >
              {[
                {
                  svg: (
                    <svg
                      width="11"
                      height="19"
                      viewBox="0 0 11 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.31436 18.395V10.1844H10.2091L10.6424 6.98452H7.31428V4.94155C7.31428 4.01512 7.58446 3.38381 8.97991 3.38381L10.7596 3.38301V0.521091C10.4518 0.482165 9.39527 0.39502 8.16629 0.39502C5.60026 0.39502 3.84352 1.88619 3.84352 4.62474V6.98452H0.941406V10.1844H3.84352V18.3949H7.31436V18.395Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8767 0.0965034V0.0932617H13.7207L14.029 0.154854C14.2346 0.19484 14.4213 0.247242 14.589 0.312075C14.7567 0.376909 14.9191 0.452554 15.0759 0.538993C15.2328 0.625432 15.3751 0.713509 15.5028 0.80319C15.6294 0.891801 15.743 0.98581 15.8437 1.08522C15.9432 1.18571 16.0985 1.21164 16.3095 1.16302C16.5205 1.11439 16.7477 1.04685 16.9912 0.960412C17.2346 0.873972 17.4754 0.776722 17.7135 0.66866C17.9515 0.560599 18.0965 0.491989 18.1485 0.462813C18.1993 0.432569 18.2264 0.41636 18.2296 0.414188L18.2328 0.409326L18.2491 0.401221L18.2653 0.393117L18.2815 0.385013L18.2978 0.376909L18.301 0.372046L18.3059 0.368805L18.3108 0.365563L18.314 0.3607L18.3302 0.355838L18.3465 0.352596L18.3432 0.376909L18.3383 0.401221L18.3302 0.425534L18.3221 0.449847L18.314 0.466055L18.3059 0.482264L18.2978 0.506576C18.2924 0.522785 18.287 0.54439 18.2815 0.57141C18.2761 0.598429 18.2247 0.706474 18.1273 0.895578C18.03 1.08468 17.9082 1.27648 17.7621 1.47098C17.6161 1.66548 17.4851 1.81242 17.3694 1.91185C17.2525 2.01234 17.1751 2.08257 17.1373 2.12255C17.0994 2.16361 17.0534 2.20142 16.9993 2.23601L16.9181 2.2895L16.9019 2.29761L16.8857 2.30571L16.8824 2.31057L16.8776 2.31381L16.8727 2.31706L16.8694 2.32192L16.8532 2.33002L16.837 2.33813L16.8338 2.34299L16.8289 2.34623L16.824 2.34947L16.8208 2.35433L16.8175 2.3592L16.8126 2.36244L16.8078 2.36568L16.8045 2.37054H16.8857L17.3401 2.27329C17.6431 2.20846 17.9326 2.13012 18.2085 2.03827L18.6467 1.8924L18.6954 1.87619L18.7198 1.86808L18.736 1.85998L18.7522 1.85187L18.7685 1.84377L18.7847 1.83567L18.8171 1.8308L18.8496 1.82756V1.85998L18.8415 1.86322L18.8334 1.86808L18.8301 1.87294L18.8253 1.87619L18.8204 1.87943L18.8171 1.88429L18.8139 1.88915L18.809 1.8924L18.8042 1.89564L18.8009 1.9005L18.7977 1.90536L18.7928 1.9086L18.7847 1.92481L18.7766 1.94102L18.7717 1.94426C18.7695 1.9475 18.7008 2.03934 18.5656 2.2198C18.4303 2.40134 18.3573 2.49318 18.3465 2.49535C18.3356 2.49859 18.3205 2.5148 18.301 2.54397C18.2826 2.57422 18.1679 2.69471 17.9569 2.90542C17.7459 3.11613 17.5393 3.3036 17.3369 3.46785C17.1335 3.63318 17.0307 3.83632 17.0285 4.07729C17.0253 4.31717 17.0128 4.5884 16.9912 4.89095C16.9695 5.19351 16.929 5.52037 16.8694 5.87156C16.8099 6.22275 16.718 6.61985 16.5935 7.06288C16.4691 7.5059 16.3176 7.93813 16.1391 8.35955C15.9605 8.78097 15.7739 9.15916 15.5791 9.49414C15.3843 9.82912 15.2058 10.1128 15.0435 10.3451C14.8812 10.5774 14.7162 10.7962 14.5484 11.0015C14.3807 11.2068 14.1687 11.4381 13.9122 11.6952C13.6547 11.9513 13.514 12.0918 13.4902 12.1167C13.4653 12.1404 13.3593 12.229 13.1721 12.3825C12.986 12.537 12.7858 12.6915 12.5715 12.846C12.3584 12.9995 12.1625 13.1275 11.984 13.2302C11.8054 13.3328 11.5901 13.4501 11.338 13.5819C11.087 13.7148 10.8153 13.838 10.5232 13.9515C10.231 14.0649 9.92265 14.1703 9.59803 14.2675C9.27341 14.3648 8.95962 14.4404 8.65664 14.4944C8.35368 14.5485 8.01012 14.5944 7.62598 14.6322L7.04979 14.6889V14.697H5.99479V14.6889L5.85682 14.6808C5.76486 14.6754 5.68911 14.67 5.62959 14.6646C5.57009 14.6592 5.34555 14.6295 4.95601 14.5755C4.56647 14.5215 4.2608 14.4674 4.03897 14.4134C3.81716 14.3594 3.48712 14.2567 3.04889 14.1054C2.61066 13.9542 2.23572 13.8012 1.92409 13.6467C1.61355 13.4933 1.41878 13.396 1.33978 13.355C1.26187 13.315 1.17423 13.2653 1.07684 13.2059L0.930764 13.1167L0.927534 13.1119L0.922648 13.1086L0.917779 13.1054L0.914533 13.1005L0.898302 13.0924L0.882071 13.0843L0.878841 13.0794L0.873956 13.0762L0.869086 13.073L0.86584 13.0681L0.86261 13.0632L0.857725 13.06H0.849609V13.0276L0.86584 13.0308L0.882071 13.0357L0.95511 13.0438C1.0038 13.0492 1.13636 13.0573 1.35277 13.0681C1.56919 13.0789 1.79911 13.0789 2.04258 13.0681C2.28604 13.0573 2.53492 13.033 2.78919 12.9952C3.04348 12.9573 3.34375 12.8925 3.69001 12.8007C4.03627 12.7088 4.3544 12.5997 4.6444 12.4732C4.9333 12.3457 5.13888 12.2507 5.26117 12.188C5.38235 12.1264 5.56738 12.0118 5.81625 11.8444L6.18956 11.5931L6.1928 11.5883L6.19767 11.585L6.20256 11.5818L6.20579 11.5769L6.20903 11.5721L6.2139 11.5688L6.21879 11.5656L6.22202 11.5607L6.23825 11.5558L6.25448 11.5526L6.25772 11.5364L6.26259 11.5202L6.26748 11.5169L6.27071 11.5121L6.14086 11.504C6.0543 11.4986 5.97044 11.4932 5.88928 11.4878C5.80813 11.4824 5.68099 11.4581 5.50786 11.4148C5.33474 11.3716 5.14809 11.3068 4.9479 11.2203C4.74772 11.1339 4.55295 11.0312 4.36359 10.9124C4.17424 10.7935 4.03735 10.6946 3.95295 10.6158C3.86963 10.5379 3.76142 10.4277 3.62833 10.2851C3.49632 10.1414 3.38162 9.99389 3.28424 9.84262C3.18685 9.69135 3.0938 9.51681 3.00508 9.31909L2.87035 9.02409L2.86223 8.99978L2.85412 8.97547L2.84925 8.95926L2.846 8.94305L2.87035 8.94629L2.8947 8.95116L3.07323 8.97547C3.19227 8.99168 3.37893 8.99708 3.6332 8.99168C3.88749 8.98628 4.06332 8.97547 4.1607 8.95926C4.25809 8.94305 4.3176 8.93224 4.33924 8.92684L4.3717 8.91874L4.41228 8.91064L4.45286 8.90253L4.4561 8.89767L4.46097 8.89443L4.46586 8.89119L4.46909 8.88632L4.43662 8.87822L4.40416 8.87012L4.3717 8.86201L4.33924 8.85391L4.30678 8.8458C4.28514 8.8404 4.24728 8.82959 4.19316 8.81339C4.13906 8.79718 3.99299 8.73774 3.75493 8.63509C3.51689 8.53244 3.32752 8.43249 3.18685 8.33524C3.04583 8.23771 2.91137 8.13104 2.78433 8.01593C2.65772 7.89923 2.51869 7.74903 2.36719 7.56534C2.21571 7.38165 2.08046 7.16823 1.96142 6.92511C1.8424 6.68198 1.75313 6.44966 1.69361 6.22814C1.63433 6.00793 1.59522 5.78278 1.57677 5.5555L1.54754 5.21512L1.56377 5.21836L1.58 5.22322L1.59623 5.23133L1.61246 5.23943L1.62869 5.24754L1.64492 5.25564L1.8965 5.3691C2.06423 5.44474 2.27252 5.50958 2.52139 5.5636C2.77027 5.61762 2.91904 5.64735 2.96773 5.65275L3.04077 5.66085H3.18685L3.18362 5.65599L3.17873 5.65275L3.17387 5.6495L3.17062 5.64464L3.16739 5.63978L3.1625 5.63654L3.15763 5.6333L3.15439 5.62843L3.13816 5.62033L3.12193 5.61222L3.1187 5.60736L3.11381 5.60412L3.10894 5.60088L3.1057 5.59602L3.08947 5.58791L3.07323 5.57981L3.07 5.57495C3.06676 5.57277 3.02022 5.5382 2.9304 5.47121C2.84167 5.40314 2.74862 5.31508 2.65123 5.20701C2.55385 5.09895 2.45646 4.98549 2.35908 4.86664C2.26151 4.74751 2.17461 4.62005 2.09938 4.48574C2.02365 4.35068 1.94357 4.17885 1.85917 3.97031C1.77585 3.76285 1.71255 3.55376 1.66927 3.34305C1.626 3.13234 1.60165 2.92434 1.59623 2.71902C1.59082 2.51371 1.59623 2.33813 1.61246 2.19225C1.62869 2.04637 1.66115 1.88158 1.70984 1.69789C1.75854 1.5142 1.82888 1.3197 1.92084 1.11439L2.05881 0.806432L2.06692 0.782119L2.07504 0.757806L2.07992 0.754565L2.08315 0.749702L2.0864 0.74484L2.09127 0.741598L2.09615 0.74484L2.09938 0.749702L2.10263 0.754565L2.1075 0.757806L2.11238 0.761048L2.11561 0.765911L2.11886 0.770773L2.12373 0.774015L2.13185 0.790223L2.13996 0.806432L2.14485 0.809673L2.14808 0.814536L2.36719 1.05766C2.51327 1.21975 2.6864 1.40075 2.88658 1.60064C3.08677 1.80054 3.19768 1.90428 3.21931 1.91185C3.24096 1.92048 3.268 1.94533 3.30047 1.9864C3.33293 2.02639 3.44114 2.12202 3.62508 2.27329C3.80904 2.42457 4.0498 2.60017 4.34736 2.80007C4.64493 2.99996 4.97495 3.19717 5.33744 3.39167C5.69994 3.58617 6.08948 3.76176 6.50606 3.91845C6.92265 4.07513 7.21481 4.17778 7.38252 4.22641C7.55025 4.27503 7.83699 4.33716 8.24276 4.4128C8.64853 4.48845 8.95422 4.53707 9.1598 4.55868C9.36539 4.58028 9.50607 4.59272 9.5818 4.59596L9.69542 4.5992L9.69219 4.57489L9.6873 4.55057L9.65484 4.34797C9.6332 4.2129 9.62238 4.0238 9.62238 3.78067C9.62238 3.53755 9.64132 3.31334 9.67919 3.10803C9.71707 2.90271 9.77388 2.69471 9.84961 2.484C9.92536 2.27329 9.99949 2.10417 10.072 1.97668C10.1456 1.85025 10.2419 1.706 10.3609 1.54391C10.4799 1.38183 10.6341 1.21435 10.8235 1.04145C11.0128 0.868559 11.2292 0.714579 11.4727 0.579514C11.7162 0.444449 11.9407 0.341785 12.1463 0.271554C12.3519 0.201323 12.525 0.155389 12.6657 0.133783C12.8063 0.112177 12.8767 0.0997451 12.8767 0.0965034Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.849609 9.39502C0.849609 5.79988 0.849609 4.00231 1.7063 2.70757C2.08886 2.12941 2.584 1.63427 3.16216 1.25171C4.4569 0.39502 6.25447 0.39502 9.84961 0.39502C13.4447 0.39502 15.2423 0.39502 16.5371 1.25171C17.1152 1.63427 17.6104 2.12941 17.9929 2.70757C18.8496 4.00231 18.8496 5.79988 18.8496 9.39502C18.8496 12.9902 18.8496 14.7877 17.9929 16.0825C17.6104 16.6606 17.1152 17.1558 16.5371 17.5383C15.2423 18.395 13.4447 18.395 9.84961 18.395C6.25447 18.395 4.4569 18.395 3.16216 17.5383C2.584 17.1558 2.08886 16.6606 1.7063 16.0825C0.849609 14.7877 0.849609 12.9902 0.849609 9.39502ZM14.5082 9.39506C14.5082 11.9684 12.4222 14.0545 9.84883 14.0545C7.27551 14.0545 5.18943 11.9684 5.18943 9.39506C5.18943 6.82174 7.27551 4.73565 9.84883 4.73565C12.4222 4.73565 14.5082 6.82174 14.5082 9.39506ZM9.84883 12.4781C11.5515 12.4781 12.9318 11.0978 12.9318 9.39506C12.9318 7.69237 11.5515 6.31206 9.84883 6.31206C8.14614 6.31206 6.76583 7.69237 6.76583 9.39506C6.76583 11.0978 8.14614 12.4781 9.84883 12.4781ZM14.6923 5.59639C15.2969 5.59639 15.7871 5.10622 15.7871 4.50156C15.7871 3.89691 15.2969 3.40674 14.6923 3.40674C14.0876 3.40674 13.5974 3.89691 13.5974 4.50156C13.5974 5.10622 14.0876 5.59639 14.6923 5.59639Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.849609 3.31507C0.849609 2.73786 1.05232 2.26167 1.45772 1.8865C1.86312 1.51131 2.39016 1.32373 3.0388 1.32373C3.67587 1.32373 4.1913 1.50842 4.58513 1.87784C4.99053 2.2588 5.19324 2.75518 5.19324 3.36702C5.19324 3.92113 4.99633 4.38288 4.6025 4.7523C4.19711 5.13325 3.66428 5.32373 3.00405 5.32373H2.98668C2.3496 5.32373 1.83417 5.13325 1.44034 4.7523C1.04651 4.37135 0.849609 3.89227 0.849609 3.31507ZM1.07548 18.4666V6.89949H4.93262V18.4666H1.07548ZM7.06969 18.4666H10.9268V12.0077C10.9268 11.6037 10.9732 11.292 11.0658 11.0726C11.228 10.6801 11.4741 10.3482 11.8042 10.077C12.1344 9.80568 12.5484 9.67005 13.0465 9.67005C14.3438 9.67005 14.9925 10.5416 14.9925 12.2848V18.4666H18.8496V11.8345C18.8496 10.126 18.4442 8.83022 17.6334 7.9471C16.8226 7.06399 15.7512 6.62243 14.4191 6.62243C12.9249 6.62243 11.7608 7.26312 10.9268 8.54451V8.57914H10.9095L10.9268 8.54451V6.89949H7.06969C7.09285 7.26889 7.10444 8.41751 7.10444 10.3454C7.10444 12.2732 7.09285 14.9803 7.06969 18.4666Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2879 14.3747L7.22568 14.2988C5.91044 14.2723 4.59191 14.3251 3.30246 14.051C1.34089 13.6415 1.20193 11.6336 1.05652 9.94939C0.856153 7.58155 0.933719 5.17074 1.31183 2.82266C1.52528 1.50514 2.36532 0.718973 3.6644 0.633423C8.04975 0.322948 12.4643 0.359743 16.8399 0.50459C17.302 0.517869 17.7673 0.590445 18.223 0.673056C20.4723 1.07597 20.5271 3.35137 20.673 5.26683C20.8184 7.20205 20.757 9.14721 20.479 11.0693C20.2561 12.6607 19.8295 13.9952 18.0291 14.124C15.7733 14.2925 13.5693 14.4281 11.3072 14.3849C11.3073 14.3747 11.2943 14.3747 11.2879 14.3747ZM8.8997 10.3457C10.5996 9.34831 12.2671 8.36752 13.9573 7.3768C12.2542 6.37939 10.5899 5.3986 8.8997 4.40788V10.3457Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  color="blue.500"
                  _hover={{
                    color: "blue.700",
                    transform: "scale(1.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.svg}
                </Link>
              ))}
            </Flex>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default NewsletterSubscription;
