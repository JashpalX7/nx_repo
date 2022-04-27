import { Component } from '@angular/core';

@Component({
  selector: 'xt-hub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'master';

  isOnBord: boolean = false;
  sidebarToggle: boolean = true;

  constructor(
    // @Inject(ENVIRONMENT) private env: Environment, private util: UtilsService
    ) {

  }

  ngOnInit() {
    // console.log('env: master ', this.env);
    // if (this.isOnBord) {
    //   this.util.redirectTo('on-boarding');
    // } else {
    //   this.util.redirectTo('task-management');
    // }
  }

  toggleSidebar(event: any) {
    console.log('event: ', event);
    this.sidebarToggle = event;
  }
}
