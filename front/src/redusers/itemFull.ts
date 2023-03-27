interface initial{
    itemObj:{};

}
const initialState = <initial>{
        itemObj:{}
        
}
const itemFull = (state = initialState,action:any) =>{
    switch (action.type) {
        case 'SELECT_ITEM':
            return{
                ...state,
                itemObj: state.itemObj = action.payload,
                
            };             
    
        default:
            return state;
    }
}
export default itemFull;