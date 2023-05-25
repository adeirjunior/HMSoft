import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';
import { GuestModule } from './guest/guest.module';
import { CategoryModule } from './category/category.module';
import { ReservationModule } from './reservation/reservation.module';
import { StaffModule } from './staff/staff.module';
import { FeedbackModule } from './feedback/feedback.module';
import { InvoiceModule } from './invoice/invoice.module';
import { BookingModule } from './booking/booking.module';
import { ServiceModule } from './service/service.module';
import { EventModule } from './event/event.module';
import { PaymentModule } from './payment/payment.module';
import { ConferenceModule } from './conference/conference.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { HousekeepingModule } from './housekeeping/housekeeping.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(
      `mongodb+srv://${configuration().database.username}:${
        configuration().database.password
      }@main.ttwhuef.mongodb.net/`,
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    UserModule,
    HotelModule,
    RoomModule,
    GuestModule,
    CategoryModule,
    ReservationModule,
    StaffModule,
    FeedbackModule,
    InvoiceModule,
    BookingModule,
    ServiceModule,
    EventModule,
    PaymentModule,
    ConferenceModule,
    MaintenanceModule,
    HousekeepingModule,
    AuthModule,
  ],
})
export class AppModule {}
