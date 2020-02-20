import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectComponent } from "./component/project/project.component";
import { ManageEmployeeComponent } from "./component/manage-employee/manage-employee.component";
import { AddEmployeeComponent } from "./component/add-employee/add-employee.component";
const routes: Routes = [
  { path: "project", component: ProjectComponent },
  { path: "manageEmployee", component: ManageEmployeeComponent },
  { path: "addEmployee", component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
