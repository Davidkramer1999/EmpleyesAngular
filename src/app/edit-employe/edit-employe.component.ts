import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  employee : any 
  id: any;
  selectedEmployee: any
  constructor(private router:Router,  private _location: Location) { 
    //example passing data trough data state
    this.id= this.router.getCurrentNavigation()?.id
    this.employee = this.router.getCurrentNavigation()?.extras.state
  }
  ngOnInit(): void {      
  }
  saveData(){
    console.log(this.employee);
    history.pushState({state: this.employee}, '','/employees')

  }
  goBack(){
   this._location.back();
  }
  }
