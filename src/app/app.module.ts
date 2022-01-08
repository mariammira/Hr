import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/components/employee-list/employee-list.component';
import { CompanyListComponent } from './Company/components/company-list/company-list.component';
import { RouterModule } from '@angular/router';
import { Routes} from './routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './components/error404/error404.component';
import { EmployeeEditComponent } from './Employee/components/employee-edit/employee-edit.component';
import { EmployeeActivatorServiceService } from './Employee/services/employee-activator-service.service';
import { DashboardComponent } from './components/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CompanyListComponent,
    NavBarComponent,
    Error404Component,
    EmployeeEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [EmployeeActivatorServiceService,
    {provide: 'canDeactivateCreateEmployee', useValue: checkDirtyState}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component: EmployeeEditComponent) {
  if (component.IsDirty)
    return window.confirm('are you sure')
  return true;
    }
