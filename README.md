# Shopping Cart

This is the shopping cart created using 'React' with 'Typescript', styled with MUI and

- npx create-react-app raect-typescript_shoppingcart --template typescript
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material
- npm install @mui/material @mui/styled-engine-sc styled-components
- npm install --save styled-components
- npm i react-query

## index tsx

React Query makes fetching, caching, synchronizing and updating server state.

- import {QueryClient, QueryClientProvider} from 'react-query'
- QueryClientProvider is data provider and use QueryClient as a data.

## App tsx

### type casting with interface

```js
export type cartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
};
```

### fetching data and loading

- Fetch products(json data) from fakeStoreApi('https://fakestoreapi.com/products')
- useQuery from react-query to make fetching, updating easy.

```js
const { isLoading, error, data } = useQuery("products", getProducts);
```

- fetched item is displayed in the grid card with the help of map function.

### opening and closing of cart

- useState is used for opening and closing of Drawer, which contains CartItem inside it.

```js
const [cartOpen, setCartOpen] = useState(false);
```

When setCartOpen(true) cartItem is displayed but if setCartOpen(false) cartItem remains hidden.

```js
<CartButton  onClick={()=>setCartOpen(true)}><CartButton/>
```

## Item

### Item tsx

- props({item,handleAddToCart}) is received from App.
- each item from api contains the properties like (title,description,price,image) which are displayed in each item card.
- With the help of handleAddToCart function items are added to cart

```js
<Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
```
