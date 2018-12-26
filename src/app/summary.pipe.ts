
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "summary"
})
export class SummaryCustomPipe implements PipeTransform
{
    transform(value: string, limit?: number){
        
        let actualLimit = limit ? limit : 50;
        return value ? value.substr(0,actualLimit) + '...' : null ;

    }
}