import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Array<Contact> = [];
  contactsCache: Array<Contact>;
  contactsLength: number;
  searchNameText: string;
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  constructor(private contactServce: ContactsService) {}

  ngOnInit(): void {
    document.title = 'COMPANY CRM | Contact Page';

    this.headerTitle = 'Contacts Page';
    this.headerIcon = 'fa fa-envelope';
    this.headerDescription = 'All Company Employees Details';

    this.contactServce.getContacts().subscribe((contacts: Array<Contact>) => {
      this.contactsCache = this.contacts = _.sortBy(contacts, ['name']);
      this.contactsLength = this.contacts.length;
    });
  }
  onInputSeachTerm(): void {
    const searchText = this.searchNameText.toLowerCase().trim();
    if (searchText.length > 0) {
      this.contacts = this.contactsCache.filter(contact =>
        _.includes(contact.name.toLowerCase(), searchText)
      );
    } else {
      this.contacts = this.contactsCache;
    }
  }
}
