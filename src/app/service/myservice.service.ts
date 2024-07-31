import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  first = "Hello";

  show()
  {
    console.warn("Hello from first service");
  }
}
