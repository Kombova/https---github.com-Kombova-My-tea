import Image from "next/image";
import { apiRequest } from "@/services/services";
import { useDispatch } from "react-redux";
import { deleteItemToCart, minusCountToCart } from "@/actions";
import { FC } from "react";
import IItemCart from "@/Interface/IItemCart";
import { useSelector } from "react-redux";
import { RootState } from "@/Interface/IreducerState";
const OneItemCart:FC<{item:IItemCart,}> = ({item}) =>{
    console.log(item)
    const dispath = useDispatch()
    const counter = useSelector((state:RootState) => state.basketChenge.count)
    const arr = useSelector((state:RootState) => state.basketChenge.shopingArr)
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      }
    let deleteItem = (itemId:any) =>{
        
        dispath(deleteItemToCart(itemId))
        dispath(minusCountToCart())
        
    }
    
    
    return(
        <li className="w-full p-[4px]  flex justify-between items-center  bg-gradient-to-r  from-gray-900 via-gray-500 to-gray-200 bg-opacity-90 max-[600px]:flex-col" >
           <Image
                className="img  border-2"
                loader={myLoader}
                src={item.mainImg}
                alt="Picture of the author"
                width={50}
                height={50}
            />
            <h4 className="nameItem">{item.title}</h4>
            <h3 className="pice">{item.amount}{item.countType}</h3>
            <p className="price">{item.price}</p>
            <button onClick={()=>deleteItem(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </button>        
        </li>
    )
}

export default OneItemCart;