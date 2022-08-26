import { Injectable } from '@angular/core';
import { Product } from './modules/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("../assets/data.json")
  }
  getProductById(id: number): Product {
    const found: Product | undefined = this.products.find(p => p.id == id);
    if (found) return found;
    else return new Product();
  }

  addToCart() {

  }
}
