import { useState } from "react";
import NewItemForm from "./NewItemForm";
import ChangeItemForm from "./ChangeItemForm";
import ProductRemoval from "./ProductRemoval";
import Orders from "./Orders";
const AdminMain = () =>{
    const[selectedSection,setSelectedSection]=useState(<NewItemForm/>);

    //Управление меню
    const selectMenu = (e:any) =>{
        let target = e.target;
        let targetText = target.textContent;
        switch (targetText) {
            case 'Добавить товар':
                setSelectedSection(<NewItemForm/>)               
                break;
            case 'Изменить товар':
                setSelectedSection(<ChangeItemForm/>)               
                break;
            case 'Удалить товар':
                setSelectedSection(<ProductRemoval/>)
                break;
            case 'Заказы':
                setSelectedSection(<Orders/>)
                break;
            default:
                break;
        }
    };
    return(    
        <div className="flex flex-col h-screen">
            <header className="flex items-center justify-between px-6 py-4 bg-gray-900">
                <div className="text-white">Admin Panel</div>
                
            </header>
        <div className="flex flex-grow ">
            <nav className="flex flex-col w-64 bg-gray-800 text-white max-[500px]:hidden">
                <ul className="flex flex-col flex-grow">
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Добавить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Изменить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Удалить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Заказы</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Управление слайдером</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Товары на главной странице</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 7</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 8</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 9</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 10</li>
                </ul>
            </nav>
            <main className="flex-grow  bg-gray-500 p-6 text-[20px] relative">{selectedSection}</main>
        </div>
    </div>
    )
}

export default AdminMain;