
import Image from "next/image";
import Link from 'next/link'
import { apiRequest } from "@/services/services";
import IItem from "@/Interface/IItem";
import PriceControlUserInterface from "./PriceControlUserInterface";
let itemId:string;
let showImages:any;
const ShowOneItem: React.FC<{Item:IItem}> = ({Item}) =>{
    let{_id,typeOfProduct,classOfProduct,title,description,price,amount,step,mainImg,images,country,region,collectionYear,yearOfPresetting,stepVariants} = Item;
    const myLoader = ({ src, width, quality }:any) => {
        return `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`
      };
    
    
    return(
        <li className=" w-[280px] h-[450px] border border-black flex flex-col gap-1 items-center relative pt-[10px] px-[5px] max-[450px]:w-screen">
            <div className="w-[200px] h-[200px]">
                <Link href={_id}>
                    <Image
                        loader={myLoader}
                        src={mainImg}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                    />
                </Link>
            </div>
            
            <h5 className="title text-[20px] font-[lobster]">{title}</h5>
            <h4 className="classOfProduct font-[Pacifico] flex">
                <svg fill="#347e25" width="30px" height="30px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#347e25" strokeWidth="0.144"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.4800000000000001"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g></svg>
                -{classOfProduct}
            </h4>
            <PriceControlUserInterface price={price} step={step} stepVariants={stepVariants} mainImg={mainImg} _id={_id} title={title} typeOfProduct={typeOfProduct} classOfProduct={classOfProduct} />
        </li>
    )
   
}

export default ShowOneItem;