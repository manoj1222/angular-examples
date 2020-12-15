import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { timeout, timeoutWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  addUser(user): any {
    return this.httpClient.post("http://localhost:8080/userDetails/register", user, {responseType: 'text' as 'json'});
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:8080/userDetails/allUsers");
  }

  getUserByEmail(email: string): any {
    return this.httpClient.get("http://localhost:8080/userDetails/searchByEmail/"+email).pipe(
      timeout(1000)
    );
  }

  deleteUserById(id: number) {
    return this.httpClient.delete<User>("http://localhost:8080/userDetails/deleteUser/"+id);
  }

}
