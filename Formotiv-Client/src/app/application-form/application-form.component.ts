import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var places: any; 

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

	Gender: any = ['Male', 'Female', 'Genderqueer/Non-binary', 'Other','I prefer not to answer']
	Income: any = ['Less than $10,000', '$10,000 to $19,999', '$20,000 to $39,999', '$40,000 to $59,999', '$60,000 to $79,999', '$80,000 to $99,999', '$100,000 or more']
	

	profileForm = new FormGroup({
		firstName: new FormControl('Muhammad'),
		middleInitial: new FormControl('D'),
		lastName: new FormControl('Saqib'),
		emailAddress: new FormControl('abc@xyz.com'),
		address: new FormControl('408 South Locust Street Greencastle, IN'),
		genderName: new FormControl(''),
		dateOfBirth: new FormControl(''),
		primaryCitizenship: new FormControl(''),
		otherCitizenships: new FormControl(''),
		incomeSelect: new FormControl(''),
		soleEarner: new FormControl('')

		
	})

	changeIncome(e)
	{
		this.profileForm.value.incomeSelect = e.target.value
	}

	changeGender(e)
	{
		this.profileForm.value.genderName = e.target.value
		console.log(this.profileForm.value)
		
	}

	onSubmit()
	{
		console.log(this.profileForm.value)
	}


	constructor() { }
	ngOnInit(): void {
		var placesAutocomplete = places({
			container: document.querySelector('#address')
		});
	}

  

}
