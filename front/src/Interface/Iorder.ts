import IItemCart from "./IItemCart";
interface Iorder{
    [key:string]:any;
    shopingArr:IItemCart[] | string;
    deliveryMethod:string;
    name:string;
    surname:string;
    patronymic:string;
    number:number;
    email?:string;
    city?:string;
    branch?:number;
}
export default Iorder;