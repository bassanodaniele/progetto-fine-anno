import { Component, OnInit, Input } from '@angular/core';
import { Scooter } from './scooter.model'

@Component({
  selector: 'app-scooter-list',
  templateUrl: './scooter-list.component.html',
  styleUrls: ['./scooter-list.component.css']
})

export class ScooterListComponent implements OnInit {

  @Input() scooters: Scooter[];

  constructor() { }

  ngOnInit() { }

}
