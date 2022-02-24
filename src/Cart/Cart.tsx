import { cartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type props ={
	cartItems:cartItemType[];
	addToCart:(clickedItem:cartItemType)=>void;
	deleteFromCart:(id:number)=>void;
}

const Cart:React.FC<props>=({cartItems,addToCart,deleteFromCart})=>{
	const calculateTotal=(items:cartItemType[])=>
	items.reduce((acc:number,item) => acc + item.amount*item.price,0)
	return(
		<Wrapper >
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
            <h3>Total amount: €{calculateTotal(cartItems).toFixed(2)}</h3>
	   </Wrapper>
	)
}
	

export default Cart;