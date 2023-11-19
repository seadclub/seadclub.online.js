import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";

const LinkItem = ({ href, path, target, children, ...props }) => {
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            py={2}
            px={4}
            bg={useColorModeValue('transparent', 'transparent')}
            outline="1px solid"
            outlineColor={useColorModeValue('gray.300', 'gray.700')}
            rounded="xl"
            color={useColorModeValue('black', 'white')}
            border="1px solid transparent"
            fontSize="lg"
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
};

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("transparent", "transparent")}
            css={{ backdropFilter: "blur(10px)" }}
            justifyContent="space-between"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue("gray.200", "gray.900")}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.xl"
                wrap="wrap"
                align="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="xl" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem
                        href="http://join.seadclub.online"
                        path={path}
                    >
                        Bступити в клуб
                    </LinkItem>
                    <LinkItem href="https://t.me/seadclub_bot" path={path}>
                        Зв'язатися з нами
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/seadclub"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        p={2}
                    >
                        <IoLogoGithub size={35} />
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                size="lg"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem
                                    as={MenuLink}
                                    href="http://join.seadclub.onlie"
                                >
                                    Bступити в клуб
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://t.me/seadclub_bot">
                                    Зв'язатися з нами
                                </MenuItem>
                                <MenuItem
                                    as={MenuLink}
                                    href="https://github.com/seadclub"
                                >
                                    Github
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/seadclub/seadclub.online"
                                >
                                    Source code
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
