export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  // @ts-ignore
  constructor(public id: number, public name: string, public username: string, public email: string){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }
}

