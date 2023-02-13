import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
employees: Employee[] = [];
employeeApi: any = [];
  constructor(private employeesService : EmployeesService, private router : Router) {
  }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next : (employees) => {        
          this.employeeApi = employees          
      }}
    )
    }
    sendToCHild(employee:any){
    // I could do it with services,  don't judge 
    //example passing data trough router state
    this.router.navigateByUrl('/editEmployee', { state: this.employeeApi.data.filter((el: any) => el.id == employee)[0] });
    }
}
