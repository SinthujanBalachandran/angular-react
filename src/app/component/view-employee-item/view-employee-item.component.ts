import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "./../../model/Employee";

@Component({
  selector: "app-view-employee-item",
  templateUrl: "./view-employee-item.component.html",
  styleUrls: ["./view-employee-item.component.css"]
})
export class ViewEmployeeItemComponent implements OnInit {
  @Input() emp: Employee;
  constructor() {}

  ngOnInit(): void {}
}
