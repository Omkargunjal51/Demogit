import { Component ,Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ass-16',
  templateUrl: './ass-16.component.html',
  styleUrl: './ass-16.component.css'
})
export class Ass16Component {
  
  @Output() dataEvent:EventEmitter<number> = new EventEmitter<number>();

  

  n1:number = 0;
  n2:number =0;
  res :number=0;
  f =false;
Add(n1:any,n2:any)
{
  this.res = n1+n2;
  console.log("Addition");
  this.dataEvent.emit(this.res);
  console.log("Data sent")
}
}
