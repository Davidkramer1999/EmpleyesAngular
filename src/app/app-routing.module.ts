import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/Employees/employees-list/employees-list.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';

const routes: Routes = [
  {
  path:"",
  component:EmployeesListComponent
},
{
  path:"employees",
  component:EmployeesListComponent
},
{
  path:"editEmployee",
  data:[],
  component:EditEmployeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
