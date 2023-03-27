import { apiRequest } from "@/services/services";
import IItem from "@/Interface/IItem";
import { useEffect, useState } from "react";
import Image from "next/image";
import loading_icon from '../../../public/loading.gif'

let Items:JSX.Element[];
const ProductRemoval = () =>{
    const[arrItems,setArrItems]=useState(Items);
    useEffect(()=>{
        shopItems()
    },[])
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      };
    const deleteItem=(id:string)=>{
        apiRequest.deleteItem(id)
    }  
    let shopItems = async () =>{
       let data = await apiRequest.getAllItems()
       let layoutItems = data.map((item:IItem)=>{
            return(
                <div key={item._id} className="  border border-black flex flex-col gap-2 items-center relative py-[10px] px-[5px] max-[450px]:w-screen">
                    <div className="">  
                            <Image
                                loader={myLoader}
                                src={item.mainImg}
                                alt="Picture of the author"
                                width={120}
                                height={100}
                            />
                    </div>
                    <h5 className="title text-[20px] font-[lobster]">{item.title}</h5>
                    <h4 className="classOfProduct font-[Pacifico] flex">
                        <svg fill="#347e25" width="30px" height="30px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#347e25" strokeWidth="0.144"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.4800000000000001"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g></svg>
                        -{item.classOfProduct}
                    </h4>
                    <h3>Количество: {item.amount}</h3>
                    <button className=" bg-red-500 w-[200px] rounded-[10px]" onClick={()=>deleteItem(item._id)}>DELETE</button>
            </div>
            )
        })
        setArrItems(layoutItems)    
    }
   
    return(
        <div className="flex flex-wrap max-[450px]:justify-center gap-2">
            {arrItems ?  arrItems : <Image src={loading_icon} className='w-[250px] mx-auto my-auto'  alt="Picture of the author" width={500} height={500} quality={100}/>}
        </div>
    )
}
export default ProductRemoval;