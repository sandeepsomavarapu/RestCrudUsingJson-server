import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {
  obj1: any;
  employees: Employee[];
  message: string;
  constructor(private myservice: EmployeeService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(uemployee: Employee): any {
    return this.myservice.onUpdate(uemployee).subscribe(data => {
      alert(data)
      this.router.navigate(['/listemp'])
    });
  }
}
