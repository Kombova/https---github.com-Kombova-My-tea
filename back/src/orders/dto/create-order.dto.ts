export class CreateOrderDto {
    shopingArr:string;
    deliveryMethod:string;
    name:string;
    surname:string;
    patronymic:string;
    number:number;
    email?:string;
    city?:string;
    branch?:number;
}
// shopingArr - массив товаров, выбранных клиентом для заказа
// deliveryMethod - способ доставки заказа
// name - имя клиента
// surname - фамилия клиента
// patronymic - отчество клиента
// number - контактный номер телефона клиента
// email - адрес электронной почты клиента (необязательное поле)
// city - город, в котором проживает клиент (необязательное поле)
// branch - номер отделения почты, в которое будет доставлен заказ (необязательное поле)
