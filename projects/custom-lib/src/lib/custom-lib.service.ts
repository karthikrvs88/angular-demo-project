import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLibService {

  getGreeting(): string {
    return 'Hello from SimpleLib Service!';
  }
 
  constructor() { }
}
