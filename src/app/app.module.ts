import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/layout/header/header.component";
import { SidebarComponent } from "./component/layout/sidebar/sidebar.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ProjectComponent } from "./component/project/project.component";
import { ManageEmployeeComponent } from "./component/manage-employee/manage-employee.component";
import { AddEmployeeComponent } from "./component/add-employee/add-employee.component";
import { ViewEmployeeItemComponent } from './component/view-employee-item/view-employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ProjectComponent,
    ManageEmployeeComponent,
    AddEmployeeComponent,
    ViewEmployeeItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
