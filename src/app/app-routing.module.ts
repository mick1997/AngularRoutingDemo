import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailsComponent,
        children: [
          { path: 'overview', component: ProductOverviewComponent },
          { path: 'spec', component: ProductSpecComponent },
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
        ],
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent,
        children: [
          {path: 'employee', component: EmployeeComponent},
          {path: '', redirectTo: 'employee', pathMatch: 'full'}
        ]},
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
