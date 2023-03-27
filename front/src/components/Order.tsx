import { useState } from "react";
import { useSelector } from "react-redux";
import NovaPoshta from "./FormsDelivery/NovaPoshta";
import UkrPoshta from "./FormsDelivery/UkrPoshta";
import SelfDelivery from "./FormsDelivery/SelfDelivery";
import { RootState } from "@/Interface/IreducerState";
const Order = () =>{
    const[shippingMethod,setShippingMethod]=useState('Самовивіз')
    const massivePurchase = useSelector((state:RootState) => state.basketChenge.shopingArr)
    console.log(massivePurchase)
    const selectShippingMethod=(e:any)=>{
        setShippingMethod(e.target.innerText)
    }
    return(
        <div className='wrip w-full'>
            <div className="max-w-[1440px]  mx-auto">
                <h6 className="mt-[20px] text-center text-[30px] font-[lobster]">Оберіть спосіб доставки</h6>
                <ul className="mt-[20px] flex justify-center max-[640px]:flex-col max-[640px]:text-center gap-5 text-[20px]">
                    <li>{shippingMethod === 'Самовивіз' ? <button className="w-[200px] h-[40px] border-2 bg-slate-600 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Самовивіз</button> : <button className="w-[200px] h-[40px] border-2 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Самовивіз</button>}</li>
                    <li>{shippingMethod === 'Нова пошта' ? <button className="w-[200px] h-[40px] border-2 bg-slate-600 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Нова пошта</button> : <button className="w-[200px] h-[40px] border-2 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Нова пошта</button>}</li> 
                    <li>{shippingMethod === 'Укрпошта' ? <button className="w-[200px] h-[40px] border-2 bg-slate-600 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Укрпошта</button> : <button className="w-[200px] h-[40px] border-2 rounded-[10px]" onClick={(e)=>selectShippingMethod(e)}>Укрпошта</button>}</li>     
                </ul>
                <div>
                    {shippingMethod === 'Самовивіз' ? <SelfDelivery/> : null}
                    {shippingMethod === 'Самовивіз' ? <iframe className="w-full h-[400px]  border-4 border-cyan-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.9645622900193!2d36.15768552458085!3d49.98636062173905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1bfc4caf2a5%3A0x1db2782fb68bcdd2!2z0YPQuy4g0KHQtdGA0LPQtdGPINCR0L7RgNC30LXQvdC60L4sIDgsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677152052871!5m2!1sru!2sua" loading="lazy" ></iframe> : null }
                    {shippingMethod === 'Нова пошта' ? <NovaPoshta/> : null }
                    {shippingMethod === 'Укрпошта' ? <UkrPoshta/> : null}
                </div>
            </div>
        </div>
    )
}
export default Order