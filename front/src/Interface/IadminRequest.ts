interface IadminRequest{
    fetchAdress: string;
    fetchAdressImg: string;
    loadingData: boolean;
    postItem: ()=>Promise<{}>;
    // getAloneItem: (id:string)=>Promise<[]>;
    // getImg: (id:string)=>Promise<any>; 
}
export default IadminRequest;