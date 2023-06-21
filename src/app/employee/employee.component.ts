import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee: Person[] = [
    {personId: 111, personName: "John", dept: "QA"},
    {personId: 112, personName: "Tim", dept: "Dev"},
    {personId: 113, personName: "Tom", dept: "IT"},
    {personId: 114, personName: "Lee", dept: "QA"},
    {personId: 115, personName: "Frank", dept: "Dev"}
  ];

  show: boolean = true;

}
