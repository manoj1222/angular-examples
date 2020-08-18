import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: any;
  email: string;

  constructor(private registerService: RegistrationService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): any {
    let resp = this.registerService.getAllUsers();
    resp.subscribe((data) => this.users = data);
  }

  findUserByEmailId() {
    let resp = this.registerService.getUserByEmail(this.email);
    resp.subscribe((data) => this.users = data);
  }

  deleteUser(userid: number) {
    let resp = this.registerService.deleteUserById(userid);
    resp.subscribe((data) => this.users = data);
  }

}
