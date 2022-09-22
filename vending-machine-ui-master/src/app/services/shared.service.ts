import { Injectable } from '@angular/core';
import { IItem } from '../utils/interface/items.interface';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedIndex!: number;
  selectedFromDate!: string;
  selectedToDate!: string;
  userChange: number;

  fromDate !: string;
  toDate !: string;
  itemDiscription !: string;
  itemPrice !: number;

  allItems: {itemDescription: string, itemPrice: number}[] = [
    
  ]
  purchaseHistory: {purchasedDate: string, itemPurchased: string, itemPrice: number}[]=[
    
  ]
  
  historyRange: {purchasedDate: string, itemPurchased: string, itemPrice: number}[]=[
    
  ]
  
  constructor(private httpClient: HttpClient) { 
    this.userChange = 0;

  }

  // getalltimesromapi

  get getUserChange(): number {
    return this.userChange;
  }

  set setUserChange(change: number) {
    this.userChange = change;
  }
  
  
  getAllItems(): {itemDescription: string, itemPrice: number}[] {
    return this.allItems;
  }
 
  set setSelectedIndex(index: any) {
    this.selectedIndex = index;
  }

  get getSelectedIndex(): number {
    return this.selectedIndex;
  }
  
  getItems(): void{
    this.httpClient.get<{itemDescription: string, itemPrice: number}[]>("http://localhost:5000/all").subscribe(data => {
      console.log(data)
      this.allItems=data;

    })
  }
  purchaseItem(item: string, price: number):void{
    this.httpClient.post("http://localhost:5000/purchase",{itemDescription: item, itemPrice: price}).subscribe(data =>{
    console.log(data)
  })
  }

  getPurchaseHistory():void{
    this.httpClient.get<{purchasedDate: string, itemPurchased: string, itemPrice: number}[]>("http://localhost:5000/history").subscribe(data => {
    console.log(data)
    this.purchaseHistory=data;
    

    })
  }
  getHistory(): {purchasedDate: string, itemPurchased: string, itemPrice: number}[] {
    return this.purchaseHistory;
  }
  getInRange(fromDate: string, toDate: string, itemDescription:string):void{

    this.httpClient.post<any>(`http://localhost:5000/item/from/${fromDate}/to/${toDate}`,{itemDescription}).subscribe(data =>{
    console.log(data)
    this.historyRange=data;
  })
  }
  
  getRange(): {purchasedDate: string, itemPurchased: string, itemPrice: number}[] {
    return this.historyRange;
  }


  

   
}
