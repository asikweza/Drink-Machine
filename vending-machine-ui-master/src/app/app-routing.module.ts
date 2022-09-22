import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { HistoryComponent } from './pages/report/history/history.component';
import { HistoryRangeComponent } from './pages/report/history-range/history-range.component';
const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: ReportComponent,
    path: "report"
  },
  {
    component: HistoryComponent,
    path: 'report/history'
  },
  {
    component: HistoryRangeComponent,
    path: "report/history-range"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
