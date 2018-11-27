import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  providers: [CustomerService]
})
export class CustomerFormComponent {
  states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
            'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming']

  dTypes = ['House', 'Apartment', 'Town Home', 'Condo', 'Mobile Home',
            'Dorm/Baracks', 'Senior Home/Nursing Home', 'Vacant Lot']

  public model = new Customer('', '', '',
      '', '', '', '', '', '', '',
      '', '', '', '');
  submitted = false;
  constructor(public customerService: CustomerService) {}

  onSubmit() {
    this.submitted = true;
    this.customerService.setValue(this.model);
  }

  newCustomer() {
    this.model = new Customer('', '', '', '', '', '', '', '', '', '', '', '',
          '', '');
  }





}
