import { Component, OnInit } from '@angular/core';
import { Product } from "../modules/Product";
import { ProductsService } from '../products.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Products';
  products: Product[] = [];

  constructor(private ProductsService:ProductsService ) { }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe(res => {
      this.products = res;
    })
  }
}
