import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationComponent} from './modules/administration/administration.component';
import { ReportsComponent} from './modules/reports/reports.component';
import { ApplicationComponent} from './modules/application/application.component';
import { AddComponent} from './modules/application/add/add.component';


const routes: Routes = [
  { path: 'app-application',
    component: ApplicationComponent},
  { path: 'app-reports',
    component: ReportsComponent

  },
  {
    path: 'app-add',
    component: AddComponent
  },
  {
    path: 'app-administration',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
