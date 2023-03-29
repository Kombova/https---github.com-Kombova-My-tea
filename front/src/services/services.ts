import IapiRequest from "@/Interface/IapiRequest";
import { json } from "stream/consumers";


export const apiRequest:IapiRequest = {

    fetchAdress: 'http://localhost:5000/api/items/',
    fetchAdressImg: 'http://localhost:5000/',
    fetchAdressOrders: 'http://localhost:5000/api/orders/',
    loadingData: false,
    // Items request
    getAllItems: async function(){
                    this.loadingData = true;
                    const response = await fetch(this.fetchAdress);
                    const data = await response.json();
                    this.loadingData = false;
                    return data
                },
    getAloneItem: async function(id){
                    const response = await fetch(this.fetchAdress + id);
                    const data = await response.json();
                    return data
    }, 
    getImg: async function(id){
        const response = await fetch(this.getImg + id);
                    const data = response;
                    return data
    },
    postItem: function(formData){
        fetch(this.fetchAdress, {
        method: 'POST',
        body: formData,
        })
        .then(response => response.json())
        .then(data => {alert('Товар отправлен')})
        .then(data =>{window.location.reload()})
        .catch(error => {console.error(error)
            alert('Не удача!!!')
        });
    }, 
    deleteItem: function(id){
        fetch(`${this.fetchAdress}${id}`, { method: 'DELETE'}) 
        .then(response => { 
            if (!response.ok) { 
            throw new Error('Что-то пошло не так ...'); 
            } 
            console.log('Товар Удален'); 
        })
        .then(data =>{window.location.reload()}) 
        .catch(error => { 
            console.error('Не получилось удалить товар...', error); 
        });
    },
    // Order request
    postOrder: function(formData){
        fetch(this.fetchAdressOrders, {
        method: 'POST',
        headers: {  
            "Content-Type": "application/json" 
          },
        body: JSON.stringify(formData) ,
        })
        .then(response => response.json())
        .then(data => {alert('Товар отправлен')})
        // .then(data =>{window.location.reload()})
        .catch(error => {console.error(error)
            alert('Не удача!!!')
        });
    },
    deleteOrder: function(id){
        fetch(`${this.fetchAdressOrders}${id}`, { method: 'DELETE'}) 
        .then(response => { 
            if (!response.ok) { 
            throw new Error('Что-то пошло не так ...'); 
            } 
            console.log('Товар Удален'); 
        })
        // .then(data =>{window.location.reload()}) 
        .catch(error => { 
            console.error('Не получилось удалить товар...', error); 
        });
    },
    getAllOrders: async function(){
        this.loadingData = true;
        const response = await fetch(this.fetchAdressOrders);
        const data = await response.json();
        this.loadingData = false;
        return data
    },
    getAloneOrder: async function(id){
        const response = await fetch(this.fetchAdressOrders + id);
        const data = await response.json();
        return data;
},
}

