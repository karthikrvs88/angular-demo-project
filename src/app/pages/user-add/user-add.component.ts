import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

export type User = {
  id: number;
  name: string;
  address: string;
};

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {

  user: User = { id: 0, name: "", address: "" };

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.user = this.userService.getUser(id);
    })
  }

  onSave() {
    if(this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }
  }

  onDelete() {
    this.userService.deleteUser(this.user.id);
    this.router.navigateByUrl('/users');
  }

}
