import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <a href="https://github.com/kenjitheman/seadclub.co">
        <p>
          source code
        </p>
      </a>
      <br />
      &copy; {new Date().getFullYear()}{" "}
      Клуб Інженерії та Розробки Програмного Забезпечення
      <p>Державний університет інформаційно-комунікаційних технологій</p>
      <p>Bсі права захищені</p>
    </Box>
  );
};

export default Footer;
