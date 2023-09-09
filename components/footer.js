import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Клуб Інженерії та Розробки Програмного Забезпечення | Bсі права захищені
    </Box>
  )
}

export default Footer
