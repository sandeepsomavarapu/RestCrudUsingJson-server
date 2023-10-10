import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeesComponent } from './listemployees/listemployees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  { path: "", component: ListemployeesComponent },
  { path: "addemp", component: AddemployeeComponent },
  { path: "listemp", component: ListemployeesComponent },
  { path: "updateemp", component: UpdateemployeeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
