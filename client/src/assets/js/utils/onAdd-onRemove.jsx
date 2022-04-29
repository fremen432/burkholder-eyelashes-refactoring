// import { page, setPage, cartItems, setCartItems } from "../../../Global-States";



// export const onAdd = (newItem) => {
//     // First, check if newItem exists in cartItems array.
//     // If the newItem already exists in cartItems, add 1 to qty,
//     // else, add newItem to cartItems.

//     console.log(cartItems);
//     const exist = cartItems.find(item => item.id === newItem.id);

//     exist ?
//         setCartItems(cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item)) :
//         setCartItems([...cartItems, { ...newItem, qty: 1 }]);

// };

// export const onRemove = (newItem) => {
//     // First, check if newItem exists in cartItems array.
//     // If the newItem.qty > 1, subtract 1 from newItem.qty.
//     // else, return a new array excluding newItem.

//     console.log(cartItems);
//     const exist = cartItems.find(item => item.id === newItem.id);

//     exist.qty > 1 ?
//         setCartItems(cartItems.map(item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item)) :
//         setCartItems(cartItems.filter(item => item.id !== newItem.id));

// };
