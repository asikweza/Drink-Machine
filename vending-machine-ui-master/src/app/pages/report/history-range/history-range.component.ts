import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-history-range',
  templateUrl: './history-range.component.html',
  styleUrls: ['./history-range.component.scss']
})
export class HistoryRangeComponent implements OnInit {
  form: FormGroup;
  

  constructor(public sharedService: SharedService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({                        
      dateFrom: new FormControl('', Validators.required),
      dateTo: new FormControl('', Validators.required)
    });
      

  }

  ngOnInit(): void {
    this.sharedService.getItems();
    this.sharedService.getRange();
  }
  /*
  handleFromInput(event: any): void {     //handleInput() function is used in enter money form in the html file
    console.log(event.data);      //Enters money in multiple of 5
    this.form.controls['dateFrom'].setValue(event.data); //sets the value in multiple of 5
    this.fromDate = this.form.controls['dateFrom'].value;
     
  } 

  handleToInput(event: any): void {     //handleInput() function is used in enter money form in the html file
    console.log(event.data);      //Enters money in multiple of 5
    this.form.controls['dateTo'].setValue(event.data); //sets the value in multiple of 5
    this.fromDate = this.form.controls['dateTo'].value;  
  } 

  /*
  onDateSelection(event: any):void{
    this.sharedService.setSelectedDate = event.target.value;
  }
  */
}
