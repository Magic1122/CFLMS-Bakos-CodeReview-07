import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as uuid from 'uuid'

// Function which creates a random timestamp - we will use this later to generate a random createdAt value in our Classes

const randomDate = (start: Date, end: Date) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.getTime()
}


type Destination = {
  id: number
  destination: string,
  description: string,
  startDate: number,
  duration: number,
  price: number
  img: string
  feedback?: string
  createdAt: number
}

@Injectable({
  providedIn: 'root'
})
export class TravelDestinationsService {

  destionations: Destination[] = [
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exciting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 1465,
      img: '../assets/img/pattaya.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Phi Phi Islands',
      description: 'The most exciting islands of Thailand.',
      startDate: 1623276000000,
      duration: 10,
      price: 1225,
      img: '../assets/img/phi-phi.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'San Francisco',
      description: 'The most exciting city in California.',
      startDate: 1623276000000,
      duration: 7,
      price: 865,
      img: '../assets/img/cisco.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'London',
      description: 'The most exciting city in Europe.',
      startDate: 1623276000000,
      duration: 2,
      price: 458,
      img: '../assets/img/london.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Madeira',
      description: 'The end of Europe',
      startDate: 1623276000000,
      duration: 8,
      price: 765,
      img: '../assets/img/madeira.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Lisbon',
      description: 'The most exciting city in Portugal.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/lisbon.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    }
]

cartChanged = new Subject<void>()

shoppingCart: Destination[] = []

  constructor() { }

  getTravel(): Destination[] {
    return this.destionations
  }

  getCart(): Destination[] {
    return this.shoppingCart
  }

  addTravelToCart(id: number): void {
    const travel = this.destionations.find((destination) => destination.id === id)
    this.shoppingCart = [...this.shoppingCart, travel]
  }

  emptyCart() {
    this.shoppingCart = []
    this.cartChanged.next()
  }

  removeTravelFromCart(id: number): void {
    const travelIndex = this.shoppingCart.findIndex((cartItem) => cartItem.id === id)
    console.log(travelIndex)
    if (travelIndex !== -1) {
      this.shoppingCart.splice(travelIndex, 1)
    }
    this.cartChanged.next()
  }

  calculateTotal(): { total: number, discount: string} {
    let total: number = 0
    let discount: string = ''
    this.shoppingCart.map((item) => total += item.price)

    if (total > 500) {
      total *= .8
      discount = '20%'
    } else if (total > 200 ) {
      total *= .9
      discount = '10%'
    }

    return { total, discount }
  }

}

