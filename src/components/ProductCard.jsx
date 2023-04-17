import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const ProductCard = ({item}) => {
    const words = item.description.split(' ');

  return (
    <Card maxW="sm" m="auto" h="550px">
      <CardBody>
        <Image
          src={item.image}
          alt={item.title}
          borderRadius="lg"
          height={"200px"}
          w="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>
          {words.length > 20 ? `${words.slice(0, 30).join(' ')}...` : item.description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
          ₹{item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
