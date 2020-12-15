import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { RegistrationService } from '../registration.service';
import { User } from '../User';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[];
  user: User;
  email: string;

  constructor(private registerService: RegistrationService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): any {
    let resp = this.registerService.getAllUsers();
    resp.subscribe(
      (data: User[]) => this.users = data,
      (err: any) => console.error(err),
      () => console.log('All get All Users call done')
    );
    resp.subscribe((data) => this.users = data);
  }

  findUserByEmailId() {
    let resp = this.registerService.getUserByEmail(this.email);
    resp.subscribe((data) => this.users = data);
  }

  deleteUser(userid: number) {
    let resp = this.registerService.deleteUserById(userid);
    resp.subscribe((data) => this.user = data);
  }

}
