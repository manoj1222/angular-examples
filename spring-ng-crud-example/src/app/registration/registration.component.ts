import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User("", "", 0, "");
  message: any;

  constructor(private regService: RegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow() {
    let resp = this.regService.addUser(this.user);
    resp.subscribe((data) => this.message = data);
  }

}
