import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerComponent} from './seller.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListComponent as ShopListComponent} from "./shop/list/list.component";
import {CreateComponent as ShopCreateComponent} from "./shop/create/create.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'shop/list', component: ShopListComponent},
  {path: 'shop/create', component: ShopCreateComponent},
  {path: '', redirectTo: '/seller/dashboard',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule {
}
