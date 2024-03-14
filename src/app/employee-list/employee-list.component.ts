import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // @ViewChild(ConfirmDeleteComponent) confirmDelete!: ConfirmDeleteComponent;


  employeeData: any;
  // ConfirmDeleteComponent: any

  constructor(private employeeService: EmployeeService , private router : Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees(this.employeeData).subscribe(
      (data: any) => {
        this.employeeData = data;
        console.log(this.employeeData);
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(
      (response) => {
        console.log('Employee deleted successfully:', response);
        this.getEmployees();

      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
getId(id: any) {

}
}
