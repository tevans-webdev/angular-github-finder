import { Injectable } from "@angular/core";
import { User } from "../models/User";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Silky",
        lastName: "Johnson",
        email: "silkyj@gmail.com",
        isActive: true,
        registered: new Date("01/02/2019 08:30:00"),
        hide: true
      },
      {
        firstName: "John",
        lastName: "Law",
        email: "johnnylaw@mail.com",
        isActive: true,
        registered: new Date("03/11/2016 10:58:12"),
        hide: true
      },
      {
        firstName: "Anita",
        lastName: "Hanjaab",
        email: "anitahandi@mail.com",
        isActive: true,
        registered: new Date("01/22/2017 09:12:02"),
        hide: true
      }
    ];
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
