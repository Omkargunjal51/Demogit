import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  constructor(private route:ActivatedRoute){}

  name:any;

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const param1 = params['name'];
    // this.name = param1;
    // } )

    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      });
  

  // this.name = this.route.snapshot.paramMap.get("name");
  }
}
