import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.css'
})
export class LazyComponent implements OnInit {
ngOnInit(): void {
  console.warn("Lazy Module is here");
}

}
