import { Component, OnInit, OnDestroy } from '@angular/core';
import { TravelDestinationsService } from '../travel-destinations.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems
  total
  totalText = 'Total'
  subscription: Subscription

  constructor(public travelDestinations: TravelDestinationsService) { }

  ngOnInit(): void {
    this.cartItems = this.travelDestinations.getCart()
    this.total = this.travelDestinations.calculateTotal()
    this.totalText = this.total.discount !== '' ? `Total with ${this.total.discount} discount` : 'Total'
    console.log(this.total)

    this.subscription = this.travelDestinations.cartChanged.subscribe(() => {
      this.cartItems = this.travelDestinations.getCart()
      this.total = this.travelDestinations.calculateTotal()
      this.totalText = this.total.discount !== '' ? `Total with ${this.total.discount} discount` : 'Total'
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
