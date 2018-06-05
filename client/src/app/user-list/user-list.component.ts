import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user$: Observable<User[]>;

  constructor(private users: UserService) { }

  ngOnInit() {
    this.user$ = this.users.getUsers();
  }
}
