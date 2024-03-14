import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.css']
})
export class AddOrEditComponent implements OnInit {
  lastId: number = 0; // Initialize lastId to 0

  newEmployeeData: any = {};

  employee = new FormGroup({
    id: new FormControl(  null),
    username: new FormControl(null, [Validators.required ]),
    salary: new FormControl(null, [Validators.required])
  });

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.getLast(); // Call getLast method to get the last ID when component initializes
  }

  getLast() {
    this.employeeService.getlastID().subscribe(
      (response) => {
        this.lastId = response; // Set the lastId to the received value from service
        // After getting the last ID, set the ID for the new employee
        this.employee.patchValue({
         // id: this.lastId + 1  // Set the ID as one greater than the last ID
      });
      },
      (error) => {
        console.error('Error getting last id', error);
      }
    );
  }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployeeData).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        this.newEmployeeData = {};
        this.router.navigate(['/list']);
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
}
