import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApplicationModule} from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes,RouteReuseStrategy} from '@angular/router';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { AdministrationComponent } from './modules/administration/administration.component';
import { ApplicationComponent } from './modules/application/application.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { HeaderComponent } from './core/header/header.component';
import { ServiceComponent } from './core/service/service.component';
import { ComponentsComponent } from './shared/components/components.component';
import { AddComponent } from './modules/application/add/add.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    ApplicationComponent,
    ReportsComponent,
    HeaderComponent,
    ServiceComponent,
    ComponentsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AddComponent, ReportsComponent, AdministrationComponent]
})
export class AppModule { }
