import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './components/product/product.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfig } from "./components/database/config/ormconfig";
import { SearchModule } from './services/search/search.module';
import { ObserverModule } from './observers/observer.module';

@Module({
  imports:  [
    ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRoot(ormConfig()),
  ProductModule,
  SearchModule,
  ObserverModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
