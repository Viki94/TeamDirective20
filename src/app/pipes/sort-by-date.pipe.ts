import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByDate',
    pure: false
})
export class SortByDatePipe implements PipeTransform {
    transform(list: any[], dateVariableName: string, order?: string) {
        if (!list || list.length === 0) {
            return undefined;
        }

        const sorted = list.sort((a: any, b: any) => {
            const comparison = a[dateVariableName].localeCompare(b[dateVariableName]);
            if (order === 'desc') {
                return -comparison;
            }

            return comparison;
        });

        return sorted;
    }
}
