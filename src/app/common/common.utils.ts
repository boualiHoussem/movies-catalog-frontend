import {User} from "../models/user.model";

export function formatUser(data: any) {
  return new User(
    data.id,
    data.firstName,
    data.lastName,
    data.lastName
  );
}

export function storeLoginDataInLocalStorage(token: string, user: User) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage(): User {
  const userAsString = localStorage.getItem("user");
  let user = JSON.parse(userAsString);
  if (user) {
    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.username
    )
  }
  return null;
}

export function getJwtToken(): string {
  return localStorage.getItem("token");
}

export function clearLocalStorage() {
  localStorage.clear();
}
