import React from "react";
import {
  Button,
  Flex,
  Stack,
  Text,
  Box,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
function Pricing() {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");

  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{
              color: "brand.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <Text
            as={"span"}
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{
        bg: "gray.600",
      }}
      p={{ base: 0, md: 10 }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}
      >
        <Box pt={20} rounded="md" bg={topBg} id="inscricao">
          <Box w="full" px={[10, , 4]} mx="auto">
            <Text
              as="h2"
              mb={2}
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              fontWeight="bold"
              lineHeight="tight"
              color={useColorModeValue("gray.700", "white")}
              align={{
                base: "center",
                md: "center",
              }}
            >
              Essa é a nossa oferta pra você
            </Text>
          </Box>
          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex
              rounded="md"
              mx={10}
              bg={bottomBg}
              shadow="xl"
              mb="100px"
              textAlign="left"
              direction={{
                base: "column",
                lg: "row",
              }}
            >
              <Stack spacing={8} p="45px" flex="0.7">
                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  Informações Complementares
                </Text>
                <Flex align="center">
                  <Flex
                    ml="15px"
                    w="full"
                    borderTopWidth="1px"
                    h="3px"
                    borderTopColor={topBg}
                  />
                </Flex>
                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                  <Feature>Temos política de desconto para grupos!</Feature>
                  <Feature>
                    Pagamento entre 4 a 24 meses incidem juros de 0,65% ao mês*{" "}
                  </Feature>
                  <Feature>
                    O curso será realizado na modalidade presencial, com
                    encontros em São Luís, no Maranhão.
                  </Feature>
                  <Feature>
                    Caso tenha alguma dúvida sobre o programa, entre em contato
                    com o INAED, Associado da Fundação Dom Cabral no Maranhão e
                    Piauí.
                  </Feature>
                </SimpleGrid>
              </Stack>
              <Stack
                p="45px"
                flex="0.3"
                justify="center"
                align="center"
                bg="#F9FAFB"
                _dark={{
                  bg: "gray.900",
                }}
                borderRightRadius="md"
              >
                <Text fontSize="xl" fontWeight="semibold">
                  Preço Exclusivo
                </Text>
                <Flex
                  align="center"
                  fontSize={{
                    base: "xl",
                    md: "5xl",
                  }}
                  fontWeight={["bold", , "extrabold"]}
                  lineHeight="tight"
                >
                  R$ 39.590,10
                  <Text
                    ml={2}
                    fontSize={{
                      base: "lg",
                      md: "2xl",
                    }}
                    fontWeight="medium"
                    color="gray.500"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {" "}
                    À vista
                  </Text>
                </Flex>
                <Stack spacing={6}>
                  <Text
                    textDecor="underline"
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    Parcelado em até 3x sem juros, com desconto de 10%
                  </Text>
                  <Link
                    as={NextLink}
                    href="https://inscricao.fdc.org.br/FichaInscricao.aspx?CrmLanguage=pt&CrmProg=%7b0809911C-341D-E111-BCE3-00505698001D%7d&CrmEd=855c1add-30dd-ed11-b221-00505698001d "
                  >
                    <Button
                      w="300px"
                      colorScheme="blue"
                      py={6}
                      width={"full"}
                      fontWeight={"bold"}
                    >
                      Quero me inscrever!
                    </Button>
                  </Link>
                  <Box align="center" fontWeight="semibold">
                    Início em: 25/08/2023
                    <Text
                      ml={2}
                      color="gray.500"
                      _dark={{
                        color: "gray.400",
                      }}
                      fontWeight="medium"
                    >
                      Não perca!
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Pricing;
