import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private ProductService:ProductService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe((prods:serverResponse)=>{
    this.products = prods.products;
    console.log(this.products);
    });
  }

  selectProduct(id: number) {
  this.router.navigate(['/product',id]).then();
  }

  AddToCart(id: number) {
  this.cartService.AddProductToCart(id);
  }
}
