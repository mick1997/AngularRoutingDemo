import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductService } from './product.service';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
    NotfoundComponent,
    ProductComponent,
    EmployeeComponent,
    ProductDetailsComponent,
    ProductOverviewComponent,
    ProductSpecComponent,
    FormsDemoComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
