import { Component } from '@angular/core';
import { MyserviceService } from './service/myservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private obj : MyserviceService)
  {
     obj.show();
  };

  f = this.obj.first;
  state:any="day";
  show:any=false;
  bg:any;
  cc:any;
  dataf: number = 0;
  modechange()
  { this.show = !this.show;
    if(this.show)
      {
        this.bg = "black";
        this.cc = "white";
        this.state = "Day";
      }
    else
    {
      this.bg = "white";
      this.cc = "black";
      this.state = "Night";

    }
    
  }


  // receiveData(data: any) {
  //   this.dataf = data;
  //   console.log("Data recived")

  // }

  passToFooter(sum:number)
  {
    this.dataf = sum;
  }



  
  
}
