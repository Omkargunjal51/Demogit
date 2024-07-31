import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pararout',
  templateUrl: './pararout.component.html',
  styleUrl: './pararout.component.css'
})
export class PararoutComponent implements OnInit {
  constructor(private route:ActivatedRoute){}

  id : any = '';

  ngOnInit(): void {
this.route.paramMap.subscribe(Params=>{
  this.id=Params.get('id');
});
    
  }

}
