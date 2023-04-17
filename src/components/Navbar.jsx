import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Flex, Spacer, Box, useDisclosure, Button, HStack, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="1"  w="100%"  bg="gray.800" color="white">
      <Box w="80%" m="auto">
      <Flex  p="2" alignItems="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box p="2" fontWeight="bold">
          Gotham Coffee Shop
          </Box>
        </Link>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <HStack spacing="8">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </HStack>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Button onClick={onToggle} variant="ghost" _focus={{ outline: "none" }}>
            {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
          </Button>
        </Box>
      </Flex>
      <Box  display={{ base: isOpen ? "block" : "none", md: "none" }}>
        <VStack p="2" spacing="4">
          <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={onToggle}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active" onClick={onToggle}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={onToggle}>
            Contact
          </NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="active" onClick={onToggle}>
            Login
          </NavLink>
        </VStack>
      </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
