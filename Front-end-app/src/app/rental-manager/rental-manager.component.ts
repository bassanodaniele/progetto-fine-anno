import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Component({
  selector: 'app-rental-manager',
  templateUrl: './rental-manager.component.html',
  styleUrls: ['./rental-manager.component.css']
})

export class RentalManagerComponent implements OnInit {

  @Input() serverMonoRent: string;
  @Input() user: User;

  scooterInUse: boolean = false;
  scooter: string = null;
  public http:HttpClient;


  constructor() { }

  ngOnInit() { }


  Start(scooter: HTMLInputElement): boolean {
      this.http
     .post(this.serverMonoRent + '/pick-up-scooter',
       JSON.stringify({
           username: this.user.username,
           scooter: scooter.value
       })
      )
      this.scooter = scooter.value;
      return false;
  }

  Stop(): boolean {
      this.http
     .put(this.serverMonoRent + '/leave-scooter',
       JSON.stringify({
           username: this.user.username,
           scooter: this.scooter
       })
      )
      return false;
  }

}
