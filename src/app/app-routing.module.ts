import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'employee', component: EmployeesComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
