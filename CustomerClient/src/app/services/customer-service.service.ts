import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private URL = 'http://localhost:8080/api/v1/customer';

  constructor(private client: HttpClient) { }

  getCustomerById(id: number): Observable<any> {
    return this.client.get(`${this.URL}/${id}`);
  }

  getAllCustomers(): Observable<any> {
    return this.client.get(`${this.URL}/all`);
  }

  deleteCustomerById(id: number): Observable<any> {
    return this.client.delete(`${this.URL}/${id}`);
  }

  registerCustomer(registerRequest: Object): Observable<Object> {
    return this.client.post(`${this.URL}/new`, registerRequest);
  }




}
