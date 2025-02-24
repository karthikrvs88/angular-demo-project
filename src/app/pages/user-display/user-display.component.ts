import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-display',
  standalone: false,
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.scss'
})
export class UserDisplayComponent {

  
  constructor(public userService: UserService){
    
  }

}
