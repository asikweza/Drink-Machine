import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  change = new FormControl('');
  form: FormGroup;
  error: boolean;     //Declaring of error variable
  itemError: boolean;     //Declaring of itemError variable
  userChange!: number;    //Declaring of userChange variable

  constructor(public sharedService: SharedService, private formBuilder: FormBuilder) {        //Constructor
    this.error = false;             //Initializing error to false
    this.itemError = false;         //Initializing itemError to false
    this.form = this.formBuilder.group({                        //Initializing form money 
      money: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onPurchase(): void {      //OnPurchase function, it is used in the html file for purchase button
    if (this.sharedService.getSelectedIndex === null || this.sharedService.getSelectedIndex === undefined) {        //if there is no item selected the itemError variable is set to true
      this.itemError = true;      
    }
    if (!this.form.valid || this.form.controls['money'].value === 0) {    //if there is no money entered the error variable is set to true
      this.error = true;
    } 
    if (!this.change.valid) {

    }
    if(this.form.valid && this.sharedService.getSelectedIndex){     //Processing Purchase
      console.log(this.form.controls['money'].value);
      console.log(this.sharedService.getSelectedIndex);
      this.sharedService.purchaseItem(this.sharedService.getAllItems()[this.sharedService.getSelectedIndex].itemDescription,this.sharedService.getAllItems()[this.sharedService.getSelectedIndex].itemPrice);
      //The purchaseItem() function is in the sharedService file, links to the API. And gets the item discription and price from getAllItems()
      alert("Your Purchase Was Successful")
      this.onClear();
    }

  }

  onClear(): void {     //onClear() function, it is used in the html file for clear button
    this.change.reset();      //resets change
    this.form.get('money')?.reset();    //rests money
    this.error = false;     //reset error to false
    this.itemError = false; //reset itemError to false
    this.sharedService.userChange=0;  //reset the userChange in sharedServices
  }

  onCancel(): void {    //Cancel has no action
    
  }

  handleInput(event: any): void {     //handleInput() function is used in enter money form in the html file
    console.log(event.data * 5);      //Enters money in multiple of 5
    this.form.controls['money'].setValue(event.data * 5); //sets the value in multiple of 5
    if (this.sharedService.getSelectedIndex !== undefined) {
      this.userChange = this.form.controls['money'].value - this.sharedService.allItems[this.sharedService.getSelectedIndex].itemPrice;   //Change subtration and stored in userChange
      this.sharedService.setUserChange = this.form.controls['money'].value - this.sharedService.allItems[this.sharedService.getSelectedIndex].itemPrice; // Change the setUserChange in sharedServices to be equal subtration
    }
  }

}
