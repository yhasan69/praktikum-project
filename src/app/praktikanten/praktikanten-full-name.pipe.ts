import { Employee } from './praktikanten.module';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFullName',
})
export class EmployeeFullNamePipe implements PipeTransform {
  transform(employee: Employee): string {
    return `${employee.firstName} ${employee.lastName}`;
  }
}