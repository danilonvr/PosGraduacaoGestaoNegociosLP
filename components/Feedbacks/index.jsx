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
          direction={{ base: "column", xl: "row" }}
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
        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Estou gostando bastante! A troca de experiências, os professores
                que são convidados a dar aulas pra gente também são
                maravilhosos. Além disso, a troca que você tem com os alunos,
                com profissionais de outras áreas, sem dúvidas contribui
                bastante.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/bruna.jpg"}
              name={"Brenda Azevedo"}
              title={"CEO da Biofórmula"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                As trocas que temos dentro da turma, tanto com os professores
                quanto com os colegas, que são grandes empresários, me fez
                enxergar coisas que talvez eu sozinho, até mesmo lendo os
                melhores livros, não conseguiria enxergar. Porque uma troca como
                essa não existe em qualquer lugar.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/carlos.jpg"}
              name={"Carlos Veras"}
              title={"CEO da CAVES Engenharia"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Eu acho que é importantíssimo todo gestor buscar se atualizar.
                Todo gestor, que quer levar seu negócio a outro patamar, não
                pode parar no tempo, tem que se atualizar. Estou percebendo que
                na pós-graduação da FDC estou me atualizando e sempre sendo
                provocado.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/vitor.jpg"}
              name={"Victor Marques"}
              title={"CEO da Revest"}
            />
          </Testimonial>
        </Stack>
        <Stack
          direction={{ base: "column", xl: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                A pós me deu um arcabouço de conhecimento muito grande, tanto
                pelos nossos incríveis professores, quanto por estar junto com
                colegas que tem muito a mesma situação que eu, são sucessores ou
                donos de empresa. A gente troca muito, aprende muito com isso.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/luana.jpg"}
              name={"Luana Carvalho"}
              title={"Diretora de Ensino do Ana Neri"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Realmente me surpreendeu muito, porque essa é a minha quinta
                especialização e é totalmente além das minhas expectativas.
                Muito diferente e muito focado, realmente. Os professores nos
                mostram que há muitas coisas que a gente não está vendo aí no
                mercado e que precisa estar antenado.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/lourdiane.jpg"}
              name={"Lourdiane Sousa"}
              title={"Diretora da Açofyber"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Não tem jeito: para empreender, tem que aprender. A
                pós-graduação da FDC é determinante para quem quer ser um
                empreendedor de sucesso porque a gente aprende muito. A gente vê
                coisas que a gente fazia mas não sabia o porquê ou descobre as
                coisas que deveria fazer e nunca fizemos.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/assets/testimonials/hildene.jpg"}
              name={"Hildenê Bastos"}
              title={" CEO da Personalitté"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
