import React from "react";
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
function AboutFDC() {
  return (
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
              Os guias da jornada
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
                Há mais de 40 anos, a Fundação Dom Cabral se destaca em seu
                campo de atuação pela capacidade de empreender uma leitura
                detalhada das reais necessidades dos clientes.
              </Text>
              <Text>
                É exatamente essa visão ampla e aprofundada que permite à FDC
                formular Soluções Educacionais adequadas a cada caso, promovendo
                melhores resultados e novas oportunidades de desenvolvimento
                para indivíduos e organizações.
              </Text>
              <Text>
                Nossa filosofia respeita a identidade das organizações, a
                peculiaridade dos segmentos em que atuam e a dinâmica dos
                mercados.
              </Text>
              <Text>
                Unindo teoria e prática, a FDC promove a capacitação de
                executivos, gestores públicos, empresários e organizações. A
                parceria com escolas internacionais e professores com larga
                experiência de mercado e rica vivência organizacional
                possibilita uma troca intensa e produtiva durante os Programas.
              </Text>
              <Text>
                São Soluções Educacionais sustentadas por alianças estratégicas
                e acordos de cooperação com renomadas instituições nos Estados
                Unidos, na China, Índia, Rússia e em outros países da Europa e
                América Latina
              </Text>
            </Box>
            <Text />
          </Box>
          <Box w="full" h="full" display={"flex"} justifyContent={"center"}>
            <Image src="/assets/img/guia-img.png" />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default AboutFDC;
