import { Customer } from './../../model/Customer';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  submitted = false;
  customer: Customer = new Customer();

  form = new FormGroup({
    name: new FormControl<string>(''),
    surname: new FormControl<string>(''),
    age: new FormControl<number>(18),
    gender: new FormControl<string>('')
  });

  constructor(private router: Router, private customerService: CustomerServiceService) { }

  gotoList() {
    this.router.navigate(['/employees']);
  }

  save() {
    this.customerService.registerCustomer(this.constructRequest())
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/customers'])
  }

  constructRequest(): any {
    let request = {
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      age: this.form.controls.age.value,
      gender: this.form.controls.gender.value?.toUpperCase()
    };
    console.log(request);

    return request;
  }

}
