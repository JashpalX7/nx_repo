import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core'; //

@Component({
  selector: 'xt-hub-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() sidebarTog!: boolean;

  public sidebarMenus: any = [
    {
      title: "Client",
      url: "client",
      icon: "/assets/images/login.svg"
    },
    {
      title: "Dashboard",
      url: "dashboard",
      icon: "/assets/images/dashboard.svg"
    },
    {
      title: "Task Management",
      url: "task-management",
      icon: "/assets/images/task-management.svg"
    },
    {
      title: "Documents",
      url: "documents",
      icon: "/assets/images/document.svg"
    },
    {
      title: "Reports",
      url: "reports",
      icon: "/assets/images/reports.svg"
    },
    {
      title: "Application",
      url: "application",
      icon: "/assets/images/application.svg"
    },
    {
      title: "Activity Feeds",
      url: "activity-feeds",
      icon: "/assets/images/activity-feeds.svg"
    },
    {
      title: "On Boarding",
      url: "on-boarding",
      icon: "/assets/images/activity-feeds.svg"
    },
    {
      title: "Autoreview",
      url: "autoreview",
      icon: "/assets/images/autoreview.svg"
    },
    {
      title: "Port",
      url: "port",
      icon: "/assets/images/port.svg"
    },
    {
      title: "Setting",
      url: "setting",
      icon: "/assets/images/setting.svg"
    }
  ]

  constructor(private router: Router , public zone: NgZone) { }

  ngOnInit(): void {
    this.toggle()
  }

  toggle() {
    console.log('this.sidebarTog: ', this.sidebarTog);
    console.log('document.getElementById(mySidenav): ', document.getElementById('mySidenav'));
    if (this.sidebarTog) {
      if (document.getElementById('mySidenav')) {
        (document.getElementById('mySidenav') as HTMLElement).style.width = '230px';
        (document.getElementById('mySidenav') as HTMLElement).style.visibility = 'visible';
      }
    } else {
      if (document.getElementById('mySidenav')) {
        (document.getElementById('mySidenav') as HTMLElement).style.width = '0';
        (document.getElementById('mySidenav') as HTMLElement).style.visibility = 'hidden';
      }
    }
  }

  ngOnChanges() {
    this.toggle()
  }

  changeRoute(url:any){
    this.zone.run(() => { this.router.navigate([url]); });
  }
}
