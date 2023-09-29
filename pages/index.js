import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1} mt={5}>
        <Heading as="h2" variant="page-title">
          Клуб Інженерії та Розробки Програмного Забезпечення
        </Heading>
        <p>
          Державний університет інформаційно-комунікаційних технологій
        </p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="250px"
          h="250px"
          mt={5}
          display="inline-block"
          borderRadius="25"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/man.png"
            alt="image"
            borderRadius="none"
            width="250"
            height="250"
          />
        </Box>
      </Box>
    </Box>
    <br />
    <Section delay={0.1}>
      <Paragraph>
        Ласкаво просимо до Клубу інженерії та розробки програмного забезпечення,
        живої спільноти ентузіастів!
      </Paragraph>
      <Heading as="h2" variant="section-title">
        Хто ми ?
      </Heading>
      <Paragraph>
        Ми є групою зацікавлених людей, які поділяють спільний інтерес до
        динамічного світу розробки програмного забезпечення.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h2" variant="section-title">
        Наша місія ?
      </Heading>
      <Paragraph>
        Наша місія - створити відкрите та дружнє навчальне середовище для
        ентузіастів, які цікавляться розробкою програмного забезпечення. Ми
        вітаємо різноманітність і поєднуємо людей, незалежно від рівня їхнього
        досвіду та фахового фону. У нашому клубі ви зможете поліпшити свої
        навички в розробці ПЗ, залишатися в тренді і спільно працювати над
        цікавими проектами, які вирішують реальні проблеми. Ми створюємо
        спільноту, де вас заохочують до інновацій, творчості та постійного
        навчання. У нас ви знайдете друзів та невичерпний джерело інспірації для
        вашого розвитку.
      </Paragraph>
    </Section>
    <br />

    <Section delay={0.3}>
      <Heading as="p" variant="section-title">
        Співпраця в проектах
      </Heading>
      <Paragraph>
        Маєте ідею для проекту або бажаєте долучитися до існуючих проектів з
        відкритим кодом? Приєднуйтеся до наших проектних команд, де ви зможете
        не лише набути практичний досвід, але й знайти нових друзів і спільно
        працювати над цікавими завданнями. Це відмінний спосіб побудувати своє
        портфоліо та навчатися, долаючи реальні виклики розробки разом з
        однодумцями. У нашій спільноті ми вітаємо кожного, хто бажає долучитися
        та знайти нові можливості для співпраці та навчання.
      </Paragraph>
      <br />

      <Heading as="p" variant="section-title">
        Розвиток
      </Heading>
      <Paragraph>
        У нас є оточення, яке ми разом будуємо, і якщо у вас виникнуть будь-які
        питання, ваші однодумці готові допомогти, поділитися відповідями та
        джерелами інформації. Ми завжди тут, щоб підтримати один одного і робити
        навчання цікавим і приємним досвідом.
      </Paragraph>
      <br />

      <Heading as="p" variant="section-title">
        Мережa
      </Heading>
      <Paragraph>
        Спілкуйтеся з однокурсниками, які ділять вашу пристрасть до розробки
        програмного забезпечення. Розбудовуйте значущі стосунки, обмінюйтесь
        ідеями та співпрацюйте над захоплюючими проектами. У нас чудова
        спільнота для того, щоб знайти нових друзів та розвивати свої навички
        разом.
      </Paragraph>
    </Section>
    <br />

    <Section delay={0.3}>
      <Heading as="h2" variant="section-title">
        Хто може приєднатися ?
      </Heading>
      <Paragraph>
        Наш клуб відкритий для студентів будь-якого рівня досвіду, від
        початківців до досвідчених програмістів. Ми вітаємо різноманітність
        фонів, спеціальностей та рівнів кваліфікації. Якщо ви зацікавлені в
        розробці програмного забезпечення, ви знайдете тут свій дім.
      </Paragraph>
      <br />

      <Heading as="h2" variant="section-title">
        Як приєднатися ?
      </Heading>
      <Heading as="p" variant="section-title">
        - Заповніть заявку
      </Heading>
      <Paragraph>
        Hатисніть "Вступити в клуб" на сайті або у нашому телеграм боті, щоб
        заповнити заявку на членство в нашому клубі.
      </Paragraph>
      <br />
      <Heading as="p" variant="section-title">
        Після подання заявки наш клуб незабаром зв'яжеться з вами!
      </Heading>

      <Paragraph>
        Ви отримаєте офіційний документ членства, який буде підписаний
        Президентом, Віце-президентом, aбо Секретарем клубу, що підтверджує вашу
        належність до нашого клубу розробників програмного забезпечення. Також
        ви будете додані до наших приватних чатів клубу. Лесгоy!
      </Paragraph>
      <br />

      <Paragraph>
        Ми створюємо особливу атмосферу, і якщо у вас з'являться питання, ваші
        старшокурсники завжди готові допомогти, дати відповіді та поділитися
        корисними ресурсами інформації. Ми тут, як друзі, співмешканці,
        ентузіасти, які цікавляться тим самим.
      </Paragraph>

      <br />

      <Paragraph>
        Давайте кодувати, вчитися, впроваджувати інновації та будувати майбутнє
        разом! Лесгоy!
      </Paragraph>
    </Section>
    <br />

    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={5}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Якщо у вас виникли запитання - перейдіть до нашого телеграм-бота для
        отримання додаткової інформації
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Ми в мережі
        </Heading>
        <List style={{ textAlign: "center" }}>
          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://t.me/seadclub_bot" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<FaTelegram />}
              >
                Бот
              </Button>
            </Link>
          </ListItem>
          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://t.me/seadclub" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<FaTelegram />}
              >
                Kанал
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://github.com/seadclub" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
