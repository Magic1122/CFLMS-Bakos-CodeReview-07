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
