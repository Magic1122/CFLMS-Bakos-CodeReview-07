// The travels component renders our travels and gives the possibility to add the items to our cart

import { Component, OnInit } from '@angular/core';
import { TravelDestinationsService } from '../travel-destinations.service';
import * as moment from 'moment';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  travels
  // we use moment library to format the timestamps in an easy, clear way
  moment: (timeStamp: number) => any = moment;

  constructor(private travelDestinations: TravelDestinationsService) { }

  ngOnInit(): void {
    this.travels = this.travelDestinations.getTravel()

  }

  addToCart(id) {
    console.log(id)
    this.travelDestinations.addTravelToCart(id)
  }

}
