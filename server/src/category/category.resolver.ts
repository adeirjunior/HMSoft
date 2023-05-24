import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation('createCategory')
  create(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query('category')
  findAll() {
    return this.categoryService.findAll();
  }

  @Query('category')
  findOne(@Args('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation('updateCategory')
  update(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @Mutation('removeCategory')
  remove(@Args('id') id: number) {
    return this.categoryService.remove(id);
  }
}
