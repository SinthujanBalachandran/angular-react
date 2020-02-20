import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./../model/Employee";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  getEmployeeUrl = "http://localhost:3000/employee";
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getEmployeeUrl);
  }
}
