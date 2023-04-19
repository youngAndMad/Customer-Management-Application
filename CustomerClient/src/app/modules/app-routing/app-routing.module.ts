import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from 'src/app/components/create-customer/create-customer.component';
import { EmployessComponent } from 'src/app/components/employess/employess.component';

const routes: Routes = [
  {
    path: 'customers',
    component: EmployessComponent,
    title: 'all Customers'
  },
  {
    path: 'new',
    component: CreateCustomerComponent,
    title: 'Register new customer'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
