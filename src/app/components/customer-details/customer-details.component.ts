import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {
    document.title = 'COMPANY CRM | Customer Details Page';
    this.headerTitle = 'Customer Details Page';
    this.headerIcon = 'fa fa-user';
    this.headerDescription = 'View All Customer Details';

    const id = this.activatedRoute.snapshot.params['id'];
    this.customerService.getCustomer(id).subscribe(customer => {
      this.customer = customer;
      console.log(customer);
    });
  }
}
