import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Feedbacks() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>O que falam sobre o programa?</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Fiquei muito feliz quando, além de ferramentas de gerenciamento,
                pude- mos ter uma abordagem mais profunda na questao emocional,
                na transformação de mentalidade do ser humano e viven- ciar com
                pessoas de várias formaçoes e experiências.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/Laianny.png"}
              name={"Dra. Laianny Carvalho"}
              title={"CEO do Instituto Dra. Laianny Carvalho"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                O curso de Pós-Graduaçáo em Gestão de Negócios da FDC me ajudou
                a refinar o foco e ser mais convicto quanto aos conteúdos da
                gestão. Aprendi a colocar em prática as ideias que eu tinha para
                os negócios da família, minimizando riscos e garantindo melhores
                resultados. Um benefício adicional é o networking.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/Buhatam.png"}
              name={"Yann Buhatem"}
              title={"Sócio Diretor do Grupo Taipan"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                O time de professores é espetacular. Todos eles têm muita
                experiência e um currículo invejável. Boa parte do curso foi
                realmente muito aplicável e era o que eu buscava em um programa
                de Pós-Graduaçao. Minha experiência foi 100% positiva.
                Recomendo.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/Carol.png"}
              name={"Caroline Brito"}
              title={"Diretora Financeira do Supermercado Universo"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
