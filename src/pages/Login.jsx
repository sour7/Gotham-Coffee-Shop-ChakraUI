import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box>
      <Box  m="auto" my="20" w="80%">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Email address</FormLabel>
          <Input 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="100%">
          Sign In
        </Button>
      </form>
    </Box>
    </Box>
  );
}

export default Login
