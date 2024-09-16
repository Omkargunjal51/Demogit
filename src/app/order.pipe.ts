import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  Sorted:any;

  transform(value: any, args: string): any {
    if(!args)
    {
      return value;
    }

    else if(args==="asec")
      {
        return value.sort();
    }
    else if(args==="des")
      {
        return value.reversesort();
    }
    else
    {
      return value;

    }
    return this.Sorted;
  }

}
