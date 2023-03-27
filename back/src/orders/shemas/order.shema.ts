import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { HydratedDocument } from 'mongoose';
export type OrderDocument = HydratedDocument<Order>;
@Schema()
export class Order {
  @Prop({ required: true })
  shopingArr: string;

  @Prop() 
  deliveryMethod:string ;
 
  @Prop({ uppercase: true }) 
  name:string;
 
  @Prop() 
  surname:string;
 
  @Prop() 
  patronymic:string; 
 
  @Prop() 
  number:number; 
 
  @Prop() 
  email:string; 
 
  @Prop() 
  city:string; 
 
  @Prop() 
  branch:number; 
  
} 
 
export const OrderSchema = SchemaFactory.createForClass(Order);
