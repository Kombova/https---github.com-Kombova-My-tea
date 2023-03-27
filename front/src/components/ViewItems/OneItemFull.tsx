import { FC, useState} from "react";
import { MouseEvent } from "react";
import Image from "next/image";
import { apiRequest } from "@/services/services";
import { useSelector } from "react-redux";
import { store } from "@/store";
import IItem from "@/Interface/IItem";
import PriceControlUserInterface from "./PriceControlUserInterface";


const OneItemFull: FC<{item:IItem}> = ({item}) =>{
    const[selectImage,setSelectImage]=useState(null)
    let{_id,typeOfProduct,classOfProduct,title,description,price,amount,step,mainImg,images,country,region,collectionYear,yearOfPresetting,stepVariants}=item;
    const myLoader = ({ src, width, quality }:any) => `${apiRequest.fetchAdressImg}${src}?w=${width}&q=${quality || 75}`;
    let mainImage = <Image
                    loader={myLoader}
                    src={mainImg}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='border-2 border-[black]'
                />;   
    <Image
        loader={myLoader}
        src={mainImg}
        alt="Picture of the author"
        width={100}
        height={100}
        onClick={(e:any)=>setSelectImage(e.target.src)}
        className='border-2 border-[black] hover:border-gray-900 hover:border-[3px]'
    />    
    let arrImages = images?.map((itemImg)=>{
        return(           
            <Image  
                key={Math.random()}
                loader={myLoader}
                src={itemImg}
                alt="Picture of the author"
                width={100}
                height={100}
                onClick={(event:any)=>setSelectImage(event.target.src)}
                className='border-2 border-[black]  hover:border-[3px]'
            />       
        )
    });
    arrImages?.unshift(
        <Image      
                    key={Math.random()}
                    loader={myLoader}
                    src={mainImg}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    onClick={(e:any)=>setSelectImage(e.target.src)}
                    className='border-2 border-[black]  hover:border-[3px]'
                />
    );
   let collectionDataOnly= collectionYear ? collectionYear.split('T')[0] : null;
   let presettingDataOnly = yearOfPresetting?.split('T')[0];
   
//_____________________ВЕРСТКА___________________________\\

    return(
        <div className="wrip w-screen">
            <div className="max-w-[1440px] px-1 py-5 mx-auto relative">
{/* ------------------Title ---------------------*/}
                <h6 className=" text-[30px] pb-[10px] text-center font-bold font-[lobster] border-b-2 border-[black]">{title}</h6>
                <div className='mt-[20px]  flex justify-between max-[750px]:flex-col max-[750px]:items-center' >
{/* ----------------------Img & Price----------------------------- */}
                    <div className="allImages & price  px-[5px]">
                        {selectImage == null ? <div className="">{mainImage}</div> : <div className=""><img src={selectImage} width='500px' height='500px' className="border-2 border-[black]"/></div>}                   
                        <div className="flex gap-2 mt-[20px] flex-wrap">
                            {arrImages}
                        </div>
                    </div>
{/* -----------------------DESCRIPTION-------------------------- */}
                    <div className="information mt-[10px]  px-[10px] flex flex-col gap-2 items-end max-[750px]:items-center">
                        <div className="flex flex-col gap-1 w-full justify-between flex-wrap">
                            <div className="">
                                <h5 className="text-center font-[Pacifico] flex">
                                <svg fill="#347e25" width="30px" height="30px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#347e25" strokeWidth="0.144"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.4800000000000001"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M20.553,3.105l-6,3C11.225,7.77,9.274,9.953,8.755,12.6c-.738,3.751,1.992,7.958,2.861,8.321A.985.985,0,0,0,12,21h0c6.682,0,11-3.532,11-9,0-6.691-.9-8.318-1.293-8.707A1,1,0,0,0,20.553,3.105Zm-7.6,15.86a8.594,8.594,0,0,1,5.44-8.046,1,1,0,1,0-.788-1.838,10.363,10.363,0,0,0-6.393,7.667,6.59,6.59,0,0,1-.494-3.777c.4-2,1.989-3.706,4.728-5.076l5.03-2.515A29.2,29.2,0,0,1,21,12C21,16.063,17.94,18.67,12.954,18.965ZM3.523,5.38A29.2,29.2,0,0,0,3,12a6.386,6.386,0,0,0,4.366,6.212,1,1,0,1,1-.732,1.861A8.377,8.377,0,0,1,1,12c0-6.691.9-8.318,1.293-8.707a1,1,0,0,1,1.154-.188l6,3A1,1,0,0,1,8.553,7.9Z"></path></g></svg>
                                    -{classOfProduct}
                                </h5>
                            </div>
                            <div className="flex gap-2 flex-wrap text-[15px]">
                                {country ? <h4 className="font-black">Держава виробник:<span className="pl-[10px] font-[Pacifico] font-light">{country}</span></h4> : null}
                                {(region) ? <h4 className="font-black">Регіон:<span className="pl-[10px] font-[Pacifico] font-light">{region}</span></h4>: null}
                                {(collectionDataOnly) ? <h4 className=" font-black "> Дата сбора:<span className="pl-[10px] font-[Pacifico] font-light">{collectionDataOnly}</span></h4>: null}
                                {(presettingDataOnly) ? <h3 className=" font-black ">Дата пресовки:<span className="pl-[10px] font-[Pacifico] font-light">{presettingDataOnly}</span></h3> : null}
                            </div>
                        </div>
                        <p className="max-w-[800px] mt-[20px] p-[10px] font-medium border-[1px] rounded-[20px] border-black">{description}</p>   
                    </div>
                </div>
                <PriceControlUserInterface price={price} step={step} stepVariants={stepVariants} mainImg={mainImg} _id={_id} title={title} typeOfProduct={typeOfProduct} classOfProduct={classOfProduct} fullScreen={true}/>
            </div>
        </div>
    )
}
export default OneItemFull;