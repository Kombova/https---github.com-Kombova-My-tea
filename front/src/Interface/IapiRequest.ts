interface IapiRequest{
    fetchAdress: string;
    fetchAdressImg: string;
    fetchAdressOrders: string;
    loadingData: boolean;

    getAllItems: ()=>Promise<[]>;
    getAloneItem: (id:string)=>Promise<[]>;
    getImg: (id:string)=>Promise<any>;
    postItem: (formData:FormData)=> void, 
    deleteItem: (id:string)=> void;
    
    postOrder: (formData:any)=> void
    getAllOrders: ()=>Promise<[]>;
    getAloneOrder: (id:string)=>Promise<any>;
    deleteOrder: (id:string)=> void;

}
export default IapiRequest;