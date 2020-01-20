import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  // props
  user: User;

  // methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      email: "shit@gmail.com"
    };
  }
}
