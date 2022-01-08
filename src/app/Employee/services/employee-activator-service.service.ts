import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EmployeeServiceService } from './employee-service.service'

@Injectable({
  providedIn: 'root'
})
export class EmployeeActivatorServiceService implements CanActivate {

  constructor(private router: Router, private employee_service: EmployeeServiceService) { }
  canActivate(route: ActivatedRouteSnapshot) {
    
    const employeeExist = !!this.employee_service.getEmployeeByID(+route.params['id'])
    if (!employeeExist) this.router.navigate(['/404'])

    return employeeExist
  }
}
