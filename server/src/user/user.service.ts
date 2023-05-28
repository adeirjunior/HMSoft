import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto);
      const user = new this.userModel(createUserDto),
        savedUser = await user.save();
      return savedUser;
    } catch (error: any) {
      return new Error(error);
    }
  }

  async findAll() {
    try {
      const user = await this.userModel.find().exec();
      if (!user) {
        return 'Users not found';
      }
      return user;
    } catch (error: any) {
      return new Error(error);
    }
  }

  async findOne(_id: ObjectId) {
    try {
      const user = await this.userModel.findOne({ _id }).exec();
      if (!user) {
        return 'Users not found';
      }
      return user;
    } catch (error: any) {
      return new Error(error);
    }
  }

  async findOneByUsername(name: string) {
    try {
      const user = await this.userModel.findOne({ name }).exec();
      if (!user) {
        return 'Users not found';
      }
      return user;
    } catch (error: any) {
      return new Error(error);
    }
  }

  update(id: ObjectId, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: ObjectId) {
    return `This action removes a #${id} user`;
  }
}
