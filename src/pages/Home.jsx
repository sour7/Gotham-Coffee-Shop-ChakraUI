import React, { useState } from 'react'
import products from "../assets/product.js"
import ProductCard from '../components/ProductCard.jsx'
import {SimpleGrid ,Grid,Box} from "@chakra-ui/react";
const Home = () => {
  const [data, setData] = useState(products)
  // console.log(data)



  return (
 
       <SimpleGrid columns={[1, 2, 3]} spacing="20px" w="85%" m="auto" >
  {
    data.map((e)=>(

      <Box key={e.id}>

<ProductCard item={e} />
      </Box>

    ))
  }
   
 
    </SimpleGrid>

  )
}

export default Home