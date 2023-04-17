import { Box, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
   <Box>
     <Box maxW="700px" mx="auto" py="10" w="80%" m="auto">
      <Heading as="h1" mb="6">
        Contact Us
      </Heading>
      <Text mb="6">
        Have a question or feedback? We'd love to hear from you. Please fill out
        the form below and we'll get back to you as soon as possible.
      </Text>
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Name" mb="4" />
        <Input type="email" placeholder="Email" mb="4" />
        <Textarea placeholder="Message" mb="4" />
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Box>
    </Box>
   </Box>
  );
};

export default Contact;
