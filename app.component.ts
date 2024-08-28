import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  showFeesInfo : boolean = false;
  totalFees: number = 0;
  hostelFees:number = 15000;
  collegeFees: number = 35000;
  fullName: String ='';
  branch: String ='';
  hostellerOrDayScholar: String ='';
 

  feesForm: FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.feesForm = this.formBuilder.group({
      fullName: ['',Validators.required],
      branch: ['',Validators.required],
      hostellerOrDayScholar: ['',Validators.required]
      
    })
  }
  submitForm(data: any){

    this.fullName = data.fullName;
    this.branch = data.branch;
    this.hostellerOrDayScholar = data.hostellerOrDayScholar;
    if(data.hostellerOrDayScholar=='Day Scholar'){
      this.totalFees = this.collegeFees;
    }else{
      this.totalFees = this.collegeFees + this.hostelFees;
    }
    this.showFeesInfo = true;
    this.feesForm.controls['fullName'].disable();
    this.feesForm.controls['branch'].disable();
    this.feesForm.controls['hostellerOrDayScholar'].disable();

  
  }
}
