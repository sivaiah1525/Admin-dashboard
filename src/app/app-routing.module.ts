import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GatewayComponent } from './gateway/gateway.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'gateways',
    component: GatewayComponent,
    data: { title: 'Gate Ways' },
  },
  {
    path: 'network',
    component: NetworkComponent,
    data: { title: 'Network' },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
