import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  constructor(private myservice: EmployeeService,private router: Router) { }//dependency injection


  onSubmit(addemp:Employee):any{
    console.log(addemp);
     this.myservice.addEmp(addemp).subscribe(data => {
      alert("employee added successfully"+data);
      this.router.navigate(['/listemp']);
    });
  }
}
