import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number) {
        if (!value) return null;

        let _limit = (limit) ? limit : 12;
        let trail = '...';

        return value.length > _limit ? value.substring(0, _limit) + trail : value;
    }

}