import React, { useState } from 'react'
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HeadingAnimation from '../../components/Animation/Text/HeadingAnimation'

const AdvancedSurveillance = () => {
  const [activeCard, setActiveCard] = useState(0)

  // Data for the component
  const title1 = 'Advanced Surveillance for All.'
  const subtitle = 'Enterprise'
  const description =
    'Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.'

  const cards = [
    {
      type: 'open',
      label: 'Enterprise',
      description:
        'Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.',
      image: './assets/rectangle1.svg',
    },
    {
      type: 'squeezed',
      label: 'Government',
      description: 'Government.',
      image: './assets/govsl.svg',
    },
    {
      type: 'squeezed',
      label: 'Consumers',
      description: 'General Consumer',
      image: './assets/gensl.svg',
    },
  ]

  // Handle navigation
  const handleNavigation = (direction) => {
    setActiveCard((prev) =>
      direction === 'left'
        ? prev === 0
          ? cards.length - 1
          : prev - 1
        : prev === cards.length - 1
          ? 0
          : prev + 1
    )
  }

  return (
    <>


      <Flex
        backgroundColor="#E7E7E7"
        height="758px"

        fontWeight="600"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* White Box */}
        <Box
          width="100%"
          height="758px"
          borderRadius="20px"
          bgColor="white"
          position="relative"
          overflow="hidden"
        >
          {/* Title Section */}
          <Box
            marginRight="70px"
            marginTop="55px"
            position="relative"
            zIndex="2"
            display="flex"
            justifyContent="flex-end" // Right-align the text
          >
            <HeadingAnimation>
              <Text
                fontSize="36px"
                fontWeight="600"
                letterSpacing="-0.54px"
                color="black"
              >
                Advanced{' '}
                <Text as="span" color="#3F77A5">
                  Surveillance for All.
                </Text>
              </Text>
            </HeadingAnimation>
          </Box>

          {/* Ellipses */}
          <Box
            position="absolute"
            top="37px"
            left="933px"
            opacity="1"
            zIndex="2"
          >
            <Image
              src="./assets/Ellipse33.svg"
              alt="Ellipse 33"
              width="408px"
              height="408px"
            />
          </Box>
          <Box
            position="absolute"
            top="336px"
            left="70px"
            opacity="1"
            zIndex="2"
          >
            <Image
              // src='./assets/Ellipse36.svg'
              alt="Ellipse 36"
              width="408px"
              height="408px"
            />
          </Box>
          {/* Ellipses */}
          <Box
            position="absolute"

            top="37px"
            left="933px"
            opacity="1"
            zIndex="2"
          >
            <Image
              src='./assets/Ellipse33.svg'
              alt="Ellipse 33"
              width="408px"
              height="408px"
            />
          </Box>
          <Box
            position="absolute"
            top="336px"
            left="70px"
            opacity="1"
            zIndex="2"
          >
            <Image
              src='./assets/Ellipse36.svg'
              alt="Ellipse 36"
              width="408px"
              height="408px"
            />
          </Box>

          {/* Cards Section */}
          <Flex
            marginTop="70px"
            marginLeft="70px"
            marginRight="70px"
            gap="15px"
            position="relative"
            zIndex="2"
          >
            {/* Navigation Buttons */}
            <Flex
              position="absolute"
              top="-50px" // Move buttons above the cards
              right="0" // Align buttons to the right
              gap="2px"
              zIndex="2"
            >
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#E7E7E7"
                _hover={{ bgColor: '#e0e0e0' }}
                onClick={() => handleNavigation('left')}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#E7E7E7"
                _hover={{ bgColor: '#e0e0e0' }}
                onClick={() => handleNavigation('right')}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
            </Flex>

            {cards.map((card, index) => (
              <Box
                key={index}
                width={activeCard === index ? '80%' : '20%'}
                height="439px"
                borderRadius="24px"
                bgColor="#E7E7E7"
                _hover={{ cursor: 'pointer' }}
                transition="width 0.3s ease"
                position="relative"
                onClick={() => setActiveCard(index)}
              >
                {activeCard === index ? (
                  // Expanded Card Content
                  <Flex>
                    {/* Left Frame (Description) */}
                    <Box
                      width="272px"
                      height="439px"
                      padding="20px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between" // Align content to the top
                    >
                      <Box><Text
                        fontSize="16px"
                        fontWeight="700"
                        letterSpacing="-0.24px"
                        color="black"
                      >
                        {card.label}
                        <Box
                          width="15px"
                          height="2px"
                          bgColor="#3f77a5"
                          borderRadius="2px"
                          marginTop="5px"
                        />
                      </Text>
                        <Text
                          color="#696969"
                          fontSize="14px"
                          fontWeight="600"
                          letterSpacing="-0.21px"
                          marginTop="10px"
                        >
                          {card.description}
                        </Text></Box>
                      <Link to={`/serving/${card.label}`}>
                        <Flex gap={2}>

                          <Text fontSize={{ base: "12px", md: "14px" }} fontWeight={400}>Know more</Text>
                          <Box>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.9602 12.9601C21.546 12.3743 21.546 11.4245 20.9602 10.8388L11.4143 1.29281C10.8285 0.707026 9.87876 0.707026 9.29297 1.29281C8.70719 1.8786 8.70719 2.82835 9.29297 3.41413L17.7783 11.8994L9.29297 20.3847C8.70719 20.9705 8.70719 21.9202 9.29297 22.506C9.87876 23.0918 10.8285 23.0918 11.4143 22.506L20.9602 12.9601ZM0.100586 13.3994L19.8996 13.3994V10.3994L0.100586 10.3994V13.3994Z" fill="black" />
                            </svg>
                          </Box>
                        </Flex>
                      </Link>
                    </Box>
                    {/* Right Frame (Image) */}
                    <Box
                      width="706px"
                      height="439px"
                      overflow="hidden"
                      borderRadius="24px"
                    >
                      <Image
                        src={card.image}
                        alt={card.label}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                    </Box>
                  </Flex>
                ) : (
                  // Squeezed Card - Rotated Text Inside
                  <Box
                    position="absolute"
                    bottom="28%" // Adjust this value to control vertical positioning
                    right="10%" // Adjust this value to control horizontal positioning
                    transform="rotate(-90deg)" // Rotate the text vertically
                    transformOrigin="bottom right" // Rotate around the bottom-right corner
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start" // Align dash with the start of the text
                    whiteSpace="nowrap" // Ensure text stays in one line
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="700"
                      letterSpacing="-0.24px"
                      color="black"
                    >
                      {card.label}
                    </Text>
                    <Box
                      width="15px"
                      height="2px"
                      bgColor="#3f77a5"
                      borderRadius="2px"
                      marginTop="5px"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>

          {/* "Book Demo" Button */}
          <Button
            position="absolute"
            top="653px"
            left="70px"
            height="50px"
            width="146px"
            as={Link}
            to="/contactus"
            backgroundColor="white"
            color="#3F77A5"
            fontSize="16px"
            fontWeight="600"
            borderRadius="12px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            zIndex="2"
            _hover={{ backgroundColor: '#f0f0f0' }}
          >
            Book Demo
            {/* <Image src="./assets/arrowdb.svg" alt="Arrow" width="14px" height="14px" /> */}
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
        </Box>
      </Flex>
    </>
  )
}

export default AdvancedSurveillance