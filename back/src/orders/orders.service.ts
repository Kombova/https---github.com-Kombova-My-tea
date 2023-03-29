import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './shemas/order.shema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}
 async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderModel.create(createOrderDto);
    return order;
  }

  async findAll() {
    const orders = await this.orderModel.find();
    return orders;
  }

  async findOne(id: ObjectId) {
    const order = await this.orderModel.findById({ _id: id });
    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: ObjectId) {
    const order = await this.orderModel.findByIdAndRemove({ _id: id });
    return order;
  }
}
