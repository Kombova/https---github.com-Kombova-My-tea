import { validationDeliveryForm } from "@/logic/Validation/ValidationDeliveryForm"
import { useState } from "react";
import Iorder from "@/Interface/Iorder";
import { useSelector } from "react-redux";
import { RootState } from "@/Interface/IreducerState";
import { apiRequest } from "@/services/services";

const UkrPoshta = () =>{
    const[nameError,setNameErr]=useState<string>('');
    const[sureNameError,setSureNameErr]=useState<string>('');
    const[patronimicError,setPatronimicErr]=useState<string>('');
    let shoppingArr = useSelector((state:RootState) => state.basketChenge.shopingArr)
    let order:any={
        shopingArr: shoppingArr,
        deliveryMethod: "Укрпошта",
        name: "",
        surname: "",
        patronymic: "",
        number: 0
    }  
        let chekName=(e:any)=>{
            let target = e.target;
            order.name=target.value;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setNameErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setNameErr('')
            }
        }
        let chekSureName=(e:any)=>{
            let target = e.target;
            order.surname=target.value;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setSureNameErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setSureNameErr('')
            }
        }
        let chekPatronymic=(e:any)=>{
            let target = e.target;
            order.patronymic=target.value;
            if(validationDeliveryForm(target.value,'onlyWord') === false){
                target.style.border='2px solid red'
                setPatronimicErr(target.placeholder)
            }else {
                target.style.border='2px solid green'
                setPatronimicErr('')
            }
        }
        let city = (e:any) =>{
            order.city = e.target.value;
        }

        let branch = (e:any) =>{
            order.branch = e.target.value;
        } 
        let chekNumber = (e:any) =>{
            order.number=e.target.value;
        }
        let chekEmail = (e:any) =>{
            order.email=e.target.value;
        }
        let send = () =>{
            order.shopingArr=JSON.stringify(order.shopingArr);       
            apiRequest.postOrder(order);
        }

    return(
        <div id="down" className=" h-[1000px]  mt-[20px] ">
        <ul className=" max-w-[900px] h-[700px] pl-[20px] pr-[20px] pt-[30px] pb-[30px] ml-auto mr-auto mt-[20px] flex flex-col justify-around items-center border-2 rounded-lg relative">
            <li><input className="styleOfDeliveryForms" type="text" placeholder="Місто" onChange={(e)=>city(e)}/></li>
            <li><input className="styleOfDeliveryForms" type="text" placeholder="Індекс" onChange={(e)=>branch(e)}/></li>
            <li className="relative">
                <input className="styleOfDeliveryForms" type="text" placeholder="Ім'я" onChange={(e)=>chekName(e)}/>
                {nameError === "Ім'я" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"Ім'я складається лише з букв=)"}</p> : null}
            </li>
            <li className="relative">
                <input className="styleOfDeliveryForms" type="text" placeholder="Прізвище" onChange={(e)=>chekSureName(e)} />
                {sureNameError === "Прізвище" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"Прізвище складається лише з букв=)"}</p> : null}
            </li>
            <li className="relative">
                <input className="styleOfDeliveryForms" type="text" placeholder="По батькові" onChange={(e)=>chekPatronymic(e)}  />
                {patronimicError === "По батькові" ? <p className="absolute right-[10px] bottom-[0px]  text-[10px] text-[red]">{"По батькові складається лише з букв=)"}</p> : null}
            </li>
            <li><input className="styleOfDeliveryForms" type="tel" placeholder="Телефон" onChange={(e)=>chekNumber(e)}/></li>
            <li><input className="styleOfDeliveryForms" type="email" placeholder="ел.пошта" onChange={(e)=>chekEmail(e)}/></li>
            <li><button className="styleOfDeliveryButtons" onClick={()=>send()}>Отправить</button></li> 
        </ul>
        </div>
    )
}
export default UkrPoshta;