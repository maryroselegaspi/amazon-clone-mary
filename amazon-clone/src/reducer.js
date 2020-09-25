export const initialState ={
    basket:[],

    
};

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
            return {state}
            break;
        default:
            return {state};
    }
}
export default reducer;
