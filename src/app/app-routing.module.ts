import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerComponent} from "./seller/seller.component";
import {SellerGuard} from "./guards/seller/seller.guard";

const routes: Routes = [{
  path: 'seller',
  component: SellerComponent,
  canActivateChild: [SellerGuard],
  loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
}, {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
