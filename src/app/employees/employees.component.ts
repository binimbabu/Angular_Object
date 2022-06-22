import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';


export interface EmployeeDetails{
  [key:number] : Employee;
}


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


export class EmployeesComponent implements OnInit {
  result:any=[];
 employeede:any ;
  constructor() { 
  
  }

  ngOnInit(): void {
    let employeeDetailss = {
      1: {
        id:1,
        name:"bini",
        phoneNumber:"12345"
      },
     2: { id:2,
       name:"bobby",
       phoneNumber:"12345"
     }
    };
   this.employeede = employeeDetailss;
   for(const key in this.employeede) {
    this.result.push({key, value: this.employeede[key]});
 }
  console.log("this.result", this.result)
  }
  

}
