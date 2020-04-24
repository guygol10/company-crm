import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  id: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    document.title = 'COMPANY CRM | Edit Customer  Form';
    this.headerTitle = 'Edit Customer Form';
    this.headerIcon = 'fas fa-pen';
    this.headerDescription = 'Edit this customers details';

    this.id = this.activatedRoute.snapshot.params.id;
    this.customersService
      .getCustomer(this.id)
      .subscribe(customer => (this.customer = customer));
  }

  onSubmit({ value, valid }: { value: Customer; valid: boolean }): void {
    if (valid) {
      value.id = this.id;
      this.customersService.updateCustomer(value);
      this.router.navigate(['/customers']);
    }
  }
}
