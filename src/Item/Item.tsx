
import React from 'react';
import Button from '@mui/material/Button';
//type
import { cartItemType } from '../App';
import {Wrapper} from './Item.styles';

type props ={
	item:cartItemType;
	handleAddToCart:(clickedItem:cartItemType)=>void;
}
const Item:React.FC<props> =({item,handleAddToCart}) => (	
	<Wrapper >
		
		<div ><img src={item.image} alt={item.title}/></div>
		<div>
			 <h3>{item.title}</h3> 
			 <p>{item.description}</p>
			 <h3>€{item.price}</h3>
		</div>
		<Button onClick={()=>handleAddToCart(item)}>Add to cart</Button>

		
	</Wrapper>
	
)

 export default Item;