import { BaseAbstractRepository } from "./base/base.abstract.respository";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepositoryInterface } from "../interface/product.respository.interface";
import { Product } from "../entity/product.entity";

@Injectable()
export class ProductRepository extends BaseAbstractRepository<Product>
  implements ProductRepositoryInterface {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {
    super(productRepository);
  }
}