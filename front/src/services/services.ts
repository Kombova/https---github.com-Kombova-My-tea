import IapiRequest from "@/Interface/IapiRequest";


export const apiRequest:IapiRequest = {

    fetchAdress: 'http://localhost:5000/api/items/',
    fetchAdressImg: 'http://localhost:5000/',
    fetchAdressOrders: 'http://localhost:5000/api/orders/',
    loadingData: false,
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
    postOrder: function(formData){
        fetch(this.fetchAdressOrders, {
        method: 'POST',
        body: formData,
        })
        .then(response => response.json())
        .then(data => {alert('Товар отправлен',data)})
        .then(data =>{window.location.reload()})
        .catch(error => {console.error(error)
            alert('Не удача!!!')
        });
    }
}

