import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            <a href="https://github.com/seadclub/seadclub.online">
                <p>
                    source code
                </p>
            </a>
            <br />
            &copy; {new Date().getFullYear()}{" "}
            Клуб Інженерії Програмного Забезпечення та Цифрових Технологій
            <p>Державний університет інформаційно-комунікаційних технологій</p>
            <p>Bсі права захищені</p>
        </Box>
    );
};

export default Footer;
