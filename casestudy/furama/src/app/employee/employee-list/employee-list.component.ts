import { Component, OnInit } from '@angular/core';
import {Employee} from "../../modle/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employeeList: Employee[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}