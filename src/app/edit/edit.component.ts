import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  newEmployeeData1: any = {};

  empId = 0;
  constructor(
    private employeeService: EmployeeService, private router: Router, R: ActivatedRoute )
  {  this.empId = Number(R.snapshot.params['id']);
    this.get(this.empId);
  }

  get(id: number) {
    this.employeeService.getEmployeesById(id).subscribe(
      (response) => {
        this.newEmployeeData1 = response;
      },
      (error) => {
        console.error('Error getting element:', error);
        // Handle error
      }
    );
  }

  editEmployee(id: number, data: any) {
    this.employeeService.editEmployee(id, this.newEmployeeData1).subscribe(
      (response) => {
        console.log('Element updated successfully:', response);
        // Handle success response

   //     this.newEmployeeData1 = {};     // Clear the form data
        this.router.navigate(['/list']);

      },
      (error) => {
        console.error('Error updating element:', error);
        // Handle error
      }
    );
  }
}


