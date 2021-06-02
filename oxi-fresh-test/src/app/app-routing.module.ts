import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainAppComponent } from './main-app/main-app.component';
import { SubscribeComponent } from './main-app/subscribe/subscribe.component';
import { SubscriptionListComponent } from './main-app/subscription-list/subscription-list.component';
import { AuthGuard } from './AuthGuard/authGuard';

// Routes
const routes: Routes = [
  {path:'', redirectTo:'main/subscribe', pathMatch:'full'},
  
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'main', component: MainAppComponent , canActivate: [AuthGuard], children:[
    {path:'subscribe', component: SubscribeComponent },
    {path:'subscription', component: SubscriptionListComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
