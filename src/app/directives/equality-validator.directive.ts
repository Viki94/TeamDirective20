import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualityValidatorDirective), multi: true }
	]
})
export class EqualityValidatorDirective implements Validator {
	constructor(
		@Attribute('validateEqual') public validateEqual: string,
		@Attribute('reverse') public reverse: string) {
	}

	private get isReverse() {
		if (!this.reverse) {
			return false;
		}

		return this.reverse === 'true' ? true : false;
	}

	validate(controlValue: AbstractControl): { [key: string]: any } {
		let value = controlValue.value;
		let e = controlValue.root.get(this.validateEqual);

		if (e && value !== e.value && !this.isReverse) {
			return {
				validateEqual: false
			};
		}

		// needed in order to check by retyping the password
		if (e && value === e.value && this.isReverse) {
			delete e.errors['validateEqual'];
			if (!Object.keys(e.errors).length) {
				e.setErrors(null);
			}
		}

		// value not equal and reverse
		if (e && value !== e.value && this.isReverse) {
			e.setErrors({ validateEqual: false });
		}

		return null;
	}
}
