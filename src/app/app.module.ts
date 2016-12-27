import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService } from './services/index';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent, FooterComponent } from './navigation/index';
import { RegisterComponent, LoginComponent } from './auth/index';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
