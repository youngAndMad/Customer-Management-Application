import { CustomerServiceService } from './../../services/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() { this.customers = this.customerService.getAllCustomers(); }

  deleteEmployee(id: number) {
    this.customerService.deleteCustomerById(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }





}
