import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent {
  message: string;
  employees: Employee[];
  filteredEmployees:Employee[]=[];
  searchText="";
  error=null;
  constructor(private myservice: EmployeeService, private router: Router) {
    this.myservice.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response)
      ,
      error=>{this.error=error.message}
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response)
    this.employees = response;
  //  this.filteredEmployees=this.employees;
  }
  update(updateemployee: Employee) {
   this.myservice.update(updateemployee);
    this.router.navigate(['/updateemp']); //updating the employee
  }
  delete(deleteemployee: Employee): any {
    var selction= confirm("Are you sure !!")
     if(selction==true){
        this.employees.splice(this.employees.indexOf(deleteemployee), 1);
      this.myservice.delete(deleteemployee.id).subscribe(data => {
        alert(data);
      });}
  this.router.navigate(['/listemp']);
   }

}
