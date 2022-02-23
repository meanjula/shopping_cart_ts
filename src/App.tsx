

//import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from 'react-query';
import { Drawer, LinearProgress } from '@mui/material';
import Item from './Item/Item';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartButton } from './App.styles';
import Cart from './Cart/Cart';
export type cartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;


}
const getProducts=async(): Promise<cartItemType[]>=> await (await fetch('https://fakestoreapi.com/products')).json()
  

const App=()=> {
  const {isLoading, error, data}= useQuery<cartItemType[]>('products',getProducts);
  // console.log(data)
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItems,setCartItems]=useState([] as cartItemType[])

  const getAddedItem=(items:cartItemType[])=> 
  items.reduce((acc:number,item) => acc + item.amount,0)

  const handleAddToCart=(clickedItem:cartItemType)=> null;
  
  const handleDeleteFromCart=(id:number)=>null;

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Something went wrong....</div> 
  
  return (
    <Box>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
      <Cart deleteFromCart={handleDeleteFromCart} addToCart={handleAddToCart} cartItems={...cartItems}/>
      </Drawer> 
      <CartButton  onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getAddedItem(cartItems)} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </CartButton>  
      <Grid container spacing={3} >
        {data?.map((item)=>(
          <Grid item key={item.id} xs={12} md={3} >
           <Item handleAddToCart={handleAddToCart} item={item} />
          </Grid>
          
        ))}
      </Grid>
    </Box>
  );
}

export default App;
