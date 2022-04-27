import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xt-hub-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarToggle!: boolean;
  @Output() onToggle = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickToggle() {
    this.sidebarToggle = !this.sidebarToggle;
    this.onToggle.emit(this.sidebarToggle);
  }
//full screen

}
