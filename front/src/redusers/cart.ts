import IItemCart from "@/Interface/IItemCart";

export interface IstateCart{
    count:number;
    shopingArr:IItemCart[];
}
const initialState ={
        count:0,
        shopingArr:[],
        
}
const basketChenge = (state:IstateCart = initialState, action:any) =>{
    switch (action.type) {
        case 'ADD_COUNT_TO_CART':
            return{
                ...state,
                count: state.count + 1,
                
            };
    case 'MINUS_COUNT_TO_CART':
            return{
                ...state,
                count: state.count - 1,
                
            };
    case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                
                 shopingArr: state.shopingArr.concat(action.item)
            };  
    case 'DELETE_ITEM_TO_CART':
            return{
                ...state,
                
                shopingArr: state.shopingArr.filter((item) => item !== action.payload)
                
            };             
    
        default:
            return state;
    }
}
export default basketChenge;