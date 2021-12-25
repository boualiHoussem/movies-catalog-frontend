export class RegisterModel {
  firstName: string;
  lastName: string;
  birthday: string;
  username: string;
  password: string;

  constructor(firstName: string,
              lastName: string,
              birthday: string,
              username: string,
              password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.username = username;
    this.password = password;
  }
}
