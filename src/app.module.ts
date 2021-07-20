import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/appConfiguration.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rogue.db.elephantsql.com',
      port: 5432,
      username: 'xhpnldel',
      password: 'gRDws3EZYGaMuqOal-UvgPIAGKz5k6FJ',
      database: 'xhpnldel',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
