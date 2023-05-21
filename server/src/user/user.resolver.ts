import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ValidationPipe } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(
    @Args('createUserInput', ValidationPipe) createUserInput: CreateUserInput,
  ) {
    console.log(createUserInput);
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('_id') _id: number) {
    return this.userService.findOne(_id);
  }

  @Mutation('updateUser')
  update(
    @Args('_id', { type: () => ID }) _id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(updateUserInput._id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('_id') _id: number) {
    return this.userService.remove(_id);
  }
}
