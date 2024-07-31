import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input() data:number = 0;

  constructor()
  {
    console.log("data recived in footer")
    console.log(this.data)
  }

}
