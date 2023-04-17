import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
   <Box>
     <Box textAlign="center" maxW="700px" mx="auto" py="10" w="80%">
      <Heading as="h1" fontSize={{ base: "5xl", md: "6xl" }}>
        About Us
      </Heading>
      <Text fontSize={{ base: "lg", md: "xl" }} my="6">
        We are a coffee shop that specializes in small-batch, artisanal coffee.
        Our beans are sourced from the best farms around the world and are
        roasted to perfection to bring out their unique flavor profiles.
      </Text>
      <Box display="flex" justifyContent="center" mt="6">
       <Link to="/">
       <Button
          size={{ base: "sm", md: "md" }}
          mr={{ base: "2", md: "4" }}
          colorScheme="teal"
        >
          Continue Shopping
        </Button>
       </Link>
        <Button size={{ base: "sm", md: "md" }} colorScheme="gray">
          Learn More
        </Button>
      </Box>
    </Box>
   </Box>
  );
};

export default About;
