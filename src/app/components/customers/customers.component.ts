import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';
import * as _ from 'lodash';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  customers: Array<Customer> = [];
  customersCache: Array<Customer> = [];
  term: string;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    document.title = 'COMPANY CRM | Customers Page';
    this.headerTitle = 'Customers Page';
    this.headerIcon = 'fa fa-user';
    this.headerDescription = 'View Company customers';
    this.customersService
      .getcustomers()
      .subscribe(customers => (this.customers = this.customersCache = customers));
  }

  onClickDeleteCustomer(
    customerId: string,
    firstMame: string,
    lastName: string,
    event: any
  ): void {
    event.preventDefault();
    if (
      confirm(
        `Are you sure you want to delete ${firstMame} ${lastName} customer?`
      )
    ) {
      this.customersService.deleteCustomer(customerId);
    }
  }

  onInputTerm(): void {
    const term = this.term.trim();
    if (term.length > 0) {
      this.customers = this.customersCache.filter((customer) => _.includes(customer.phone, term));
    } else {
      this.customers = this.customersCache;
    }
  }
}
