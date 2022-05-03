const onAdd1 = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem already exists in cartItems, add 1 to qty,
    // else, add newItem to cartItems.

    // returns the found item object if the item.id matches newItem.id
    const exist = cartItems.find( item => item.id === newItem.id);

    // If the newItem exists, then return a new array from the cartItems array. 
    if (exist) {

        // For every item in cartItems array, if item.id matches newItem.id,
        // return an object containing all previous properties from 'item' but update the quantity to be + 1.
        setCartItems( cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty + 1 } : item ));
        
        // Else, if newItem was NOT found in the cartItems array,
    } else {

        // return an array containing all previous cartItems objects plus newItem.
        setCartItems([...cartItems, { ...newItem, qty: 1 }]);
    }
};

const onRemove1 = (newItem) => {
    // First, check if newItem exists in cartItems array.
    // If the newItem exists in cartItems, subtract 1 from qty,
    // else, add newItem to cartItems.

    // returns the found item object if the item.id matches newItem.id
    const exist = cartItems.find( item => item.id === newItem.id );

    // If the existing item.qty equals 1,
    if (exist.qty === 1) {

        // return a new array from cartItems. only push the item if 
        // for every item in cartItems, if item.id matches newItem.id,
        // do not push item to new array, 
        // else, push item to new array
        setCartItems(cartItems.filter( item => item.id !== newItem.id ));

        // else, if the existing item's quantity does not equal 1,
    } else {

        // return a new array from cartItems array,
        setCartItems(cartItems.map( item => item.id === newItem.id ? { ...exist, qty: exist.qty - 1 } : item ));
            // for every item in cartItems, 
            // if item.id matches newItem.id,
            // return an object containing all previous properties from 'item' but update the quantity to be - 1.
            // else, return item
    }
};
