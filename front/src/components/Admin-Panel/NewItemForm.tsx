import { apiRequest } from "@/services/services";
import IItem from "@/Interface/IItem";
import IitemPost from "@/Interface/IitemPost";
import { useState } from "react";
import { selectItem } from "@/actions";


let item:IitemPost={
    typeOfProduct: "tea",
    classOfProduct: "",
    title: "",
    description: "",
    price: 0,
    amount: 0,
    step: 0,
    mainImg:null,
    stepVariants:[] 
}


const NewItemForm = () =>{   
    const[formItem,setFormItem]=useState('tea')
    const [stepVariants, setStepVariants] = useState<JSX.Element[]>([]);
    const formData = new FormData();
    
    const selectTypeItem = (e:any) =>{   
        const target = e.target;       
        switch (target.innerText) {
            case 'Чай':                
                item.typeOfProduct = 'tea'
                setFormItem('tea')
                break;
            case 'Посуда':
                item.typeOfProduct = 'dishes'
                setFormItem('dishes')
                break;           
            default:
                break;              
        }
    };
    
    const ButtonStepVariants = (e:any) => {
        const buttonLayout = (
          <li key={Math.random()}>
            <input className="inputStepVariants text-center" type='number' onChange={(e)=>item.stepVariants ? item.stepVariants[stepVariants.length] = e.target.value : null}/>
          </li>
        );
        if(e.target.innerText == 'Добавить кнопку' && stepVariants.length < 3 ){
                item.stepVariants?.push('')
                setStepVariants((prevStepVariants) => [...prevStepVariants, buttonLayout]);    
            }
        if(e.target.innerText == 'Х'){
            const newStepVariants = [...stepVariants]; // создаем новый массив из старого
            newStepVariants.pop(); // удаляем последний элемент
            item.stepVariants?.pop()
            setStepVariants(newStepVariants); // обновляем состояние
        }    
        
        console.log(item.stepVariants)
      };
    
     function post(){
        Object.keys(item).forEach(key => {
            if(key == 'images' && item.images ){  
                    Array.from(item.images).forEach(element => {
                        console.log(element)
                        formData.append('images',element)
                    });                            
            }else if(key == 'stepVariants' && item.stepVariants){
                item.stepVariants.forEach((e)=>{
                    formData.append(key,e)
                })  
            }else formData.append(key,item[key])            
        }); 
        
         apiRequest.postItem(formData);
                  

        
    }
    return(
        <div className=" w-full p-[10px] mx-auto  flex flex-col items-center relative max-[350px]:p-[2px]">
            <h5 className=" text-[30px] font-bold">Новый Товар</h5>
            <ul className="max-w-[600px] mt-[20px] flex shrink justify-between gap-1 text-[white] max-[733px]:flex-col">
                <li><button className={`select bg-slate-600 rounded-[10px] w-[180px] hover:bg-slate-500`} tabIndex={1} onClick={(e)=>selectTypeItem(e)}>Чай</button></li>
                <li><button className={`select bg-slate-600 rounded-[10px] w-[180px] hover:bg-slate-500`} tabIndex={3}  onClick={(e)=>selectTypeItem(e)}>Посуда</button></li>
            </ul>

            
                
            <ul className="w-full py-[10px] flex flex-col  gap-5 items-center text-center">
                <li className="w-full"><input className=" w-[400px] h-10 rounded-[10px] bg-slate-200 text-center " placeholder="Название товара" tabIndex={4} onChange={(event)=> item.title = event.target.value}></input></li>
                <li>
                    {formItem === 'tea'? <select className="bg-slate-200 text-center w-[200px] h-10 rounded-[10px]" placeholder="Класс товара" tabIndex={4}  defaultValue={'DEFAULT'} onChange={(event)=>item.classOfProduct = event.target.value}>
                                                    <option value="DEFAULT" disabled>Вид чая</option>
                                                    <option value="Зеленый">Зеленый</option>
                                                    <option value="Белый">Белый</option>
                                                    <option value="Желтый">Желтый</option>
                                                    <option value="Красный">Красный</option>
                                                    <option value="Черный">Черный</option>
                                                    <option value="Улун">Улун</option>
                                                    <option value="Шен пуэр">Шен пуэр</option>
                                                    <option value="Шу пуэр">Шу пуэр</option>
                                         </select>
                    : <input className="bg-slate-200 text-center w-[250px]  h-10 rounded-[10px]" placeholder="Класс товара" tabIndex={4} onChange={(event)=> item.classOfProduct = event.target.value}></input>}
                </li>
                <li className="w-full">    
                    
                    <textarea className=" w-[400px] h-10 rounded-[10px] bg-slate-200 text-center focus:w-[1000px] focus:h-[500px] focus:text-left" placeholder="Описание" onChange={(event)=> item.description = event.target.value}/>
                    
                </li>
                <li className="w-full"><input className="bg-slate-200 text-center w-[400px] h-10 rounded-[10px]" placeholder="Страна изготовитель" type='text' tabIndex={6} onChange={(event)=> item.country = event.target.value}/></li>
                <li className="w-full"><input className="bg-slate-200 text-center w-[400px] h-10 rounded-[10px]" placeholder="Регион" type='text' tabIndex={7} onChange={(event)=> item.region = event.target.value}/></li>
                <li className="w-full"><input className="bg-slate-200 text-center w-[400px] h-10 rounded-[10px]" placeholder="Количество товара" type='number'   tabIndex={8} onChange={(event)=> item.amount = +event.target.value}/></li>
                <li className="w-full">
                    <label className="p-1 bg-slate-600 rounded-[10px] hover:bg-slate-500 text-[white]" htmlFor="mainImg">Главное изображение</label>
                    <label className="p-1 bg-slate-600 rounded-[10px] hover:bg-slate-500 text-[white]" htmlFor="images">+</label>
                    <input
                    onChange={(event)=>event.target.files != null  ? item.mainImg = event.target.files[0] : null}
                    className="hidden" 
                    type="file"
                    id="mainImg" name="mainImg"
                    accept="image/png, image/jpeg"/>
                    <input
                    onChange={(event)=>event.target.files != null  ?  item.images = event.target.files : null}
                    className="hidden" 
                    type='file'
                    multiple={true}
                    id="images" name="images"
                    accept="image/png, image/jpeg"/>  
                </li>
                <li className="text-center w-full">
                    <p className="text-[black]">Цена</p>
                    <input className="price text-center w-[400px] h-10 rounded-[10px]" type='number' onChange={(event)=>item.price = +event.target.value}></input>
                </li>
                <li className=" text-center w-full">                    
                        <p>За количество -</p>
                        <input className=" text-center tex w-[400px] h-10 rounded-[10px]" type='number' onChange={(event)=>item.step = +event.target.value} placeholder='Если шт тогда введи 1'></input>                     
                </li>
                
                {formItem == 'tea' ?
                <>  
                    
                    {stepVariants.length > 0 ? stepVariants : null}
                    <button className=" px-[20px] rounded-[10px] bg-gray-600 text-[white]" onClick={(e)=>ButtonStepVariants(e)}>Добавить кнопку</button>
                    <button className=" px-[20px] rounded-[10px] bg-gray-600 text-[white]" onClick={(e)=>ButtonStepVariants(e)}>Х</button>
                    <li>
                        <p className=" text-center" >Год сбора</p>
                        <input className="bg-slate-200 text-center w-[400px] h-10 rounded-[10px]" type='date' tabIndex={9} onChange={(event)=>event.target.valueAsDate != null ? item.collectionYear = event.target.valueAsDate : null}/>
                    </li>
                    <li>
                        <p className=" text-center">Год пресовки</p>
                        <input className="bg-slate-200 text-center w-[400px] h-10 rounded-[10px]" type='date' tabIndex={10} onChange={(event)=>event.target.valueAsDate != null ? item.yearOfPresetting = event.target.valueAsDate : null}/>
                    </li>
                </> :  null
                }
                <button className="px-[20px] w-[400px] h-[40px] rounded-[10px] bg-green-700" onClick={()=>post()}>Отправить</button>
                <button onClick={()=>console.log(item)}>Проверить</button>
            </ul>
            
        </div>
    )
};


export default NewItemForm;