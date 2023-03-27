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
}
export default IapiRequest;