import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var places: any; 
declare var $:any;

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

	Gender: any = ['Male', 'Female', 'Genderqueer/Non-binary', 'Other','I prefer not to answer']
	Income: any = ['Less than $10,000', '$10,000 to $19,999', '$20,000 to $39,999', '$40,000 to $59,999', '$60,000 to $79,999', '$80,000 to $99,999', '$100,000 or more']
	JobStatus: any = ['Employed (40 hours or more)', 'Employed(Less than 40 hours)', 'Unemployed', 'Student', 'Retired', 'Homemaker', 'Self-Employed']

	profileForm = new FormGroup({
		firstName: new FormControl(''),
		middleInitial: new FormControl(''),
		lastName: new FormControl(''),
		emailAddress: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
		address: new FormControl(''),
		genderName: new FormControl(''),
		dateOfBirth: new FormControl(''),
		primaryCitizenship: new FormControl(''),
		otherCitizenships: new FormControl(''),
		incomeSelect: new FormControl(''),
		soleEarner: new FormControl(''),
		otherIncome: new FormControl(''),
		taxes: new FormControl(''),
		jobStatus: new FormControl(''),
		dependants: new FormControl(''),
		virtualCurrency: new FormControl(''),
		companyName: new FormControl(''),
		jobTitle: new FormControl(''),
		workAddress: new FormControl(''),
		ssNumber: new FormControl(''),
		phoneNumber: new FormControl(''),
		workNumber: new FormControl('')

	})

	changeJobStatus(e)
	{
		this.profileForm.value.jobStatus = e.target.value
		console.log(this.profileForm.value)
	}

	changeIncome(e)
	{
		this.profileForm.value.incomeSelect = e.target.value
		console.log(this.profileForm.value)
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

		var placesAutocomplete = places({
			container: document.querySelector('#workAddress')
		});

		$(document).ready(function(){
			$('#phoneNumber').mask('(000) 000-0000');
			$('#workNumber').mask('(000) 000-0000');
			$('#ssNumber').mask('000-00-0000');
		});

	}

	get f() {return this.profileForm.controls;}

  

}
