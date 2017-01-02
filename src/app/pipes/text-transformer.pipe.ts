import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {
    transform(gender: string) {
        if (gender === 'male') {
            return 'Мъж';
        } else if (gender === 'female') {
            return 'Жена';
        } else {
            return 'Друг';
        }
    }
}
