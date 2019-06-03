import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scooter } from './scooter-list/scooter.model';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  serverMonoOfficine: string = ""; // link al server sul quale gira la Web App di Mono-Officine
  serverMonoRent: string = ""; // link al server sul quale gira la Web App di Mono-Rent

  user: User;
  userO: Observable<User>;

  scooterList: Scooter[];
  scooterO: Observable<Scooter[]>;

  signup: boolean = false;
  signin: boolean = false;
  app: boolean = false;


  constructor(public http:HttpClient) {
      this.GetScooters();
   }

  ngOnInit() {  }


  SignupVisibility(): boolean {
    this.signup = true;
    this.signin = false;
    return false;
  }

  SigninVisibility(): boolean {
    this.signin = true;
    this.signup = false;
    return false;
  }


  Signup(name: HTMLInputElement, surname: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, card: HTMLInputElement): void {
    this.http
     .post(this.serverMonoRent + '/signup',
       JSON.stringify({
         username: username.value,
         password: password.value,
         name: name.value,
         surname: surname.value,
         card: card.value
       })
     )
     this.app = true;
  }

  Signin(username: HTMLInputElement, password: HTMLInputElement): void {
    this.userO = this.http.get<User>(this.serverMonoRent + '/' + username.value + '/' + password.value);
    this.userO.subscribe(data => {this.user = data;});
  }


  GetScooters(): void {
    this.scooterO = this.http.get<Scooter[]>(this.serverMonoOfficine + '/getScooterList');
    this.scooterO.subscribe(data => {this.scooterList = data;});
  }

}