import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CountriesService } from './services/countries.service';

import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { CleanNamePipe } from './pipes/clean-name.pipe';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    CustomersComponent,
    PageNotFoundComponent,
    ContactsComponent,
    PageHeaderComponent,
    CleanNamePipe,
    NewCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
