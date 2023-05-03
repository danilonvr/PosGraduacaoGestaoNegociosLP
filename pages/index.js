import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Feedbacks from "@/components/Feedbacks";
import Slider from "@/components/Slider";
import AccordionComponent from "@/components/Accordion";
import AboutFDC from "@/components/AboutFDC";
import CountdownTimer from "@/components/CountdownTimer";
import NextLink from "next/link";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Container,
  SimpleGrid,
  Icon,
  HStack,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Pricing from "@/components/Pricing";
import SliderEmp from "@/components/SliderEmp";

export default function SplitScreen() {
  const targetDate = "2023-06-25T23:59:59";

  return (
    <>
      <Navbar />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"2xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as={"span"}>
                Aqui você encontra o conhecimento prático e de excelência para
                ser o gestor que sua empresa precisa que você seja!
              </Text>
              <br />{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Na Pós-graduação em Gestão de Negócios da Fundação Dom Cabral,
              você vai aprender com uma instituição de excelência mundial para
              fazer sua empresa subir de patamar e ser mais relevante no
              mercado!
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                as="a"
                href="#inscricao"
                width={"full"}
                h={"12"}
                rounded={"lg"}
                bg={"blue.700"}
                color={"white"}
                fontWeight={"bold"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Quero fazer a minha inscrição!
              </Button>
            </Stack>
            <CountdownTimer targetDate={"2023-06-25T23:59:59.000Z"} />
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      {/* SESSÕES FALADAS */}
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={{ base: 0, md: 20 }}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          shadow="xl"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              xl: 2,
            }}
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box w="full" h="full">
              <Image src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            </Box>
            <Box>
              <Text
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="gray.900"
                _dark={{
                  color: "gray.400",
                }}
                lineHeight={{
                  md: "shorter",
                }}
              >
                Frequentemente, a resposta para manter um negócio está em uma
                das três dimensões: recursos, conhecimento e coragem.{" "}
              </Text>
              <Box
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                <Text>
                  Ironicamente, muitos gestores se atentam apenas aos limites de
                  tempo e dinheiro, mas muito pouco em pessoas. Pior… e se o que
                  limita a empresa for justamente o gestor? Nem sempre as
                  práticas que funcionaram em uma empresa até o tempo atual
                  garantem o sucesso futuro.
                </Text>
                <Text>
                  Os próximos passos da organização requerem um gestor atento e
                  atualizado com o que se tem de melhor no mercado, e ter
                  ferramentas e métodos de gestão para tomar melhores decisões.
                  Portanto, é necessário buscar conhecimento. Para o
                  conhecimento de qualidade, que seja realmente útil à realidade
                  do mercado, é necessário estar no lugar onde o aprendizado é
                  levado a sério, se tem respeito pela trajetória profissional
                  do gestor, e se está rodeado por outros empreendedores e
                  executivos com o mesmo objetivo em comum.
                </Text>
                <Text>
                  Este conhecimento é fundamental na tomada de decisão, que
                  também envolve preparação, informação e especialmente coragem
                  para correr riscos e superar desafios. E você, tem coragem
                  para dar o próximo passo?
                </Text>
              </Box>
              <Text />

              <Button
                w={{
                  base: "full",
                  xl: "auto",
                }}
                size="lg"
                bg="gray.900"
                _dark={{
                  bg: "blue.700",
                }}
                _hover={{
                  bg: "gray.700",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
                fontWeight="bold"
                href="#inscricao"
              >
                Quero garantir a minha vaga!
              </Button>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 1,
            }}
            mb={24}
          >
            <Slider />
          </SimpleGrid>
        </Box>
      </Flex>
      {/* FEATURES */}
      <Box p={20}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Este programa foi desenhado para:</Heading>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Profissionais graduados em busca de autodesenvolvimento.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Pessoas que desejam alavancar a carreira, aprofundar
                  conhecimentos em gestão para liderar, empreender e/ou
                  transformar a realidade das organizações.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Gestores que querem estar atualizados nas práticas mais
                  vencedoras e atuais no mercado.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Executivos e empresários que desejam ampliar networking em um
                  espaço rodeado com outros executivos e empresários
                  compartilhando os mesmos objetivos.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Gestores que desejam aprender em um ambiente seguro para
                  trocar ideias e relatar dificuldades durante sua trajetória
                  profissional para preencher as lacunas dos resultados
                  passados.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
      <AccordionComponent />
      <Feedbacks />
      <SliderEmp />
      <AboutFDC />
      <Pricing />
      <Footer />
    </>
  );
}
