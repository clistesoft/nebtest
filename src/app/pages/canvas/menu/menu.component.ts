import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }
  @Input() key: string;

  ngOnInit(): void {
  }

}
