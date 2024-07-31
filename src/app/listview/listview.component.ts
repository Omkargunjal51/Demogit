import { Component } from '@angular/core';
import { book } from '../../assets/book';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.css'
})
export class ListviewComponent {
customer = book;


}
