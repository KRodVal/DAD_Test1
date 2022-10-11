import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public subscriber: Subscription | undefined;
  title = 'frontend';

  constructor(private router: Router, @Inject(DOCUMENT) private document: any){ }

  ngOnInit(): void {
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
       console.log('The URL changed to: ' + event['url'])
       if(event['url']==='/version' || event['url']==='/contact'){
        this.document.body.classList.remove('bg1');
        this.document.body.classList.add('bg2');
      }else{
        this.document.body.classList.remove('bg2');
        this.document.body.classList.add('bg1');
      }

    });
  }

  ngOnDestroy () {
    this.subscriber?.unsubscribe();
  }
}
