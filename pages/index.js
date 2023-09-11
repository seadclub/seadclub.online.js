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

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Хто ми
      </Heading>
      <Paragraph>
        Ласкаво просимо до Клубу інженерії та розробки програмного забезпечення,
        живої спільноти ентузіастів! Ми є групою зацікавлених людей, які
        поділяють спільний інтерес до динамічного світу розробки програмного
        забезпечення.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Наша місія
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
      <br />
      <Paragraph>
        Наша спільнота створена для ентузіастів та всіх, хто цікавиться цією
        галуззю. Тут ви знайдете дружнє середовище, де можете вільно
        обмінюватися знаннями та розвиватися в сфері технічних навичок. Ми
        пропонуємо вам можливість не лише навчатися, але й знаходити нових
        друзів та спільно працювати над захоплюючими проектами. Наша мета -
        створити відкрите і відносно вільне середовище для навчання та розвитку,
        де кожен може знайти своє місце і внести свій внесок у світ програмної
        розробки.
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
      <Heading as="h3" variant="section-title">
        Хто може приєднатися
      </Heading>
      <Paragraph>
        Наш клуб відкритий для студентів будь-якого рівня досвіду, від
        початківців до досвідчених програмістів. Ми вітаємо різноманітність
        фонів, спеціальностей та рівнів кваліфікації. Якщо ви зацікавлені в
        розробці програмного забезпечення, ви знайдете тут дім.
      </Paragraph>
      <br />

      <Heading as="h3" variant="section-title">
        Як приєднатися
      </Heading>
      <Paragraph>
        Приєднатися до клубу інженерії та розробки програмного забезпечення так
        само просто, як заповнити нашу швидку онлайн-форму заявки.
      </Paragraph>
      <br />

      <Heading as="h3" variant="section-title">
        1. Заповніть заявку
      </Heading>
      <Paragraph>
        Hатисніть "Вступити в клуб" на сайті або у нашому телеграм боті, щоб
        заповнити заявку на членство в нашому клубі. Це коротка форма, яка
        допомагає нам познайомитися з вами та вашими інтересами.
      </Paragraph>
      <br />

      <Heading as="h3" variant="section-title">
        2. Надішліть заявку
      </Heading>
      <Paragraph>
        Заповнивши форму заявки, натисніть кнопку «Надіслати». Вашу інформацію
        буде надіслано нам для перевірки.
      </Paragraph>
      <br />

      <Heading as="h3" variant="section-title">
        3. Слідкуйте за оновленнями
      </Heading>
      <Paragraph>
        Після подання заявки наш клуб незабаром зв'яжеться з вами!
      </Paragraph>
      <br />

      <Heading as="h3" variant="section-title">
        4. Приєднайтеся до клубу
      </Heading>
      <Paragraph>
        Ви отримаєте офіційний документ членства, який буде підписаний
        Президентом, Віце-президентом, aбо Секретарем клубу, що підтверджує вашу
        належність до нашого клубу розробників програмного забезпечення. Також
        ви будете додані до наших приватних чатів клубу. Ласкаво просимо на
        борт!
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
        разом!
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

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="mailto:seadclub@proton.me" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<EmailIcon />}
              >
                seadclub@proton.me
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
