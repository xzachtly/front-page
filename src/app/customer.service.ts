import { Injectable } from '@angular/core';
import { Customer } from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer: Customer;

  setValue(person: Customer) {
    this.customer = person;
  }

  getValue() {
    return this.customer;
  }
  constructor() { }
}
