import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Feedbacks from "@/components/Feedbacks";
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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Pricing from "@/components/Pricing";

export default function SplitScreen() {
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: "Titulo",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
  });

  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");

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
              você vai aprender com uma instituição de excelência mundial e
              fazer sua empresa subir de patamar e ser mais relevante no
              mercado!
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                width={"full"}
                h={"12"}
                rounded={"lg"}
                bg={"blue.800"}
                color={"white"}
                fontWeight={"bold"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Quero fazer a minha inscrição!
              </Button>
            </Stack>
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
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={20}
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
              md: 2,
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
            <Box>
              <Text
                as={"h2"}
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
                textShadow="2px 0 currentcolor"
              >
                Clear overview for efficient tracking
              </Text>
              <Text
                as={"p"}
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
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </Text>
              <Text />
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                size="lg"
                bg="gray.900"
                _dark={{
                  bg: "gray.700",
                }}
                _hover={{
                  bg: "gray.700",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
              >
                Learn More
              </Button>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
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
            <Box
              order={{
                base: "initial",
                md: 2,
              }}
            >
              <Text
                as={"h2"}
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
                Decide how you integrate Payments
              </Text>
              <Text
                as={"p"}
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
                Love to code? Next to our ready-made and free plugins you can
                use our expansive yet simple API; decide how you integrate
                Payments and build advanced and reliable products yourself from
                scratch.
              </Text>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
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
            <Box>
              <Text
                as={"h2"}
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
                textShadow="2px 0 currentcolor"
              >
                Clear overview for efficient tracking
              </Text>
              <Text
                as={"p"}
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
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </Text>
              <Text />
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                size="lg"
                bg="gray.900"
                _dark={{
                  bg: "gray.700",
                }}
                _hover={{
                  bg: "gray.700",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
              >
                Learn More
              </Button>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>This is the headline</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Feedbacks />
      <Pricing />
      <Footer />
    </>
  );
}
