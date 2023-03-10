import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl : string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllEmployees () {
    return this.http.get('https://reqres.in/api/users?page=2')
  }
}
