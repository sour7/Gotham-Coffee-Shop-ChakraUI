import { Box, Grid,  Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.800" color="white" py={12}  bottom="0" w="100%" h="50vh"  >
      <Grid
        maxW="1140px"
        mx="auto"
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 4, md: 8 }}
        px="20px"
        textAlign="center"
      >
        <Link to="/link1">Link 1</Link>
        <Link to="/link2">Link 2</Link>
        <Link to="/link3">Link 3</Link>
        <Link to="/link4">Link 4</Link>
        <Link to="/link5">Link 5</Link>
        <Link to="/link6">Link 6</Link>
      </Grid>
     
      <Text fontSize="sm" mt={8} textAlign="center">
        &copy; {currentYear} Gotham Coffee Shop. All rights reserved.
      </Text>
    </Box>
  );
}
