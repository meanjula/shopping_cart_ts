
import { Button } from "@mui/material";
import { Wrapper } from "./CartItem.styles";
import { cartItemType } from "../App";

type props ={
	item:cartItemType;//single item no need array
	addToCart:(clickedItem:cartItemType)=>void;
	deleteFromCart:(id:number)=>void;
}

const CartItem:React.FC<props>=()=>{
	return(
		<Wrapper>
			<h2> Shopping Items inside cart</h2>
			<div>
				<Button></Button>
			</div>	
	   </Wrapper>
	)
}
	

export default CartItem;