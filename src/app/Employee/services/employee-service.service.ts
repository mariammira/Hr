import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees() {
    return [
      {
        id: 1, name: 'Mariam', date_of_birth: '10-11-1994', status: 'single',
        title:'Developer',telephone:'019898989',address:'heliopolis'
      },
      {
        id: 2, name: 'Mariam', date_of_birth: '10-11-1994', status: 'single',
        title: 'Developer', telephone: '019898989', address: 'heliopolis'
      },
      {
        id: 3, name: 'Mariam', date_of_birth: '10-11-1994', status: 'single',
        title: 'Developer', telephone: '019898989', address: 'heliopolis'
      },
      {
        id:4, name: 'Mariam', date_of_birth: '10-11-1994', status: 'single',
        title: 'Developer', telephone: '019898989', address: 'heliopolis'
      }
    ]
  }
  getEmployeeByID(id:number) {

    return this.getEmployees().find(x => x.id === id)
  }
}
