import { useState } from "react";
import NewItemForm from "./NewItemForm";
import ChangeItemForm from "./ChangeItemForm";
import ProductRemoval from "./ProductRemoval";
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
            default:
                break;
        }
    };
    return(    
        <div className="flex flex-col h-screen">
            <header className="flex items-center justify-between px-6 py-4 bg-gray-900">
                <div className="text-white">Admin Panel</div>
                <nav className="flex">
                    <a className="text-gray-400 hover:text-white px-3 py-2" href="#">
                        Home
                    </a>
                    <a className="text-gray-400 hover:text-white px-3 py-2" href="#">
                        Users
                    </a>
                    <a className="text-gray-400 hover:text-white px-3 py-2" href="#">
                        Settings
                    </a>
                </nav>
            </header>
        <div className="flex flex-grow ">
            <nav className="flex flex-col w-64 bg-gray-800 text-white max-[500px]:hidden">
                <ul className="flex flex-col flex-grow">
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Добавить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Изменить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700" onClick={(e)=>selectMenu(e)}>Удалить товар</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 4</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 5</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 6</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 7</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 8</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 9</li>
                    <li className="px-6 py-4 hover:bg-gray-700">Section 10</li>
                </ul>
            </nav>
            <main className="flex-grow  bg-gray-500 p-6">{selectedSection}</main>
        </div>
    </div>
    )
}

export default AdminMain;