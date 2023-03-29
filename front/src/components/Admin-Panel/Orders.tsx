import { apiRequest } from "@/services/services";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import Iorder from "@/Interface/Iorder";
import loading_icon from '../../../public/gorizontalLoading.svg'
import Image from "next/dist/client/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
let showOrders:JSX.Element[];
const Orders = () =>{
  const[loading,setLoading]=useState(apiRequest.loadingData)
  useEffect(()=>{
    getOrders()
    
  },[]);

  async function getOrders(){
    let data:[] =await apiRequest.getAllOrders()
      showOrders = data.map((item:any)=>{
        item.shopingArr=JSON.parse(item.shopingArr)
          return(
            <>
              <OrderItem order={item}/>
            </>
          )
        }       
      )
      setLoading(!apiRequest.loadingData)
    }
        return (
            <table className="w-full border ">
              <thead className="border">
                <tr>
                  <th className="border w-[120px]">id покупки</th>
                  <th className="border w-[200px]">Информация о покупателе</th>  
                  <th className="border w-[200px]">Доставка</th>
                  <th className="border ">товар</th>
                  <th className="border w-[70px]">Сумма</th>
                  <th><FontAwesomeIcon icon={faGamepad} style={{color: "#1f2837"}} /></th>
                </tr>
              </thead>

              <tbody>
                {showOrders ? showOrders : <Image src={loading_icon} alt={"sdf"} className='absolute mx-auto left-2/4 top-2/4 w-[500px]'/>}
                
              </tbody>
            </table>
          )
}

export default Orders;