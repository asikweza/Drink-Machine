import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  
  form: FormGroup;
  flag: any;

  constructor(public sharedService: SharedService, public homeComponent : HomeComponent ,private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({          //No
    selectedItem: ['', Validators.required]       //Effect
    })
    this.sharedService.setSelectedIndex = 0;
    this.flag=0;
  }

  ngOnInit(): void {
    
    this.sharedService.getItems();   //Gets Items from shared service getItems() function which connected to the APi
  }

  onRadioChanged(event: any): void {
    this.sharedService.setSelectedIndex = this.flag;   //Used in html for radio button select changing to allow for single selection
    this.homeComponent.change.reset();      //resets change
    this.homeComponent.form.get('money')?.reset();    //rests money
    this.sharedService.userChange=0;
  }

  
}
