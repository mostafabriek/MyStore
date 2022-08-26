import { Component, OnInit } from '@angular/core';
import { Product } from "../modules/Product";
import { ProductsService } from '../products.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  title: string = 'Products';
  product: Product = new Product();
  constructor(private route: ActivatedRoute ,private ProductsService:ProductsService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.product = this.ProductsService.getProductById(params.id);
      console.log(params)
    });
  }
}
