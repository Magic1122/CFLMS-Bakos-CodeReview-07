import { Component, OnInit } from '@angular/core';
import { TravelDestinationsService } from '../travel-destinations.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems
  total
  totalText = 'Total'

  constructor(public traveDestinations: TravelDestinationsService) { }

  ngOnInit(): void {
    this.cartItems = this.traveDestinations.getCart()
    this.total = this.traveDestinations.calculateTotal()
    this.totalText = this.total.discount !== '' ? `Total with ${this.total.discount} discount` : 'Total'
    console.log(this.total)
  }

}
