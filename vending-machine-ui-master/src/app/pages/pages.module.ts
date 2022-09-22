import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './report/history/history.component';
import { HistoryRangeComponent } from './report/history-range/history-range.component';



@NgModule({
  declarations: [
    ReportComponent,
    HomeComponent,
    HistoryComponent,
    HistoryRangeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ReportComponent
  ]
})
export class PagesModule { }
