import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/product/product.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfig } from "./components/database/config/ormconfig";

@Module({
  imports:  [
    ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRoot(ormConfig()),
  ProductModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
