import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() var1= '';
  
  @Output() name = new EventEmitter<string>();

  send(var2:any)
  {
    this.name.emit(var2);
  }

  
}
