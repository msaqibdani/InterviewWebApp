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
	

	profileForm = new FormGroup({
		firstName: new FormControl('Muhammad'),
		middleInitial: new FormControl('D'),
		lastName: new FormControl('Saqib'),
		emailAddress: new FormControl('abc@xyz.com'),
		address: new FormControl('408 South Locust Street Greencastle, IN'),
		genderName: new FormControl([''])

		
	})

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
