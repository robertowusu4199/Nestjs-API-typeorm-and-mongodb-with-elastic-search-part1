import { BaseInterfaceRepository } from '../repositories/base/base.interface.respository';
import { Product } from "../entity/product.entity";

export interface ProductRepositoryInterface extends BaseInterfaceRepository<Product> {
}