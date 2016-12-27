import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService, AuthService } from './services/index';

// directives
import { EqualityValidatorDirective } from './directives/equality-validator.directive';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent, FooterComponent } from './navigation/index';
import { RegisterComponent, LoginComponent } from './auth/index';

@NgModule({
	declarations: [
		EqualityValidatorDirective,
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
		ReactiveFormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		ApiService,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
