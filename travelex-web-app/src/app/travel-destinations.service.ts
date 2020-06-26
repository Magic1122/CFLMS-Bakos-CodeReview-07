import { Injectable } from '@angular/core';
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
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    },
    {
      id: uuid.v4(),
      destination: 'Pattaya',
      description: 'The most exiting city in Thailand.',
      startDate: 1623276000000,
      duration: 14,
      price: 865,
      img: '../assets/img/p5.jpg',
      feedback: 'It was the best experience in my life.',
      createdAt: randomDate(new Date(2019, 0, 1), new Date())
    }
]

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

  calculateTotal(): number {
    let total: number = 0
    this.shoppingCart.map((item) => total += item.price)

    return total
  }

}

