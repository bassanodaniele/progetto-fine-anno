import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})

export class BreakdownComponent implements OnInit {
  
  @Input() serverMonoOfficine: string;

  breakdown: boolean;
  http:HttpClient;

  constructor() { }

  ngOnInit() { }

  Breakdown(): boolean {
      this.breakdown = true;
      return false;
  }

  SendBreakdownReport(scooter: number, signDate: string, withDate: string, issues: string, text: string): boolean {
      this.http
     .post(this.serverMonoOfficine + '/addBreakdownReport',
       JSON.stringify({
         
       })
      )
      return false;
  }

}
