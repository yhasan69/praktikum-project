import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './praktikanten-list.component';
import { EmployeeListItemComponent } from './praktikanten-list-item.component';
import { EmployeeFullNamePipe } from './praktikanten-full-name.pipe';
import { EmployeeDetailsDialogComponent } from './praktikanten-details-dialog.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeFullNamePipe,
    EmployeeDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeDetailsDialogComponent,
  ]
})
export class EmployeeModule {}

export interface Employee {
  id: number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;
  age: number;
  dob: string;
  salary: number;
  address: string;
}