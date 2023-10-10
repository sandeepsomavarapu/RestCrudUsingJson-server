import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateemployee: Employee;
  constructor(private httpClient:HttpClient) { }

  public getEmployees() {
    console.log("ins service get employees");//headers
      return this.httpClient.get<Employee>("http://localhost:3000/users");
    }
  public addEmp(addemp: Employee) {
    console.log("ins service add");
    console.log(addemp);
    return this.httpClient.post("http://localhost:3000/users", addemp);
  }
  public update(updateemployee: Employee) {
    this.updateemployee = updateemployee;
   
  }
  public updateMethod() {
    return this.updateemployee;
  }
  public onUpdate(updatemp: Employee) {
    console.log("ins service update");

    return this.httpClient.put("http://localhost:3000/users/"+updatemp.id,updatemp);
  }
  delete(id: number) {
    console.log("ins service delete");
    return this.httpClient.delete("http://localhost:3000/users/" + id);
  }


}
export class Employee {
  id: number;
  name: string;
  email: string;
}