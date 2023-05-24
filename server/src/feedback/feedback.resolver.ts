import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Resolver('Feedback')
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation('createFeedback')
  create(@Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput) {
    return this.feedbackService.create(createFeedbackInput);
  }

  @Query('feedback')
  findAll() {
    return this.feedbackService.findAll();
  }

  @Query('feedback')
  findOne(@Args('id') id: number) {
    return this.feedbackService.findOne(id);
  }

  @Mutation('updateFeedback')
  update(@Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput) {
    return this.feedbackService.update(updateFeedbackInput.id, updateFeedbackInput);
  }

  @Mutation('removeFeedback')
  remove(@Args('id') id: number) {
    return this.feedbackService.remove(id);
  }
}
