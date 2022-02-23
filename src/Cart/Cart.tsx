import { cartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type props ={
	cartItems:cartItemType[];
	addToCart:(clickedItem:cartItemType)=>void;
	deleteFromCart:(id:number)=>void;
}

const Cart:React.FC<props>=({cartItems,addToCart,deleteFromCart})=>{
	console.log(cartItems)
	return(
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length===0?
				<div>
					<p>No items in cart</p>	
				</div>:null	}
			{cartItems.map(item => (
				<CartItem
				key={item.id}
				item={item}
				addToCart={addToCart}
				deleteFromCart={deleteFromCart}
			  />
			))}

	   </Wrapper>
	)
}
	

export default Cart;