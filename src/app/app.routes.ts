import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { 
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { 
    path: 'customers', 
    component: CustomerComponent,
    data: { title: 'Customers' }
  }
  ,
  { 
    path: 'employees', 
    component: EmployeeComponent,
    data: { title: 'Employees' }
  }
];
