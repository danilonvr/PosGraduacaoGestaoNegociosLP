import React from "react";
import Slider from "react-slick";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .logo-slide {
    margin: 0 -80px;
  }
  .slick-slide {
    display: flex;
    align-items: center;
  }
`;

export default function SliderEmp() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <Box p={4}>
      <Text textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"} mb={8}>
        Empresas que já participaram
      </Text>
      <StyledSlider {...settings}>
        <Flex justifyContent={"center"} align={"center"}>
          <Image
            src="/assets/logo/LogoBioformula.png"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image src="/assets/logo/LogoIluminar.png" w={"100px"} h={"100px"} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/logo/LogoPersonalitte.png"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image src="/assets/logo/LogoAçofyber.jpg" w={"100px"} h={"100px"} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image src="/assets/logo/Logokairos.webp" w={"100px"} h={"100px"} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image src="/assets/logo/LogoLaianny.jpg" w={"100px"} h={"100px"} />
        </Flex>
      </StyledSlider>
    </Box>
  );
}
