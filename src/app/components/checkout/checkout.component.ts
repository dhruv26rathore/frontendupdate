import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {CartModelServer} from "../../models/cart.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartTotal:number;
  cartData: CartModelServer;


  constructor(private cartService: CartService, private orderService:OrderService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit():void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    //@ts-ignore
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  onCheckout(){
    this.spinner.show().then(p => {
      this.cartService.CheckoutFromCart(1);
    });
  }

}
