export function validationDeliveryForm(value:string,type:string){
   if(type==='onlyWord'){
    const nameCheck = /^[a-zA-Za-яА-ЯїЇіІєЄ']+$/;
        return nameCheck.test(value) === true ? true : false;
   }else false
//   switch(type){
//     case 'Name':
//         const nameCheck = /\d/g;
//         return nameCheck.test(value) === false ? true : false;
//         break;
//     case 'LastName':
//         const LastNameCheck = /\d/g;
//         return LastNameCheck.test(value) === false ? true : false;
//         break;
//     case 'Patronymic':
//         const Patronymic = /\d/g;
//         return Patronymic.test(value) === false ? true : false;
//         break;
   
//     default:
//         break;
//    }

    
}