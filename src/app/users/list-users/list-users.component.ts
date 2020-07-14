import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users;

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.users = this._userService.getUsers();
  }

}
