import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  addUser(user): any {
    return this.httpClient.post("http://localhost:8080/userDetails/register", user, {responseType: 'text' as 'json'});
  }

  getAllUsers(): any {
    return this.httpClient.get("http://localhost:8080/userDetails/allUsers");
  }

  getUserByEmail(email: string): any {
    return this.httpClient.get("http://localhost:8080/userDetails/searchByEmail/"+email);
  }

  deleteUserById(id: number) {
    return this.httpClient.delete("http://localhost:8080/userDetails/deleteUser/"+id);
  }

}
