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
          w="200px"
          h="200px"
          mt={5}
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/man.png"
            alt="profile image"
            borderRadius="full"
            width="200"
            height="200"
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
        живої спільноти ентузіастів технологій і майбутніх інженерів програмного
        забезпечення! Ми є групою зацікавлених людей, які поділяють спільний
        інтерес до динамічного світу розробки програмного забезпечення.
        Незалежно від того, чи ви досвідчений програміст, чи новачок, який хоче
        дослідити захоплюючу сферу програмування, цей клуб є ідеальним місцем
        для вас.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Наша місія
      </Heading>
      <Paragraph>
        Наша місія полягає в створенні спільного навчального середовища, де
        учасники можуть покращити свої навички розробки програмного
        забезпечення, бути в курсі галузевих тенденцій і працювати над
        захоплюючими проектами, які вирішують проблеми реального світу. Ми
        прагнемо створити сприятливу спільноту, яка заохочує інновації,
        креативність і навчання впродовж життя.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h2" variant="section-title">
        Що ми пропонуємо
      </Heading>

      <Heading as="p" variant="section-title">
        Семінари та навчальні посібники
      </Heading>

      <Paragraph>
        Mи регулярно проводитимемо практичні семінари та навчальні посібники з
        широкого кола тем розробки програмного забезпечення. Ми надаємо
        учасникам можливість розширити свої технічні знання, починаючи від
        курсів програмування та закінчуючи поглибленими сесіями з мов
        програмування, веб-розробки, розробки тощо.
      </Paragraph>

      <Heading as="p" variant="section-title">
        Співпраця в проектах
      </Heading>
      <Paragraph>
        У вас є ідея для проекту або ви бажаєте зробити внесок у існуючі проекти
        з відкритим кодом? Приєднуйтеся до наших проектних команд, щоб отримати
        практичний досвід і співпрацювати з однодумцями. Це чудовий спосіб
        створювати своє портфоліо та вчитися на реальних викликах розвитку.
      </Paragraph>

      <Heading as="p" variant="section-title">
        Хакатони та змагання з кодування
      </Heading>
      <Paragraph>
        Перевірте свої навички на хакатонах і змаганнях із програмування. Ці
        події — це не лише розвага, але й можливість виграти призи та визнання
        ваших навичок кодування.
      </Paragraph>

      <Heading as="p" variant="section-title">
        Розвиток кар'єри
      </Heading>
      <Paragraph>
        Mи надамо ресурси та рекомендації для розвитку кар'єри, включаючи
        семінари з резюме, підготовку до співбесід і можливості стажування/праці
        в індустрії технологій.
      </Paragraph>

      <Heading as="p" variant="section-title">
        Мережa
      </Heading>
      <Paragraph>
        Cпілкуйтеся з однокурсниками, які поділяють вашу пристрасть до розробки
        програмного забезпечення. Будуйте значущі стосунки, обмінюйтеся ідеями
        та співпрацюйте над захоплюючими проектами.
      </Paragraph>
    </Section>

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

      <Heading as="h3" variant="section-title">
        Як приєднатися
      </Heading>
      <Paragraph>
        Приєднатися до клубу інженерії та розробки програмного забезпечення так
        само просто, як заповнити нашу швидку онлайн-форму заявки.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        1. Заповніть заявку
      </Heading>
      <Paragraph>
        Hатисніть надане посилання Google Forms, щоб заповнити заявку на
        членство в нашому клубі. Це коротка форма, яка допомагає нам
        познайомитися з вами та вашими інтересами в розробці програмного
        забезпечення.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        2. Надішліть заявку
      </Heading>
      <Paragraph>
        Заповнивши форму заявки, натисніть кнопку «Надіслати». Вашу інформацію
        буде надіслано нам для перевірки.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        3. Слідкуйте за оновленнями
      </Heading>
      <Paragraph>
        Після подання заявки наш клуб незабаром зв'яжеться з вами! Ми зв’яжемося
        з вами, щоб надати більше інформації про майбутні події, зустрічі та
        можливості взаємодії з клубом.
      </Paragraph>

      <Heading as="h3" variant="section-title">
        4. Приєднайтеся до клубу
      </Heading>
      <Paragraph>
        Kоли ви отримаєте наш контакт, ви офіційно станете частиною Клубу
        розробників програмного забезпечення. Ласкаво просимо на борт!
      </Paragraph>

      <Heading as="h3" variant="section-title">
      </Heading>
      <Paragraph>
        Залишайтеся на зв’язку з нами через наші канали соціальних мереж і
        інформаційні бюлетені електронною поштою, щоб бути в курсі всіх наших
        цікавих заходів і проектів. Ми з нетерпінням чекаємо, що ви станете
        членом нашої спільноти технічно підкованих!
      </Paragraph>

      <Heading as="h3" variant="section-title">
      </Heading>
      <Paragraph>
        Давайте кодувати, вчитися, впроваджувати інновації та будувати майбутнє
        разом!
      </Paragraph>
    </Section>

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
            <Link href="https://t.me" target="_blank">
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
