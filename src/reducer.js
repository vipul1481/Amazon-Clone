export const initialState = {
  basket: [
    {
      id: "2455423",
      title: "New Apple iPad Pro - Silver",
      price: 598.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "2455423",
      title: "New Apple iPad Pro - Silver",
      price: 598.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};
export const getBasketTotal =(basket) =>
basket?.reduce((amount,item) => item.price + amount,0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        //new
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for Removing item from Basket
      // cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exit in basket , remove it ......
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product (id: ${action.id}) as its not in basket"
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
