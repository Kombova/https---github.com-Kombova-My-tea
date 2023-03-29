import ShowOneItem from "./ShowOneItem";
import { apiRequest } from "@/services/services";
import {useEffect, useState } from "react";
import IItem from "@/Interface/IItem";
import loading_gif from '../../../public/loading.svg';
import Image from "next/image";


let viewAllItems:any;
const ViewAllItems = () =>{
    //Состояние подключения к серверу Если длина массива больше 0 тогда 28 строка
    // const[connectingArrDB,setConnectingArrDB]=useState<IItem[]>([]);
    const[connectingArrDB,setConnectingArrDB]=useState<IItem[]>([]);
    useEffect(()=>{
        retrieveDataFromTheDatabase()
    },[]);
    // Получение списка всех чаев с сервера
    async function retrieveDataFromTheDatabase(){
       let data = await apiRequest.getAllItems();
        viewAllItems = data.map((item:IItem) => {
            return <ShowOneItem key={item._id} Item={item} />;
        })
        setConnectingArrDB(data)    
    }

    return(
        <div className="w-full"> 
            <ul className=" max-w-[1440px] pt-[20px] pb-[20px] mx-auto flex flex-wrap gap-2  items-center text-center max-[820px]:justify-center">  
                {connectingArrDB.length === 0 ? <Image src={loading_gif} className=' w-2/4 mx-auto' alt="Picture of the author" width={300} height={200} quality={100}/> : viewAllItems}
            </ul>
        </div>    
    )
}

export default ViewAllItems;