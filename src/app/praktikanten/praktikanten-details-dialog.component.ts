import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from './praktikanten.module';

@Component({
  selector: 'app-employee-details-dialog',
  template: `
    <h2 mat-dialog-title class="text-blue-700">
      {{ data | employeeFullName }}
    </h2>
    <mat-dialog-content>
      <img [src]="data.imageUrl" class="rounded-full mx-auto my-4" />

      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-100 p-4 rounded-md">
          <p>First Name</p>
          <span class="font-bold text-lg">{{ data.firstName }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Last Name</p>
          <span class="font-bold text-lg">{{ data.lastName }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Email</p>
          <span class="font-bold text-lg">{{ data.email }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Birth date</p>
          <span class="font-bold text-lg">{{ data.dob }}</span>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Age</p>
          <p class="font-bold m-0 text-lg text-right">{{ data.age }}</p>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p>Salary</p>
          <p class="font-bold m-0 text-lg text-right">{{ data.salary }}</p>
        </div>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeDetailsDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Employee) { }

  ngOnInit(): void { }
}