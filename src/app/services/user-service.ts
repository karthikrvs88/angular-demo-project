import { Injectable } from "@angular/core";

export type User = {
  id: number;
  name: string;
  address: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = [{ id: 1, name: "Gopi", address: "home address" }];
  public count = 2;

  public getUser(id: number) {
    const index = this.users.map(x => x.id).indexOf(id);
    if (index != -1) {
      return { ...this.users[index] };
    } else {
      return { id: 0, name: "", address: "" };
    }
  }

  public addUser(user: User) {
    this.users.push({...user, id: this.count++});
  }

public updateUser(data: User) {
    const index = this.users.map(x => x.id).indexOf(data.id);
    if (index !== -1) {
        this.users[index] = data;
    }
}

  public deleteUser(id: number) {
    this.users = this.users.filter(x => x.id !== id);
  }
}
