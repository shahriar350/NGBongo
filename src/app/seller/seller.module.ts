import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SellerRoutingModule} from './seller-routing.module';
import {SellerComponent} from './seller.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ListComponent} from './shop/list/list.component';
import { CreateComponent } from './shop/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    SellerComponent,
    DashboardComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SellerModule {
}
