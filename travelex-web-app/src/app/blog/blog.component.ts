import { Component, OnInit } from '@angular/core';
import { TravelDestinationsService } from '../travel-destinations.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  travels

  clients = ['Alina', 'Patrick', 'David', 'Peter', 'Phil', 'Dora']

  constructor(private travelDestinations: TravelDestinationsService) { }

  ngOnInit(): void {
    this.travels = this.travelDestinations.getTravel()
  }

  generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1
  }

}
