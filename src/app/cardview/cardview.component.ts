import { Component } from '@angular/core';
import { title } from 'process';
import { book } from '../../assets/book';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrl: './cardview.component.css'
})
export class CardviewComponent {

  customers:any =  book;
}
