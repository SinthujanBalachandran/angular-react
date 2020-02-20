import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./../../services/employee.service";
import { Employee } from "src/app/model/Employee";

@Component({
  selector: "app-manage-employee",
  templateUrl: "./manage-employee.component.html",
  styleUrls: ["./manage-employee.component.css"]
})
export class ManageEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  employees: Employee[];
  ngOnInit(): void {
    console.log("employee");

    this.employeeService.getEmployee().subscribe(emps => {
      this.employees = emps;
    });
  }
}
