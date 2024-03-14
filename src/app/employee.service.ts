import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {    //                                                 1




  private baseUrl: string = 'https://localhost:44346'; // Base URL of your API       2

  constructor(private _HttpClient: HttpClient) {}      //ctor                        3



 ////////////////////////////////                                               //Method Service


getlastID(): Observable<any> {
    return this._HttpClient.get<any>(
      `${this.baseUrl}/EmployeesControler/GetLastId/`);       /////////here you
  }


  getEmployees(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/EmployeesControler/GetAll`,data);
  }

  editEmployee(id: any, data: any): Observable<any> {
    return this._HttpClient.put<any>(
      `${this.baseUrl}/EmployeesControler/Edit/${id}`,data);
  }

  deleteEmployee(id: any): Observable<any> {
    return this._HttpClient.delete(
      `${this.baseUrl}/EmployeesControler/Delete/ ${id}`);
  }

  addEmployee(data: any): Observable<any> {
    return this._HttpClient.post(
      `${this.baseUrl}/EmployeesControler/Create`,data);
  }

  getEmployeesById(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/EmployeesControler/Get/?id=${id}`);
  }
}
