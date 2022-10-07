import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string = '';

  constructor() {
    imports: [
      NgModel,
      RouterModule,
    ]
   }

  ngOnInit(): void {
  }

}
