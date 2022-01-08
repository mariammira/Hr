import { EmployeeListComponent } from './Employee/components/employee-list/employee-list.component';
import { CompanyListComponent } from './Company/components/company-list/company-list.component'
import { EmployeeEditComponent } from './Employee/components/employee-edit/employee-edit.component'
import { Error404Component } from './components/error404/error404.component'
import { EmployeeActivatorServiceService } from './Employee/services/employee-activator-service.service';
import { DashboardComponent } from './components/dashboard/dashboard.component'

export const Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch:'full'
  },
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employee/new',
    component: EmployeeEditComponent,
    canDeactivate: ['canDeactivateCreateEmployee']
  },
  {
    path: 'employee/:id',
    component: EmployeeEditComponent,
    canActivate: [EmployeeActivatorServiceService]
  },
  
]
