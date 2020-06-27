// Our form component renders a form in a modal window, makes validation, gives back information to the user about the order process or the required filed, and also after a valid form sending empties our shopping cart and resets the form

import { Component, OnInit } from '@angular/core';
import { TravelDestinationsService } from '../travel-destinations.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  availableGenders = [
    {
      display: 'None', value: 'none'
    },
    {
      display: 'Women', value: 'women'
    },
    {
      display: 'Men', value: 'men'
    }
  ]

  formData

  constructor(private travelDestinations: TravelDestinationsService) { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return
    }

    this.travelDestinations.emptyCart()
    this.formData = submittedForm.value
    submittedForm.reset()
  }

}
