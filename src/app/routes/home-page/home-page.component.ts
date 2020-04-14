import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  status = 0;

  constructor(
    private homePageService: HomePageService
  ) {
    this.homePageService.statusUpdate$.subscribe(() => {
      this.status = this.homePageService.status;
    });
  }

  ngOnInit() {
  }

}
