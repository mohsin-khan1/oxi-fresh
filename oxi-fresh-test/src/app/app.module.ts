import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HeaderComponent } from './main-app/header/header.component';
import { SubscribeComponent } from './main-app/subscribe/subscribe.component';
import { SubscriptionListComponent } from './main-app/subscription-list/subscription-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubscriptionListPipe } from './pipe/subscription-list.pipe';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { CommonPipe } from './pipe/common.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainAppComponent,
    HeaderComponent,
    SubscribeComponent,
    SubscriptionListComponent,
    SubscriptionListPipe,
    CommonPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
