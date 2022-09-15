import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";
import { ProductRepositoryInterface } from "../product/interface/product.respository.interface";
import { ProductRepository } from "../product/repositories/product.repository";
import { ProductServiceInterface } from "../product/interface/product.service.interface";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { SearchService } from "src/services/search/search.service";


@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    {
      provide: "ProductRepositoryInterface",
      useClass: ProductRepository
    },
    {
      provide: 'ProductServiceInterface',
      useClass: ProductService
    },
    {
      provide: "SearchServiceInterface",
      useClass: SearchService
    }
    
  ],
  controllers: [ProductController]
})
export class ProductModule {}