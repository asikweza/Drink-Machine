import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  display = false;
  show=false;
  constructor() { }

  ngOnInit(): void {
  }
  onPress(){
    this.display = !this.display;
  }
  onRange(){
    this.show = !this.show;
  }
}
