export const initialState ={
    basket:[],  
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0 );

const reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            // return {state}
            return{
                ...state,       //return the state but changing the basket
                basket:[...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            //clone the basket
            let newBasket = [...state.basket];

            //check if product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id ===action.id);

            if(index >= 0){
                // item exists in basket, remove it...checkout
                newBasket.splice(index, 1);
            }else{
                console.warn('Cant remove your product (id: ${action.id}) as its not in the basket');
            }

            return {...state, basket:newBasket};
            break;
        default:
            return {state};
    }
}
export default reducer;
