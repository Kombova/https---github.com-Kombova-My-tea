import React, { ReactNode } from "react";
import { FC, useState } from "react"
import { addCountToCart,addItemToCart } from "@/actions";
import { useDispatch } from "react-redux";
import IItemCart from "@/Interface/IItemCart";
const PriceControlUserInterface:FC<{price:number,step:number,stepVariants:string[],typeOfProduct:string,mainImg:string,_id:string,title:string,classOfProduct:string, fullScreen?:boolean}> = ({price,step,stepVariants,mainImg,_id,title,classOfProduct,fullScreen,typeOfProduct}) =>{
    const[selectButtons,setSelectButtons]=useState(stepVariants.length === 3 ? stepVariants[1] : stepVariants[0])
    const[stepState,setStepStete]=useState(step);
    const[valueButtonBuy,setValueButtonBuy]=useState(0)
    let dispath = useDispatch()
    const pricePerGram = price/+step;
    let sumPrice = pricePerGram*stepState
    let stepVariantsArrButtons:ReactNode;
    let item:IItemCart={
        _id: _id,
        typeOfProduct: typeOfProduct,
        classOfProduct: classOfProduct,
        title: title,
        price: stepVariants.length === 0 ? sumPrice : pricePerGram * +selectButtons,
        amount: stepVariants.length === 0 ? stepState : +selectButtons,
        countType: stepVariants.length === 0 ? "шт" : "грамм",
        mainImg: mainImg
    } 
    const selectButtonsNow=(event:any)=>{
        setSelectButtons(event.target.value)
    }
    if(stepVariants){
        stepVariantsArrButtons = stepVariants.map((element:string,index:number)=>{ 
            if(element === selectButtons){
                return(
                    <li  key={Math.random()}>
                        <button className="p-2 min-w-[60px] text-[15px] rounded-lg bg-white" value={element} onClick={(event)=>selectButtonsNow(event)}>{element} гр</button>
                    </li>
                )
            }else return(
                <li  key={Math.random()}>
                    <button className="p-2  rounded-lg text-[15px] hover:bg-gray-400" value={element} onClick={(event)=>selectButtonsNow(event)}>{element} гр</button>
                </li>
            )
        })
    }
    function plusButton(e:any){
        setStepStete((p)=>p+step)
    }
    function minusButton(e:any){
        stepState > step ? setStepStete((p)=>p-step) : null
    }
    
// Нажатие на кнопу купить
    const clickBuy = () =>{
        if(stepVariants.length===0){
            setValueButtonBuy((val)=>val+1)
            dispath(addCountToCart()) 
            dispath(addItemToCart(item))
            console.log(item)
        }else{
            setValueButtonBuy((val)=>val+1)
            dispath(addCountToCart()) 
            dispath(addItemToCart(item))
            console.log(item)
        }
    }
//-----------Layout Fullscreen-------------
    if(fullScreen){
        if(step===1){
            return(
                <div className="price my-[20px] pt-[2px] grid grid-cols-2 max-[900px]:grid-cols-1 gap-2 flex-grow rounded-[10px]">
                    <div className="flex  bg-gray-600/70  items-center justify-around rounded-lg relative"> 
                        <button className="p-2 w-1/4 hover:bg-gray-400 rounded-l-lg" onClick={(e)=>minusButton(e)}>-</button> 
                            <span className="bg-white px-4 w-2/4 py-1 mx-1 text-center rounded">{stepState} шт</span> 
                        <button className="p-2 w-1/4 hover:bg-gray-400   rounded-r-lg"  onClick={(e)=>plusButton(e)}>+</button>    
                                         
                    </div> 
                    <p className="border-2 p-[10px] text-[20px] font-bold rounded-[10px] text-center">Ціна:{sumPrice}грн</p>
                    <button className=" col-span-full  bg-green-600/90 rounded-[10px] flex justify-center items-center p-1 relative" onClick={()=>clickBuy()}>
    
                            <p className="ml-auto mr-[-30px] font-bold">Додати</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 ml-auto mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <span className='flex justify-center items-center absolute bottom-1 right-[30px] rounded-full font-bold w-6 h-6  bg-yellow-500'>{valueButtonBuy === 0 ? '+' : valueButtonBuy}</span>
                        
                    </button>
                                       
                </div>
                
            )
        }else{
            return(
                <div className="price mt-auto mb-[10px]  pt-[2px] grid grid-cols-2 max-[500px]:grid-cols-1 gap-1 rounded-[10px] relative">            
                    <div className="flex  bg-gray-600/70    items-center justify-around rounded-lg relative"> 
                        <ul className="flex gap-3 items-center p-1 rounded-lg">{stepVariantsArrButtons}</ul>              
                    </div> 
                    <p className=" p-[10px] text-[20px] border-2 font-bold text-center rounded-[10px]">Ціна:{pricePerGram*+selectButtons}грн</p>
                    <button className="col-span-full    bg-green-600/90 rounded-[10px] flex justify-center items-center relative p-1" onClick={()=> clickBuy()}>
                        <p className="ml-auto mr-[-30px]">Додати</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 ml-auto mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <span className='flex justify-center items-center absolute bottom-1 right-[30px] rounded-full font-bold w-6 h-6  bg-yellow-500'>{valueButtonBuy === 0 ? '+' : valueButtonBuy}</span>
                    </button> 
                        
                </div>
                )
            }

// ---------------------------Layout One Item-----------------------
    }else if(step===1){
        return(
            <div className="price  mt-auto mb-[10px] pt-[2px] flex flex-col gap-1 rounded-[10px]">
                <div className="flex mx-auto bg-gray-600/70 w-[200px] items-center justify-around rounded-lg relative"> 
                    <button className="p-2 w-1/4 hover:bg-gray-400 rounded-l-lg" onClick={(e)=>minusButton(e)}>-</button> 
                        <span className="bg-white px-4 w-2/4 py-1 mx-1 text-center rounded">{stepState} шт</span> 
                    <button className="p-2 w-1/4 hover:bg-gray-400   rounded-r-lg"  onClick={(e)=>plusButton(e)}>+</button>                    
                </div> 
                <p className="w-[200px]  p-[10px] text-[20px] font-bold mx-auto rounded-[10px] bg-green-600/ text-center">Ціна:{sumPrice}грн</p>                
                <button className=" mx-auto w-[200px] bg-green-600/90 rounded-[10px] flex justify-center items-center relative p-1" onClick={()=>clickBuy()}>
                    <p className="ml-auto mr-[-30px]">Додати</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 ml-auto mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span className='flex justify-center items-center absolute bottom-1 right-[30px] rounded-full font-bold w-6 h-6  bg-yellow-500'>{valueButtonBuy === 0 ? '+' : valueButtonBuy}</span>
                </button>                  
            </div>
            
        )
    }else{
        return(
            <div className="price mt-auto mb-[10px]  pt-[2px] flex flex-col gap-1 rounded-[10px] relative">            
                <div className="flex mx-auto bg-gray-600/70 w-[200px]  items-center justify-around rounded-lg "> 
                    <ul className="flex  gap-1 items-center justify-around p-1 rounded-lg">{stepVariantsArrButtons}</ul>              
                </div> 
                <p className="w-[200px] p-[10px] text-[20px] font-bold mx-auto rounded-[10px]">Ціна:{pricePerGram*+selectButtons}грн</p>
                <button className=" mx-auto w-[200px] bg-green-600/90 rounded-[10px] flex justify-center items-center relative p-1" onClick={()=> clickBuy()}>
                    <p className="ml-auto mr-[-30px]">Додати</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 ml-auto mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span className='flex justify-center items-center absolute bottom-1 right-[30px] rounded-full font-bold w-6 h-6  bg-yellow-500'>{valueButtonBuy === 0 ? '+' : valueButtonBuy}</span>
                </button>   
            </div>
            )
        }
}
export default PriceControlUserInterface;
