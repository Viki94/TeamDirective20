import { FormControl } from '@angular/forms';

export class RangeValidator {
    static isInRange(control: FormControl) {
        if (control.value < 6 || control.value > 100) {
            return { 'valueOutOfRange': true };
        }

        return null;
    }
}
