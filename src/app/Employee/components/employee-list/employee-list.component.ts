import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './../../services/employee-service.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees_list:any[]=[]
  constructor(private employee_service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employees_list = this.employee_service.getEmployees();
  }

}
