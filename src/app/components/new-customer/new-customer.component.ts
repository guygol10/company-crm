import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { log } from 'util';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address = '';
  notes = '';
  countries: any;

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    document.title = 'COMPANY CRM | Add new customers Page';
    this.headerTitle = 'Add new customers Page';
    this.headerIcon = 'fas fa-plus-circle';
    this.headerDescription = 'Wri-circlete customer detalis';
    this.countriesService
      .getCountries()
      .then(countries => this.countries = countries)
      .catch(err => console.log(err));
  }

  onSubmit({ value, valid }: { valid: boolean; value: Customer }): void {
    if (valid) {
      this.customerService.addCustomer(value);
      this.router.navigate(['/customers']);
    }
  }
}
