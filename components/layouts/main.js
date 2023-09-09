import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="sead's club homepage" />
        <meta name="author" content="Клуб інженерії та розробки програмного забезпечення" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" />
        <meta property="og:site_name" content="Клуб інженерії та розробки програмного забезпечення" />
        <meta name="og:title" content="Клуб інженерії та розробки програмного забезпечення" />
        <meta property="og:type" content="website" />
        <title>Клуб інженерії та розробки програмного забезпечення</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        <AnimatePresence initial={true} exitBeforeEnter={false} mode="wait">
          {children}
        </AnimatePresence>

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
