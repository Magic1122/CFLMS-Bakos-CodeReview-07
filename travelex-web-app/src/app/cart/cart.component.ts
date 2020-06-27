// the cart component renders the shopping cart items, also gives the possibility to delete an item and with the help of rxjs we react on the events and render the new total and new items on the cart via subscribing to an observable what we created before in the travel-destinations service, also on ngOnDestroy we have to unsubscribe from this event to not pollute the memory

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
    // we show the user the appropriate text in the reflection of the discount value
    this.totalText = this.total.discount !== '' ? `Total with ${this.total.discount} discount` : 'Total'

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
