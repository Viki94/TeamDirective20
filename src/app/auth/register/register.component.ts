import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Injectable()
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(private authService: AuthService, private formBuilder: FormBuilder) {

	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
			confirmPassword: ['', Validators.required],
			firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
			lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
			email: ['', Validators.required],
			age: ['', Validators.required],
			gender: ['', Validators.required]
		});
	}

	submit(value: any) {
		this.authService.register(this.form.value)
			.subscribe(res => {
				console.log(res);
			}, err => {
				console.log(err);
			});
	}
}
