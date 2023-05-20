import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    try {
      console.log(createUserInput);
      const user = new this.userModel(createUserInput),
        savedUser = await user.save();
      return savedUser;
    } catch (error: any) {
      return new Error(error);
    }
  }

  async findAll() {
    try {
      const user = await this.userModel.find();
      if (!user) {
        return 'Users not found';
      }
      return user;
    } catch (error: any) {
      return new Error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
