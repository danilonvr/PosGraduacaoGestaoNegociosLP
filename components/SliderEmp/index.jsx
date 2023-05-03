import React from "react";
import Slider from "react-slick";
import { Box, Image, useColorModeValue, Flex } from "@chakra-ui/react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin: 0 -80px;
  }
`;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "9999px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function SliderEmp() {
    
  const settings = {
   
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <StyledSlider {...settings}>
        <Flex justifyContent={"center"} align={"center"}>
          <Image
            src="/assets/slick/1.jpeg"
            w={"100px"}
            h={"100px"}
            
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/2.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/3.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/4.jpeg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/5.jpeg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/6.jpeg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/7.jpeg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/8.jpeg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/9.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/10.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/11.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/12.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
        <Flex justifyContent={"center"}>
          <Image
            src="/assets/slick/13.jpg"
            w={"100px"}
            h={"100px"}
          />
        </Flex>
      </StyledSlider>
    </Box>
  );
}
