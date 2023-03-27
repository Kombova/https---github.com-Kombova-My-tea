
export const addCountToCart = ()=>({type:'ADD_COUNT_TO_CART'});
export const minusCountToCart = ()=>({type:'MINUS_COUNT_TO_CART'});
export const addItemToCart = (item:any) =>({type:'ADD_ITEM_TO_CART',item});
export const deleteItemToCart = (item:any) =>({type:'DELETE_ITEM_TO_CART',payload: item});
export const selectItem = (id:any) =>({type:"SELECT_ITEM",payload: id});