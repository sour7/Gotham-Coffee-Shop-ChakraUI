import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
 
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom"
import { useSticky } from "@chakra-ui/react"

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { isSticky, stickyStyle } = useSticky()
  // Check if the screen size is less than or equal to 768px (small screen)
  window.addEventListener("resize", () => {
    setIsSmallScreen(window.innerWidth <= 768);
  });

  return (
  
    <Box 
    position="fixed" 
    top="0" 
    left="0" 
    right="0" 
    bg="gray.800" 
    color="white" 
   
    zIndex="999"
  >
      <Box w="100%" bg="gray.800" color="white"   
       >
        {isSmallScreen && (
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="gray.800"
            color="white"
          >
            
            <Text fontSize='4xl'> <Link to="/">Gotham Coffee Shop</Link></Text>
      
           

            <Flex align="center">
              <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                size="md"
                onClick={isOpen ? onClose : onOpen}
                aria-label="Toggle Navigation"
                mr={2}
              />
            </Flex>

            {/* Hamburger menu */}
            {isOpen && (
              <Box
                display={{ base: "block", md: "none" }}
                pb={4}
                mt={{ base: 4, md: 0 }}
                w="full"
              >
                <Stack as="nav" spacing={4}>
                  <Link to="/" onClick={onClose}>
                    Home
                  </Link>
                  <Link to="/about" onClick={onClose}>
                    About
                  </Link>
                  <Link to="/contact" onClick={onClose}>
                    Contact
                  </Link>
                  <Link to="/login" onClick={onClose}>
                    Login
                  </Link>
                </Stack>
              </Box>
            )}
          </Flex>
        )}

        {/* Navbar for large screens */}
        {!isSmallScreen && (
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            m="auto"
            w="80%"
          >
            <HStack>
              <h2> <Link to="/">Gotham Coffee Shop</Link></h2>
            </HStack>
            <HStack spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
            </HStack>
          </Flex>
        )}
      </Box>
    </Box>
 
  );
}
