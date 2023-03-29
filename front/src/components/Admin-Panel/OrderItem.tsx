import { apiRequest } from "@/services/services";
import { json } from "node:stream/consumers";
import { FC, useEffect, useState } from "react";
import Iorder from '../../Interface/Iorder'
import loading_icon from '../../../public/gorizontalLoading.svg'
import Image from "next/dist/client/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const OrderItem:FC<{order:Iorder}> = ({order}) =>{
    let showShopingArr:JSX.Element[]
    let sum = 0;
    
    showShopingArr = order.shopingArr.map((item)=>{
        sum += item.price
        return(
            <li key={Math.random()} className='border'>
                <p>{item.title}</p> 
                <p>Количество: {item.amount}{item.countType}</p>
                <p>Цена: {item.price}грн</p>
            </li>
        )
    })
    
    

    // async function deleteApiOrder(params:string){
    //     let data =await apiRequest.getAloneOrder('642307be45ac295c025acb32')
    //     console.log(data)
    // }
     function deleteOrder(id:string){
        let result = confirm('Удалить етот заказ ?!');
        if(result){
            apiRequest.deleteOrder(order._id)
            window.location.reload()
        }
     }
    return(
        <tr className="border text-center text-gray-900 font-semibold">
            <td className="border text-[15px] break-words">{order._id }</td>
            <td className="border max-w-[100px] break-words">{<ul><li>{order.name}</li><li>{order.surname}</li><li>{order.patronymic}</li></ul>}</td>
            <td className="border">{ <ul><li>{order.deliveryMethod}</li><li>{order.city}</li><li>{order.branch}</li></ul>}</td>
            <td className="border max-w-[300px] break-words">{ <ul>{showShopingArr}</ul>}</td>
            <td className="border">{sum}</td>
            <td><button><FontAwesomeIcon icon={faTrash} onClick={(e)=>deleteOrder(order._id)}/></button></td>
        </tr>
    )
};

export default OrderItem;