import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Flex,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function AccordionComponent() {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={{ base: 0, md: 20 }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{ base: "100%", md: "100%" }}
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
      >
        <Accordion allowToggle allowMultiple defaultIndex={[0]}>
          <AccordionItem w={"full"}>
            <Text as="h2" fontSize={"2xl"} fontWeight={"bold"}>
              <AccordionButton
                _expanded={{ bg: "blue.400", color: "white" }}
                borderRadius={"12px"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Pré-Percurso
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel>
              <Text
                as="p"
                fontSize={"lg"}
                fontWeight={"medium"}
                mb={2}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                Acolhimento e Integração / Mindset Global{" "}
              </Text>{" "}
              <Text as="p">
                Construção Coletiva e início da jornada educacional: reuniões
                para nivelamento das informações; apresentação das diretrizes e
                metodologia do Programa; identificação dos participantes, seus
                históricos, origens e expectativas.
              </Text>
              <TableContainer my={20}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Disciplina / Atividades</Th>
                      <Th>Carga Horária</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Acolhimento e Integração / Mindset Global</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w={"full"}>
            <Text as="h2" fontSize={"2xl"} fontWeight={"bold"}>
              <AccordionButton
                _expanded={{ bg: "blue.400", color: "white" }}
                borderRadius={"12px"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Percurso 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel>
              <Text
                as="p"
                fontSize={"lg"}
                fontWeight={"medium"}
                mb={2}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                O Indivíduo na Organização e na Sociedade
              </Text>{" "}
              <Text as="p">
                O participante desenvolve competências que permitem uma reflexão
                sobre a lógica e as dinâmicas inter e intraorganizacionais, bem
                como os fatores cruciais do processo de decisão e liderança em
                contextos cada vez mais globais, diversos e interrelacionados.
              </Text>
              <TableContainer my={20}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Disciplina / Atividades</Th>
                      <Th>Carga Horária</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Líder de Si Mesmo</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Design Organizacional</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Negócios e Organizações Sustentáveis</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w={"full"}>
            <Text as="h2" fontSize={"2xl"} fontWeight={"bold"}>
              <AccordionButton
                _expanded={{ bg: "blue.400", color: "white" }}
                borderRadius={"12px"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Percurso 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel>
              <Text
                as="p"
                fontSize={"lg"}
                fontWeight={"medium"}
                mb={2}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                Visão Sistêmica da Organização
              </Text>{" "}
              <Text as="p">
                Aqui o participante deverá discutir e explorar alguns dos
                principais temas de gestão que representam aspectos críticos no
                ciclo de desenvolvimento das organizações Utilizando estudos de
                caso como eixo central, o grupo deverá analisar os desafios
                centrais para cada perfil organizacional.
              </Text>
              <TableContainer my={20}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Disciplina / Atividades</Th>
                      <Th>Carga Horária</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        Visão Sistêmica da Organização - Desafio I - Ambiente
                        Externo
                      </Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        Visão Sistêmica da Organização - Desafio II - Ambiente
                        Interno
                      </Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        Visão Sistêmica da Organização - Desafio III -
                        Crescimento e Inovação
                      </Td>
                      <Td>15 Horas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w={"full"}>
            <Text as="h2" fontSize={"2xl"} fontWeight={"bold"}>
              <AccordionButton
                _expanded={{ bg: "blue.400", color: "white" }}
                borderRadius={"12px"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Percurso 3
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel>
              <Text
                as="p"
                fontSize={"lg"}
                fontWeight={"medium"}
                mb={2}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                Desafios da Gestão
              </Text>{" "}
              <Text as="p">
                O participante terá como foco analisar os desafios da gestão por
                meio de disciplinas específicas das áreas de Estratégia,
                Finanças, Pessoas Projetos e Marketing, sendo capaz de
                compreender e construir alternativas de gestão das relações
                indivíduo trabalho organizações sociedade.
              </Text>
              <TableContainer my={20}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Disciplina / Atividades</Th>
                      <Th>Carga Horária</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Estratégia de Negócios</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Implementação Estratégica</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Organizações Ambidestras</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Governança, Risco e Compliance</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Gestão da Inovação</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Gestão de Processos e Alinhamento Organizacional</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Organizações Ambidestras</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Finanças Empresariais</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Decisões em Finanças</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Marketing Estratégico</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Proposta de Valor</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 1º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Posicionamento e Marketing Digital</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 2º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Estratégia e Adaptabilidade em Projetos</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 3º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Cultura Ágil</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 4º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Liderança Adaptativa</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 5º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>People Analytics</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 6º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w={"full"}>
            <Text as="h2" fontSize={"2xl"} fontWeight={"bold"}>
              <AccordionButton
                _expanded={{ bg: "blue.400", color: "white" }}
                borderRadius={"12px"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Percurso 4
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel>
              <Text
                as="p"
                fontSize={"lg"}
                fontWeight={"medium"}
                mb={2}
                color="gray.500"
                _dark={{
                  color: "gray.400",
                }}
              >
                Praticagem
              </Text>{" "}
              <Text as="p">
                Com foco na aplicação do conhecimento, esse Percurso contém as
                disciplinas Simulação Empresarial e Business Design A primeira
                oferece a vivência de um game robusto que promove o resgate e a
                ampliação dos conhecimentos de forma intensa e divertida Na
                segunda os participantes desenvolvem soluções para problemas
                complexos com base em métodos ágeis O produto final é um Projeto
                que pode ser desenvolvido para a própria empresa, para uma
                empresa de interesse ou, ainda, para a criação de uma nova
                empresa.
              </Text>
              <TableContainer my={20}>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Disciplina / Atividades</Th>
                      <Th>Carga Horária</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Simulação Empresarial</Td>
                      <Td>15 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>Business Design 7º encontro (Remoto ao vivo)</Td>
                      <Td>3,5 Horas</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        Business Design (Demoday) e Encerramento presenciais
                      </Td>
                      <Td>5,5 Horas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
}

export default AccordionComponent;
