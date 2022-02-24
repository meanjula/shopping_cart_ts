
import { Button } from "@mui/material";
import { Wrapper } from "./CartItem.styles";
import { cartItemType } from "../App";


type props ={
	item:cartItemType;//single item no need array
	addToCart:(clickedItem:cartItemType)=>void;
	deleteFromCart:(id:number)=>void;
}

const CartItem:React.FC<props>=({item,addToCart,deleteFromCart})=>{
	return(
		<Wrapper>
			<div>
			<h4>You have {item.amount} items in your shopping cart</h4>
			<h3>{item.title}</h3>
            <div className='information'>
              <p>Price: ${item.price}</p>
            </div>	
			<div className="buttons">
				<Button className="button" size="small" disableElevation variant="outlined" onClick={() => deleteFromCart(item.id)}> - </Button>
				<p>{item.amount}</p>
				<Button className="button" size="small" disableElevation variant="outlined" onClick={() => addToCart(item)}> + </Button>
			</div>	
			</div>
			<div>
			<img src={item.image} alt={item.title}/>
			<p>Total: ${(item.amount * item.price).toFixed(2)}</p>
			</div>	
	   </Wrapper>
	)
}
	

export default CartItem;