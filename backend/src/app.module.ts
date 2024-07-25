import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ts0533110485:pQA5gkq1YllyhdAT@cluster0.sz0y0dy.mongodb.net/'
    ),
    UserModule
  ],
})
export class AppModule {}
