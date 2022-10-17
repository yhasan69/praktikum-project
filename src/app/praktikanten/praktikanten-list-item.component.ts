import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsDialogComponent } from './praktikanten-details-dialog.component';
import { Employee } from './praktikanten.module';

@Component({
  selector: 'app-employee-list-item',
  template: `
    <div class="flex items-center h-full">
      <img [src]="employee.imageUrl" class="rounded-full h-10  w-10  mr-8" />
      <span class="text-gray-700">
        {{ employee | employeeFullName }}
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        flex-grow: 1;
        height: 100%;
      }
    `,
  ],
  host: {
    '(click)': 'showDetails()',
  },
})
export class EmployeeListItemComponent implements OnInit {
  @Input() employee!: Employee;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showDetails() {
    this.dialog.open(EmployeeDetailsDialogComponent, {
      data: this.employee,
      minWidth: '480px',
    });
  }
}